const products = [
  {
    id: "15215",
    name: "25' Garden Hose",
    price: 9.5,
    quantity: 1,
    image: 'https://live.staticflickr.com/8147/7182121404_2244eb30a9_b.jpg'
  },
  {
    id: "15123",
    name: "Bag of Garden Soil",
    price: 5.0,
    quantity: 1,
    image: 'https://live.staticflickr.com/5214/5440740222_5f4e655779_b.jpg'
  },
  {
    id: "15312",
    name: "Shovel",
    price: 12.0,
    quantity: 1,
    image: 'https://live.staticflickr.com/81/254679280_775a69d63a_b.jpg'
  },
  {
    id: "15216",
    name: "Screwdriver",
    price: 4.5,
    quantity: 0,
    image: 'https://live.staticflickr.com/2614/4131812672_c6bb4966f6_b.jpg'
  },
  {
    id: "15217",
    name: "Corded Drill",
    price: 124.5,
    quantity: 1,
    image: 'https://live.staticflickr.com/5289/5229733311_2d95b29252_b.jpg'
  },
  {
    id: "15218",
    name: "Pack of 50 Screws",
    price: 8.5,
    quantity: 2,
    image: 'https://api.creativecommons.engineering/v1/thumbs/a154abf5-5045-4932-9da6-4375d8090f7d'
  },
  {
    id: "15219",
    name: '1/8" washers',
    price: 4.5,
    quantity: 1,
    image: 'https://live.staticflickr.com/7061/6954966249_99085ee88a_b.jpg'
  },
  {
    id:"17234",
    name: "Sand",
    price: 1,
    quantity: "1oz",
    image: 'https://live.staticflickr.com/5214/5440740222_5f4e655779_b.jpg'
  },
  {
    id:"17236",
    name: "Clay",
    price: 1,
    quantity: "1oz",
    image: 'https://live.staticflickr.com/5214/5440740222_5f4e655779_b.jpg'

  },
  {
    id:"17237",
    name: "Gravel",
    price: 1.5,
    quantity: "1oz",
    image: 'https://live.staticflickr.com/5214/5440740222_5f4e655779_b.jpg'

  },
  {
    id:"17238",
    name: "Manure",
    price: 2,
    quantity: "1oz",
    image: 'https://live.staticflickr.com/5214/5440740222_5f4e655779_b.jpg'

  },
  {
    id:"17210",
    name: "Hammer",
    price: 25,
    quantity: "1",
    image: 'https://live.staticflickr.com/8228/8559722063_d78cba51bc_b.jpg'

  },
  {
    id:"17211",
    name: "4in Wood Nail",
    price: 0.75,
    quantity: "1",
    image: 'https://live.staticflickr.com/13/19243890_7a44792c3c_b.jpg'
  },
  {
    id:"17213",
    name: "3in Wood Screw",
    price: 0.80,
    quantity: "1",
    image: 'https://live.staticflickr.com/65535/49339983033_88cb8b1e0c_b.jpg'
  },
  {
    id:"17214",
    name: "Tape Measure",
    price: 15,
    quantity: "1",
    image: 'https://live.staticflickr.com/4055/4341539198_f3ac59ae77_b.jpg'
  },
  {
    id:"18210",
    name: "Chicken Wire",
    price: 3,
    quantity: "1ft",
    image: 'https://live.staticflickr.com/3292/3036745318_374e46d132_b.jpg'
  },
  {
    id:"19110",
    name: "Deer Corn",
    price: 10,
    quantity: "1lbs",
    image: 'https://live.staticflickr.com/2581/4129370221_69fa147130_b.jpg'
  },
  {
    id:"19111",
    name: "Hay Bushel",
    price: 5,
    quantity: "5lbs",
    image: 'https://live.staticflickr.com/2/1597251_41260e0b30_b.jpg'

  },
  {
    id:"19112",
    name: "Bird Seed",
    price: 7,
    quantity: "3lbs",
    image: 'https://live.staticflickr.com/3570/3365428646_f418a162dc_b.jpg'

  },
  {
    id:"19116",
    name: "Salt Lick",
    price: 20,
    quantity: "10lbs",
    image: 'https://live.staticflickr.com/3542/3830075093_c59ee08c30_b.jpg'
  },
  {
    id:"19119",
    name: "Tulips",
    price: 25,
    quantity: "1 Planter",
    image: 'https://live.staticflickr.com/7068/6942684023_769909703a_b.jpg'

  },
  {
    id:"19120",
    name: "Mint",
    price: 20,
    quantity: "1 Planter",
    image: 'https://live.staticflickr.com/7068/6942684023_769909703a_b.jpg'
  },
  {
    id:"19123",
    name: "Tomato Plant",
    price: 30,
    quantity: "1 Planter",
    image: 'https://live.staticflickr.com/7068/6942684023_769909703a_b.jpg'
  },
  {
    id:"19124",
    name: "Yellow Bulb",
    price: 10,
    quantity: "1 Planter",
    image: 'https://live.staticflickr.com/7068/6942684023_769909703a_b.jpg'
  },
  {
    id:"19125",
    name: "Yellow Duck",
    price: 10,
    quantity: "1 Duckling",
    image: 'https://live.staticflickr.com/65535/50025686191_003b7f8fa0_b.jpg'
  },
  {
    id:"19126",
    name: "Strawberry",
    price: 1,
    quantity: "1 Packet",
    image: 'https://live.staticflickr.com/7068/6942684023_769909703a_b.jpg'
  },
  {
    id:"19127",
    name: "Carrot",
    price: 1,
    quantity: "1 Packet",
    image: 'https://live.staticflickr.com/7068/6942684023_769909703a_b.jpg'
  },
  {
    id:"19128",
    name: "Watermelon",
    price: 1,
    quantity: "1 Packet",
    image: 'https://live.staticflickr.com/7068/6942684023_769909703a_b.jpg'
  },
  {
    id:"19135",
    name: "Pumpkin",
    price: 1,
    quantity: "1 Packet",
    image: 'https://live.staticflickr.com/7068/6942684023_769909703a_b.jpg'
  },
  {
    id:"19150",
    name: "Squash",
    price: 1,
    quantity: "1 Packet",
    image: 'https://live.staticflickr.com/7068/6942684023_769909703a_b.jpg'
  },
  {
    id:"19140",
    name: "Cucumber",
    price: 1,
    quantity: "1 Packet",
    image: 'https://live.staticflickr.com/7068/6942684023_769909703a_b.jpg'
  },
  {
    id:"19130",
    name: "Zucchini",
    price: 1,
    quantity: "1 Packet",
    image: 'https://live.staticflickr.com/7068/6942684023_769909703a_b.jpg'
  }
];

export default products;