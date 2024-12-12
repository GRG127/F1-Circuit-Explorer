export interface Circuit {
  id: string;
  name: string;
  country: string;
  location: {
    lat: number;
    lng: number;
  };
  length: number; // in kilometers
  turns: number;
  firstGrandPrix: number;
  lapRecord: {
    time: string;
    driver: string;
    year: number;
  };
  description: string;
  imageUrl: string;
}