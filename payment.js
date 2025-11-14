
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB13apoyzojhPfXgcVwhhASbHV_l5l0ZMA",
  authDomain: "purpleforhope.firebaseapp.com",
  projectId: "purpleforhope",
  storageBucket: "purpleforhope.firebasestorage.app",
  messagingSenderId: "73131614040",
  appId: "1:73131614040:web:8e8280326bd581a6064f2d"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("donationForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;

  const newDonationRef = push(ref(db, "donations"));

  set(newDonationRef, {
    name: name,
    amount: amount,
    timestamp: Date.now()
  });

  alert("Submitted!");
});