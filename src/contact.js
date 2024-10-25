function contact() {
    const content = document.querySelector("#content");
    content.innerHTML = ""

    const h1 = document.createElement("h1")
    const p = document.createElement("p")

    h1.innerText = "Contact Us";
    p.innerText = "054 5155 656 656";

    content.append(h1, p);
}

export {contact}