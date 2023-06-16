// Vista (View)
const CharacterView = {
    characterContainer: document.getElementById('character-container'),
  
    displayCharacters: function (characters) {
      this.characterContainer.innerHTML = '';
      characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.classList.add('card');
  
        const characterImage = document.createElement('img');
        characterImage.src = character.image;
        characterCard.appendChild(characterImage);
  
        const getInfoButton = document.createElement('button');
        getInfoButton.textContent = 'Obtener información';
        getInfoButton.addEventListener('click', () => {
          this.showCharacterInfo(character);
        });
        characterCard.appendChild(getInfoButton);
  
        this.characterContainer.appendChild(characterCard);
      });
    },
  
    showCharacterInfo: function (character) {
      alert(`Name: ${character.name}\nStatus: ${character.status}\nSpecies: ${character.species}\nLocation: ${character.location.name}`);
    }
  };
  