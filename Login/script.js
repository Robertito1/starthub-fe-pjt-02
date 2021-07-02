const form = document.getElementById("loginForm");

function showPassword() {
    var passwordInput = document.getElementById("passwordValue");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

const login = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/api/v1/auth/sign-in', {
            email: e.target.email.value,
            password: e.target.password.value
        })
        .then(function(response) {
            window.location.href = "http://127.0.0.1:5500/Landing%20page/index.html";
        })
        .catch(function(error) {
            console.log(error);
        })
}

form.addEventListener('submit', login);