
//Ara yüz dom işlemleri

export default class UI {
    constructor(){
        this.list =document.querySelector("#list")
        this.form = document.querySelector('#search-form');
        this.title = document.querySelector('#title');
        this.playArea = document.querySelector('.play-area')



    }
    // liste alanına yükleniyor basar
    renderLoader(){
        this.list.innerHTML = `<div class="loader">
        <span></span>
    </div>`;
    }

    //ekrana kartları bas
    renderCards(songs) {
        //gifi kaldır
        this.list.innerHTML=" ";

        songs.forEach((song) => {

       

            // elementi oluştur
         const div=   document.createElement("div");

         //2 clas ekleme
         div.className ='card'

         //inneerhtml belirle
         div.innerHTML = `
         <figure>
         <img  src="${song.images.coverarthq}">

         <div id="play">
             <i id="play-btn" class="bi bi-play-fill"></i>
         </div>
          </figure>

         <h4>${song.title}</h4>
          <p>${song.subtitle}</p>
        
         `;

         //dta verileri ekle

         div.dataset.title = song.title
         div.dataset.photo = song.images.coverarthq;
         div.dataset.url = song.hub.actions[1].uri;


         //kartı html e gönder
        this.list.appendChild(div);

        });
    }

    //baslıgı günceller

    changeTitle(text) {
        this.title.innerText =text;
    }

    //müzik oynatma ksımını ekrana bas
    renderPlayingInfo(song){
        this.playArea.innerHTML = `
        <div>
            <img class="animate" src="${song.photo}" alt="oynatma">
            <div>
                <p>Şuan Oynatılıyor...</p>
                <h3>
                ${song.title}
                </h3>
            </div>
        </div>
     <audio controls autoplay src="${song.url}"> </audio>
        `

    }
}


