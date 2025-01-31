import emailjs from 'https://cdn.emailjs.com/dist/email.min.js';
// Initialize EmailJS with your public key
emailjs.init("IZMeAdeUzzUntKEiw");

// Handle Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Show loading or disable the submit button here if needed

  // Get form values
  const user_name = document.getElementById("user_name").value;
  const user_email = document.getElementById("user_email").value;
  const message = document.getElementById("message").value;

  // Customize email content
  const emailParams = {
    from_name: user_name,  // Sender's name
    to_name: "3D Anatomy Staff",  // Receiver's name (you can change this as needed)
    reply_to: user_email,  // Reply to the user's email
    subject: "New Contact Form Message",  // You can set a fixed subject or make it dynamic
    message: message,  // The message content
  };

  // Send Email via EmailJS
  emailjs
    .send("service_5hp8z7h", "template_8lzpgdz", emailParams)
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        // Show success message
        document.getElementById("status-message").classList.remove("hidden");
        document.getElementById("status-message").textContent =
          "Thank you for reaching out! We’ll get back to you soon.";
        // Reset the form
        document.getElementById("contact-form").reset();
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Something went wrong. Please try again.");
      }
    );
});
