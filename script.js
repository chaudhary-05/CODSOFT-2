const header = document.querySelector("header")

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY> 120);
});

let number = document.getElementById("number");
let counter = 0;
setInterval(() =>{
    if(counter == 65){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML = counter + "%"
    }
},20)

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};