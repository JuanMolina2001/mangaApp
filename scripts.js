const scripts = {
    getMangas: `const mangas = Array.from(document.querySelectorAll('.element')).map((manga) => {
        const id = manga.getAttribute('data-identifier')
        const url = manga.querySelector('a').href
         const elemento = manga.querySelector(".book-thumbnail-" + id)
        const image = window.getComputedStyle(elemento, '::before').backgroundImage.slice(4, -1)
        const info = {
            id: url.split('/').slice(5, 7).join().replace(',', '/'),
            title: manga.querySelector('h4').innerText,
            image: image.replaceAll('"',''),
        }
        return info
    })
window.ReactNativeWebView.postMessage(JSON.stringify(mangas))`,
    getChapters: `
    const list = document.querySelector('.list-group.list-group-flush') 
    const mangaData ={ 
     chapters : Array.from(list.querySelectorAll('.list-group-item.p-0.bg-light.upload-link')).flatMap((ch) => {
        const container = ch.querySelector('.list-group.list-group-flush.chapter-list')
        const rows = container.querySelectorAll('.row')
        return Array.from(rows).map((el) => {
                return {
                    name: ch.querySelector('a').innerText,
                    id: el.querySelector('.btn.btn-default.btn-sm').href.split('/').slice(4).join(),
                    url: el.querySelector('.btn.btn-default.btn-sm').href,
                    scan: el.querySelector('a').innerText,
                    date: el.querySelector('.badge.badge-primary.p-2').innerText
                
            }
        })
    })
    }
window.ReactNativeWebView.postMessage(JSON.stringify(mangaData))`
}
export default scripts