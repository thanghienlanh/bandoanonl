document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('password', password);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('display-username').textContent = storedUsername;

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', storedUsername);

        alert('Đăng nhập thành công!');
        document.getElementById('homeLink').textContent = 'Trở về trang chủ (' + storedUsername + ')';
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
});

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    if (username) {
        localStorage.setItem('loggedInUsername', username);
        window.location.href = 'tra_sua.html';
    } else {
        alert('Vui lòng nhập thông tin đăng nhập hợp lệ.');
    }
}

function displayUsername() {
    const username = localStorage.getItem('loggedInUsername');
    const welcomeMessage = document.getElementById('welcome-message');

    if (username) {
        welcomeMessage.innerText = `Xin chào, ${username}!`;
    } else {
        welcomeMessage.innerText = 'Xin chào, bạn!';
    }
}

window.onload = function() {
    displayUsername();
};

function register() {
    const username = document.getElementById('username').value;

    if (username) {
        localStorage.setItem('loggedInUsername', username);
        alert('Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.');
    } else {
        alert('Vui lòng nhập tên đăng nhập hợp lệ.');
    }
}

window.onload = function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentUser = localStorage.getItem('currentUser');

    if (isLoggedIn === 'true' && currentUser) {
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('display-username').textContent = currentUser;
        document.getElementById('homeLink').textContent = 'Trở về trang chủ (' + currentUser + ')';
    }
};
