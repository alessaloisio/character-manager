
const axios = require('axios');

const getCharactere = async () => {

    await axios.get('https://character-database.becode.xyz/characters')
            .then(function (response) {
                console.log(response);
                return (response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            console.log("WOOO");
            });
};
export default getCharactere;