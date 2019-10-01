import axios from "axios";

import ICharactere from "../interfaces/ICharactere";

const postCharactere = async (data: ICharactere) => {
  try {
    const res = await axios.post(
      `https://character-database.becode.xyz/characters/`,
      data
    );

    return res.data;
  } catch (e) {
    return null;
  }
};

export default postCharactere;
