# ❄️ **WARMTH & CARE - Winter Clothing Donation Platform** 🧥🎁  

---

## 🌟 **Project Overview**  
**WARMTH & CARE** is a **winter clothing donation platform** that connects **donors, volunteers, and communities** in need. It allows individuals to **donate warm clothing**, ensuring that those in **cold and vulnerable conditions** receive essential winter wear.  

The platform is **built with React, Tailwind CSS, and Firebase**, offering a **secure, responsive, and intuitive interface** that simplifies the donation process while **ensuring accessibility and inclusivity** for all users.  

---

## 🌍 **Live Demo & Deployment**  

🔗 **Live Website:** [**WARMTH & CARE**](https://b10-assignment-09.web.app/)  
🔗 **Client Hosted on:** [Netlify](#)  
🔗 **Server Hosted on:** [Vercel](#)  

---

## 🎯 **Project Purpose & Goals**  
The **WARMTH & CARE** platform is designed to:  
✅ **Encourage donations** to help those in need during winter.  
✅ **Simplify the donation process** with an easy-to-use interface.  
✅ **Ensure security and transparency** for donors and recipients.  
✅ **Provide a platform for volunteers** to manage clothing distribution.  
✅ **Raise awareness** about winter hardships in Bangladesh and other cold regions.  

---

## ✨ **Key Features**  

### 🔹 **General Features**  
✔ **Fully Responsive Design** – Optimized for mobile, tablet, and desktop.  
✔ **Winter-Themed UI** – Cozy, clean, and minimal design for easy navigation.  
✔ **Dynamic Navbar** – Shows user profile when logged in, includes navigation links.  
✔ **Engaging Footer** – Includes contact details, social links, and copyright info.  

### 🏠 **Home Page**  
✔ **Interactive Image Slider** – Showcases donation campaigns and success stories (Swiper JS).  
✔ **Mission & Vision Section** – Educates users about the platform’s purpose.  
✔ **How It Works** – Step-by-step guide on donating and receiving items.  
✔ **Custom Sections** – Additional sections to boost engagement.  

### 🎁 **Donation Campaigns**  
✔ **Dynamic Campaign Listings** – Campaigns fetched from JSON/database.  
✔ **Campaign Filtering** – Users can browse campaigns based on **location and category**.  
✔ **Donate Now Button** – Redirects users to a secure donation page.  

### 📜 **Donation Details Page**  
✔ **Authentication-Restricted Access** – Only registered users can access campaign details.  
✔ **Detailed View of Campaigns** – Displays images, location, and donation requirements.  
✔ **Donation Form** – Users can enter pickup location and notes before submitting.  
✔ **Real-Time Feedback** – Confirmation pop-ups using **React Toastify**.  

### 🔐 **User Authentication & Security**  
✔ **Firebase Authentication** – Secure login system with:  
  - **Email & Password Authentication**  
  - **Google Social Login**  
✔ **Password Validation** – Enforces strong password rules.  
✔ **Forgot Password Option** – Users can reset their password via email.  
✔ **Protected Routes** – Secure access to user profiles and donation pages.  

### 📊 **Dashboard (User Profile)**  
✔ **User Information Display** – Name, email, profile picture.  
✔ **Profile Update Feature** – Users can update their name and profile image.  

### ❌ **404 Error Page**  
✔ **Custom Not Found Page** – Redirects users to the home page.  

---

## 🛠 **Technologies Used**  

| **Category**         | **Technologies**  |
|----------------------|------------------|
| **Frontend**        | React, Tailwind CSS, DaisyUI |
| **Authentication**  | Firebase Authentication |
| **Routing**         | React Router |
| **State Management**| Context API |
| **UI Animations**   | AOS (Animate On Scroll) |
| **Notifications**   | React Toastify |
| **Image Slider**    | Swiper JS |
| **Hosting**         | Netlify (Client), Vercel (Server) |

---

## 📦 **Dependencies**  

### 🔹 **Main Dependencies**
- `react` – Core UI library.  
- `axios` – HTTP client for API requests.  
- `firebase` – User authentication and real-time updates.  
- `react-router-dom` – Routing and navigation.  
- `react-toastify` – Toast notifications.  
- `swiper` – Interactive donation campaign carousel.  
- `aos` – Scroll animations for better UI experience.  

### 🔹 **Dev Dependencies**
- `vite` – Fast development server.  
- `tailwindcss` – Utility-first CSS framework.  
- `eslint` – Code linting for clean and maintainable code.  

---

## 📡 **API Endpoints Reference**  

| Method | Endpoint             | Description                      |
|--------|----------------------|----------------------------------|
| **Auth Routes** |||
| POST   | `/auth/register`     | Register a new user              |
| POST   | `/auth/login`        | Authenticate user & generate token |
| GET    | `/auth/profile`      | Retrieve authenticated user profile |
| **Campaign Routes** |||
| GET    | `/campaigns`         | Fetch all donation campaigns     |
| POST   | `/campaigns`         | Create a new campaign (Admin)     |
| GET    | `/campaigns/:id`     | Get details of a specific campaign |
| PUT    | `/campaigns/:id`     | Update an existing campaign (Admin) |
| DELETE | `/campaigns/:id`     | Remove a campaign (Admin) |

📌 *For full API details, refer to API documentation (Swagger/Postman collection link).*  

---

## 🔧 **Installation & Setup**  

### **1️⃣ Prerequisites**  
Ensure you have the following installed:  
✔ **Node.js** (LTS version) - [Download Here](https://nodejs.org/)  
✔ **Git** - [Download Here](https://git-scm.com/)  

---

### **2️⃣ Clone the Repository**  
```bash
git clone https://github.com/programming-hero-web-course1/b10-a9-authentication-SK-Jabed.git
cd b10-a9-authentication-SK-Jabed
```

---

### **3️⃣ Install Dependencies**  
```bash
npm install
```

---

### **4️⃣ Configure Firebase & Environment Variables**  
Create a `.env` file in the root directory and add:  

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

### **5️⃣ Start the Development Server**  
```bash
npm run dev
```
The application should now be running at `http://localhost:5173/`.  

---

## 🚀 **Future Enhancements**  
🔹 **Volunteer Management System** – Assign volunteers to distribution tasks.  
🔹 **AI-Powered Donation Matching** – Suggest campaigns based on user behavior.  
🔹 **Live Chat Support** – Users can ask questions in real time.  
🔹 **Gamification & Rewards** – Encourage more donations with badges.  
🔹 **Blockchain Transparency** – Secure and track donations using blockchain.  

---

## 🤝 **Contributing**  
🔹 **Fork the repository.**  
🔹 **Create a new branch:** `git checkout -b feature-branch`  
🔹 **Commit your changes:** `git commit -m "Added a new feature"`  
🔹 **Push to your forked repo:** `git push origin feature-branch`  
🔹 **Submit a pull request for review.**  
