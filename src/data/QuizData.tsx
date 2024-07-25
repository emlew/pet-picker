const scoreMatrices = [
  {
    // age
    cat: [-1, 1, 1, 1, 1, 1, 1, 1, 1],
    dog: [-1, -1, -1, 1, 1, 1, 1, -1, -1],
    bird: [1, 1, 1, 1, 1, 1, 1, 1, 1],
    rabbit: [1, -1, -1, 1, 1, -1, -1, -1, -1],
    guinea: [1, -1, -1, -1, -1, -1, -1, -1, -1],
    fish: [1, 1, 1, 1, 1, 1, 1, 1, 1],
    reptile: [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ferret: [1, -1, -1, -1, -1, -1, -1, -1, -1],
  },
  {
    // location
    cat: [1, 1, 1],
    dog: [-1, 1, 1],
    bird: [1, 1, 1],
    rabbit: [1, 1, -1],
    guinea: [1, 1, -1],
    fish: [1, 1, 1],
    reptile: [1, 1, -1],
    ferret: [1, 1, -1],
  },
  {
    // travel
    cat: [-1, 1, 1, 1],
    dog: [-1, -1, 1, 1],
    bird: [1, 1, 1, 1],
    rabbit: [-1, -1, 1, 1],
    guinea: [-1, -1, 1, 1],
    fish: [1, 1, 1, 1],
    reptile: [1, 1, 1, 1],
    ferret: [-1, -1, 1, 1],
  },
  {
    // space
    cat: [-1, -1, 1, 1],
    dog: [-1, -1, -1, 1],
    bird: [-1, 1, 1, 1],
    rabbit: [-1, -1, 1, 1],
    guinea: [-1, -1, 1, 1],
    fish: [1, 1, 1, 1],
    reptile: [1, 1, 1, 1],
    ferret: [-1, -1, 1, 1],
  },
  {
    // time
    cat: [-1, 1, 1],
    dog: [-1, -1, 1],
    bird: [-1, 1, 1],
    rabbit: [-1, -1, 1],
    guinea: [-1, -1, 1],
    fish: [1, 1, 1],
    reptile: [1, 1, 1],
    ferret: [-1, -1, 1],
  },
];
