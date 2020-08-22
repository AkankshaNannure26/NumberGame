const $SubmitButton=document.getElementById("submit");
const $message=document.getElementById("message");
const $lives=document.getElementById("lives");
var guessnumber=Math.round( Math.random()*100);
var lives=10;
var message;
$SubmitButton.onclick= () =>{
   let userinput= document.getElementById("number-input").value;
   lives--;
   if(userinput==guessnumber)
   location.href="./win.html";
   else if(lives==0){
    location.href="./lose.html"
   }
   else if(userinput>guessnumber)
   {
       message=`Oops your guess is too high. You have ${lives} remaining`;
   }
   else if(userinput<guessnumber)
   {
       message=`Oops your guess is too low. You have ${lives} remaining`
   }
   $message.style.display="inherit";
   $message.innerHTML=message;
   $lives.innerHTML=lives;
}