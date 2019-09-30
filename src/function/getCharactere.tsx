import axios, { AxiosResponse } from "axios";

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
  await axios
    .get("https://character-database.becode.xyz/characters/characters")
    .then((response: AxiosResponse) => {
      console.log(response);
      return response;
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      console.log("WOOO");
    });
};
export default getCharactere;
