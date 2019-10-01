import axios from "axios";

const deleteOneCharactere = async (id: string) => {
  try {
    const res = await axios.delete(
      `https://character-database.becode.xyz/characters/${id}`
    );

    return res.data;
  } catch (e) {
    return null;
  }
};

export default deleteOneCharactere;
