import {Comic} from "./comic";

export class Request {
  results: Array<Comic>;

  constructor() {
    this.results = [];
  }
}
