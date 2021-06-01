//クラスページに遷移
var message = document.querySelector(".message");
message.addEventListener("click",moveToClass,false);

function moveToClass(){
  location.href = "./class_page.html" ;
}


//パップアップ表示_登録
function popup_signup() {
  var popup = document.getElementById('signup-popup');
  if(!popup) return;

  var blackBg = document.getElementById('signup-black-bg');
  var closeBtn = document.getElementById('signup-close-btn');
  var showBtn = document.querySelector(".signup");;

  closePopUp_signup(blackBg);
  closePopUp_signup(closeBtn);
  closePopUp_signup(showBtn);
  function closePopUp_signup(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
    });
  }
}
popup_signup();

// 新規登録チェック
var send_signup =  document.querySelector(".signup_send");

send_signup.addEventListener("click", signup, false);

function signup(){
  var emailStr = document.querySelector(".signup_email").value;
  var passwordStr = document.querySelector(".signup_password").value;
  var result = document.querySelector(".signup_result");
  var account = {};
  account.email = emailStr;
  account.password = passwordStr;

  var xhr = new XMLHttpRequest();
  xhr.open("post","https://hexschool-tutorial.herokuapp.com/api/signup",true);
  xhr.setRequestHeader("Content-type","application/json");
  var data =JSON.stringify(account);
  xhr.send(data);
  xhr.onload = function(){
      var callbackData = JSON.parse(xhr.responseText);
      console.log(callbackData);
      var valStr = callbackData.message;
      if(valStr == "帳號註冊成功"){
        result.textContent = "アカウントを新規に登録しました";
        document.querySelector(".signup_name").value = "";
        document.querySelector(".signup_email").value = "";
        document.querySelector(".signup_password").value = "";
      }else if(valStr == "此帳號已被使用"){
        result.textContent = "アカウントはすでに登録されています";
      }else{
        result.textContent = "メールアドレスの形式が間違えました";
      }
      
  }}

//パップアップ表示_ログイン
function popup_login() {
  var popup = document.getElementById('login-popup');
  if(!popup) return;

  var blackBg = document.getElementById('login-black-bg');
  var closeBtn = document.getElementById('login-close-btn');
  var showBtn = document.querySelector(".login");;

  closePopUp_login(blackBg);
  closePopUp_login(closeBtn);
  closePopUp_login(showBtn);
  function closePopUp_login(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
    });
  }
}
popup_login();

//ログインチェック
var send_login =  document.querySelector(".login_send");

send_login.addEventListener("click", login, false);

function login(){
  var emailStr = document.querySelector(".login_email").value;
  var passwordStr = document.querySelector(".login_password").value;
  var result = document.querySelector(".login_result");
  var account = {};
  account.email = emailStr;
  account.password = passwordStr;

  var xhr = new XMLHttpRequest();
  xhr.open("post","https://hexschool-tutorial.herokuapp.com/api/signin",true);
  xhr.setRequestHeader("Content-type","application/json");
  var data =JSON.stringify(account);
  xhr.send(data);
  xhr.onload = function(){
      var callbackData = JSON.parse(xhr.responseText);
      console.log(callbackData);
      var valStr = callbackData.message;
      if(valStr == "登入成功"){
        result.textContent = "正常にログインしました";
        document.querySelector(".login_name").value = "";
        document.querySelector(".login_email").value = "";
        document.querySelector(".login_password").value = "";
      }else if(valStr == "此帳號不存在或帳號密碼錯誤"){
        result.textContent = "パスワードまたはアカウントが間違えました";
      }else{
        result.textContent = "メールアドレスの形式が間違えました";
      }
      
  }}
