class Menu {
  constructor() {
    this.options = {
      'ar-eg': 'Arabic (Egypt)',
      'ar-sa': 'Arabic (Saudi Arabia)',
      'bg-bg': 'Bulgarian',
      'ca-es': 'Catalan',
      'zh-cn': 'Chinese (China)',
      'zh-hk': 'Chinese (Hong Kong)',
      'zh-tw': 'Chinese (Taiwan)',
      'hr-hr': 'Croatian',
      'cs-cz': 'Czech',
      'da-dk': 'Danish',
      'nl-be': 'Dutch (Belgium)',
      'nl-nl': 'Dutch (Netherlands)',
      'en-au': 'English (Australia)',
      'en-ca': 'English (Canada)',
      'en-gb': 'English (Great Britain)',
      'en-in': 'English (India)',
      'en-ie': 'English (Ireland)',
      'en-us': 'English (United States)',
      'fi-fi': 'Finnish',
      'fr-ca': 'French (Canada)',
      'fr-fr': 'French (France)',
      'fr-ch': 'French (Switzerland)',
      'de-at': 'German (Austria)',
      'de-de': 'German (Germany)',
      'de-ch': 'German (Switzerland)',
      'el-gr': 'Greek',
      'he-il': 'Hebrew',
      'hi-in': 'Hindi',
      'hu-hu': 'Hungarian',
      'id-id': 'Indonesian',
      'it-it': 'Italian',
      'ja-jp': 'Japanese',
      'ko-kr': 'Korean',
      'ms-my': 'Malay',
      'nb-no': 'Norwegian',
      'pl-pl': 'Polish',
      'pt-br': 'Portuguese (Brazil)',
      'pt-pt': 'Portuguese (Portugal)',
      'ro-ro': 'Romanian',
      'ru-ru': 'Russian',
      'sk-sk': 'Slovak',
      'sl-si': 'Slovenian',
      'es-mx': 'Spanish (Mexico)',
      'es-es': 'Spanish (Spain)',
      'sv-se': 'Swedish',
      'ta-in': 'Tamil',
      'th-th': 'Thai',
      'tr-tr': 'Turkish',
      'vi-vn': 'Vietnamese'
    }
    this.selected = 'en-gb';
  }
  createOptions(language, emojiFlags) {
    // console.log(emojiFlags);
    Object.entries(this.options).forEach(([key, value]) => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = value;
      if (key === this.selected) option.selected = true;
      language.appendChild(option);
    });
  }
}