let nohay = "https://cdn-icons-png.flaticon.com/512/4659/4659326.png";
let products = {
  data: [
    {
      nombreYautor: "La niña que no veían - Gaston Rosa",
      categoria: "Infantil",
      codigo: "INNVGR2018",
      portada:
        "https://arc-anglerfish-arc2-prTod-copesa.s3.amazonaws.com/public/MGIJVMWDONET3CXQGNZWXN55TY.png",
      prologo: "Algunas veces Martina siente que la tratan diferente y no entiende cuál es la razón. Conociendo otras realidades, como la de Martina, es que aprendemos a respetar y a valorar la diversidad. Celebrar las diferencias en los demás, es también aceptar las propias. ¡Lo mismo que te hace diferente, te hace insuperable!",
    },
    {
      nombreYautor: "Zapatos cambiados  - Gaston Rosa",
      categoria: "Infantil",
      codigo: "IZCGR2018",
      portada:
        "https://p.calameoassets.com/171031124756-99ca4d4aafd77325f03b1bce8c5e0d6f/p1.jpg",
      prologo: "Este es el cuento sobre como dos hermanitos cambian la historia de un pueblo. Se les ocurre una idea que se vuelve la nueva tradicción del lugar. Ponerse en los zapatos del otro es comprender, respetar y valorar la diversidad. Y eso también sirve para que puedas aceptarte a ti mismo. ¡Lo mismo que te hace diferente, te hace insuperable!",
    },
    {
      nombreYautor: "La niña que tenía dos papás - Mel Elliott",
      categoria: "Infantil",
      codigo: "INTDPME2019",
      portada:
        "https://cdn.edelvives.es/docs/catalogo/15890/imgs/original/165015_Cub_DosPadres_Ev_web.jpg",
      prologo: "Berta está emocionada con Matilda, la niña nueva que ha llegado a su colegio; ¡es igualita a ella! Solo se diferencian en una cosa: Matilda tiene dos papás. Berta está deseando conocerlos, ¡seguro que en su casa todo es muy diferente!",
    },
    {
      nombreYautor: "El vestido más lindo del mundo - Monica dos Santos",
      categoria: "Infantil",
      codigo: "IVMLMMDS2016",
      portada:
        "https://sujetossujetados.files.wordpress.com/2021/01/infancias2-2.jpg",
      prologo: "Una niña llamada Naiat recibe de su madre un vestido que no le gusta, por lo que recorre las casas de sus vecinas y sus amigas buscando ayuda. Las mujeres con las que se encuentra la van decorando con zapatos, un peinado, accesorios y detalles, hasta que, finalmente, siente que tiene «el vestido más lindo del mundo». La niña termina con un vestido que le gusta, repleto de valores y riquezas colectivas, porque encontró contención y apoyo en la gente que la rodea.",
    },
    {
      nombreYautor: "El vestido de mamá  - Dani Umpi",
      categoria: "Infantil",
      codigo: "IEVDMDU2011",
      portada:
        "https://bichuna.uy/wp-content/uploads/2021/08/D_NQ_NP_787221-MLU20737376979_052016-O.jpg",
      prologo: "Un niño esta encantado con el vestido verde que su mamá usa para ir a las fiestas. Se imagina otra ropa con esa tela mágica. Un día decide ponerse el vestido sobre su equipo de futbol y sale a jugar con sus amigos. En la plaza se encuentra con que hay algunos códigos que no son tan fáciles de entender. Y todavía tiene que volver a casa con el vestido cubierto de barro…",
    },
    {
      nombreYautor: "Susy Shock para chixs - Nadia Fink y Pitu Saá",
      categoria: "Infantil",
      codigo: "ISSPCNFPS2018",
      portada:
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/968/871/products/susy-shock-antiprincesas-infantil-genero-libro-d_nq_np_819619-mla27329208127_052018-f1-ca0a31b3e6f2b9d2a715586411413093-640-0.jpg",
      prologo: "Esta es una historia llena de abrazos porque a Susy Shock, la protagonista, la abrazaron desde pequeña en sus múltiples formas de sentir y de pensar. Ella se define como travesti o, mejor dicho, como “trava”. ¿Y qué significa eso? Que eligió ser como siente. Susy nos cuenta su vida y verás qué feliz se siente y qué segura de sí misma. Nuestra Antiprincesa Colibrí nos habla de todas las posibilidades de ser y de soñar. También se repasan las historias de otras colibrís: Lohana Berkins, Diana Sacayán, Marlene Wayar y su amiguita Luana.",
    },
    {
      nombreYautor: "Un apartamento en Urano - Paul B. Preciado",
      categoria: "TeoríaQueer",
      codigo: "TUAEUPBP2019",
      portada:
        "https://www.anagrama-ed.es/uploads/media/portadas/0001/22/affbabbd74d2a78553ffbb52be993772f34bb972.jpeg",
      prologo: "",
    },
    {
      nombreYautor: "Testo yonqui - Paul B. Preciado",
      categoria: "TeoríaQueer",
      codigo: "TTYPBP2008",
      portada:
        "https://www.anagrama-ed.es/uploads/media/portadas/0001/24/112bdd1c1a2b877e3c60a60fce41f3a6f779a971.jpeg",
      prologo: "",
    },
    {
      nombreYautor: "Manifiesto contrasexual - Paul B. Preciado",
      categoria: "TeoríaQueer",
      codigo: "TMCPBP2011",
      portada:
        "https://www.anagrama-ed.es/uploads/media/portadas/0001/24/1d6f47328b01fdb6863fe93631b138318ce0d6d2.jpeg",
      prologo: "",
    },
    {
      nombreYautor: "Pornotopía - Paul B. Preciado",
      categoria: "TeoríaQueer",
      codigo: "TPPBP2010",
      portada:
        "https://www.arte.unicen.edu.ar/cdab/wp-content/uploads/2021/11/pornotopia-libro.jpeg",
      prologo: "",
    },
    {
      nombreYautor: "Utopía Queer - José E. Muñoz",
      categoria: "TeoríaQueer",
      codigo: "TUQJEM2009",
      portada:
        "https://www.traficantes.net/sites/default/files/UTOPIA-QUEER_alta.jpg",
      prologo: "",
    },
    {
      nombreYautor: "Gays y derecha  - L. Gutierrez y D. Puntigliano ",
      categoria: "Periodístico",
      codigo: "PGYDLGDP2018",
      portada:
        "https://ladiaria.com.uy/media/photologue/photos/cache/tapa-lento58_700w.png",
      prologo: "",
    },
    {
      nombreYautor: "Incorrecta - Varies autores",
      categoria: "Periodístico",
      codigo: "PIV2016",
      portada: nohay,
    },
    {
      nombreYautor:
        "Amor libre: Interviews voluptuosos - Roberto de las Carreras",
      categoria: "Entrevistas",
      codigo: "EALIVRDLC1902",
      portada:
        "https://pmb.parlamento.gub.uy/pmb/opac_css/getimage.php?notice_id=91336",
      prologo: "",
    },
    {
      nombreYautor: "Fuego Queer - Ed Mead y Rita Brown",
      categoria: "Historia",
      codigo: "HFQEMRB2014",
      portada:
        "https://d22fxaf9t8d39k.cloudfront.net/98a6c44fdd69019927b1edf24e2361cf8cdb795639a466ac3b79357ed6204c9d63589.jpeg",
    },
    {
      nombreYautor:
        "Acción Travesti Callejera Revolucionaria - Marsha Johnson y Sylvia Rivera",
      categoria: "Biografía",
      codigo: "HATCRMJSR2013",
      portada:
        "https://www.viruseditorial.net/portadas/accion-travesti-callejera-revolucionaria.png",
    },
    {
      nombreYautor:
        "Oscar Wilde y yo + De Profundis  - Alfred Douglas + Oscar Wild",
      categoria: "Biografía",
      codigo: "HOWYYDPADOW2019",
      portada:
        "https://www.polifemo.com/static/img/portadas/_visd_0000JPG02719.jpg",
      prologo: "",
    },
    {
      nombreYautor: "Librillo SAT - III Edición  - Montevideo Igualitario",
      categoria: "Arte",
      codigo: "ALS3EMI2019",
      portada: nohay,
      prologo: "",
    },
    {
      nombreYautor: "Afiches por los derechos LGBTIQ+ - Montevideo Igualitario",
      categoria: "Arte",
      codigo: "AAPLDLMI2020",
      portada: nohay,
      prologo: "",
    },
    {
      nombreYautor: "Arte Trans - M. Percovich y L. De Sosa",
      categoria: "Arte",
      codigo: "AATMPLDS2019",
      portada: nohay,
      prologo: "",
    },
    {
      nombreYautor: "3er Plan de Igualidad de Genero ('17-'20) - IMM",
      categoria: "PolíticaPública",
      codigo: "P3PDIDGI2017",
      portada: nohay,
      prologo: "",
    },
    {
      nombreYautor: "Baños Publicos - D. Sempol y M. Montano",
      categoria: "PolíticaPública",
      codigo: "PBPDSMM2019",
      portada: nohay,
      prologo: "",
    },
    {
      nombreYautor: "Policlinicas inclusivas - Marcela Schenck",
      categoria: "PolíticaPública",
      codigo: "PPIMS2019",
      portada: nohay,
    },
    {
      nombreYautor:
        "Dialogo con la diversidad religiosa - S. Kreher y N. Scheider",
      categoria: "PolíticaPública",
      codigo: "PDCLDRSKNS2019",
      portada: nohay,
      prologo: "",
    },
    {
      nombreYautor: "Futuro: Miradas Latinoamericanas - Marcela Schenck",
      categoria: "PolíticaPública",
      codigo: "PFMLMS2019",
      portada: nohay,
      prologo: "",
    },
    {
      nombreYautor: "Espacios Públicos - Valentina Torre",
      categoria: "PolíticaPública",
      codigo: "PEPVT2019",
      portada: nohay,
      prologo: "",
    },
    {
      nombreYautor: "Intersecciones - Diego Sempol",
      categoria: "Teoría",
      codigo: "TIDS2019",
      portada: nohay,
    },
    {
      nombreYautor:
        "Interseccionalidad en las politicas LGBTI - G. Coll, R. Solà y M. Missé",
      categoria: "PolíticaPública",
      codigo: "PIELPLGCRSMM2019",
      portada: nohay,
      prologo: "",
    },
    {
      nombreYautor: "De silencios y otras violencias - MIDES",
      categoria: "PolíticaPública",
      codigo: "PDSYOVM2014",
      portada: nohay,
      prologo: "",
    },
    {
      nombreYautor: "Diversidad Sexual en Uruguay - MIDES",
      categoria: "PolíticaPública",
      codigo: "PDSEUM2014",
      portada: nohay,
      prologo: "",
    },
  ],
};

document.getElementById('search-input').addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    document.getElementById('search').click();
  }
});

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have categoria and should stay hidden initially
  card.classList.add("card", i.categoria, "hide");
  //portada div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("portada-container");
  //img tag
  let portada = document.createElement("img");
  portada.setAttribute("src", i.portada);
  imgContainer.appendChild(portada);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.nombreYautor.toUpperCase();
  container.appendChild(name);
  //codigo
  let codigo = document.createElement("h6");
  codigo.innerText = "#" + i.codigo;
  container.appendChild(codigo);
  card.appendChild(container);
  //prologo
  let prologoClicked = false;
  let prologo = document.createElement("h6");
  name.classList.add("product-description");
  prologo.innerText = "Leer prólogo +";
  prologo.addEventListener("click", () => {
    if (!prologoClicked) {
      let prologo = document.createElement("h6");
      prologo.innerText = i.prologo;
      container.appendChild(prologo);
      card.appendChild(container);
      prologoClicked = true;
    }
  });
  container.appendChild(prologo);
  card.appendChild(container);
  prologo.addEventListener("mouseover", () => {
    prologo.style.cursor = "pointer";
  });
  //
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as categoria)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains categoria class
      if (element.classList.contains(value)) {
        //display element based on categoria
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
