index.html FORM

<!DOCTYPE html>
<html lang="en">
<head><!---Researched Learning material vid: "How to make a website with login & Register | html css javascript"-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="index.css">
    <title>Bean Count | Login & Registration</title>
</head>
<body>
    <div class="wrapper">
        <nav class="nav">
            <div class="nav-logo">
                <p>BEAN'S .</p>
            </div>
            <div style="-webkit-backdrop-filter: blur(20px);" class="nav-menu" id="navMenu">
                <ul>
                    <li><a href="/client/index.html" class="link active">Login | Registration</a></li>
                    <li><a href="/client/beanCalculator.html" class="link">Caffeine Calculator</a></li>
                </ul>
            </div>
            <div class="nav-button">
                <button class="btn white-btn" id="loginBtn" onclick="login()">Sign In</button>
                <button class="btn" id="registerBtn" onclick="register()">Sign Up</button>
            </div>
            <div class="nav-menu-btn">
                <i class="bx bx-menu" onclick="myMenuFunction()"></i>
            </div>
        </nav>
    <!----------------------------- Form box ----------------------------------->
        <div class="form-box">


            <!------------------- login form -------------------------->
            <div class="login-container" id="login">
                <div class="top">
                    <span>Don't have an account? <a href="#" onclick="register()">Sign Up</a></span>
                    <header>Login</header>
                </div>
                <div class="input-box">
                    <input type="text" class="input-field" placeholder="Username or Email">
                    <i class="bx bx-user"></i>
                </div>
                <div class="input-box">
                    <input type="password" class="input-field" placeholder="Password">
                    <i class="bx bx-lock-alt"></i>
                </div>
                <div class="input-box">
                    <input type="submit" class="submit" value="Sign In">
                </div>
                <div class="two-col">
                    <div class="one">
                        <input type="checkbox" id="login-check">
                        <label for="login-check"> Remember Me</label>
                    </div>
                    <div class="two">
                        <label><a href="#">Forgot password?</a></label>
                    </div>
                </div>
            </div>
            <!------------------- registration form -------------------------->
            <div class="register-container" id="register">
                <div class="top">
                    <span>Have an account? <a href="#" onclick="login()">Login</a></span>
                    <header>Sign Up</header>
                </div>
                <div class="two-forms">
                    <div class="input-box">
                        <input type="text" class="input-field" placeholder="Firstname">
                        <i class="bx bx-user"></i>
                    </div>
                    <div class="input-box">
                        <input type="text" class="input-field" placeholder="Lastname">
                        <i class="bx bx-user"></i>
                    </div>
                </div>
                <div class="input-box">
                    <input type="text" class="input-field" placeholder="Email">
                    <i class="bx bx-envelope"></i>
                </div>
                <div class="input-box">
                    <input type="password" class="input-field" placeholder="Password">
                    <i class="bx bx-lock-alt"></i>
                </div>
                <div class="input-box">
                    <input type="submit" class="submit" value="Register">
                </div>
                <div class="two-col">
                    <div class="one">
                        <input type="checkbox" id="register-check">
                        <label for="register-check"> Remember Me</label>
                    </div>
                    <div class="two">
                        <label><a href="#">Terms & conditions</a></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="index.js"></script>
</body>
</html>



index.css FORM


@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');

* {
    font-family: 'Poppins', Apple Chancery, Georgia, Helvetica;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    background: url("/images/login.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 110vh;
    background: rgba(39, 39, 39, 0.4);
}
.nav {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100px;
    line-height: 100px;
    background: linear-gradient(rgba(39, 39, 39, 0.6), transparent);
    z-index: 100;
}
.nav-logo p {
    color: white;
    font-size: 26px;
    font-weight: 600;
    transition: 2s ease-in-out;
    cursor: pointer;
}
.nav-logo p:hover { /*add feature*/
    color: chocolate;
    font-size: 27px;
    font-weight: 800;
    opacity: 0.75;
    border-radius: 16%;
}
.nav-menu ul {
    display: flex;
}
.nav-menu ul li {
    list-style-type: none;
}
.nav-menu, ul li .link {
    text-decoration: none;
    font-weight: 500;
    color: #fff;
    padding-bottom: 15px;
    margin: 0 25px;
    transition: 1s ease-in-out;
}
.link:hover {
    border-bottom: 2px solid chocolate;
    color: chocolate;
    border-radius: 12%;
    font-size: 1.08rem;
    cursor: pointer;

}
.nav-button .btn {
    width: 130px;
    height: 40px;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.4);
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: .6s ease-in-out;
}

#registerBtn {
    margin-left: 15px;
}
.btn:hover {
    color: white;
    background: rgba(255, 255, 255, 0.4);
}
.btn.white-btn {
    background-color: rgba(255, 255, 255, 0.8);
}
.btn.btn.white-btn:hover {
    background: rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.9);

}
.nav-menu-btn {
    display: none;
}
.form-box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 512px;
    height: 420px;
    overflow: hidden;
    z-index: 2;
}
.login-container {
    position: absolute;
    left: 4px;
    width: 500px;
    display: flex;
    flex-direction: column;
    transition: .5s ease-in-out;
}
.register-container {
    position: absolute;
    right: -520px;
    width: 500px;
    display: flex;
    flex-direction: column;
    transition: .5s ease-in-out;
}
.top span {
    color: #fff;
    font-size: small;
    padding: 10px 0;
    display: flex;
    justify-content: center;
}
.top span a {
    font-weight: 500;
    color: #fff;
    margin-left: 5px;
}
header {
    color: #fff;
    font-size: 30px;
    text-align: center;
    padding: 10px 0 30px 0;
}
.two-forms {
    display: flex;
    gap: 10px;
}
.input-field {
    font-size: 17px;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    height: 50px;
    width: 100%;
    padding: 0 10px 0 45px;
    border: none;
    border-radius: 30px;
    outline: none;
    transition: .2s ease;
}
.input-field:hover, .input-field:focus {
    background: rgba(255, 255, 255, 0.25);
}
::webkit-input-placeholder {
    color: white;
}
.input-box i {
    position: relative;
    top: -35px;
    left: 17px;
    color: #fff;
}
.submit {
    font-size: 17px;
    font-weight: 500;
    color: black;
    height: 45px;
    width: 100%;
    border: none;
    border-radius: 30px;
    outline: none;
    background: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: 3.s ease-in-out;
}
.submit:hover {
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 1px 5px 7px 1px rgba(255, 255, 255, 0.2);
}
.two-col {
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: small;
    margin-top: 10px;
}
.two-col .one {
    display: flex;
    gap: 5px;
}
.two label a {
    text-decoration: none;
    color: #fff;
}
.two label a:hover {
    text-decoration: underline;
}
@media only screen and (max-width: 786px) {
    .nav-button {
        display: none;
    }
    .nav-menu.responsive {
        top: 100px;
    }
    .nav-menu {
        position: absolute;
        top: -800px;
        display: flex;
        justify-content : center;
        background: rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 90vh;
        -webkit-backdrop-filter: blur(20px);
        transition: .3s;
    }
    .nav-menu ul {
        flex-direction: column;
        text-align: center;
    }
    .nav-menu-btn {
        display: block;
    }
    .nav-menu-btn i {
        font-size: 25px;
        color: #fff;
        padding: 10px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        cursor: pointer;
        transition: .3s;
    }
    .nav-menu-btn i:hover {
        background: rgba(255, 255, 255, 0.15);
    }
}
@media only screen and (max-width: 540px) {
    .wrapper  {
        min-height: 100vh;
    }
    .form-box {
        width: 100%;
        height: 500px;
    }
    .register-container, .login-container {
        width: 100%;
        padding: 0 20px;
    }
    .register-container .two-forms {
        flex-direction: column;
        gap: 0;
    }
}




index.js FORM

function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if (i.className === "nav-menu") {
        i.className += "responsive";
    } else {
        i.className = "nav-menu";
        }
    };


var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");


function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += "white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
};

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className += "btn";
    b.className = "white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}


