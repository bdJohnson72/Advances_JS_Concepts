const character = {
    name: 'Simon',
    getCharacter() {
        return this.name;
    }
};
const getMeTheCharacter = character.getCharacter.bind(character);

console.log(getMeTheCharacter())