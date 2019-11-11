window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    loadMenu();

}

async function loadMenu() {
    let data = await fetch("nav.html");
    let navigation = await data.text();
    opretMenu(navigation);
    console.log(loadMenu);
}

function opretMenu(e) {
    document.querySelector("#myTopnav").innerHTML = e;
    console.log(opretMenu);

    document.querySelector(".menuknap").addEventListener("click", menuFunction);
}


function menuFunction() {
    /* Ved klik tilføjes eller fjernes "change" class på topnav */
    console.log("menuFunction");
    let x = document.querySelector("#myTopnav");

    x.classList.toggle("change");
}

//document.querySelector(".luk").addEventListener("click", () => {
//    history.back();
//})
