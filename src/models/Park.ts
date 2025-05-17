export class Park {
  id: string;
  fullName: string;
  parkCode: string;
  description: string;
  //Create intercae for activities, topics -TODO
  states: string;
  // create interfaace for contacts -TODO
  directionsInfo: string;
  images: ParkImage[];
  weatherInfo: string;
  name: string;
  designation: string;
  // create interface for contacts address: Address[] - TODO
  constructor(
    id: string,
    fullName: string,
    parkCode: string,
    description: string,
    states: string,
    directionsInfo: string,
    images: ParkImage[],
    weatherInfo: string,
    name: string,
    designation: string
  ) {
    this.id = id;
    this.fullName = fullName;
    this.parkCode = parkCode;
    this.description = description;
    this.states = states;
    this.directionsInfo = directionsInfo;
    this.images = images;
    this.weatherInfo = weatherInfo;
    this.name = name;
    this.designation = designation;
  }
  // Methods
  getParkHeroImage(): ParkImage | null {
    return this.images.length > 0 ? this.images[0] : null;
  }
}

export interface ParkImage {
  credit: string;
  title: string;
  altText: string;
  caption: string;
  url: string;
}
