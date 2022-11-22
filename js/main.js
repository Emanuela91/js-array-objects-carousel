const images = [ 
    {
        "image" : "img/01.webp", 
        "title" : "Marvel\"s Spiderman Miles Morale", 
        "text" : "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
    },

    {
        "image" : "img/02.webp", 
        "title" : "Ratchet & Clank: Rift Apart",
        "text" : "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality."
    }, 
    
    { 
        "image" : "img/03.webp", 
        "title" : "Fortnite", 
        "text" : "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
    }, 
    
    { 
        "image" : "img/04.webp", 
        "title" : "Stray", 
        "text" : "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city" 
    }, 
    
    { 
        "image" : "img/05.webp", 
        "title" : "Marvel's Avengers", 
        "text" : "Marvel\"s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay." 
    } 
];

console.log(images);



for (let i = 0; i < images.length; i++) {
    let imagesIesimo = images[i];
    const cont = document.querySelector(".img_container");
    const element = `<div class="foto"><img src="${imagesIesimo.image}"><h1>${imagesIesimo.title}</h1><p>${imagesIesimo.text}</p></div>`;
    cont.innerHTML += element; 
    console.log(element);
}

const divArray = document.getElementsByClassName('foto');
divArray[0].classList.add("active");

let activeItem = 0;


// Creo il bottone
let avanti = document.getElementById("avanti");
let indietro = document.getElementById("indietro");

avanti.addEventListener("click",
    function(){
        if(activeItem < divArray.length - 1){
            divArray[activeItem].classList.remove("active");
            activeItem++;
            divArray[activeItem].classList.add("active");
        }

        else if(activeItem === divArray.length - 1);{
            indietro.classList.add("hidden");
        }
    }

)

indietro.addEventListener("click",
    function(){
        if(activeItem > 0){
            divArray[activeItem].classList.remove("active");
            activeItem--;
            divArray[activeItem].classList.add("active");
        }

        else if(activeItem == divArray.length + 1){
            avanti.classList.add("hidden");

        }
    }

)

