// Grab form and inputs
const paymentForm = document.getElementById('paymentForm');
const cardNumber = document.getElementById('cardNumber');
const expiry = document.getElementById('expiry');
const cvv = document.getElementById('cvv');
const name = document.getElementById('name');
const confirmation = document.getElementById('confirmation');

// Listen for form submission
paymentForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload

    // Collect form data
    const paymentData = {
        cardNumber: cardNumber.value,
        expiry: expiry.value,
        cvv: cvv.value,
        name: name.value,
        timestamp: new Date().toISOString()
    };

    // Send data to Firebase Firestore
    db.collection("donations").add(paymentData)
      .then(() => {
          confirmation.textContent = "Payment details submitted successfully!";
          paymentForm.reset();
      })
      .catch((error) => {
          confirmation.textContent = "Error submitting data. Try again.";
          console.error("Error saving data:", error);
      });
});