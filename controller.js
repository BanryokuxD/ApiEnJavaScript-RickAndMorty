// Controlador (Controller)
const CharacterController = {
  init: function () {
    const getCharactersBtn = document.getElementById('get-characters-btn');
    getCharactersBtn.addEventListener('click', this.getCharacters);
  },

  getCharacters: async function () {
    const characters = await CharacterModel.getCharacters();
    CharacterView.displayCharacters(characters);
  }
};

// Inicialización del controlador
CharacterController.init();
