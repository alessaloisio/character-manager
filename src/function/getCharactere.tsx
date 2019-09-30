import axios from "axios";

const getCharactere = async () => {
  try {
    const res = await axios.get(
      `https://character-database.becode.xyz/characters`
    );

    return res.data;
  } catch (e) {
    return null;
  }
};
export default getCharactere;
