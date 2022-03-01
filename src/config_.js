const layersOrder = [
  { name: "background", number: 16 },
  { name: "skin", number: 3 },
  // { name: "cloth", number: 22 },
  { name: "necklace", number: 5 },
  // { name: "jacket", number: 24 },
  { name: "eye", number: 9 },
  { name: "nose", number: 1 },
  { name: "mouth", number: 15 },
  { name: "hair", number: 45 },
  // { name: "glasses", number: 6 },
  // { name: "hat", number: 6 },
  { name: "earrings", number: 3 },
  { name: "hand", number: 3 },
  { name: "watch", number: 24 },
];

const format = {
  width: 2048,
  height: 2048,
};

const rarities = [
  { key: "", val: "normal", possibility: 42 },
  { key: "_big", val: "big", possibility: 300 },
  { key: "_xb", val: "bb", possibility: 900 },
  { key: "_xxb", val: "xxb", possibility: 2500 },
  { key: "_r", val: "rare", possibility: 33 },
  { key: "_sr", val: "epic", possibility: 19 },
  { key: "_ssr", val: "legendary", possibility: 5 },
  { key: "_sss", val: "mythic", possibility: 1 },
];

const defaultEdition = 5;

module.exports = { layersOrder, format, rarities, defaultEdition };
