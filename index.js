const btn = document.querySelectorAll("button");
const contact = document.querySelector(".greyOut");
const closeContact = document.querySelector(".x");

btn.forEach(e => {
    e.addEventListener("click", ()=>{
        contact.classList.toggle("displayNone");
    });
});

closeContact.addEventListener("click", ()=>{
    contact.classList.toggle("displayNone");
});