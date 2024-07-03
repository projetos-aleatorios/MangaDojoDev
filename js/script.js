const mainArea = document.querySelector("main")

const mangaTemplate = 
`
  <img src="\${img}" alt="\${name}" class="manga-img">
  <div class="manga-aside">
    <div>
      <h1 class="manga-title">\${name}</h1>
      <p class="author-name">\${author}</p>
      <a href="\${manga-link}" target="_blank">
        <button class="last-chapter">#\${last-content}</button>
      </a>
      <div class="manga-description">
        <b>Capítulo:</b> <p class="last-title"> <br>\${last-title}</p>
      </div>
    </div>
    <div>
      <p class="manga-footer">\${note}</p>
      <a href="\${all-links}" target="_blank">
        <button class="link-button">Todos os Capítulos</button>
      </a>
    </div>
  </div>
`

// Constrói a página com base nos dados obtidos em dados.js

function mangaBoxs() {

  MANGAS.forEach(manga => {

    // Altera os valores do template para os dados corretos

    let mangaBox = mangaTemplate
    .replace(/\${img}/g, manga.img)
    .replace(/\${name}/g, manga.name)
    .replace(/\${author}/g, manga.author)
    .replace(/\${manga-link}/g, manga.mangaLink)
    .replace(/\${last-content}/g, manga.lastContent)
    .replace(/\${last-title}/g, manga.lastTitle)
    .replace(/\${all-links}/g, manga.allLinks)
    .replace(/\${note}/g, manga.note)

    // Verifica se o MangaBox possui algum conteúdo com a palavra Cubari ou MangaDex
    // caso não tenha, não aparecerá no site

    if (mangaBox.includes('cubari') || mangaBox.includes('mangadex')) {

      // verifica se o mangá possui alguma nota, caso não tenha, a nota não aparecerá

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