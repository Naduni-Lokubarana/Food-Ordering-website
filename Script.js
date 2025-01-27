document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;
  
    // Display confirmation message
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.textContent = `Thank you, ${name}! Your table for ${guests} people has been booked on ${date} at ${time}.`;
  });
  