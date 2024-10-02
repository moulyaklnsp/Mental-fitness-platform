document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // For demonstration, simply alert the username and password
    alert(`Username: ${username}\nPassword: ${password}`);
    
    // Here you would typically handle authentication
  });