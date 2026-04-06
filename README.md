# 🚗 Prabhu Tour & Travel

**Prabhu Tour & Travel** is a full-stack travel booking platform that provides affordable and reliable taxi services, tour packages, and travel solutions. Users can explore destinations, check pricing, and book trips easily via WhatsApp, while admins can manage the entire system through a powerful dashboard.

---

## 🌐 Live Features

* 🚖 Taxi booking (Local & Outstation)
* 🏔️ Tour packages (Delhi–Manali, Shimla, etc.)
* 💰 Dynamic pricing system
* 📲 WhatsApp booking integration
* 📊 Admin dashboard with analytics
* 🔐 Secure authentication (JWT)
* 📱 Fully responsive design

---

## 🧱 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### Tools & Libraries

* JWT (Authentication)
* bcrypt (Password hashing)
* multer (Image upload)
* dotenv (Environment variables)

---

## 📁 Folder Structure

### 🔹 Frontend

```
prabhu-tour-frontend/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── admin/
│   ├── services/
│   ├── assets/
│   └── App.jsx
```

### 🔹 Backend

```
prabhu-tour-backend/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── uploads/
├── server.js
```

---

## 🔐 Authentication

* Admin Login with JWT
* Protected routes for admin dashboard
* Role-based access (Admin/User)

---

## 📦 API Endpoints

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### Packages

* `GET /api/packages`
* `POST /api/packages` (Admin)
* `PUT /api/packages/:id` (Admin)
* `DELETE /api/packages/:id` (Admin)

### Bookings

* `POST /api/bookings`
* `GET /api/bookings` (Admin)
* `PUT /api/bookings/:id/status`

### Pricing

* `GET /api/pricing`
* `PUT /api/pricing` (Admin)

---

## 📲 WhatsApp Integration

Users can directly book trips using:

```
https://wa.me/918874812003
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/prabhu-tour-travel.git
cd prabhu-tour-travel
```

---

### 2️⃣ Backend Setup

```
cd prabhu-tour-backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
```

Run server:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd prabhu-tour-frontend
npm install
npm run dev
```

---

## 📊 Admin Dashboard Features

* 📦 Manage tour packages
* 📅 View and update bookings
* 💰 Update pricing system
* 👥 User management
* 🔔 Send notifications
* 📈 View revenue & analytics

---

## 💡 Future Enhancements

* 🤖 AI Trip Planner
* 💳 Online Payment Integration (Razorpay/Stripe)
* 🌍 Multi-language support
* ⭐ Reviews & ratings system

---

## 👨‍💻 Author

**Vaibhaw Singh**
📞 8874812003
📧 [prabhutourtravel@gmail.com](mailto:prabhutourtravel@gmail.com)

---

## 📜 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and support the development!

---
