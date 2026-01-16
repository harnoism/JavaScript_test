const container = document.getElementById("sprite-options");

const cropX=0;
const cropY=128;
const cropWidth=64;
const cropHeight=64;

for (let i=1;i<=29;i++){
    let skinPath=`assets/${i}.png`;

    const label= document.createElement("label");
    // label.style.cursor = "pointer";

    const radio=document.createElement("input");

    radio.type="radio";
    // radio.id=`sprite${i}`;
    radio.name="skin";
    radio.value=skinPath;
    if (i === 1) radio.required = true;

    const canvas=document.createElement("canvas");

    canvas.width=cropWidth;
    canvas.height=cropHeight;

    let context = canvas.getContext('2d');
    const img = new Image();

    img.onload = function () {
        context.drawImage(
            img,
            cropX, cropY, cropWidth, cropHeight,
            0, 0, canvas.width, canvas.height
        );
    };
    img.src = skinPath;

    label.appendChild(radio);
    label.appendChild(canvas);
    container.appendChild(label);
}

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const error = document.getElementById("error");
    error.textContent = "";

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    const pseudo = data.pseudo;
    const serverUrl = data.server;
    const skinPath = data.skin;

    if (!pseudo || !serverUrl || !skinPath) {
        error.textContent = "All fields are required.";
        return;
    }

    localStorage.setItem("pseudo", pseudo);
    localStorage.setItem("serverUrl", serverUrl);
    localStorage.setItem("skinPath", skinPath);

    console.log("Saved:", { pseudo, serverUrl, skinPath });
});