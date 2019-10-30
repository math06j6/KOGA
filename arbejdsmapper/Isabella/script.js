window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");


    document.querySelector(".menuknap").addEventListener("click", menuFunction);


}

function menuFunction() {
    /* Ved klik tilføjes eller fjernes "change" class på topnav */
    console.log("menuFunction");
    let x = document.querySelector("#myTopnav");

    x.classList.toggle("change");
}
