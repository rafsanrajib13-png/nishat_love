// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.fontSize = Math.random()*30 + 20 + "px";
  const duration = 4 + Math.random()*4;
  heart.style.animationDuration = duration + "s";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(), duration*1000);
}
setInterval(createHeart,200);

// Messages
const messageLines=[
  "Ami tmr sathe etodin onek kharap behavior korechi...",
  "Kintu din din tmr proti ashokto hoye jacchi.",
  "Jani na keno ami emon kori...",
  "Jokhon kori tokhon ek rokom mone hoy, aar jokhon tmr sathe kotha boli na tokhon onek kharap lage...",
  "Ajke shesh barer moto amar request ta accept koro...",
  "Ami promise kortesi, jodi er por abar emon kichu kori, tahole tumi ar konodin amake accept korio na...",
  "Amar lojja thaka dorkar, bar bar ekoi vul kori, pore abar afsos kori...",
  "I am really sorry...",
  "But I truly love you ❤️",
  "Please accept me 🥹"
];

// Click function
document.getElementById("clickMeBtn").addEventListener("click", ()=>{
  const btn=document.getElementById("clickMeBtn");
  btn.style.display="none";

  if(navigator.vibrate) navigator.vibrate([200,100,200]);

  const countdown=document.getElementById("countdown");
  countdown.style.display="block";
  let time=5;
  countdown.innerText=time;
  const interval=setInterval(()=>{
    time--;
    if(time>0) countdown.innerText=time;
    else{
      clearInterval(interval);
      countdown.style.display="none";
      showLoveTitle();
    }
  },1000);
});

// Fade in/out title
function showLoveTitle(){
  const title=document.getElementById("loveTitle");
  title.style.opacity=1;
  setTimeout(()=>{
    title.style.opacity=0;
    setTimeout(showHeartArt,1000);
  },3000);
}

// Heart Art
function showHeartArt(){
  const container=document.getElementById("heartArtContainer");
  container.innerHTML="";
  const pattern=[
    "  **   **  ",
    " ****** ** ",
    "********** ",
    " ********  ",
    "  ******   ",
    "   ****    ",
    "    **     "
  ];
  pattern.forEach((line,y)=>{
    for(let x=0;x<line.length;x++){
      if(line[x]=="*"){
        const span=document.createElement("span");
        span.classList.add("heartLetter");
        span.innerHTML="❤️";
        span.style.left=(30 + x*4)+"vw";
        span.style.top=(20 + y*5)+"vh";
        container.appendChild(span);
        setTimeout(()=>span.style.opacity=1,50);
      }
    }
  });

  setTimeout(()=>{
    const letters=document.querySelectorAll(".heartLetter");
    letters.forEach(l=>l.style.opacity=0);
    setTimeout(showSequentialMessages,1000);
  },3000);
}

// Sequential Messages
function showSequentialMessages(){
  const container=document.getElementById("messageContainer");
  container.innerHTML="";
  messageLines.forEach((line,index)=>{
    setTimeout(()=>{
      const div=document.createElement("div");
      div.classList.add("messageLine");
      div.innerHTML=line;
      container.appendChild(div);
      setTimeout(()=>{div.style.opacity=1; div.style.transform="translateY(0)";},50);
    }, index*3000);
  });
}