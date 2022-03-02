const layersOrder = [
  { name: "background", number: 10 },
  { name: "skin", number: 5 },
  { name: "cloth", number: 10 },
  // { name: "necklace", number: 8 },
  { name: "jacket", number: 1 },
  { name: "eye", number: 33 },
  { name: "nose", number: 1 },
  { name: "tie", number: 1 },
  { name: "mouth", number: 17 },
  { name: "glasses", number: 2 },
  { name: "hair", number: 3 },
  // { name: "hat", number: 6 },
  // { name: "earrings", number: 2 },
  { name: "hand", number: 5 },
  { name: "watch", number: 26 },
  // { name: "bracelet", number: 9 },
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
