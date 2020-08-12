const message = document.querySelector('#message');
const language = document.querySelector('#language');
const btn = document.querySelector('.btn');
const form = document.querySelector('form');

message.value = 'The quick brown fox jumps over the lazy dog';

console.log('loaded...');

function doPromise(){
  return new Promise((resolve, reject) => {
    const vrss = VoiceRSS.speech({
      key: apiKey,
      src: message.value,
      hl: language.value,
      v: 'Amy',
      r: 0, 
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false
    });
    if (vrss) {
      resolve(vrss);
    } else {
      reject('no VoiceRSS found');
    }
  });
}

function speak() {
  return doPromise()
    .then(result => {
      console.log(result);
      return result;
    })
    .catch(error => {
      console.error(error);
  });
}

(async () => {
  let url = emojiFlagUrl;
  const response = await fetch(emojiFlagUrl);
  const emojiFlags = await response.json();
  const menu = new Menu(emojiFlags);
  menu.createOptions(language);
})();

// (() => {
  // setTimeout(() => {
    // speak();
    // return false;
  // }, 3000);
// })();

