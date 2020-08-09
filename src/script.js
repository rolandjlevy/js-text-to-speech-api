
  const message = document.querySelector('#message');
  const language = document.querySelector('#language');

  message.value = 'The quick brown fox jumps over the lazy dog';

  function play() {
    return VoiceRSS.speech({
      key: apiKey,
      src: message.value,
      hl: language.value,
      v: 'Amy',
      r: 0, 
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false
    });
  }

  const menu = new Menu();
  menu.createOptions(language);


  // const url = `https://api.unsplash.com/photos/random?client_id=${key}&w=300`;

  // const img = document.querySelector('.random-img'); 
  // img.width = '300';

  // const btn = document.querySelector('.btn'); 

  // btn.addEventListener('click', (e) => {
  //   getImage(url).then(data => {
  //     const { width, height, description, urls, links } = data;
  //     img.src = urls.regular;
  //   }).catch(error => {
  //     console.log({error});
  //   });
  // });

  // btn.click();
  
  // function getImage(url) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url)
  //     .then(result => result.json())
  //     .then(data => {
  //       resolve(data);
  //     }).catch(error => {
  //       reject(error);
  //     });
  //   });
  // }
