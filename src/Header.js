export default function Header ({ $target }) {
    const $header = document.createElement('div')
    $header.className = 'header'
    this.render = () => {
        $header.innerHTML = `
            <a id="headerTitle" href="/songsong-notion/">SongSong Notion <a href="https://github.com/thddlmy" target="_blank"><img id="headerImage" src="/songsong-notion/assets/pngegg.png"></a></a>
        `
        $target.appendChild($header)
    }

    this.render()
}