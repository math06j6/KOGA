window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    loadMenu();
    addEventListenersCards();
    addEventListenerSignature();

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
    /* Ved klik tilføjes eller fjernes "responsive" class på topnav */
    console.log("menuFunction");
    let x = document.querySelector("#myTopnav");

    x.classList.toggle("responsive");
}

//document.querySelector(".luk").addEventListener("click", () => {
//    history.back();
//})


function addEventListenersCards() {
    //Ved klik på "Cards" Koga Signature går man til signature.html
    document.querySelectorAll(".card-forside").forEach(elm => {

        elm.addEventListener("click", () => {
            location.href = `cykler.html`;
        })


    })
}


function addEventListenerSignature() {
    //Ved klik på Koga Signature går man til signature.html
    document.querySelector(".click-signature").addEventListener("click", () => {
        location.href = `signature.html`;
    })
}
