const greeting = {
  title: 'Dylan McCormick',
  logo_name: 'DylanMcCormick',
  subTitle:
    "I am currently an associate software engineer at Infor where I work on the Cloud Tools and Services Team. I'm very passionate about many",
  resumeLink: '',
  githubProfile: 'https://github.com/dylanmccormick'
};

const socialMediaLinks = [
  {
    name: 'Github',
    link: 'https://github.com/dylanmccormick',
    fontAwesomeIcon: 'fa-github',
    backgrouncColor: '#181717'
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/dylan-mccormick-592b29177/',
    fontAwesomeIcon: 'fa-linkedin-in',
    backgrouncColor: '#0077B5'
  }
];

const degrees = {
  degrees: [
    {
      institution: 'Furman University',
      subtitle: 'B.S. in Computer Science, B.A in Music',
      logo_path:
        'https://www.furman.edu/wp-content/uploads/2019/01/Bell-Tower/PNG/Bell-Tower-RGB.png',
      duration: '2017 - 2021',
      gpa: '3.73',
      descriptions: [
        'GPA: 3.73',
        'President of Phi Mu Alpha Fraternity',
        'Member of Big Band, Jazz Combos, Wind Symphony, and Marching Band',
        'Deans List Every Semester'
      ],
      school_url: 'https://www.furman.edu/'
    }
  ]
};

const experience = {
  title: 'Experience',
  sections: [
    {
      title: 'Work',
      experiences: [
        {
          title:
            'Associate Software Engineer – Cloud Technologies and Services',
          company: 'Infor',
          company_url: 'https://www.infor.com/',
          logo_path: 'https://www.infor.com/logo-infor.png',
          duration: 'May 2021 - PRESENT',
          location: 'Remote-US',
          description: [
            'Utilized knowledge of Javascript and React to update and modify an existing UI for accessing the Monocle tool and user data',
            'Created processes for automating code testing, monitoring, and deployment using CloudFormation, Faro, and Gitlab CI/CD',
            'Monitored and provided support for a cloud system monitoring tool which processed between 30-60 million metrics per minute',
            'Developed a tool using Python and open-source Netflix code to manage security certificates',
            'Created and maintained APIs using FastAPI, DynamoDB, and Elasticache '
          ],
          color: '#D5000E'
        },
        {
          title: 'Lab Assistant',
          company: 'Furman University Computer Science Department',
          company_url: 'https://www.furman.edu/academics/computer-science/',
          logo_path:
            'https://www.furman.edu/wp-content/uploads/2019/01/Bell-Tower/PNG/Bell-Tower-RGB.png',
          duration: 'August 2018 - May 2021',
          location: 'Greenville, SC',
          description: [
            'Assisted students with proper code design and implementation',
            'Resolved software problems with students and ensured consistent hardware functionality in the lab ',
            'Used IDE software to help students find and resolve bugs within their own code'
          ],
          color: '#582C83'
        },
        {
          title: 'Intern, Healthcare Innovations',
          company: 'Blue Cross Blue Shield of South Carolina',
          company_url:
            'https://www.southcarolinablues.com/web/public/brands/sc/',
          logo_path:
            'https://seeklogo.com/images/B/blue-cross-blue-shield-logo-A4835955D2-seeklogo.com.png',
          duration: 'May 2019 - Aug 2019, May 2020 - Aug 2020',
          location: 'Columbia, SC',
          description: [
            'Analyzed risk management program in Healthcare Innovations and used Tableau to design, develop, and implement an interactive dashboard',
            'Designed Alation home page using JSON and Alation API ',
            'Created a process for budget reporting using DB2 and Power BI'
          ],
          color: '#00AEEF'
        },
        {
          title: 'Intern',
          company: 'IT-Ology',
          company_url: 'https://www.it-ology.org/',
          logo_path:
            'data:image/png;base64,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',
          duration: 'May 2018 - Aug 2017',
          location: 'Columbia, SC',
          description: [
            'Taught middle and elementary students about broad technology concepts as part of instructional summer camp program',
            'Facilitated lesson design and implementation, and provided individual feedback to students',
            'Explored teaching tools for students including Scratch, Codebug, and Lego robotics'
          ],
          color: '#8CC43F'
        }
      ]
    }
  ]
};

export { degrees, socialMediaLinks, experience, greeting };
