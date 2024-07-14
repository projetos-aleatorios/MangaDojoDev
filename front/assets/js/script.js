const mainArea = document.querySelector("main")
const TWITTER = 'https://x.com/mangadojoofc';
const DISCORD = 'https://discord.com/invite/q7NsCamgQQ';
const DOMAIN = 'http://localhost';

async function mangas() {
  const response = await fetch(DOMAIN);

  if (response.status != 200) return [];

  const { data } = await response.json();
  return data;
}

function template(...data) {
  const { img, name, author, allLinks, lastContent, mangaLink, note, lastTitle } = data[0];
  return ` <img src="${img}" alt="${name}" class="manga-img">
  <div class="manga-aside">
    <div>
      <h1 class="manga-title">${name}</h1>
      <p class="author-name">${author}</p>
      <a href="${mangaLink}" target="_blank">
        <button class="last-chapter">#${lastContent}</button>
      </a>
      <div class="manga-description">
        <b>Capítulo:</b> <p class="last-title"> <br>${lastTitle}</p>
      </div>
    </div>
    <div>
      <p class="manga-footer">${note}</p>
      <a href="${allLinks}" target="_blank">
        <button class="link-button">Todos os Capítulos</button>
      </a>
    </div>
  </div>`
}

async function mangaBoxs() {

  const MANGAS = await mangas();

  MANGAS.forEach(manga => {
    let mangaBox = template(manga)
    if (mangaBox.includes('cubari') || mangaBox.includes('mangadex')) {

      if (manga.note.length == 0) {
        const div = document.createElement('div')
        div.setAttribute('class', 'manga-box')
        div.innerHTML = mangaBox.replace(`<p class="manga-footer"></p>`, "")

        mainArea.appendChild(div)

      } else {
        const div = document.createElement('div')
        div.setAttribute('class', 'manga-box')
        div.innerHTML = mangaBox

        mainArea.appendChild(div)
      }

    }
  });

}

function socialLinks() {
  var discordLink = document.querySelectorAll("#link-discord")
  var twitterLink = document.querySelectorAll("#link-twitter")

  twitterLink[0].href = TWITTER
  twitterLink[1].href = TWITTER

  discordLink[0].href = DISCORD
  discordLink[1].href = DISCORD
}

mangaBoxs()

socialLinks()