class Menu {
  constructor(emojiFlags) {
    this.emojiFlags = emojiFlags;
    this.selected = 'en-gb';
    this.optionsFlags = [
      { lang:'ar-eg', code:'EG', label:'Arabic (Egypt)' },
      { lang:'ar-sa', code:'SA', label:'Arabic (Saudi Arabia)' },
      { lang:'bg-bg', code:'BG', label:'Bulgarian' },
      { lang:'ca-es', code:'CT', label:'Catalan' },
      { lang:'zh-cn', code:'CN', label:'Chinese (China)' },
      { lang:'zh-hk', code:'HK', label:'Chinese (Hong Kong)' },
      { lang:'zh-tw', code:'TW', label:'Chinese (Taiwan)' },
      { lang:'hr-hr', code:'HR', label:'Croatian' },
      { lang:'cs-cz', code:'CZ', label:'Czech' },
      { lang:'da-dk', code:'DK', label:'Danish' },
      { lang:'nl-be', code:'BE', label:'Dutch (Belgium)' },
      { lang:'nl-nl', code:'NL', label:'Dutch (Netherlands)' },
      { lang:'en-au', code:'AU', label:'English (Australia)' },
      { lang:'en-ca', code:'CA', label:'English (Canada)' },
      { lang:'en-gb', code:'GB', label:'English (Great Britain)' },
      { lang:'en-in', code:'IN', label:'English (India)' },
      { lang:'en-ie', code:'IE', label:'English (Ireland)' },
      { lang:'en-us', code:'US', label:'English (United States)' },
      { lang:'fi-fi', code:'FI', label:'Finnish' },
      { lang:'fr-ca', code:'CA', label:'French (Canada)' },
      { lang:'fr-fr', code:'FR', label:'French (France)' },
      { lang:'fr-ch', code:'CH', label:'French (Switzerland)' },
      { lang:'de-at', code:'AT', label:'German (Austria)' },
      { lang:'de-de', code:'DE', label:'German (Germany)' },
      { lang:'de-ch', code:'CH', label:'German (Switzerland)' },
      { lang:'el-gr', code:'GR', label:'Greek' },
      { lang:'he-il', code:'IL', label:'Hebrew' },
      { lang:'hi-in', code:'IN', label:'Hindi' },
      { lang:'hu-hu', code:'HU', label:'Hungarian' },
      { lang:'id-id', code:'ID', label:'Indonesian' },
      { lang:'it-it', code:'IT', label:'Italian' },
      { lang:'ja-jp', code:'JP', label:'Japanese' },
      { lang:'ko-kr', code:'KR', label:'Korean' },
      { lang:'ms-my', code:'MW', label:'Malay' },
      { lang:'nb-no', code:'NO', label:'Norwegian' },
      { lang:'pl-pl', code:'PL', label:'Polish' },
      { lang:'pt-br', code:'BR', label:'Portuguese (Brazil)' },
      { lang:'pt-pt', code:'PT', label:'Portuguese (Portugal)' },
      { lang:'ro-ro', code:'RO', label:'Romanian' },
      { lang:'ru-ru', code:'RU', label:'Russian' },
      { lang:'sk-sk', code:'SK', label:'Slovak' },
      { lang:'sl-si', code:'SI', label:'Slovenian' },
      { lang:'es-mx', code:'MX', label:'Spanish (Mexico)' },
      { lang:'es-es', code:'ES', label:'Spanish (Spain)' },
      { lang:'sv-se', code:'SE', label:'Swedish' },
      { lang:'ta-in', code:'LK', label:'Tamil' },
      { lang:'th-th', code:'TH', label:'Thai' },
      { lang:'tr-tr', code:'TR', label:'Turkish' },
      { lang:'vi-vn', code:'EG', label:'Vietnamese' }
    ];
  }
  insertCatalan() {
    const catalan = {
      code: 'CT',
      emoji: '🇪🇸',
      // emoji: '🏴󠁥󠁳󠁣󠁴󠁿',
      unicode: 'U+1F3F4',
      name: 'Catalonia',
      title: 'flag for Catalonia',
      dialCode: '+34'
    }
    const spainIndex = this.emojiFlags.findIndex(item => item.code === 'ES');
    this.emojiFlags.splice(spainIndex, 0, catalan);
  }
  createOptions(language) {
    this.insertCatalan();
    this.optionsFlags.forEach(item => {
      const option = document.createElement('option');
      const flag = this.emojiFlags.find(em => em.code === item.code);
      option.value = item.lang;
      option.textContent = `${flag.emoji.trim()} ${item.label}`;
      if (item.lang === this.selected) option.selected = true;
      language.appendChild(option);
    });
  }
}