// Modelo (Model)
const CharacterModel = {
  getCharacters: async function () {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      if (!response.ok) {
        throw new Error('No se pudieron obtener los personajes');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
};
