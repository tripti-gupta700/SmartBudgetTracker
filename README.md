<!--  Documentation for setup & usage  -->
💰 Smart Budget Tracker
📊 Track expenses, visualize spending, and get AI-driven budget suggestions

🚀 Features
✅ Manual Expense Entry – Easily add daily expenses with category & payment method.
✅ Real-time Data Storage – Uses Firebase Realtime Database for secure & instant updates.
✅ Pie Chart Visualization – Spending breakdown powered by Chart.js.
✅ AI Smart Budget Suggestions – Get instant alerts when you're overspending!
✅ Edit & Delete Transactions – Modify or remove expenses with a click.
✅ Mobile Responsive – Works seamlessly on all devices.

📂 Folder Structure

📂 SmartBudgetTracker  
 ├── 📂 assets             
 │    ├── logo.png  
 │  
 ├── 📂 css                
 │    ├── style.css        # Main CSS file  
 │  
 ├── 📂 js                 
 │    ├── firebase-config.js  # Firebase setup  
 │    ├── app.js             # Fetch, display, edit & delete transactions  
 │    ├── add-expense.js      # Handles adding expenses  
 │  
 ├── 📂 html               
 │    ├── index.html        # Main dashboard  
 │    ├── add-expense.html  # Expense entry page  
 │  
 ├── .gitignore            
 ├── README.md             
🛠️ Tech Stack
🔹 Frontend: HTML, CSS, JavaScript
🔹 Backend: Firebase Realtime Database
🔹 Visualization: Chart.js
🔹 AI Suggestions: JavaScript-based logic

📌 Setup Instructions
✅ Step 1: Clone the Repository

git clone https://github.com/yourusername/smart-budget-tracker.git
cd smart-budget-tracker


✅ Step 2: Set Up Firebase
Go to Firebase Console
Create a new project
Enable Realtime Database (Set rules to public for testing)
Copy Firebase Config Keys
Paste them inside firebase-config.js

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);

✅ Step 3: Run the Project
Open index.html in a browser
Click the "Add Expense" button & enter details
Check the Pie Chart to see spending breakdown


📊 How It Works
📌 1. Add Expenses

Enter amount, category, payment method, description
Click "Add Expense"
📌 2. View Spending Breakdown

Displays a Pie Chart of expenses
Data updates in real-time
📌 3. AI Smart Budget Recommendations

If Food Expense > ₹5000, suggests reducing by ₹1000
Alerts if Entertainment > ₹3000
📌 4. Edit & Delete Transactions

Click ✏️ Edit to modify an entry
Click ❌ Delete to remove an expense
📷 Screenshots
📌 Dashboard with AI Suggestions & Pie Chart

📌 Expense Entry Page

🚀 Future Improvements
🔹 User Authentication (Google Login) – Secure access to personal budgets
🔹 Export Data as CSV or Excel – Download spending history
🔹 Income Tracking & Budget Goals – Track savings vs. expenses
🔹 Dark Mode & Better UI/UX – Improve accessibility & aesthetics

📜 License
This project is open-source and licensed under the MIT License.

🤝 Contributing
🚀 Contributions are welcome!

Fork the repository
Create a feature branch (git checkout -b feature-xyz)
Commit changes (git commit -m "Added feature xyz")
Push to GitHub (git push origin feature-xyz)
Submit a Pull Request
📞 Contact
📌 Developer: Your Name
📌 Email: your-email@example.com
📌 GitHub: @yourusername

🚀 Happy Budgeting! 💰📊
