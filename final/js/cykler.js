  let urlParams = new URLSearchParams(window.location.search);
  let filterModel;
  let posts = [];
  let filterKoen = "alle";
  const url = "http://marollemarie.dk/kea/2.semester/KogaWP/wordpress/wp-json/wp/v2/cykler?per_page=100";
  let sortering = "pris";
  const items = document.querySelectorAll(".collapse-title");

  if (urlParams.get("filterModel")) {
      filterModel = urlParams.get("filterModel");
      const knap = document.querySelector('button[data-cykeltype=' + filterModel + ']');
      document.querySelectorAll("#inddeling").textContent = filterModel;
      document.querySelector(".filter-model.valgt").classList.remove("valgt");
      knap.classList.add("valgt");
      //            knap.parentElement.classList.add("active");

  } else {
      filterModel = "alle";
  }



  document.addEventListener("DOMContentLoaded", start);

  function start() {
      document.querySelector(".sorter-pris.valgt").classList.remove("valgt");
      hentJson();
      addEventListenersToButtons();
      addEventListenerSignature();

  }

  async function hentJson() {
      const response = await fetch(url);
      posts = await response.json();
      visCykler();

  }


  function visCykler() {
      console.log("visCykler");
      const skabelon = document.querySelector("template");
      const liste = document.querySelector(".auto-grid");

      liste.textContent = "";

      posts.forEach(post => {

          if ((filterModel == "alle" || filterModel == post.cykeltype[0]) && (filterKoen == "alle" || filterKoen == post.koen[0])) {

              const klon = skabelon.cloneNode(true).content;

              klon.querySelector(".billede_1").src = post.billede_side.guid;
              klon.querySelector(".cykelmodel").textContent = post.cykelmodel;
              klon.querySelector(".cykeltype_cykler").textContent = post.cykeltype;
              klon.querySelector(".koen_cykler").textContent = post.koen;
              klon.querySelector(".kort").textContent = post.kort;
              klon.querySelector(".pris").textContent = "DKK " + post.pris + ",-";
              klon.querySelector("article").addEventListener("click", () => {
                  location.href = `singleview.html?id=${post.id}`;
              })

              liste.appendChild(klon);

          }
      });
  }


  function addEventListenersToButtons() {
      console.log("addEventListenersToButtons");
      document.querySelectorAll(".filter-model").forEach(elm => {
          elm.addEventListener("click", filtreringCykeltype);
      })
      document.querySelectorAll(".filter-koen").forEach(elm => {
          elm.addEventListener("click", filtreringKoen);
      })

      document.querySelectorAll(".sorter-pris").forEach(elm => {
          elm.addEventListener("click", sorterPris);
      })
  }


  // Funktion som kan sortere pris
  function sorterPris() {
      console.log("sorterPris");

      sortering = this.dataset.sortering;
      if (sortering == "lavest") {
          posts.sort((a, b) => {
              if (a.pris > b.pris) {
                  return 1
              } else {
                  return -1
              }
          })
      }
      if (sortering == "højest") {
          posts.sort((a, b) => {
              if (b.pris > a.pris) {
                  return 1
              } else {
                  return -1
              }
          })

      } else {
          posts.sort((a, b) => {
              if (a.cykelmodel > b.cykelmodel) {
                  return 1
              } else {
                  return -1
              }
          })
      }

      document.querySelector(".sorter-pris.valgt").classList.remove("valgt"); // fjern klassen valgt fra aktuel knap
      this.classList.add("valgt") // marker den nyvalgte knap

      visCykler();

  }

  // Denne funktion kan filtrere cyklerne efter cykeltype (json)
  function filtreringCykeltype() {
      console.log("filtreringCykeltype");
      filterModel = this.dataset.cykeltype; // sæt variabel "filter" til aktuel værdi
      document.querySelector(".filter-model.valgt").classList.remove("valgt"); // fjern klassen valgt fra aktuel knap
      this.classList.add("valgt") // marker den nyvalgte knap

      document.querySelector("#inddeling").textContent = this.textContent;

      visCykler(); // kald funktionen visCykler igen med nyt filter
  }

  // Denne funktion kan filtrere cyklerne efter køn (json)
  function filtreringKoen() {
      console.log("filtreringKoen");
      filterKoen = this.dataset.koen; // sæt variabel "filter" til aktuel værdi
      document.querySelector(".filter-koen.valgt").classList.remove("valgt"); // fjern klassen valgt fra aktuel knap
      this.classList.add("valgt") // marker den nyvalgte knap

      visCykler(); // kalder funktionen visCykler igen med nyt filter
  }


  //////////////////////////////////////////////////////////////////
  /////-----Accordion til filtrering-----/////

  items.forEach(item => item.addEventListener('click', toggleAccordion));

  function toggleAccordion() {
      console.log("toggleAccordion");
      this.classList.toggle('active');

      this.nextElementSibling.classList.toggle('active');
      this.classList.toggle("rotate");
      this.nextElementSibling.classList.toggle("rotate");
      this.nextElementSibling.classList.toggle("rotate");
  }

  function addEventListenerSignature() {
      //Ved klik på Koga Signature går man til signature.html

      //Mobil klik:
      document.querySelector(".click-signature").addEventListener("click", () => {
          location.href = `signature.html`;
      })

      //Desktop klik:
      document.querySelector("#desktop-filtrering .click-signature").addEventListener("click", () => {
          location.href = `signature.html`;
      })


  }
