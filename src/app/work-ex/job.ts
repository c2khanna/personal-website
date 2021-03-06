export default class Job {
  jobTitle: string;
  company: string;
  technologies: Array<string>;
  startDate: string;
  endDate: string;
  description: Array<string>;
  alternate: boolean;

  constructor(jobTitle: string,
    company: string,
    technologies: Array<string>,
    startDate: string,
    endDate: string,
    description: Array<string>,
    alternate: boolean
  ) {
    this.jobTitle = jobTitle;
    this.company = company;
    this.technologies = technologies;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
    this.alternate = alternate;
  }
}
