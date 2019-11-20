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
    /* Ved klik tilføjes eller fjernes "responsive" class på topnav */
    console.log("menuFunction");
    let x = document.querySelector("#myTopnav");

    x.classList.toggle("responsive");
}




//////////////////////////////////////////////////////////////////

//----- To Top Button -----
// Vores "To Top Button" er er inspireret af artiklen "How TO - Scroll Back To Top Button" fra W3Schools.
// Link: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp


let tilToppen = document.querySelector("#knap-top");

// Når man scroller 20px ned vises knappen på hver side
window.onscroll = function () {
    scrollFunction()
    knapTilTop();
};


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        tilToppen.style.display = "flex";
    } else {
        tilToppen.style.display = "none";
    }
}


function knapTilTop() {
    console.log("knapTilTop");

    document.querySelector("#knap-top").addEventListener("click", () => {
        location.href = `#`;
    })

}

//////////////////////////////////////////////////////////////////
