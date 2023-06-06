//let nohay = "NOHAY.png";

var arrayNoHay = [
  "nohay (1).svg",
  "nohay (2).svg",
  "nohay (3).svg",
  "nohay (4).svg",
  "nohay (5).svg",
  "nohay (6).svg",
];
var nohay = arrayNoHay[Math.floor(Math.random() * arrayNoHay.length)];

let products = {
  data: [
    {
      nombreYautor: "3er Plan de Igualidad de Genero ('17-'20) - IMM",
      categoria: "PolíticaPública",
      codigo: "P3PDIDGI2017",
      portada: nohay,
      prologo: "",
    },
    {
      nombreYautor:
        "Acción Travesti Callejera Revolucionaria - Marsha Johnson y Sylvia Rivera",
      categoria: "Historia",
      codigo: "HATCRMJSR2013",
      portada: "HATCRMJSR2013.webp",
      prologo:
        "Recopilación de textos de Marsha P. Johnson y Sylvia Rivera, dos mujeres trans que vivieron en Nueva York en la época de los disturbios de Stonewall, que poco después iniciaron un proyecto autogestionado de apoyo mutuo para la gente trans más marginada, manteniendo un hogar de acogida. Bajo un discurso revolucionario y prácticas de acción directa, estas dos grandes personalidades de la lucha queer estadounidense mostraron una vía de lucha contra el patriarcado que comenzaba por defender a las personas sin diferenciarlas por cuestiones de clase, raza o cómo viven el género y la sexualidad.",
    },
    {
      nombreYautor: "Afiches por los derechos LGBTIQ+ - Montevideo Igualitario",
      categoria: "Arte",
      codigo: "AAPLDLMI2020",
      portada: nohay,
      prologo: "",
    },
    {
      nombreYautor:
        "Amor libre: Interviews voluptuosos - Roberto de las Carreras",
      categoria: "Entrevistas",
      codigo: "EALIVRDLC1902",
      portada: "EALIVRDLC1902.webp",
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
      nombreYautor: "Baños Publicos - D. Sempol y M. Montano",
      categoria: "PolíticaPública",
      codigo: "PBPDSMM2019",
      portada: nohay,
      prologo:
        "La última segregación. Baños públicos, moral, género y sexualidad en Uruguay.",
    },
    {
      nombreYautor: "Beyand Queer Words - Varies autores",
      categoria: "Arte",
      codigo: "ABQWVA2020",
      portada: "ABQWVA2020.webp",
      prologo:
        "En Beyond Queer Words publican una antología de poemas y cuentos queer una vez al año. Las piezas literarias van de la mano con bellas artes visuales.",
    },
    {
      nombreYautor: "De silencios y otras violencias - MIDES",
      categoria: "PolíticaPública",
      codigo: "PDSYOVM2014",
      portada: nohay,
      prologo: "",
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
      nombreYautor: "Diversidad Sexual en Uruguay - MIDES",
      categoria: "PolíticaPública",
      codigo: "PDSEUM2014",
      portada: nohay,
      prologo: "",
    },
    {
      nombreYautor: "El vestido de mamá  - Dani Umpi",
      categoria: "Infantil",
      codigo: "IEVDMDU2011",
      portada: "IEVDMDU2011.webp",
      prologo:
        "Un niño esta encantado con el vestido verde que su mamá usa para ir a las fiestas. Se imagina otra ropa con esa tela mágica. Un día decide ponerse el vestido sobre su equipo de futbol y sale a jugar con sus amigos. En la plaza se encuentra con que hay algunos códigos que no son tan fáciles de entender. Y todavía tiene que volver a casa con el vestido cubierto de barro…",
    },
    {
      nombreYautor: "El vestido más lindo del mundo - Monica dos Santos",
      categoria: "Infantil",
      codigo: "IVMLMMDS2016",
      portada: "IVMLMMDS2016.webp",
      prologo:
        "Una niña llamada Naiat recibe de su madre un vestido que no le gusta, por lo que recorre las casas de sus vecinas y sus amigas buscando ayuda. Las mujeres con las que se encuentra la van decorando con zapatos, un peinado, accesorios y detalles, hasta que, finalmente, siente que tiene «el vestido más lindo del mundo». La niña termina con un vestido que le gusta, repleto de valores y riquezas colectivas, porque encontró contención y apoyo en la gente que la rodea.",
    },
    {
      nombreYautor: "Entre razón y delirio - Camila Mariana Lopez",
      categoria: "Arte",
      codigo: "AERYDCML0",
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
      nombreYautor: "Fuego Queer - Ed Mead y Rita Brown",
      categoria: "Historia",
      codigo: "HFQEMRB2014",
      portada: "HFQEMRB2014.webp",
      prologo:
        "Historia de la Brigada George Jackson y del colectivo gay anticarcelario Hombres contra el sexismo (1975-1978). Brigada George Jackson aglutinó a anarquistas, comunistas, maricas, bolleras, heterosexuales, gente negra, blanca y de ascendencia nativa.",
    },
    {
      nombreYautor: "Futuro: Miradas Latinoamericanas - Marcela Schenck",
      categoria: "PolíticaPública",
      codigo: "PFMLMS2019",
      portada: nohay,
      prologo: "",
    },
    {
      nombreYautor: "Gays y derecha  - L. Gutierrez y D. Puntigliano ",
      categoria: "Periodístico",
      codigo: "PGYDLGDP2018",
      portada: "PGYDLGDP2018.webp",
      prologo: "",
    },
    {
      nombreYautor: "Global Gay - Frédéric Martel",
      categoria: "PolíticaPública",
      codigo: "PPGGFM2012",
      portada: "PPGGFM2012.webp",
      prologo:
        "Con el shock de la condena a muerte que significaba en los años noventa ser VIH positivo, tras el una infancia y una adolescencia difíciles, Cecilia con sus veinticuatro años decide vivir. Para esto deberá dejar las drogas y atravesar una montaña rusa emocional que la llevará a encontrarse a sí misma.",
    },
    {
      nombreYautor: "Incorrecta - Varies",
      categoria: "Periodístico",
      codigo: "PIV2016",
      portada: nohay,
      prologo: "",
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
      nombreYautor: "Intersecciones - Diego Sempol",
      categoria: "TeoríaQueer",
      codigo: "TIDS2019",
      portada: nohay,
      prologo: "",
    },
    {
      nombreYautor: "La mujer gorda - Jimena Márquez",
      categoria: "Biografía",
      codigo: "BLMGJM2022",
      portada: "BLMGJM2022.webp",
      prologo:
        "Después de pasajes exitosos por las tablas –desde dirigir a la Comedia Nacional hasta ser figura máxima del carnaval– y habiendo demostrado su habilidad con la pluma en esos menesteres, Jimena Márquez, que ya había publicado algunos de sus libretos teatrales, deja que sus textos (y sus trazos) se defiendan por sí solos. La mujer gorda es, antes que nada, la mujer desnuda. Llora, sabe, gira en la cama, abre las piernas. Autodestructiva y enamorada de sí misma. Está en acción aunque solamente mire hacia adentro, pero siempre con una honesta brutalidad. La misma que irradian las mujeres dibujadas, a veces insinuadas, nunca vestidas.",
    },
    {
      nombreYautor: "La niña que no veían - Gaston Rosa",
      categoria: "Infantil",
      codigo: "INNVGR2018",
      portada: "INNVGR2018.webp",
      prologo:
        "Algunas veces Martina siente que la tratan diferente y no entiende cuál es la razón. Conociendo otras realidades, como la de Martina, es que aprendemos a respetar y a valorar la diversidad. Celebrar las diferencias en los demás, es también aceptar las propias. ¡Lo mismo que te hace diferente, te hace insuperable!",
    },
    {
      nombreYautor: "La niña que tenía dos papás - Mel Elliott",
      categoria: "Infantil",
      codigo: "INTDPME2019",
      portada: "INTDPME2019.webp",
      prologo:
        "Berta está emocionada con Matilda, la niña nueva que ha llegado a su colegio; ¡es igualita a ella! Solo se diferencian en una cosa: Matilda tiene dos papás. Berta está deseando conocerlos, ¡seguro que en su casa todo es muy diferente!",
    },
    {
      nombreYautor: "LGBT Victorians - Simon Joyce",
      categoria: "Historia",
      codigo: "HLVSJ2022",
      portada: "HLVSJ2022.webp",
      prologo:
        "Lgbt Victorians: Sexualidad y género en los archivos del siglo XIX",
    },
    {
      nombreYautor: "Librillo SAT - III Edición  - Montevideo Igualitario",
      categoria: "Arte",
      codigo: "ALS3EMI2019",
      portada: nohay,
      prologo: "",
    },
    {
      nombreYautor: "Manifiesto contrasexual - Paul B. Preciado",
      categoria: "TeoríaQueer",
      codigo: "TMCPBP2011",
      portada: "TMCPBP2011.webp",
      prologo:
        "Provocativa relectura de la sexualidad a través de los trabajos de Deleuze y Foucault, también en la línea del feminismo materialista de Wittig y de las investigaciones sobre el género de Butler y Derrida.",
    },
    {
      nombreYautor: "Mounstro Rosa - Olga de Dios",
      categoria: "Infantil",
      codigo: "IMRODD2013",
      portada: "IMRODD2013.webp",
      prologo:
        "Monstruo Rosa es un cuento sobre el valor de la diferencia. Una historia para entender la diversidad como elemento enriquecedor de nuestra sociedad.",
    },
    {
      nombreYautor:
        "Orgullo: 50 héroes. 5 décadas de lucha LGTBI+ - Josema Busto",
      categoria: "Historia",
      codigo: "HOHDDLLJB2019",
      portada: "HOHDDLLJB2019.webp",
      prologo:
        "Orgullo, el libro ilustrado que rinde homenaje a los 50 años de lucha LGTBI+ Una mirada a través de 50 personajes que han contribuido a lograr la visibilidad y los derechos del colectivo.",
    },
    {
      nombreYautor:
        "Oscar Wilde y yo + De Profundis  - Alfred Douglas + Oscar Wild",
      categoria: "Historia",
      codigo: "HOWYYDPADOW2019",
      portada: "HOWYYDPADOW2019.webp",
      prologo:
        "Oscar Wilde y yo fue publicado en 1914, un año después del proceso. Se trata de un descargo contra la ola de demandas que los admiradores del escritor lanzaron contra Douglas y que no cesarían ni aun después de su muerte.",
    },
    {
      nombreYautor: "Policlinicas inclusivas - Marcela Schenck",
      categoria: "PolíticaPública",
      codigo: "PPIMS2019",
      portada: nohay,
      prologo: "",
    },
    {
      nombreYautor: "Pornotopía - Paul B. Preciado",
      categoria: "TeoríaQueer",
      codigo: "TPPBP2010",
      portada: "TPPBP2010.webp",
      prologo:
        "En plena guerra fría, Hugh Hefner crea la que pronto se convertiría en la revista para adultos más vendida del mundo: Playboy, que no era simplemente una revista de chicas con o sin bikini, sino un vasto proyecto arquitectónico-mediático que tenía como objetivo desplazar la casa heterosexual como núcleo de consumo y reproducción. De la misma manera que la sociedad ilustrada creyó que la celda individual podía ser un enclave de reconstrucción del alma criminal, Playboy confió a la mansión de soltero la fabricación del nuevo hombre moderno.",
    },
    {
      nombreYautor: "Queer Zones - Sam Bourcier",
      categoria: "Historia",
      codigo: "HQZSB2020",
      portada: "HQZSB2020.webp",
      prologo:
        "Queer Zones reúne los tres volúmenes del mismo nombre publicados entre 2000 y 2011, incluido el ya clásico «Queer Zones. Politique des identités et des savoirs», que impulsó la teoría y la política queer en Francia. A medida que pasan las páginas, la pospornografía emerge junto a exploraciones políticas, teóricas y personales que están renovando el feminismo, los estudios de género y la teoría de género.",
    },
    {
      nombreYautor: "Recopilado - Pedro Lemebel",
      categoria: "Arte",
      codigo: "ARPL0",
      portada: nohay,
      prologo:
        "En Beyond Queer Words publican una antología de poemas y cuentos queer una vez al año. Las piezas literarias van de la mano con bellas artes visuales.",
    },
    {
      nombreYautor:
        "Señoras ilustres que se empotraron hace mucho - Cristina Domenech",
      categoria: "Historia",
      codigo: "HSIQSEHMCD2020",
      portada: "HSIQSEHMCD2020.webp",
      prologo:
        "oetas como Safo o Emily Dickinson, las artistas Frida Kahlo y Tamara de Lempicka, las literatas sor Juan Inés de la Cruz y Virginia Woolf, una gran diva de Hollywood y hasta una reina de Inglaterra son algunas de las genias que protagonizan el nuevo libro de la académica Cristina Domenech, que cuentaademás con las maravillosas ilustraciones de Medusa Dollmaker. Señoras ilustres es un recorrido fascinante por la vida intelectual y amorosa de estas señoras con un talento desmesurado y una vida con facetas a menudo silenciadas o tergiversadas por la historia.",
    },
    {
      nombreYautor: "Susy Shock para chixs - Nadia Fink y Pitu Saá",
      categoria: "Infantil",
      codigo: "ISSPCNFPS2018",
      portada: "ISSPCNFPS2018.webp",
      prologo:
        "Esta es una historia llena de abrazos porque a Susy Shock, la protagonista, la abrazaron desde pequeña en sus múltiples formas de sentir y de pensar. Ella se define como travesti o, mejor dicho, como “trava”. ¿Y qué significa eso? Que eligió ser como siente. Susy nos cuenta su vida y verás qué feliz se siente y qué segura de sí misma. Nuestra Antiprincesa Colibrí nos habla de todas las posibilidades de ser y de soñar.",
    },
    {
      nombreYautor: "Testo yonqui - Paul B. Preciado",
      categoria: "TeoríaQueer",
      codigo: "TTYPBP2008",
      portada: "TTYPBP2008.webp",
      prologo:
        "El modelo capitalista actual se asienta en dos pilares fundamentales: la industria farmacéutica y la pornografía. En paralelo al discurso filosófico que analiza esta realidad farmacopornográfica, relata un autoexperimento que le lleva a aplicarse testosterona, para desmentir con él la determinación biólógica del género y la sexualidad.",
    },
    {
      nombreYautor: "Un apartamento en Urano - Paul B. Preciado",
      categoria: "TeoríaQueer",
      codigo: "TUAEUPBP2019",
      portada: "TUAEUPBP2019.webp",
      prologo:
        "Urano, el gigante helado, es el planeta más frío del sistema solar, y también un dios de la mitología griega. Urano da además nombre al uranismo, concepto forjado por el primer activista sexual europeo, Karl-Heinrich Ulrichs, en 1864 para definir el «tercer sexo».",
    },
    {
      nombreYautor:
        "Un virus de amor - Cecilia Abadie & Margarita García Telesca",
      categoria: "Biografía",
      codigo: "BUVDAAMGT2023",
      portada: nohay,
      prologo:
        "Con el shock de la condena a muerte que significaba en los años noventa ser VIH positivo, tras el una infancia y una adolescencia difíciles, Cecilia con sus veinticuatro años decide vivir. Para esto deberá dejar las drogas y atravesar una montaña rusa emocional que la llevará a encontrarse a sí misma.",
    },
    {
      nombreYautor: "Utopía Queer - José E. Muñoz",
      categoria: "TeoríaQueer",
      codigo: "TUQJEM2009",
      portada: "TUQJEM2009.webp",
      prologo:
        "Cuando el cubano José Esteban Muñoz publicó por primera vez este libro en el año 2009, la imaginación política LGTBIQ se encontraba erosionada por un pragmatismo asfixiante.",
    },
    {
      nombreYautor: "Zapatos cambiados  - Gaston Rosa",
      categoria: "Infantil",
      codigo: "IZCGR2018",
      portada: "IZCGR2018.webp",
      prologo:
        "Este es el cuento sobre como dos hermanitos cambian la historia de un pueblo. Se les ocurre una idea que se vuelve la nueva tradicción del lugar. Ponerse en los zapatos del otro es comprender, respetar y valorar la diversidad. Y eso también sirve para que puedas aceptarte a ti mismo. ¡Lo mismo que te hace diferente, te hace insuperable!",
    },
  ],
};

//Funcionamiento
document.getElementById("search-input").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    document.getElementById("search").click();
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
  name.innerText = i.nombreYautor; //.toUpperCase();
  container.appendChild(name);
  //codigo
  let codigo = document.createElement("h4");
  codigo.innerText = "#" + i.codigo;
  container.appendChild(codigo);
  card.appendChild(container);
  codigo.addEventListener("click", function () {
    const el = document.createElement("textarea");
    el.value = i.codigo;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Código copiado 📋");
  });
  codigo.addEventListener("mouseover", () => {
    codigo.style.cursor = "pointer";
  });
  //prologo
  let prologoClicked = false;
  let prologo = document.createElement("h7");
  name.classList.add("product-description");
  prologo.innerText = "Leer prólogo +";
  prologo.addEventListener("click", () => {
    if (!prologoClicked) {
      let prologo = document.createElement("h6");
      if (i.prologo === "") {
        prologo.innerText = "Prólogo no disponible ☹️";
      } else {
        prologo.innerText = i.prologo;
      }
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
