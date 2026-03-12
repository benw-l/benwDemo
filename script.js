const image1 = document.getElementById("imageId1");
const image2 = document.getElementById("imageId2");
const nav = document.getElementById("myNav");
const select = document.getElementById("textSelect");
const textDisplay = document.getElementById("textDisplay");

const wikiLogo = "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/330px-Wikipedia-logo-v2.svg.png";
const wikiHowLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/WikiHow_logo_2014.svg/500px-WikiHow_logo_2014.svg.png";

image1.addEventListener("click", toggleImage);

function toggleImage() {
    image1.src = image1.src === wikiLogo ? wikiHowLogo : wikiLogo;
}

nav.addEventListener("mouseover", () => {
    nav.style.backgroundColor = "rgb(90,90,90)";
});

nav.addEventListener("mouseout", () => {
    nav.style.backgroundColor = "rgb(180,180,180)";
});

image2.addEventListener("mouseover", () => {
    image2.style.transform = "scale(1.2)";
});

image2.addEventListener("mouseout", () => {
    image2.style.transform = "scale(1)";
});

select.addEventListener("change", () => {
    textDisplay.innerText = select.value;
});
