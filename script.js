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

form.addEventListener("submit",(e)=>{
    input.forEach(element => {
        if (element.value == "" || element.value == null) {
            e.preventDefault();
            element.style.borderColor = "#e5383b";
            let father = element.parentElement;
            let icon = document.createElement("ion-icon");
            icon.setAttribute("name","close-outline");
            icon.classList.add("warning");
            father.appendChild(icon);

            element.addEventListener("input",()=>{
                if(element.value !== ''){
                    element.style.borderColor = "#55a630";
                    let icon = element.parentElement.lastChild;
                    icon.setAttribute("name","checkmark-outline");
                                       
                }
            })
            
        }
       
        
    });
})
a
