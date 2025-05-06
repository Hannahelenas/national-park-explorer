import { Image, RelatedPark } from "../types/news";

export class NewsArticle {
  title: string;
  abstract: string;
  releaseDate: string;
  relatedParks: RelatedPark[];
  parkCode: string;
  image: Image | null = null;

  constructor(
    title: string,
    abstract: string,
    releaseDate: string,
    relatedParks: RelatedPark[],
    parkCode: string,
    image: Image | null = null
  ) {
    this.title = title;
    this.abstract = abstract;
    this.releaseDate = releaseDate;
    this.relatedParks = relatedParks;
    this.parkCode = parkCode;
    this.image = image;
  }
  // Methods
  getFormattedDate(): string {
    return new Date(this.releaseDate).toLocaleDateString();
  }
}
