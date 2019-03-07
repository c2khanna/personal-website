export default class Link {
  type: string;
  display: string;
  ref: string;

  constructor(type: string,
    display: string,
    ref: string
  ) {
    this.type = type;
    this.display = display;
    this.ref = ref;
  }
}
