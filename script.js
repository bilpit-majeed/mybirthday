const codeText = `

# Birthday Program

name = "BILPIT MAJEED MOSES"
birthday = True

if birthday:
    print("Happy Birthday To Me")

dreams += 1
knowledge += 100
success += 1000

def celebrate():
    return "Alhamdulillah"

print(celebrate())

Loading Birthday Celebration...
`;

const codeElement = document.getElementById("code");
const birthdayContent = document.getElementById("birthdayContent");

let i = 0;

function typeCode(){

    if(i < codeText.length){

        codeElement.innerHTML += codeText.charAt(i);

        i++;

        setTimeout(typeCode,40);

    }else{

        setTimeout(()=>{

            document.querySelector(".code-container").style.display="none";

            birthdayContent.classList.remove("hidden");

        },1000);
    }
}

typeCode();

document.getElementById("celebrateBtn")
.addEventListener("click",()=>{

    document.getElementById("celebrateBtn")
.addEventListener("click", () => {

    document.getElementById("output").innerHTML = `

    <h2>🎉 HAPPY BIRTHDAY TO ME 🎉</h2>

    <p>
        Today I celebrate another year of life,
        growth, learning, and countless blessings.
    </p>

    <p>
        Alhamdulillah for the journey so far,
        for every challenge that made me stronger,
        and for every opportunity that helped me grow.
    </p>

    <p>
        As I step into this new chapter,
        I pray for wisdom, success,
        happiness, good health,
        and endless blessings.
    </p>

    <p>
        May my dreams become reality,
        may my hard work bear fruit,
        and may I continue to inspire others
        through technology and creativity.
    </p>

    <h3>
        🎂 Happy Birthday, BILPIT MAJEED MOSES 🎂
    </h3>

    <p>
        Web Developer • AI Prompt Engineer • Dream Chaser
    </p>

    <h2 style="color:gold;">
        THE JOURNEY CONTINUES 🚀
    </h2>
    `;
});
});

function createParticles(){

    const container=document.getElementById("particles");

    for(let i=0;i<80;i++){

        const particle=document.createElement("div");

        particle.classList.add("particle");

        particle.style.left=Math.random()*100+"%";

        particle.style.animationDuration=
        (Math.random()*5+3)+"s";

        particle.style.opacity=Math.random();

        container.appendChild(particle);
    }
}

createParticles();
