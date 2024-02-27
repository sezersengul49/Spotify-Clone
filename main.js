//*API: https://rapidapi.com/apidojo/api/shazam/

import API from "./scripts/api.js";
import UI from "./scripts/ui.js";

const api = new API();
const ui = new  UI();

//*sayfanın yüklenme olayı

document.addEventListener("DOMContentLoaded" ,async ()=> {
    //ekrana yüklenme gifi bas
  ui.renderLoader()


    //api istek
 await api.getPopular();

 //gelen verileri ekrana bas
 ui.renderCards(api.songs)

});

//formun gönderilme olayını izle

ui.form.addEventListener('submit', async(event)=> {
  //sayfa yenilemeyi engelle

  event.preventDefault();

  //aratılan kelimeye eriş 
 const query = event.target[0].value;
 console.log(query)

  //boşsa uyarı gönder
  if(!query.trim()) return alert("lütfen kelime giriniz..")

  console.log("calıstı")

  //ekrana yükleniyor bas

  ui.renderLoader();
  //başlıgı güncelle

  ui.changeTitle(query + ' İçin Sonuçlar');

  //api den sarkıları al
  await api.searchMusic(query);

  //şarkıları ekrana bas
ui.renderCards(api.songs);
  
})

//cardlarım play butonuna tıklanma olayını izle

ui.list.addEventListener('click' , (e) =>{

  if(e.target.id ==='play-btn') {

    //tıklanılan karttaki sarkınıın bilgilerini al


    const song= e.target.closest('.card').dataset;
  
    //şarkıyı oynatma kısmını ekrana bas 
    ui.renderPlayingInfo(song)
  }
})
