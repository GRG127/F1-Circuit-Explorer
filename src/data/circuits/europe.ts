import { Circuit } from '../../types/circuit';

export const europeCircuits: Circuit[] = [
  {
    id: 'imola',
    name: 'Autodromo Enzo e Dino Ferrari',
    country: 'Italy',
    location: { lat: 44.3439, lng: 11.7167 },
    length: 4.909,
    turns: 19,
    firstGrandPrix: 1980,
    lapRecord: { time: '1:15.484', driver: 'Lewis Hamilton', year: 2020 },
    description: 'A historic circuit named after Ferrari\'s founder and his son, known for its challenging layout.',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Emilia_Romagna_Circuit.png.transform/7col/image.png'
  },
  {
    id: 'monaco',
    name: 'Circuit de Monaco',
    country: 'Monaco',
    location: { lat: 43.7347, lng: 7.4206 },
    length: 3.337,
    turns: 19,
    firstGrandPrix: 1950,
    lapRecord: { time: '1:12.909', driver: 'Lewis Hamilton', year: 2021 },
    description: 'The most prestigious and iconic street circuit in Formula 1, winding through the streets of Monte Carlo.',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monaco_Circuit.png.transform/7col/image.png'
  },
  {
    id: 'barcelona',
    name: 'Circuit de Barcelona-Catalunya',
    country: 'Spain',
    location: { lat: 41.5689, lng: 2.2569 },
    length: 4.675,
    turns: 16,
    firstGrandPrix: 1991,
    lapRecord: { time: '1:18.149', driver: 'Max Verstappen', year: 2021 },
    description: 'A well-balanced circuit that tests every aspect of a Formula 1 car.',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png.transform/7col/image.png'
  },
  // Add remaining European circuits...
];