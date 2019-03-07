export const PROJECTS = [
  {
    name: 'Affine Weddings',
    technologies: [
      'ReactJS',
      'Node.js',
      'AWS',
    ],
    startDate: '2017-10-15',
    endDate: '2017-11-15',
    links: [{
      type: 'GitHub',
      display: 'github.com/c2khanna/affine_wedding',
      ref: 'https://github.com/c2khanna/affine_wedding',
    }, {
      type: 'Demo',
      display: 'affineweddings.com',
      ref: 'https://www.affineweddings.com',
    }],
    description: [
      'A single-page application for a local wedding planning company',
      'Developed the application using ReactJS and styled it using CSS',
      'Implemented inquiry form by incorporating Amazon Web Services\' Lambda functions and Simple Email Service',
      'Deployed website using AWS S3 and Route53',
    ]
  }, {
    name: 'Can you even Uber',
    technologies: [
      'AngularJS',
      'HTML5',
      'CSS',
    ],
    startDate: '2016-03-01',
    endDate: '2016-03-30',
    links: [{
      type: 'GitHub',
      display: 'github.com/c2khanna/Uber',
      ref: 'https://github.com/c2khanna/Uber',
    }, {
      type: 'Demo',
      display: 'c2khanna.github.io/Uber/',
      ref: 'http://c2khanna.github.io/Uber/',
    }],
    description: [
      'A web application that helps you determine your eligibility to be an Uber driver',
      'Developed reusable Angular directives to use on the single page application',
    ]
  }, {
    name: 'Not For The Taste',
    technologies: [
      'Node.js',
      'AngularJS',
      'MongoDB',
      'SASS',
    ],
    startDate: '2016-01-01',
    endDate: '2016-01-30',
    links: [{
      type: 'GitHub',
      display: 'github.com/c2khanna/lcbo-sales',
      ref: 'https://github.com/c2khanna/lcbo-sales',
    }, {
      type: 'Demo',
      display: 'notforthetaste.com',
      ref: 'https://www.notforthetaste.com',
    }],
    description: [
      'A Node.js based application that Queries the LCBO product list to extract all current items on sale',
      'Responsive frontend design written with AngularJS and Angular Material',
    ]
  }
]
