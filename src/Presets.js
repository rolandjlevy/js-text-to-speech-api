class Presets {
  constructor(menuOptions, language, message) {
    this.menuOptions = menuOptions;
    this.language = language;
    this.message = message;
    this.presetSelectors = document.querySelectorAll('.preset');
    this.init();
    this.initLanguageChange();
  }
  init() {
    this.presetSelectors.forEach(item => {
      item.addEventListener('click', (e) => {
        this.selectPreset({ code: e.target.value, selected:e.target });
      });
    });
  }
  selectPreset({ code, selected }) {
    const languageIndex = this.menuOptions.findIndex(item => item.code == code);
    const phrase = this.getPhrases().find(item => item.code == code);
    this.language.selectedIndex = languageIndex + 1;
    this.message.value = phrase.text;
    this.selected = selected;
  }
  initLanguageChange() {
    const preset = document.querySelector('.preset');
    this.language.addEventListener('change', (e) => {
      if (this.selected) this.selected.checked = false;
      this.message.value = '';
    });
  }
  getPhrases() {
    return [
      { code:'FR', text: 'C’est simple comme bonjour!' },
      { code:'RU', text: 'Ruki ne dokhodyat!' },
      { code:'JP', text: 'Keizoku wa chikara nari' },
      { code:'SE', text: 'Du har satt din sista potatis'},
      { code:'TR', text: 'Sıhhatler olsun' }
    ]
  }
}