// Manage balise img concernant une carte
const cardImage = (image: string) => {
  if (typeof image !== "undefined") return `data:image/png;base64,${image}`;
  return "https://source.unsplash.com/random";
};

export default cardImage;
