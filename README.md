# 🌍 Wanderlust

Wanderlust is a full-stack web application for listing and exploring places to stay. Users can browse listings, view details, and create, edit or delete listings, all in a clean and responsive interface.

Live Demo: https://wanderlust-gl2j.onrender.com 

---

✨ Features

- Browse all listings on the home page
- View detailed information for each listing
- Create, edit and delete listings
- Image upload using cloud storage
- Form validation (client-side with Bootstrap and server-side with a schema)
- Custom middleware and centralized error handling
- Responsive design for mobile and desktop
- Data stored in the cloud with MongoDB Atlas

---

🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | EJS, HTML, CSS, Bootstrap |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas with Mongoose |
| Image Storage | Cloudinary |
| Deployment | Render |

---

 📁 Project Structure

Wanderlust/
├── controllers/     # Logic for handling requests
├── init/            # Sample data and DB initialization
├── models/          # Mongoose schemas
├── public/          # Static files (CSS, JS)
├── routes/          # Express routes
├── utils/           # Helper utilities (error handling etc.)
├── views/           # EJS templates
├── app.js           # Entry point
├── cloudConfig.js   # Cloud storage configuration
├── middleware.js    # Custom middleware
├── schema.js        # Server-side validation schema
└── package.json

---
 🚀 Getting Started (Run Locally)

1. Clone the repository

```bash
git clone https://github.com/asha333pal-blip/Wanderlust.git
cd Wanderlust
```

2. Install dependencies

```bash
npm install --legacy-peer-deps
```

3. Create a `.env` file in the root folder and add:

```env
ATLAS_URL=your_mongodb_atlas_connection_string
```

4. Start the server

```bash
node app.js
```

Then open `http://localhost:8080` in your browser.

---

 🌐 Deployment

The app is deployed on Render (free plan).

- Build command: `npm install --legacy-peer-deps`
- Start command: `node app.js`

---

 🙋‍♀️ Author

Monika
B.Tech CSE Student, Shivalik College of Engineering

GitHub: [asha333pal-blip](https://github.com/asha333pal-blip)
