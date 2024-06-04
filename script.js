const form = document.forms[0];
const name = document.getElementById("name");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const textarea = document.getElementById("textarea");
const email = document.getElementById("email");
const input = document.querySelectorAll("input");
const label = document.querySelectorAll("label")

for (let i = 0; i < input.length; i++) {
   input[i].addEventListener("focus",()=>{
    label[i].style.top = "-10px";
   })
    
}
textarea.addEventListener("focus",()=>{
    label[label.length-1].style.top = "-13px";
    textarea.style.opacity = ".4"
})