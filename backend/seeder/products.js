const products = [
  [
    {
      "name": "Adobe Photoshop 2024",
      "description": "Adobe Photoshop 2024 is the industry-standard software for image editing, graphic design, and digital art. Packed with AI-powered tools, layers, and advanced brushes, it’s perfect for professionals and creatives.",
      "count": 10,
      "price": 299,
      "category": "Software/Design/Adobe",
      "images": [
        { "path": "/images/photoshop-main.png" },
        { "path": "/images/photoshop-tools.png" },
        { "path": "/images/photoshop-interface.png" }
      ],
      "rating": 4.7,
      "reviewsNumber": 350,
      "reviews": [],
      "attrs": [
        { "key": "Platform", "value": "Windows, macOS" },
        { "key": "License Type", "value": "Subscription" },
        { "key": "Version", "value": "2024" }
      ]
    },
    {
      "name": "Microsoft Office 365",
      "description": "Microsoft Office 365 offers essential productivity tools like Word, Excel, and PowerPoint with cloud-based collaboration and AI-powered enhancements.",
      "count": 20,
      "price": 149,
      "category": "Software/Productivity/Microsoft",
      "images": [
        { "path": "/images/office-word.png" },
        { "path": "/images/office-excel.png" },
        { "path": "/images/office-powerpoint.png" }
      ],
      "rating": 4.8,
      "reviewsNumber": 500,
      "reviews": [],
      "attrs": [
        { "key": "Platform", "value": "Windows, macOS, Web" },
        { "key": "License Type", "value": "Subscription" },
        { "key": "Included Apps", "value": "Word, Excel, PowerPoint, Outlook" }
      ]
    },
    {
      "name": "Autodesk AutoCAD 2024",
      "description": "Autodesk AutoCAD 2024 is a professional software used for 2D and 3D CAD design, drafting, and modeling, making it ideal for architects and engineers.",
      "count": 5,
      "price": 1599,
      "category": "Software/Engineering/Autodesk",
      "images": [
        { "path": "/images/autocad-main.png" },
        { "path": "/images/autocad-3d.png" },
        { "path": "/images/autocad-tools.png" }
      ],
      "rating": 4.6,
      "reviewsNumber": 200,
      "reviews": [],
      "attrs": [
        { "key": "Platform", "value": "Windows, macOS" },
        { "key": "License Type", "value": "Subscription" },
        { "key": "Version", "value": "2024" }
      ]
    },
    {
      "name": "Final Cut Pro X",
      "description": "Final Cut Pro X is a professional video editing software by Apple, offering advanced color grading, motion graphics, and 360° video editing tools.",
      "count": 8,
      "price": 299,
      "category": "Software/Video Editing/Apple",
      "images": [
        { "path": "/images/finalcut-main.png" },
        { "path": "/images/finalcut-timeline.png" },
        { "path": "/images/finalcut-color.png" }
      ],
      "rating": 4.9,
      "reviewsNumber": 400,
      "reviews": [],
      "attrs": [
        { "key": "Platform", "value": "macOS" },
        { "key": "License Type", "value": "One-time purchase" },
        { "key": "Version", "value": "10.6" }
      ]
    },
    {
      "name": "Visual Studio Code",
      "description": "Visual Studio Code is a lightweight but powerful source code editor with built-in support for JavaScript, TypeScript, and Node.js.",
      "count": 50,
      "price": 0,
      "category": "Software/Development/Microsoft",
      "images": [
        { "path": "/images/vscode-main.png" },
        { "path": "/images/vscode-terminal.png" },
        { "path": "/images/vscode-extensions.png" }
      ],
      "rating": 4.9,
      "reviewsNumber": 1000,
      "reviews": [],
      "attrs": [
        { "key": "Platform", "value": "Windows, macOS, Linux" },
        { "key": "License Type", "value": "Free" },
        { "key": "Version", "value": "Latest" }
      ]
    }
  ]
]

module.exports = products
