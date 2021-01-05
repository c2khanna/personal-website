export const PROJECTS = [
  {
    name: 'Key Picker',
    technologies: [
      'Angular',
      'Node.js',
      'AWS',
    ],
    img: 'assets/keyPickerLogo.jpeg',
    startDate: '2020-12-15',
    endDate: '2020-12-20',
    links: [{
      type: 'GitHub',
      display: 'github.com/c2khanna/key-picker',
      ref: 'https://github.com/c2khanna/key-picker',
    }, {
      type: 'Demo',
      display: 'KeyPicker',
      ref: 'http://keypicker.s3-website.us-east-2.amazonaws.com/',
    }],
    description: [
      'A single-page application which consolidates all mechanical keyboards into one sortable and filterable interface',
      'Implemented front-end using Angular, Express server in Node.js and PostgreSQL for the mechanical keyboard database',
      'Used knex.js library to convert filter requests into SQL queries',
      'Deployed website using AWS S3 for the frontend, EC2 for Express server and RDS for PostgreSQL database',
    ]
  }, {
    name: 'Affine Weddings',
    technologies: [
      'ReactJS',
      'Node.js',
      'AWS',
    ],
    img: 'assets/affineLogo.png',
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
    img: 'assets/uberLogo.png',
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
    img: 'assets/lcboLogo.png',
    startDate: '2016-01-01',
    endDate: '2016-01-30',
    links: [{
      type: 'GitHub',
      display: 'github.com/c2khanna/lcbo-sales',
      ref: 'https://github.com/c2khanna/lcbo-sales',
    }],
    description: [
      'A Node.js based application that queries the LCBO product list to extract all current items on sale',
      'Responsive frontend design written with AngularJS and Angular Material',
    ]
  }
]
