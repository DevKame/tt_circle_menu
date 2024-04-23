"use strict";

const menu = document.querySelector(".menu");

menu.addEventListener("click", e => {
    !menu.classList.contains("expanded") ?
    blobIn() : blobOut();
});


async function blobIn() {
    await menu.animate([
        {transform: "scale(.85)"},
    ],
    {
        duration: 100,
        iterations: 1,
        fill: "forwards",
    }).finished;
    await menu.animate([
        {transform: "scale(.9)"},
    ],
    {
        duration: 100,
        iterations: 1,
        fill: "forwards",
    }).finished;
    menu.classList.add("expanded");
    await menu.animate([
        {transform: "scale(.85)"},
    ],
    {
        duration: 100,
        iterations: 1,
        fill: "forwards",
    }).finished;
}
async function blobOut() {
    await menu.animate([
        {transform: "scale(1.05)"},
    ],
    {
        duration: 100,
        iterations: 1,
        fill: "forwards",
    }).finished;
    await menu.animate([
        {transform: "scale(.95)"},
    ],
    {
        duration: 100,
        iterations: 1,
        fill: "forwards",
    }).finished;
    await menu.animate([
        {transform: "scale(1)"},
    ],
    {
        duration: 100,
        iterations: 1,
        fill: "forwards",
    }).finished;
    menu.classList.remove("expanded");
}

const secBtns = document.querySelectorAll(".menu-btn:not(.menu)");
console.log(secBtns);