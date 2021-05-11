let main = document.getElementById('main')

$('#search-button').click(() => {
    getPhoto()
})
$('#search-text').change(() => {
    getPhoto()
})

function getPhoto() {
    fetch('https://api.unsplash.com/search/photos/?client_id=G0KC39JTsr8Kgb_7kGi7ebKJboIzdXHChS-eU0kXfVE&query=' + $('#search-text').val())
        .then(res => res.json())
        .then(photo => {
            
            while(main.firstChild){
                main.removeChild(main.firstChild)
            }
            for (let i = 0; i < photo.results.length; i++) {
                let image = document.createElement('img')
                let info = document.createElement('div')
                let download = document.createElement('button')
                let div = document.createElement('div')
                main.appendChild(div)
                info.innerHTML=`<p>${photo.results[i].alt_description}</p><br><br><p>Likes: ${photo.results[i].likes}</p>`
                info.appendChild(download)
                console.log(i)
                download.textContent = 'click'
                div.appendChild(info)
                div.appendChild(image)
                image.src = photo.results[i].urls.regular
                console.log(photo)
            }

        })
}