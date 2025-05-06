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
    // Methods 
  getFormattedDate(): string {
    return new Date(this.releaseDate).toLocaleDateString();
  }
}
