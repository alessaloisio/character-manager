import axios from "axios";

const getOneCharactere = async (id: string) => {
  try {
    const res = await axios.get(
      `https://character-database.becode.xyz/characters/${id}`
    );

    return res.data;
  } catch (e) {
    return null;
  }
};

export default getOneCharactere;
