import "./styles.css";

import { initialLoad } from "./home";

import { menu } from "./menu";

import { contact } from "./contact";


const homeBtn = document.querySelector("#homeBtn")
const menuBtn = document.querySelector("#menuBtn")
const contactBtn = document.querySelector("#contactBtn")

menuBtn.addEventListener("click", menu)
homeBtn.addEventListener("click", initialLoad)
contactBtn.addEventListener("click", contact)

initialLoad();