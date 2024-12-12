import { Circuit } from '../../types/circuit';

export const asiaPacificCircuits: Circuit[] = [
  {
    id: 'melbourne',
    name: 'Albert Park Circuit',
    country: 'Australia',
    location: { lat: -37.8497, lng: 144.9680 },
    length: 5.278,
    turns: 14,
    firstGrandPrix: 1996,
    lapRecord: { time: '1:20.235', driver: 'Charles Leclerc', year: 2022 },
    description: 'A picturesque street circuit around Melbourne\'s Albert Park Lake, known for its challenging nature.',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png.transform/7col/image.png'
  },
  {
    id: 'suzuka',
    name: 'Suzuka Circuit',
    country: 'Japan',
    location: { lat: 34.8431, lng: 136.5410 },
    length: 5.807,
    turns: 18,
    firstGrandPrix: 1987,
    lapRecord: { time: '1:30.983', driver: 'Lewis Hamilton', year: 2019 },
    description: 'A legendary figure-8 track that has hosted many championship-deciding races.',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit.png.transform/7col/image.png'
  },
  {
    id: 'shanghai',
    name: 'Shanghai International Circuit',
    country: 'China',
    location: { lat: 31.3389, lng: 121.2205 },
    length: 5.451,
    turns: 16,
    firstGrandPrix: 2004,
    lapRecord: { time: '1:32.238', driver: 'Michael Schumacher', year: 2004 },
    description: 'A Hermann Tilke-designed track featuring one of F1\'s longest straights.',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit.png.transform/7col/image.png'
  },
  {
    id: 'singapore',
    name: 'Marina Bay Street Circuit',
    country: 'Singapore',
    location: { lat: 1.2914, lng: 103.8644 },
    length: 4.940,
    turns: 19,
    firstGrandPrix: 2008,
    lapRecord: { time: '1:41.905', driver: 'Kevin Magnussen', year: 2018 },
    description: 'F1\'s original night race, winding through the spectacular Marina Bay area.',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit.png.transform/7col/image.png'
  }
];