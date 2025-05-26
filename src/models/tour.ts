export interface Tour {
  id: string;
  title: string;
  description: string;
  durationMin: string;
  durationMax: string;
  durationUnit: string;
  type: string;
  relevanceScore: number;
  topics: Topic[];
  activities: Activity[];
  images: TourImage[];
  stops: TourStop[];
  park: ParkSummary[];
}

export interface Topic {
  id: string;
  name: string;
}

export interface Activity {
  id: string;
  name: string;
}

export interface TourImage {
  credit: string;
  crops: ImageCrop[];
  altText: string;
  title: string;
  caption: string;
  url: string;
}

export interface ImageCrop {
  aspectratio: string;
  url: string;
}

export interface TourStop {
  id: string;
  assetId: string;
  assetName: string;
  assetType: string;
  ordinal: string;
  significance: string;
  directionsToNextStop: string;
}

export interface ParkSummary {
  states: string;
  designation: string;
  parkCode: string;
  fullName: string;
  url: string;
  name: string;
}
