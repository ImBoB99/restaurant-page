import homeImage from "./images/home.jpg";

function initialLoad() {
    const content = document.querySelector("#content");

    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const image = document.createElement("img")

    h1.innerText = "The Restaurant";
    p.innerText = "Fanciest restaurant in town, hot and exotic meals just for you.";
    image.src = homeImage;

    content.append(h1, p, image);
}

export {initialLoad}