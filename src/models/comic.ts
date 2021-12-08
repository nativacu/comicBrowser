import {Image} from "./image";

export class Comic {
  image: Image;
  date_added: string;
  name: string;
  issue_number: number;
  description: string;

  constructor() {
    this.image = new Image();
    this.date_added = '';
    this.name = '';
    this.issue_number = -1;
    this.description = '';
  }
}
