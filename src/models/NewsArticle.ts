import { RelatedPark } from "../types/news";

export class NewsArticle {
  title: string;
  abstract: string;
  releaseDate: string;
  relatedParks: RelatedPark[];
  parkCode: string;

  constructor(
    title: string,
    abstract: string,
    releaseDate: string,
    relatedParks: RelatedPark[],
    parkCode: string
  ) {
    this.title = title;
    this.abstract = abstract;
    this.releaseDate = releaseDate;
    this.relatedParks = relatedParks;
    this.parkCode = parkCode;
  }

  // Lägg till en metod för att formatera datumet
  getFormattedDate(): string {
    return new Date(this.releaseDate).toLocaleDateString();
  }

  /*  // Lägg till en metod för att visa relaterade parker på ett lägre nivå
  getRelatedParksInfo(): string {
    return this.relatedParks.map(park => `${park.fullName} (${park.states})`).join(", ");
  } */
}
