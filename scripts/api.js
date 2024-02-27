//*api isteği atan fonksiyonlar


const options = {
  headers: {
    'X-RapidAPI-Key': 'f08c1e0947msh551b1fd749b0da1p18310ejsnbe44bc6d6c6b',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
}
//api işlemlerini yönetecgmz clas

export default class API {
  constructor() {
    this.songs = [];
  }
  async getPopular() {

    const res = await fetch('https://shazam.p.rapidapi.com/charts/track?listId=ip-country-chart-TR&locale=tr', options);

    const data = await res.json();
    
  //clasda tanımlananı song a at

  this.songs = data.tracks;

  }



  //aratılan kelimeye göre bul

  async searchMusic(query) {
    const res= await fetch(`https://shazam.p.rapidapi.com/search?term=${query}&locale=tr`, options);

    const data = await res.json();

    //gelen cevabın formatını değiştri

    const formatted = data.tracks.hits.map((song) => {
      return song.track;

    });

   this.songs = formatted;
  }
}