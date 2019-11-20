 let cykel;
 let urlParams = new URLSearchParams(window.location.search);
 let id = urlParams.get("id");
 const url = "http://marollemarie.dk/kea/2.semester/KogaWP/wordpress/wp-json/wp/v2/cykler/" + id;


 document.addEventListener("DOMContentLoaded", start);

 function start() {
     getJson();
 }

 async function getJson() {
     const response = await fetch(url);

     cykel = await response.json();
     console.log(cykel);
     visCykel();
 }

 function visCykel() {


     const liste = document.querySelector(".liste");


     liste.querySelector(".model").textContent = cykel.title.rendered;
     liste.querySelector(".type").textContent = cykel.cykeltype;
     liste.querySelector(".køn").textContent = cykel.koen;
     liste.querySelector(".pris").textContent = "DKK " + cykel.pris + ",-";
     liste.querySelector("img").src = cykel.billede_side.guid;
     liste.querySelector("img").alt = "billede af" + cykel.billede_side.guid;

     liste.querySelector(".praesentation").textContent = cykel.lang;
     liste.querySelector(".vaegt").textContent = "Vægt: " + cykel.vaegt;
     liste.querySelector(".maal").textContent = "Mål: " + cykel.maal;
     liste.querySelector(".farve").textContent = "Farve: " + cykel.farve;


     liste.querySelector(".fordel1").textContent = cykel.fordel_1;
     liste.querySelector(".fordel2").textContent = cykel.fordel_2;
     liste.querySelector(".fordel3").textContent = cykel.fordel_3;
     liste.querySelector(".fordel4").textContent = cykel.fordel_4;

     document.querySelector(".tilbage").addEventListener("click", () => {
         history.back();
     });

     document.querySelector(".luk").addEventListener("click", () => {
         history.back();
     });
 }
