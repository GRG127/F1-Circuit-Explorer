import { Circuit } from '../../types/circuit';
import { CIRCUIT_IMAGES } from '../../utils/constants';

export const middleEastCircuits: Circuit[] = [
  {
    id: 'bahrain',
    name: 'Bahrain International Circuit',
    country: 'Bahrain',
    location: { lat: 26.0325, lng: 50.5106 },
    length: 5.412,
    turns: 15,
    firstGrandPrix: 2004,
    lapRecord: { time: '1:31.447', driver: 'Pedro de la Rosa', year: 2005 },
    description: 'A modern circuit in the heart of the desert, known for its excellent facilities and challenging layout.',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png.transform/7col/image.png'
  },
  {
    id: 'jeddah',
    name: 'Jeddah Corniche Circuit',
    country: 'Saudi Arabia',
    location: { lat: 21.6319, lng: 39.1044 },
    length: 6.174,
    turns: 27,
    firstGrandPrix: 2021,
    lapRecord: { time: '1:30.734', driver: 'Lewis Hamilton', year: 2021 },
    description: 'The fastest street circuit in F1, featuring high-speed corners and long straights along the Red Sea.',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit.png.transform/7col/image.png'
  },
  {
    id: 'lusail',
    name: 'Lusail International Circuit',
    country: 'Qatar',
    location: { lat: 25.4791, lng: 51.4543 },
    length: 5.418,
    turns: 16,
    firstGrandPrix: 2021,
    lapRecord: { time: '1:24.319', driver: 'Max Verstappen', year: 2023 },
    description: 'A flowing circuit designed for both F1 and MotoGP, featuring a mix of medium and high-speed corners.',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit.png.transform/7col/image.png'
  },
  {
    id: 'yas-marina',
    name: 'Yas Marina Circuit',
    country: 'UAE',
    location: { lat: 24.4672, lng: 54.6031 },
    length: 5.281,
    turns: 16,
    firstGrandPrix: 2009,
    lapRecord: { time: '1:26.103', driver: 'Max Verstappen', year: 2021 },
    description: 'A twilight race around Yas Island, featuring the iconic color-changing hotel and marina.',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.png.transform/7col/image.png'
  }
];