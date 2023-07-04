// Check if the user is new
if (!localStorage.getItem("visited")) {
    showPopup();
  }
  
  // Show the login popup
  function showPopup() {
    var popup = document.getElementById("loginPopup");
    popup.style.display = "block";
  }
  
  // Login function
  function login() {
    var name = document.getElementById("nameInput").value;
    var password = document.getElementById("passwordInput").value;
  
    // Save name to local storage
    localStorage.setItem("name", name);
  
    // Check password
    if (password === "1-1") {
      // Successful login, do something
      alert("Login successful!");
    } else {
      // Incorrect password, display error message
      alert("Incorrect password!");
    }
  
    // Hide the popup
    var popup = document.getElementById("loginPopup");
    popup.style.display = "none";
  
    // Set the "visited" flag to prevent the popup from showing again
    localStorage.setItem("visited", true);
  }
  
