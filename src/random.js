// For Shuffle and Random
function shuffle(array) {
  // refference: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

let skinChoseId;
const Randomize = (layer) => {
  let total = layer.number;
  let considerList = [];

  // console.log(layer);
  // body layer.id = 1 layer.element[0] black
  // layer.id === 8 hand

  if (layer.name === "hand") {
    return layer.elements[skinChoseId - 1];
  }

  if (layer.name === "background") {
    return layer.elements[5];
  }
  if (layer.name === "cloth") {
    return layer.elements[1];
  }
  if (layer.name === "earrings") {
    return layer.elements[0];
  }
  if (layer.name === "eye") {
    return layer.elements[4];
  }
  // if (layer.name === "glasses") {
  //   return layer.elements[0];
  // }
  if (layer.name === "hair") {
    return layer.elements[10];
  }
  // if (layer.name === "hat") {
  //   return layer.elements[2];
  // }
  if (layer.name === "jacket") {
    return layer.elements[10];
  }
  if (layer.name === "mouth") {
    // return layer.elements[3];
    return layer.elements[12];
  }
  if (layer.name === "necklace") {
    return layer.elements[6];
  }
  if (layer.name === "skin") {
    const chose = layer.elements[3];
    skinChoseId = chose.id;
    return chose;
  }
  // if (layer.name === "tie") {
  //   return layer.elements[2];
  // }
  if (layer.name === "watch") {
    // console.log(layer);
    return layer.elements[12];
  }

  for (let i = 0; i < total; i++) {
    const possibility = layer.elements[i].possibility;

    Math.floor(Math.random() * (possibility[1] - possibility[0] + 1)) +
      possibility[1];
    for (let j = 0; j < possibility; j++) {
      considerList.push(layer.elements[i].id);
    }
  }
  shuffle(considerList);

  let index = Math.floor(Math.random() * parseInt(considerList.length));

  let randElementNum = considerList[index];

  const result = layer.elements[randElementNum - 1];

  if (layer.name === "skin") {
    skinChoseId = result.id;
  }

  return result;
};

module.exports = { Randomize };

// {
//   id: 1,
//   name: 'skin',
//   location: '/Users/zeddpai/Documents/workspace/generative-art-node/layers/skin/',
//   elements: [
//     {
//       id: 1,
//       name: 'black',
//       fileName: 'black.PNG',
//       rarity: 'normal',
//       possibility: 42
//     },
//     {
//       id: 2,
//       name: 'white',
//       fileName: 'white.PNG',
//       rarity: 'normal',
//       possibility: 42
//     },
//     {
//       id: 3,
//       name: 'yellow',
//       fileName: 'yellow.PNG',
//       rarity: 'normal',
//       possibility: 42
//     }
//   ],
//   position: { x: 0, y: 0 },
//   size: { width: 2048, height: 2048 },
//   number: 3
// }
