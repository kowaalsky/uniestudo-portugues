const menu = document.querySelector("#mainMenu");

menu.innerHTML = `
        <a href="../index.html">Home</a>
        <a href="../tudo">Todas as páginas</a>
        <a href="../videoaulas">Videoaulas</a>
        <a href="../questoes">Questões</a>
        <div class="arrow-div" onclick="closingMenu()"><p class="arrow">&#9660;</p></div>
`

function openingMenu(){
  document.body.classList.replace('close-menu', 'open-menu');
  menu.style.top = '0';
};

function closingMenu(){
  document.body.classList.replace('open-menu', 'close-menu');
  menu.style.top = '';
};

document.querySelector("#burger").addEventListener('click', () => {
    openingMenu();
});

const navegator = document.querySelector("#navegatorPages");

const links = ["artigos", "crase", "alfabeto", "acentuação gráfica", "numerais", "hífen", "pronúncia", "separação silábica", "tonicidade", "verbos", "concordância verbal", "justaposição", "sinônimos", "antônimos", "sujeito e predicado", "orações", "adjetivos", "advérbios", "pluralidade", "concordância nominal", "dupla grafia"];

let itens = []; // armazenar

links.forEach(link => {
    let linkCorrigido = link
        .replace(/ç/g, 'c')
        .replace(/[ãáà]/g, 'a')
        .replace(/[éê]/g, 'e')
        .replace(/[óôõ]/g, 'o')
        .replace(/í/g, 'i')
        .replace(/ú/g, 'u')
        .replace(/ /g, '-');

    let item;

    if (link === pag_title) {
        item = `<a href="#" class="a-cpage"><li data-title="${pag_title.charAt(0).toUpperCase() + pag_title.slice(1)}" class="current-page"><span>${link.charAt(0).toUpperCase() + link.slice(1)}</span></li></a>`;
    } else {
        item = `<a href="${linkCorrigido}.html"><li data-title="${link.charAt(0).toUpperCase() + link.slice(1)}">${link.charAt(0).toUpperCase() + link.slice(1)}</li></a>`;
    };

    itens.push({ original: link, html: item });
});

itens.sort((a, b) => a.original.localeCompare(b.original, 'pt', { sensitivity: 'base' }));

navegator.innerHTML = itens.map(item => item.html).join('');
;

//details

document.querySelectorAll("details").forEach((detail) => {
    let content = detail.querySelector(".dets-content");

    detail.addEventListener("toggle", function () {
      if (detail.open) {
        content.style.height = content.scrollHeight + "px";
        content.style.opacity = "1";

        content.addEventListener(
          "transitionend",
          () => {
            content.style.height = "auto";
          },
          { once: true }
        );
      } else {
        content.style.height = content.scrollHeight + "px";
        content.offsetHeight;
        content.style.height = "0";
        content.style.opacity = "0";
      }
    });
});

document.addEventListener("click", (event) => {
  const button = event.target;

  if (button.classList.contains("see-plural")) {
    const table = button.previousElementSibling; // Seleciona a tabela anterior ao botão
    const pluralElements = table.querySelectorAll(".plural");

    pluralElements.forEach((plEl) => {
      const text = plEl.innerHTML.trim();

      if (text.includes(" + o")) {
        plEl.innerHTML = text.replace(" + o", " + os");
      } else if (text.includes(" + a")) {
        plEl.innerHTML = text.replace(" + a", " + as");
      } else if (text.endsWith("o")) {
        plEl.innerHTML = text.slice(0, -1) + "os";
      } else if (text.endsWith("a")) {
        plEl.innerHTML = text + "s";
      } else if (text.endsWith("um")) {
        plEl.innerHTML = text.slice(0, -2) + "uns";
      } else if (text.endsWith("uma")) {
        plEl.innerHTML = text + "s";
      }
    });

    button.classList.replace("see-plural", "see-singular");
    button.innerText = "Ver no singular";
  } else if (button.classList.contains("see-singular")) {
    const table = button.previousElementSibling;
    const pluralElements = table.querySelectorAll(".plural");

    pluralElements.forEach((plEl) => {
      const text = plEl.innerHTML.trim();

      if (text.includes(" + os")) {
        plEl.innerHTML = text.replace(" + os", " + o");
      } else if (text.includes(" + as")) {
        plEl.innerHTML = text.replace(" + as", " + a");
      } else if (text.endsWith("os")) {
        plEl.innerHTML = text.slice(0, -2) + "o";
      } else if (text.endsWith("as")) {
        plEl.innerHTML = text.slice(0, -1);
      } else if (text.endsWith("uns")) {
        plEl.innerHTML = text.slice(0, -3) + "um";
      } else if (text.endsWith("umas")) {
        plEl.innerHTML = text.slice(0, -1);
      }
    });

    button.classList.replace("see-singular", "see-plural");
    button.innerText = "Ver no plural";
  }
});

let companyName = 'Uniestudo'

document.querySelector("#socialMedias").innerHTML = `
  <a href="https://www.instagram.com/${companyName.charAt(0).toLocaleLowerCase() + companyName.slice(1)}/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
  <a href="https://wa.me/5582981550223" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
  <a href="https://www.youtube.com/@${companyName.charAt(0).toLocaleLowerCase() + companyName.slice(1)}" target="_blank"><i class="fa-brands fa-youtube"></i></a>
`

const logo = document.querySelectorAll(".logo");

logo.forEach((logo) => {
  logo.innerHTML = `
    <img src="../files/logo.webp" alt="Logotipo da ${companyName}">
  `
})

logo[1].innerHTML += `<p>${companyName}</p>`

// ano p/ os créditos

let year = new Date().getFullYear()

document.querySelector("#credits").innerHTML = `&copy; ${companyName} - Todos os direitos reservados - ${year}`;