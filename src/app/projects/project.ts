import Link from './link';

export default class Project {
  name: string;
  technologies: Array<string>;
  startDate: string;
  endDate: string;
  links: Array<Link>;
  description: Array<string>;
  img: string;

  constructor(name: string,
    technologies: Array<string>,
    startDate: string,
    endDate: string,
    links: Array<Link>,
    description: Array<string>,
    img: string
  ) {
    this.name = name;
    this.technologies = technologies;
    this.startDate = startDate;
    this.endDate = endDate;
    this.links = links;
    this.description = description;
    this.img = img;
  }
}
