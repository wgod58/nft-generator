const layersOrder = [
  { name: "background", number: 13 },
  { name: "skin", number: 3 },
  { name: "cloth", number: 32 },
  { name: "mouth", number: 14 },
  { name: "eye", number: 6 },
  { name: "hair", number: 6 },
];

const format = {
  width: 2048,
  height: 2048,
};

const rarities = [
  { key: "", val: "normal", possibility: 42 },
  { key: "_r", val: "rare", possibility: 33 },
  { key: "_sr", val: "epic", possibility: 19 },
  { key: "_ssr", val: "legendary", possibility: 5 },
  { key: "_sss", val: "mythic", possibility: 1 },
];

const defaultEdition = 5;

module.exports = { layersOrder, format, rarities, defaultEdition };
