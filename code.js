var tablinks = document.getElementsByClassName("tab__links");
var tabcontents = document.getElementsByClassName("tab__contents");

function openTab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active__link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active__tap");
    }
    event.currentTarget.classList.add("active__link");

    document.getElementById(tabname).classList.add('active__tap');
    console.log(event);

};

var sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-12.5rem";
};


const scriptURL = 'https://script.google.com/macros/s/AKfycbzKZyyGWIvCZvSOgt7UZENjrOuk1BGroSCLodppHzWbYuA4H9YAt4t7k1YIW9mBaWt-sg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})        
      