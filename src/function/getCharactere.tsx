import axios from "axios";
const getCharactere = async () => {


    await axios.get('https://character-database.becode.xyz/characters')

  try {
    const res = await axios.get(
      `https://character-database.becode.xyz/characters`
    );
    const array = res.data;

      array.forEach(function(element) {
          let newarray = {};
          newarray.push(element);
          console.log(element);
          console.log(newarray);
      });
      return res.data;

  } catch (e) {
    return null;
  }

};


export default getCharactere;
