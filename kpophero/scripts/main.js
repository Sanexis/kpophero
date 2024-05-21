const ShowMoreMap = document.getElementById('show-more-map');
const ShowMoreMapBlock = document.querySelector('.map-modal__block');
const ShowMoreMapBlockClose = document.querySelector('.map-modal__block__close');

if(ShowMoreMap){
ShowMoreMap.addEventListener('click', function () {
    ShowMoreMapBlock.style.display = 'block';
});

ShowMoreMapBlockClose.addEventListener('click', function () {
    ShowMoreMapBlock.style.display = 'none';
});
}

const hamb = document.querySelector('#hamb');
const menu = document.querySelector('.header-items');
const headerItem = document.querySelectorAll('.header-item');
const siteShadow = document.querySelector('.site-shadow');

headerItem.forEach((el) => {
    el.addEventListener('click', () => {
        hamb.classList.toggle('active');
        menu.classList.toggle('open');
    });
});

hamb.addEventListener('click', function () {
    hamb.classList.toggle('active');
    menu.classList.toggle('open');
    window.scrollTo(0, 0);
    siteShadow.classList.toggle('active');
    document.body.classList.toggle('open');
});


document.addEventListener("DOMContentLoaded", function () {
    const albumPicture = document.querySelectorAll(".album-picture img");
    var clickCount = 0;

    if(albumPicture){
    albumPicture.forEach((picture) =>{
        picture.addEventListener("click", function () {
            picture.parentElement.classList.toggle("active");
        });
    })

    const albumsBlock = document.querySelector(".albums-block")
    if(albumPicture.length > 4){
        const showmore = document.querySelector(".showmore-button");
        showmore.style.display = "flex";
        showmore.addEventListener('click',()=>{
            albumsBlock.classList.toggle("open")
            if (clickCount % 2 === 0) {
                showmore.textContent = "Свернуть";
            } else {
                showmore.textContent = "Показать ещё";
            }
            clickCount++;
        })
    }
}

let emailInput = document.getElementById("emailInput");
        if (emailInput) {
            emailInput.addEventListener("input", function () {
                validateEmail(this);
            });
    }

let inputElements = document.querySelectorAll(".onlyletters");

    if(inputElements){
    inputElements.forEach(function(inputElement) {
      inputElement.addEventListener("input", function() {
        let inputValue = inputElement.value;

        let lettersOnly = inputValue.replace(/[^a-zA-Z\sа-яА-Я]/g, '');

        inputElement.value = lettersOnly;
      });
    });
}
});


function validateEmail(input) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(input.value)) {
        input.nextElementSibling.classList.remove("visible")
    } else {
        input.nextElementSibling.classList.add("visible")
    }
}

function register() {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    let age = document.getElementById('age').value;
    let registerMessage = document.getElementById('registerMessage');
    
    if (login.length < 5) {
        registerMessage.textContent = 'Ошибка при вводе логина!';
        return;
    }
    
    if (password.length < 5) {
        registerMessage.textContent = 'Ошибка при вводе пароля!';
        return;
    }
    
    age = parseInt(age);
    if (isNaN(age) || age < 0 || age > 120) {
        registerMessage.textContent = 'Ошибка при вводе возраста!';
        return;
    }
    
    localStorage.setItem('user_' + login, JSON.stringify({ password: password, age: age }));
    registerMessage.textContent = `Привет, ${login}! Регистрация успешна.`;
}

function login() {
    let login = document.getElementById('loginLogin').value;
    let password = document.getElementById('loginPassword').value;
    let loginMessage = document.getElementById('loginMessage');
    
    let userData = localStorage.getItem('user_' + login);
    if (userData) {
        userData = JSON.parse(userData);
        if (userData.password === password) {
            localStorage.setItem('loggedInUser', login);
            loginMessage.textContent = `Привет, ${login}! Авторизация успешна!.`;
            window.location.href = 'contacts.html'; 
        } else {
            loginMessage.textContent = 'Неверный пароль!';
        }
    } else {
        loginMessage.textContent = 'Пользователь не найден!';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const authStatus = document.getElementById("authStatus");
    const contactForm = document.getElementById("contactForm");


    if(authStatus && contactForm){
        if (localStorage.getItem("loggedInUser")) {
            authStatus.textContent = `Вы авторизованы как ${localStorage.getItem("loggedInUser")}`;
            contactForm.style.display = "block";
        } else {
            authStatus.textContent = "Выполните авторизацию чтобы отправить нам сообщение";
        }
    }
});

function sendMessage() {
    const messageInput = document.getElementById("messageInput").value;
    const messageStatus = document.getElementById("messageStatus");

    if (messageInput.trim() === "") {
        messageStatus.textContent = "Сообщение не может быть пустым.";
    } else {
        messageStatus.textContent = "Сообщение отправлено!";
    }
}
