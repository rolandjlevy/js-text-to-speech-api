const message = document.querySelector('#message');
const language = document.querySelector('#language');
const speachForm = document.querySelector('#speach-form');
const btn = document.querySelector('.btn');
const form = document.querySelector('form');
const baseUrl = 'https://api.voicerss.org';
const emojiFlagUrl = 'https://cdn.jsdelivr.net/npm/emoji-flags@1.3.0/data.json';

message.value = '';
message.focus();

console.log('loaded...');

function doPromise(){
  return new Promise((resolve, reject) => {
    const vrss = VoiceRSS.speech({
      key: str,
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
    .then(result => result)
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


