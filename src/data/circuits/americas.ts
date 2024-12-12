import { Circuit } from '../../types/circuit';

export const americasCircuits: Circuit[] = [
  {
    id: 'miami',
    name: 'Miami International Autodrome',
    country: 'USA',
    location: { lat: 25.9581, lng: -80.2389 },
    length: 5.412,
    turns: 19,
    firstGrandPrix: 2022,
    lapRecord: { time: '1:29.708', driver: 'Max Verstappen', year: 2023 },
    description: 'A new addition to the calendar, featuring a unique layout around Hard Rock Stadium.',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit.png.transform/7col/image.png'
  },
  {
    id: 'montreal',
    name: 'Circuit Gilles Villeneuve',
    country: 'Canada',
    location: { lat: 45.5017, lng: -73.5228 },
    length: 4.361,
    turns: 14,
    firstGrandPrix: 1978,
    lapRecord: { time: '1:13.078', driver: 'Valtteri Bottas', year: 2019 },
    description: 'Located on Notre Dame Island, known for its challenging Wall of Champions and long straights.',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.png.transform/7col/image.png'
  },
  {
    id: 'austin',
    name: 'Circuit of The Americas',
    country: 'USA',
    location: { lat: 30.1328, lng: -97.6411 },
    length: 5.513,
    turns: 20,
    firstGrandPrix: 2012,
    lapRecord: { time: '1:36.169', driver: 'Charles Leclerc', year: 2019 },
    description: 'A modern circuit inspired by the best corners from other tracks around the world.',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/USA_Circuit.png.transform/7col/image.png'
  },
  {
    id: 'mexico',
    name: 'Autódromo Hermanos Rodríguez',
    country: 'Mexico',
    location: { lat: 19.4042, lng: -99.0907 },
    length: 4.304,
    turns: 17,
    firstGrandPrix: 1963,
    lapRecord: { time: '1:17.774', driver: 'Valtteri Bottas', year: 2021 },
    description: 'A unique circuit at high altitude, featuring the famous Foro Sol stadium section.',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png.transform/7col/image.png'
  },
  {
    id: 'interlagos',
    name: 'Autódromo José Carlos Pace',
    country: 'Brazil',
    location: { lat: -23.7036, lng: -46.6997 },
    length: 4.309,
    turns: 15,
    firstGrandPrix: 1973,
    lapRecord: { time: '1:10.540', driver: 'Valtteri Bottas', year: 2018 },
    description: 'A classic circuit known for producing exciting races and unpredictable weather.',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit.png.transform/7col/image.png'
  },
  {
    id: 'las-vegas',
    name: 'Las Vegas Strip Circuit',
    country: 'USA',
    location: { lat: 36.1699, lng: -115.1398 },
    length: 6.201,
    turns: 17,
    firstGrandPrix: 2023,
    lapRecord: { time: '1:35.490', driver: 'Oscar Piastri', year: 2023 },
    description: 'A spectacular night race through the neon-lit streets of Las Vegas.',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Las_Vegas_Circuit.png.transform/7col/image.png'
  }
];