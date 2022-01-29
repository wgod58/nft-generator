const layersOrder = [
  { name: "background", number: 1 },
  { name: "ball", number: 2 },
  { name: "eye color", number: 12 },
  { name: "iris", number: 3 },
  { name: "shine", number: 1 },
  { name: "bottom lid", number: 3 },
  { name: "top lid", number: 3 },
];

const format = {
  width: 230,
  height: 230,
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
