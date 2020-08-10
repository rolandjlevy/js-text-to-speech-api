
  const message = document.querySelector('#message');
  const language = document.querySelector('#language');

  // message.value = 'The quick brown fox jumps over the lazy dog';

  (async () => {
    let url = emojiFlagUrl;
    const response = await fetch(emojiFlagUrl);
    const emojiFlags = await response.json();
    const menu = new Menu(emojiFlags);
    menu.createOptions(language);
  })();

  function speak() {
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
