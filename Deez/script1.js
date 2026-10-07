const slides = [
  {
    title: "Kinesika",
    content: `
      <p>
      Ito ay ang tumukoy ng kilos at galaw ng katawan bilang isang uri ng di-berbal na komunikasyon. 
      </p>
      <img src="Kinesika.png">`
  },
  {
    title: "Iconics",
    content: `
      <p>
       Mga gamit  upang makipag-usap sa kapwa .
      </p>
      <img src="iconics.jpg">
      `
  },
    {
    title: "Pictics ",
    content: `
      <p>
        Ang pag-aaral at paggamit ng ekspresyon ng mukha.
      </p>
      `
  },
    {
    title: "Oculesics",
    content: `
      <p>
     Paggamit ng larawan, simbolo, at icons bilang.
      </p>
      <img src="oculesics.png">`
  },
    {
    title: "Proksemiks",
    content: `
      <p>
    Tumutukoy sa paggamit ng personal space at distansya sa komunikasyon.
      </p>
      <img src="ldr.jpg">`
  },
    {
    title: "Chronemics",
    content: `
      <p>
      Tumutukoy sa paggamit ng oras sa komunikasyon.
      </p>
      <img src="Chronemics.jpg">`
  },
    {
    title: "Haptiks",
    content: `
      <p>
Tumutukoy sa komunikasyon sa pamamagitan ng hawak o pandama.      
</p>
      <img src="Haptiks.png">`
  },
    {
    title: "Paralanguage",
    content: `
      <p>
      Tumutukoy sa sa tono, bilis, at lakas ng boses sa komunikasyon.
      </p>`
  },
    {
    title: "Katahimikan",
    content: `
      <p>
       Ang katahimikan ay maraming kahulugan depende sa konteksto ng sitwasyon. Maaari itong magpahiwatig ng pag-iisip, pag-aalala, o galit ka sa isang tao.
      </p>`
  },
   {
    title: "Ugnay sa aming Pathway",
    content: `

    <p>
Mahalaga ang mga ito sa aking 11-ICT pathway dahil nakatutulong ang di-berbal na komunikasyon upang maging mas malinaw, maayos, at propesyonal ang pakikipag-ugnayan ko sa ibang tao. Bilang isang ICT student, hindi sapat na marunong lamang ako sa teknolohiya; kailangan ko rin ng magandang komunikasyon upang maging epektibo sa paggawa ng mga proyekto at pakikipagtulungan sa iba.
    </p>`
  },
  {
    title: "Myembro",
    content: `
    <img src="Group2.jpg"> 
      <p>
       Ito ang mga miyembro ng aming grupo:
       <ul>
         <li>Myall Shadrach A. Balenia</li>
         <li>Jim Manuel Go</li>
         <li>Ralph Ethan Demayuga</li>
         <li>Aoefe Joy Lacuesta</li>
         <li>Brendan Aaron Paglalunan</li>
       </ul>
      </p>`
  }
];

let currentSlide = -1;

function animateRcorners() {
    const rcorners = document.getElementById("rcorners1");
    const title = document.getElementById("title");

    rcorners.style.width = "100%";
    rcorners.style.height = "500px";
    rcorners.style.padding = "50px";
    rcorners.classList.add("expanded");
    rcorners.style.textAlign = "justify";
    currentSlide = 0;
    updateSlide();
    document.getElementById("prev-button").style.display = "flex";
    document.getElementById("next-button").style.display = "flex";
    document.getElementById("prev-button").style.opacity = "1";
    document.getElementById("next-button").style.opacity = "1";

    const startButton = document.getElementById("start-button");
    if (startButton) {
        startButton.style.display = "none";
    }
}

function updateSlide() {
    const rcorners = document.getElementById("rcorners1");
    const title = document.getElementById("title");
    const slide = slides[currentSlide];

    if (slide) {
        title.innerHTML = slide.title;
        rcorners.innerHTML = slide.content;
    }
}

function changeScenario(direction) {
    if (direction === "next") {
        if (currentSlide === slides.length - 1) {
            resetToInitial();
        } else {
            currentSlide++;
            updateSlide();
        }
    } else if (direction === "prev") {
        if (currentSlide === 0) {
            resetToInitial();
        } else if (currentSlide > 0) {
            currentSlide--;
            updateSlide();
        }
    }
}

function resetToInitial() {
    const rcorners = document.getElementById("rcorners1");
    const title = document.getElementById("title");

    title.innerHTML = "Berbal at Di Berbal na Komunikasyon";
    rcorners.innerHTML = `
        Berbal: Ang komunikasyon na ginagamit sa pamamagitan ng mga salita, kahulugan, at iba pang paraan ng pagpapahayag.<br><br>
           Di Berbal: Ang komunikasyon na hindi gumagamit ng mga salita, kundi sa pamamagitan ng mga gesto, mukha, at iba pang paraan ng pagpapahayag.<br><br>
    `;
    rcorners.classList.remove("expanded");
    rcorners.style.width = "90%";
    rcorners.style.height = "450px";
    rcorners.style.padding = "50px";
    rcorners.style.textAlign = "center";
    document.getElementById("prev-button").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("start-button").style.display = "block";
    currentSlide = -1;
}
document.addEventListener('mousemove', e => {
  const dot = document.createElement('div');
  dot.classList.add('cursor-dot');
  dot.style.left = `${e.clientX}px`;
  dot.style.top = `${e.clientY}px`;
  document.body.appendChild(dot);
});
let bounceFrame = null;
let bouncerEl = null;

function startBouncer(src) {
  stopBouncer();

  bouncerEl = document.createElement("img");
  bouncerEl.src = src;
  bouncerEl.className = "bouncer";
  document.body.appendChild(bouncerEl);

  let x = Math.random() * (window.innerWidth - 200) + 60;
  let y = Math.random() * (window.innerHeight - 200) + 60;
  let vx = 4;   
  let vy = 3;   

  function step() {
    const maxX = window.innerWidth - bouncerEl.offsetWidth;
    const maxY = window.innerHeight - bouncerEl.offsetHeight;

    x += vx;
    y += vy;

    if (x <= 0)         { x = 0;    vx =  Math.abs(vx); }
    else if (x >= maxX) { x = maxX; vx = -Math.abs(vx); }

    if (y <= 0)         { y = 0;    vy =  Math.abs(vy); }
    else if (y >= maxY) { y = maxY; vy = -Math.abs(vy); }

    bouncerEl.style.transform = `translate(${x}px, ${y}px)`;
    bounceFrame = requestAnimationFrame(step);
  }

  step();
}

function stopBouncer() {
  if (bounceFrame) cancelAnimationFrame(bounceFrame);
  bounceFrame = null;
  if (bouncerEl) bouncerEl.remove();
  bouncerEl = null;
}
function updateSlide() {
    const rcorners = document.getElementById("rcorners1");
    const title = document.getElementById("title");
    const slide = slides[currentSlide];

    if (slide) {
        title.innerHTML = slide.title;
        rcorners.innerHTML = slide.content;

        if (slide.title.trim() === "Pictics") {
            startBouncer("pictics.png");
        } else {
            stopBouncer();
        }
    }
}