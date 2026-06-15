setTimeout(()=>{
document.getElementById("loading").style.display="none";
document.getElementById("main").style.display="block";

},3000);

const flowers=document.querySelectorAll(".flower");
const message=document.getElementById("message");

flowers.forEach(flower=>{
flower.addEventListener("click",()=>{
message.innerHTML=flower.dataset.msg;
});
});

const music=document.getElementById("music");

document.getElementById("musicBtn")
.addEventListener("click",()=>{
if(music.paused){
music.play();
}else{
music.pause();
}
});

function createFlower(){

const flower=document.createElement("div");

flower.classList.add("falling");

const emojis=[
"🌸",
"🌺",
"🌻",
"🌷",
"💮"
];

flower.innerHTML=
emojis[Math.floor(Math.random()*emojis.length)];

flower.style.left=
Math.random()*100+"vw";

document.body.appendChild(flower);

setTimeout(()=>{
flower.remove();
},8000);
}

setTimeout(() => {
    const loading = document.getElementById("loading");

    loading.style.opacity = "0";

    setTimeout(() => {
        loading.style.display = "none";
        document.getElementById("main").style.display = "block";
    }, 1000);

}, 4000);

setInterval(createFlower,700);

const petals = document.getElementById("petals");

function createPetal(){

    const petal =
    document.createElement("div");

    petal.classList.add("petal");

    const flowers = [
        "🌸",
        "🌺",
        "🌷",
        "💮"
    ];

    petal.innerHTML =
    flowers[
        Math.floor(
            Math.random()*flowers.length
        )
    ];

    petal.style.left =
    Math.random()*window.innerWidth
    + "px";

    petal.style.fontSize =
    (20 + Math.random()*20)
    + "px";

    petal.style.animationDuration =
    (5 + Math.random()*5)
    + "s";

    petals.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },4000);
}

setInterval(createPetal,300);