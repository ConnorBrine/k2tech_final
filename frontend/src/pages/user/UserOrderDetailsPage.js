import UserOrderDetailsPageComponent from "./components/UserOrderDetailsPageComponent";
import { useSelector } from "react-redux";
import axios from "axios";
import { loadScript } from "@paypal/paypal-js";

const getOrder = async (orderId) => {
  const { data } = await axios.get("/api/orders/user/" + orderId);
  return data;
};

const loadPayPalScript = (
  cartSubtotal,
  cartItems,
  orderId,
  updateStateAfterOrder
) => {
  loadScript({
    "client-id":
      "Aa4Q3i95y1aXHGQJf-Gb34GlYKcay-GPa9zsKkOJuZrC8Hkb1-8yIaEpFcRv07svPSHPReD9Wx7YTXuI",
  })
    .then((paypal) => {
      paypal
        .Buttons(
          buttons(cartSubtotal, cartItems, orderId, updateStateAfterOrder)
        )
        .render("#paypal-container-element");
    })
    .catch((err) => {
      console.error("failed to load the PayPal JS SDK script", err);
    });
};

const buttons = (cartSubtotal, cartItems, orderId, updateStateAfterOrder) => {
  return {
    createOrder: async function (data, actions) {
      // Validate product stock before creating the order
      const isStockValid = cartItems.every((product) => product.quantity > 0);
      if (!isStockValid) {
        alert("One or more products are out of stock.");
        return Promise.reject("Out of stock");
      }
      
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: cartSubtotal,
              breakdown: {
                item_total: {
                  currency_code: "USD",
                  value: cartSubtotal,
                },
              },
            },
            items: cartItems.map((product) => {
              return {
                name: product.name,
                unit_amount: {
                  currency_code: "USD",
                  value: product.price,
                },
                quantity: product.quantity,
              };
            }),
          },
        ],
      });
    },
    onCancel: onCancelHandler,
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (orderData) {
        var transaction = orderData.purchase_units[0].payments.captures[0];
        if (
          transaction.status === "COMPLETED" &&
          Number(transaction.amount.value) === Number(cartSubtotal)
        ) {
          updateOrder(orderId)
            .then((data) => {
              if (data.isPaid) {
                updateStateAfterOrder(data.paidAt);
              }
            })
            .catch((er) => console.log(er));
        }
      });
    },
    onError: onErrorHandler,
  };
};

const onCancelHandler = function () {
  console.log("cancel");
};

const onErrorHandler = function (err) {
  console.log("error");
};

const updateOrder = async (orderId) => {
  const { data } = await axios.put("/api/orders/paid/" + orderId);
  return data;
};

const UserOrderDetailsPage = () => {
  const userInfo = useSelector((state) => state.userRegisterLogin.userInfo);

  const getUser = async () => {
    const { data } = await axios.get("/api/users/profile/" + userInfo._id);
    return data;
  };

  return (
    <UserOrderDetailsPageComponent
      userInfo={userInfo}
      getUser={getUser}
      getOrder={getOrder}
      loadPayPalScript={loadPayPalScript}
    />
  );
};

export default UserOrderDetailsPage;
