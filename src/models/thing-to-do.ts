export interface ThingToDo {
  id: string;
  url: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  activityDescription?: string;
  duration?: string;
  durationDescription?: string;
  location: string;
  locationDescription?: string;
  latitude?: string;
  longitude?: string;
  season?: Season[];
  seasonDescription?: string;
  timeOfDay?: TimeOfDay[];
  timeOfDayDescription?: string;
  topics?: Topic[];
  activities?: Activity[];
  tags?: string[];
  relatedParks?: Park[];
  images?: Image[];
  amenities?: string[];
  accessibilityInformation?: string;
  isReservationRequired: string;
  reservationDescription?: string;
  doFeesApply: string;
  feeDescription?: string;
  arePetsPermitted: string;
  arePetsPermittedWithRestrictions: string;
  petsDescription?: string;
  age?: string;
  ageDescription?: string;
  geometryPoiId?: string;
  credit?: string;
  relevanceScore?: number;
}

export interface Park {
  states: string;
  parkCode: string;
  designation: string;
  fullName: string;
  url: string;
  name: string;
}

export interface Topic {
  id: string;
  name: string;
}

export interface Activity {
  id: string;
  name: string;
}

export interface Crop {
  aspectRatio: string;
  url: string;
}

export interface Image {
  url: string;
  credit?: string;
  altText: string;
  title?: string;
  description?: string;
  caption?: string;
  crops?: Crop[];
}

export type Season = "Winter" | "Spring" | "Summer" | "Fall";
export type TimeOfDay = "Day" | "Dawn" | "Dusk";
