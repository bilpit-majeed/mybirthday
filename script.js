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

    document.getElementById("output").innerHTML=`
        🎂 Happy Birthday To Me! <br>
        Thank You Allah For Another Year.
    `;
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