import axios from "axios";

import ICharactere from "../interfaces/ICharactere";

const putCharactere = async (id: string, data: ICharactere) => {
  try {
    const res = await axios.put(
      `https://character-database.becode.xyz/characters/${id}`,
      data
    );
    return res.data;
  } catch (e) {
    return null;
  }
};

export default putCharactere;
