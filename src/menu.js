function menu() {
    const content = document.querySelector("#content");
    content.innerHTML = ""

    const h1 = document.createElement("h1")
    const p = document.createElement("p")

    h1.innerText = "The Menu";
    p.innerText = "We make the best Pizzas";

    content.append(h1, p);
}

export {menu}