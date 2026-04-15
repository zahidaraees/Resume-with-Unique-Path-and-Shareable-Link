// ========================================
// GLOBAL VARIABLES
// ========================================
var form, generateBtn, clearBtn, resumeOutput, shareUrlContainer, uniqueUrlElement;
var downloadBtn, printBtn, shareBtn, demoBtn, demoBtnHeader, darkModeToggle, profilePicInput;
var autoSaveTimeout;
var skillCounter = 3;
var educationCounter = 1;
var certEducationCounter = 1;
var experienceCounter = 1;

// Analytics tracking
var analyticsData = {
    views: 0,
    downloads: 0,
    lastUpdated: null,
    atsScore: 0,
    completionProgress: 0
};

// QR Code instance
var qrCodeInstance = null;

// Cover letter content
var currentCoverLetter = '';

// ========================================
// DEMO DATA
// ========================================
var demoData = {
    username: 'john.anderson',
    fullname: 'John Anderson',
    objective: 'Seeking a challenging senior software engineering role where I can leverage 5+ years of experience in React, Node.js, and cloud technologies to build scalable, user-centric products that drive business growth.',
    email: 'john.anderson@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Innovation Drive, San Francisco, CA 94102',
    linkedin: 'https://linkedin.com/in/johnanderson',
    github: 'https://github.com/johnanderson',
    website: 'https://johnanderson.dev',
    twitter: '',
    skills: [
        { name: 'JavaScript', level: 'expert' },
        { name: 'React', level: 'expert' },
        { name: 'Node.js', level: 'advanced' },
        { name: 'Python', level: 'advanced' },
        { name: 'AWS', level: 'intermediate' }
    ],
    education: [
        {
            degree: 'B.S. Computer Science',
            institution: 'Stanford University',
            start: '2016',
            end: '2020',
            details: 'GPA: 3.8/4.0, Dean\'s List'
        }
    ],
    certEducation: [
        {
            name: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            date: '2023'
        },
        {
            name: 'Google Analytics Certified',
            issuer: 'Google',
            date: '2022'
        }
    ],
    experience: [
        {
            title: 'Senior Software Engineer',
            company: 'TechCorp Inc.',
            start: 'Jan 2022',
            end: 'Present',
            description: 'Led development of scalable web applications serving 100K+ users\nManaged a team of 5 developers and implemented agile practices\nReduced application load time by 40% through optimization'
        },
        {
            title: 'Software Developer',
            company: 'StartupXYZ',
            start: 'Jun 2020',
            end: 'Dec 2021',
            description: 'Built responsive React components for customer-facing dashboard\nIntegrated RESTful APIs and implemented real-time features\nCollaborated with design team to improve UX'
        }
    ],
    projects: 'E-Commerce Platform (2023)\n- Built full-stack app with React and Node.js\n- 10K+ monthly active users',
    certifications: 'AWS Certified Solutions Architect (2023)\nGoogle Analytics Certified (2022)\nEmployee of the Month - March 2023',
    languages: 'English (Native)\nSpanish (Professional)\nFrench (Conversational)',
    professionalSummary: 'Results-driven software engineer with 5+ years of experience building scalable web applications and leading cross-functional teams. Proven expertise in cloud architecture, microservices, and agile methodologies. Passionate about mentoring junior developers and driving technical excellence across organizations. Strong advocate for clean code practices and continuous integration.',
    volunteer: [
        {
            role: 'Technical Mentor',
            org: 'Code for America',
            start: 'Jan 2021',
            end: 'Present',
            achievements: '- Mentored 20+ students in coding fundamentals\n- Organized community hackathon with 150+ participants\n- Led workshop on React best practices'
        },
        {
            role: 'Volunteer Instructor',
            org: 'Girls Who Code',
            start: 'Jun 2020',
            end: 'Dec 2022',
            achievements: '- Taught Python programming to 30+ high school students\n- Developed curriculum for introductory web development course'
        }
    ],
    publications: [
        {
            title: 'Building Scalable Microservices with Node.js',
            journal: 'IEEE Software Engineering Conference',
            date: 'March 2023',
            url: 'https://doi.org/10.1109/example.2023.12345',
            description: 'Research on implementing microservices architecture for high-traffic web applications'
        }
    ],
    patents: [
        {
            title: 'Method for Optimizing Database Query Performance',
            number: 'US10,987,654B2',
            date: 'June 2022',
            description: 'Novel algorithm reducing query execution time by 60% in distributed database systems'
        }
    ],
    references: [
        {
            name: 'Dr. Jane Smith',
            title: 'Director of Engineering',
            company: 'TechCorp Inc.',
            relationship: 'Former Manager',
            email: 'jane.smith@techcorp.com',
            phone: '+1 (555) 987-6543'
        },
        {
            name: 'Michael Johnson',
            title: 'CTO',
            company: 'StartupXYZ',
            relationship: 'Previous Supervisor',
            email: 'm.johnson@startupxyz.com',
            phone: '+1 (555) 456-7890'
        }
    ],
    memberships: [
        {
            org: 'IEEE Computer Society',
            role: 'Senior Member',
            duration: '2019 - Present',
            activities: 'Active participant in AI Ethics committee, Speaker at annual conference 2022'
        },
        {
            org: 'Association for Computing Machinery (ACM)',
            role: 'Professional Member',
            duration: '2018 - Present',
            activities: 'Regular attendee at SIGGRAPH and tech workshops'
        }
    ],
    softSkills: [
        { name: 'Leadership', level: 'expert' },
        { name: 'Communication', level: 'expert' },
        { name: 'Teamwork', level: 'advanced' },
        { name: 'Problem Solving', level: 'expert' },
        { name: 'Adaptability', level: 'advanced' },
        { name: 'Time Management', level: 'advanced' }
    ],
    portfolio: [
        {
            title: 'GitHub Profile',
            url: 'https://github.com/johnanderson',
            description: 'Collection of 25+ open-source projects with 1.5K+ stars'
        },
        {
            title: 'Personal Tech Blog',
            url: 'https://johnanderson.dev/blog',
            description: 'Technical articles on React, Node.js, and cloud architecture with 10K+ monthly readers'
        }
    ]
};

// ========================================
// INDUSTRY-SPECIFIC SAMPLE DATA
// ========================================
var industrySampleData = {
    technology: {
        username: 'sarah.chen',
        fullname: 'Sarah Chen',
        objective: 'Innovative Full Stack Developer with 6+ years of experience building scalable web applications and leading cross-functional teams. Passionate about leveraging cutting-edge technologies to solve complex business problems and deliver exceptional user experiences.',
        email: 'sarah.chen@email.com',
        phone: '+1 (555) 234-5678',
        address: '456 Tech Boulevard, Seattle, WA 98101',
        linkedin: 'https://linkedin.com/in/sarahchen',
        github: 'https://github.com/sarahchen',
        website: 'https://sarahchen.dev',
        twitter: 'https://twitter.com/sarahchen_dev',
        skills: [
            { name: 'React/Next.js', level: 'expert' },
            { name: 'Node.js', level: 'expert' },
            { name: 'TypeScript', level: 'expert' },
            { name: 'Python', level: 'advanced' },
            { name: 'AWS/GCP', level: 'advanced' },
            { name: 'Docker/Kubernetes', level: 'intermediate' }
        ],
        education: [
            { degree: 'M.S. Computer Science', institution: 'University of Washington', start: '2016', end: '2018', details: 'Focus on Distributed Systems, GPA: 3.9/4.0' },
            { degree: 'B.S. Software Engineering', institution: 'UC Berkeley', start: '2012', end: '2016', details: 'Magna Cum Laude' }
        ],
        certEducation: [
            { name: 'AWS Solutions Architect Professional', issuer: 'Amazon Web Services', date: '2023' },
            { name: 'Google Cloud Professional Developer', issuer: 'Google Cloud', date: '2022' }
        ],
        experience: [
            { title: 'Lead Full Stack Developer', company: 'Amazon Web Services', start: 'Mar 2021', end: 'Present', description: 'Led a team of 8 engineers building cloud management tools serving 500K+ developers\nArchitected microservices handling 10M+ requests daily with 99.99% uptime\nImplemented CI/CD pipelines reducing deployment time by 75%' },
            { title: 'Software Engineer II', company: 'Microsoft', start: 'Jun 2018', end: 'Feb 2021', description: 'Developed features for Azure Portal used by millions of users worldwide\nBuilt real-time monitoring dashboard reducing incident response time by 60%\nMentored 3 junior developers and conducted 50+ technical interviews' }
        ],
        projects: 'Open Source Contribution\n- Core contributor to React ecosystem library with 5K+ GitHub stars\n- Created popular Node.js utility package with 1M+ downloads',
        certifications: 'AWS Certified Solutions Architect - Professional (2023)\nGoogle Cloud Professional Developer (2022)\nCertified Kubernetes Administrator (2021)',
        languages: 'English (Native)\nMandarin (Native)\nJapanese (Conversational)',
        professionalSummary: 'Innovative Full Stack Developer with 6+ years of experience building scalable web applications and leading cross-functional teams. Proven expertise in cloud architecture, microservices, and modern JavaScript frameworks. Passionate about open-source contributions and building developer tools that empower teams to ship faster.',
        volunteer: [
            { role: 'Open Source Mentor', org: 'GitHub Stars Program', start: 'Jan 2020', end: 'Present', achievements: '- Mentored 50+ developers on open-source best practices\n- Organized virtual hackathons with 500+ participants' }
        ],
        publications: [
            { title: 'Scaling Microservices with Kubernetes', journal: 'ACM Queue', date: 'September 2022', url: 'https://doi.org/10.1145/example.2022', description: 'Deep dive into container orchestration patterns for production systems' }
        ],
        patents: [
            { title: 'System for Automated Code Review', number: 'US11,234,567B2', date: 'March 2023', description: 'AI-powered system that identifies code smells and suggests improvements' }
        ],
        references: [
            { name: 'David Kim', title: 'Engineering Manager', company: 'Amazon Web Services', relationship: 'Current Manager', email: 'd.kim@aws.com', phone: '+1 (555) 111-2222' }
        ],
        memberships: [
            { org: 'IEEE Computer Society', role: 'Senior Member', duration: '2020 - Present', activities: 'Speaker at cloud computing workshops' }
        ],
        softSkills: [
            { name: 'Leadership', level: 'expert' },
            { name: 'Communication', level: 'expert' },
            { name: 'Teamwork', level: 'expert' },
            { name: 'Problem Solving', level: 'expert' },
            { name: 'Adaptability', level: 'advanced' }
        ],
        portfolio: [
            { title: 'GitHub Profile', url: 'https://github.com/sarahchen', description: '50+ repositories with 10K+ total stars' },
            { title: 'Tech Blog', url: 'https://sarahchen.dev', description: 'Articles on React and Node.js with 50K+ monthly readers' }
        ]
    },
    healthcare: {
        username: 'dr.emily.rodriguez',
        fullname: 'Dr. Emily Rodriguez, MD',
        objective: 'Board-certified physician with 8+ years of clinical experience in internal medicine, seeking to leverage medical expertise and leadership skills in a senior healthcare role. Committed to delivering exceptional patient care and advancing healthcare outcomes.',
        email: 'emily.rodriguez@medmail.com',
        phone: '+1 (555) 345-6789',
        address: '789 Medical Center Drive, Boston, MA 02115',
        linkedin: 'https://linkedin.com/in/dremilyrodriguez',
        github: '',
        website: '',
        twitter: '',
        skills: [
            { name: 'Internal Medicine', level: 'expert' },
            { name: 'Patient Care', level: 'expert' },
            { name: 'Clinical Research', level: 'advanced' },
            { name: 'Electronic Health Records', level: 'advanced' },
            { name: 'Team Leadership', level: 'advanced' },
            { name: 'Medical Education', level: 'intermediate' }
        ],
        education: [
            { degree: 'Doctor of Medicine (MD)', institution: 'Harvard Medical School', start: '2012', end: '2016', details: 'Alpha Omega Alpha Honor Medical Society' },
            { degree: 'B.S. Biology', institution: 'Johns Hopkins University', start: '2008', end: '2012', details: 'Summa Cum Laude, GPA: 3.95/4.0' }
        ],
        certEducation: [
            { name: 'Board Certified - Internal Medicine', issuer: 'American Board of Internal Medicine', date: '2019' },
            { name: 'Advanced Cardiac Life Support (ACLS)', issuer: 'American Heart Association', date: '2023' }
        ],
        experience: [
            { title: 'Attending Physician - Internal Medicine', company: 'Massachusetts General Hospital', start: 'Jul 2019', end: 'Present', description: 'Manage care for 20+ patients daily in high-volume urban hospital\nLead interdisciplinary team of 15 healthcare professionals\nImplemented quality improvement initiative reducing readmission rates by 25%\nSupervise and mentor 8 medical residents and students' },
            { title: 'Internal Medicine Resident', company: 'Brigham and Women\'s Hospital', start: 'Jun 2016', end: 'Jun 2019', description: 'Completed rigorous 3-year residency program with 3000+ patient encounters\nChief Resident 2018-2019, overseeing 40+ residents\nPublished 3 peer-reviewed research articles' }
        ],
        projects: 'Quality Improvement Initiative\n- Led hospital-wide program reducing patient wait times by 35%\n- Developed patient education materials in English and Spanish',
        certifications: 'Board Certified - Internal Medicine (2019)\nACLS Certified (2023)\nBLS Certified (2023)\nDEA License (Current)',
        languages: 'English (Native)\nSpanish (Native)\nPortuguese (Professional)',
        professionalSummary: 'Board-certified physician with 8+ years of clinical experience in internal medicine, specializing in patient-centered care and quality improvement. Published researcher with expertise in clinical workflows and interdisciplinary team leadership. Committed to advancing healthcare outcomes through evidence-based practices and medical education.',
        volunteer: [
            { role: 'Medical Volunteer', org: 'Doctors Without Borders', start: 'Jun 2017', end: 'Aug 2017', achievements: '- Provided primary care to 200+ patients in underserved regions\n- Conducted health education workshops' },
            { role: 'Health Screening Coordinator', org: 'Local Community Clinic', start: '2019', end: 'Present', achievements: '- Organized monthly free health screenings serving 100+ community members' }
        ],
        publications: [
            { title: 'Improving Patient Outcomes Through Quality Metrics', journal: 'Journal of General Internal Medicine', date: 'January 2022', url: 'https://doi.org/10.1007/example', description: 'Study on implementing quality improvement programs in urban hospitals' },
            { title: 'Reducing Readmission Rates in Internal Medicine', journal: 'Annals of Internal Medicine', date: 'March 2021', url: 'https://doi.org/10.7326/example', description: 'Analysis of interventions targeting 30-day readmission rates' }
        ],
        patents: [],
        references: [
            { name: 'Dr. Robert Chen', title: 'Chief of Medicine', company: 'Massachusetts General Hospital', relationship: 'Department Head', email: 'r.chen@mgh.harvard.edu', phone: '+1 (555) 222-3333' }
        ],
        memberships: [
            { org: 'American College of Physicians', role: 'Fellow', duration: '2019 - Present', activities: 'Presenter at annual meetings, Committee member for clinical guidelines' },
            { org: 'American Medical Association', role: 'Member', duration: '2016 - Present', activities: '' }
        ],
        softSkills: [
            { name: 'Communication', level: 'expert' },
            { name: 'Leadership', level: 'expert' },
            { name: 'Teamwork', level: 'expert' },
            { name: 'Empathy', level: 'expert' },
            { name: 'Problem Solving', level: 'advanced' }
        ],
        portfolio: [
            { title: 'Research Profile', url: 'https://scholar.google.com/dremilyrodriguez', description: '15+ peer-reviewed publications with 500+ citations' }
        ]
    },
    finance: {
        username: 'michael.wong',
        fullname: 'Michael Wong, CFA',
        objective: 'Results-driven financial analyst with 7+ years of experience in investment banking, portfolio management, and financial modeling. Proven track record of generating alpha and delivering exceptional client returns through rigorous analysis and strategic decision-making.',
        email: 'michael.wong@finance.com',
        phone: '+1 (555) 456-7890',
        address: '321 Wall Street, New York, NY 10005',
        linkedin: 'https://linkedin.com/in/michaelwong-cfa',
        github: '',
        website: 'https://michaelwong.finance',
        twitter: '',
        skills: [
            { name: 'Financial Modeling', level: 'expert' },
            { name: 'Investment Analysis', level: 'expert' },
            { name: 'Portfolio Management', level: 'expert' },
            { name: 'Bloomberg Terminal', level: 'advanced' },
            { name: 'Python/R', level: 'advanced' },
            { name: 'Risk Management', level: 'advanced' }
        ],
        education: [
            { degree: 'MBA - Finance', institution: 'Wharton School, University of Pennsylvania', start: '2014', end: '2016', details: 'Concentration in Investment Management, GPA: 3.8/4.0' },
            { degree: 'B.S. Economics', institution: 'NYU Stern', start: '2010', end: '2014', details: 'Valedictorian, Summa Cum Laude' }
        ],
        certEducation: [
            { name: 'Chartered Financial Analyst (CFA)', issuer: 'CFA Institute', date: '2018' },
            { name: 'Financial Risk Manager (FRM)', issuer: 'GARP', date: '2019' }
        ],
        experience: [
            { title: 'Senior Investment Analyst', company: 'Goldman Sachs Asset Management', start: 'Aug 2018', end: 'Present', description: 'Manage $500M+ equity portfolio with consistent top-quartile performance\nConduct deep-dive analysis on 50+ companies annually\nPresent investment recommendations to $2B+ institutional clients\nDevelop proprietary valuation models improving accuracy by 30%' },
            { title: 'Investment Banking Analyst', company: 'J.P. Morgan', start: 'Jul 2016', end: 'Jul 2018', description: 'Executed 8 M&A transactions totaling $3B+ in deal value\nBuilt complex financial models and performed due diligence\nPrepared pitch books and client presentations for Fortune 500 companies' }
        ],
        projects: 'Proprietary Trading Algorithm\n- Developed Python-based algorithmic trading system\n- Achieved 18% annualized returns over 2-year backtest period',
        certifications: 'CFA Charterholder (2018)\nFinancial Risk Manager - FRM (2019)\nSeries 7 & 63 Licenses (Current)\nBloomberg Market Concepts (2023)',
        languages: 'English (Native)\nCantonese (Native)\nMandarin (Professional)',
        professionalSummary: 'Results-driven financial analyst with 7+ years of experience in investment banking, portfolio management, and quantitative analysis. CFA charterholder with proven track record of generating alpha and delivering exceptional client returns. Expert in financial modeling, risk management, and data-driven investment strategies.',
        volunteer: [
            { role: 'Financial Literacy Instructor', org: 'Junior Achievement', start: '2019', end: 'Present', achievements: '- Taught personal finance to 200+ high school students\n- Developed curriculum on investing basics' }
        ],
        publications: [
            { title: 'Quantitative Approaches to Portfolio Optimization', journal: 'Journal of Portfolio Management', date: 'Summer 2022', url: 'https://doi.org/10.3905/example', description: 'Research on machine learning applications in asset allocation' }
        ],
        patents: [],
        references: [
            { name: 'Susan Williams, CFA', title: 'Managing Director', company: 'Goldman Sachs', relationship: 'Senior Colleague', email: 's.williams@gs.com', phone: '+1 (555) 333-4444' }
        ],
        memberships: [
            { org: 'CFA Institute', role: 'Member', duration: '2018 - Present', activities: 'Contributor to industry publications' },
            { org: 'New York Society of Security Analysts', role: 'Active Member', duration: '2017 - Present', activities: 'Regular attendee at investment forums' }
        ],
        softSkills: [
            { name: 'Analytical Thinking', level: 'expert' },
            { name: 'Communication', level: 'expert' },
            { name: 'Leadership', level: 'advanced' },
            { name: 'Client Relations', level: 'expert' },
            { name: 'Decision Making', level: 'expert' }
        ],
        portfolio: [
            { title: 'Investment Blog', url: 'https://michaelwong.finance', description: 'Weekly market analysis with 5K+ subscribers' }
        ]
    },
    design: {
        username: 'alex.morgan',
        fullname: 'Alex Morgan',
        objective: 'Creative Product Designer with 5+ years of experience crafting intuitive, beautiful user experiences for millions of users. Seeking to leverage expertise in design systems, user research, and prototyping to create impactful products at scale.',
        email: 'alex.morgan@design.com',
        phone: '+1 (555) 567-8901',
        address: '555 Creative Avenue, San Francisco, CA 94103',
        linkedin: 'https://linkedin.com/in/alexmorgan-design',
        github: 'https://github.com/alexmorgan',
        website: 'https://alexmorgan.design',
        twitter: 'https://twitter.com/alexmorgan_ux',
        skills: [
            { name: 'Figma', level: 'expert' },
            { name: 'UI/UX Design', level: 'expert' },
            { name: 'Design Systems', level: 'expert' },
            { name: 'Prototyping', level: 'advanced' },
            { name: 'User Research', level: 'advanced' },
            { name: 'HTML/CSS', level: 'intermediate' }
        ],
        education: [
            { degree: 'MFA - Interaction Design', institution: 'School of Visual Arts, NYC', start: '2017', end: '2019', details: 'Thesis: Designing for Accessibility' },
            { degree: 'B.A. Graphic Design', institution: 'Rhode Island School of Design', start: '2013', end: '2017', details: 'Departmental Honors' }
        ],
        certEducation: [
            { name: 'Google UX Design Professional Certificate', issuer: 'Google', date: '2022' },
            { name: 'Accessibility Specialist', issuer: 'IAAP', date: '2023' }
        ],
        experience: [
            { title: 'Senior Product Designer', company: 'Airbnb', start: 'Feb 2021', end: 'Present', description: 'Lead designer for Booking Experience team serving 100M+ users\nCreated comprehensive design system used by 20+ product teams\nConducted 50+ user research studies informing product strategy\nMentored 4 junior designers and led design critiques' },
            { title: 'UX Designer', company: 'Spotify', start: 'Jun 2019', end: 'Jan 2021', description: 'Redesigned playlist creation flow increasing engagement by 35%\nCollaborated with 6 engineers and 2 PMs in agile squad\nBuilt interactive prototypes for stakeholder presentations\nContributed to Spotify\'s design system (Backstage)' }
        ],
        projects: 'Design System Portfolio\n- Built scalable design system with 200+ components\n- Published case study with 10K+ views on Medium',
        certifications: 'Google UX Design Certificate (2022)\nCertified Accessibility Specialist (2023)\nFigma Advanced Certification (2023)',
        languages: 'English (Native)\nFrench (Professional)\nItalian (Conversational)',
        professionalSummary: 'Creative Product Designer with 5+ years of experience crafting intuitive, beautiful user experiences for millions of users. Expert in design systems, user research, and prototyping. Passionate about accessibility and inclusive design practices that make products work for everyone.',
        volunteer: [
            { role: 'UX Mentor', org: 'ADPList', start: '2021', end: 'Present', achievements: '- Mentored 30+ aspiring designers from underrepresented backgrounds\n- Provided portfolio reviews and career guidance' }
        ],
        publications: [
            { title: 'Designing for Accessibility: A Practical Guide', journal: 'A List Apart', date: 'May 2022', url: 'https://alistapart.com/article/accessibility-guide', description: 'Comprehensive guide to building accessible web applications' }
        ],
        patents: [
            { title: 'Interactive Prototyping System for Design Teams', number: 'Pending (US 17/123,456)', date: '2023', description: 'Tool enabling real-time collaboration between designers and developers' }
        ],
        references: [
            { name: 'Lisa Park', title: 'Design Director', company: 'Airbnb', relationship: 'Manager', email: 'l.park@airbnb.com', phone: '+1 (555) 444-5555' }
        ],
        memberships: [
            { org: 'AIGA (American Institute of Graphic Arts)', role: 'Professional Member', duration: '2019 - Present', activities: 'Speaker at local design events' },
            { org: 'Interaction Design Association', role: 'Member', duration: '2020 - Present', activities: '' }
        ],
        softSkills: [
            { name: 'Creativity', level: 'expert' },
            { name: 'Communication', level: 'expert' },
            { name: 'Collaboration', level: 'expert' },
            { name: 'Empathy', level: 'expert' },
            { name: 'Adaptability', level: 'advanced' }
        ],
        portfolio: [
            { title: 'Behance Portfolio', url: 'https://behance.net/alexmorgan', description: 'Award-winning UX/UI design projects' },
            { title: 'Dribbble Profile', url: 'https://dribbble.com/alexmorgan', description: '200+ design shots with 5K+ followers' }
        ]
    },
    education: {
        username: 'jennifer.thompson',
        fullname: 'Jennifer Thompson, Ed.D',
        objective: 'Passionate educator and curriculum developer with 10+ years of experience creating engaging learning experiences for diverse student populations. Committed to leveraging educational technology and evidence-based pedagogical approaches to improve student outcomes.',
        email: 'jennifer.thompson@edu.com',
        phone: '+1 (555) 678-9012',
        address: '888 Education Lane, Chicago, IL 60601',
        linkedin: 'https://linkedin.com/in/jenniferthompson-edu',
        github: '',
        website: 'https://jenniferthompson.edu',
        twitter: '',
        skills: [
            { name: 'Curriculum Development', level: 'expert' },
            { name: 'Educational Technology', level: 'expert' },
            { name: 'Classroom Management', level: 'expert' },
            { name: 'Differentiated Instruction', level: 'advanced' },
            { name: 'Assessment Design', level: 'advanced' },
            { name: 'Data Analysis', level: 'intermediate' }
        ],
        education: [
            { degree: 'Ed.D - Curriculum & Instruction', institution: 'Teachers College, Columbia University', start: '2016', end: '2020', details: 'Dissertation: Technology Integration in Urban Classrooms' },
            { degree: 'M.Ed - Education', institution: 'University of Chicago', start: '2012', end: '2014', details: 'Secondary Education Certification' },
            { degree: 'B.A. English Literature', institution: 'Northwestern University', start: '2008', end: '2012', details: 'Magna Cum Laude' }
        ],
        certEducation: [
            { name: 'Illinois Professional Educator License', issuer: 'Illinois State Board of Education', date: '2014' },
            { name: 'Google Certified Educator Level 2', issuer: 'Google for Education', date: '2023' }
        ],
        experience: [
            { title: 'English Department Chair', company: 'Lincoln Park High School, Chicago', start: 'Aug 2018', end: 'Present', description: 'Lead department of 12 teachers serving 1,500+ students\nDeveloped new AP English curriculum increasing pass rates by 40%\nImplemented data-driven instruction improving test scores by 25%\nMentored 5 new teachers and conducted 20+ professional development sessions' },
            { title: 'English Teacher (Grades 9-12)', company: 'Walter Payton College Prep', start: 'Aug 2014', end: 'Jul 2018', description: 'Taught Honors and AP English to diverse student populations\nAchieved 95% college acceptance rate among seniors\nIntegrated technology tools increasing student engagement by 50%\nLed after-school writing workshop for 30+ students' }
        ],
        projects: 'Digital Literacy Initiative\n- Launched school-wide program reaching 2,000+ students\n- Secured $50K grant for technology integration',
        certifications: 'Illinois Professional Educator License (2014)\nGoogle Certified Educator Level 2 (2023)\nAP English Certified Instructor (2016)\nCPR/First Aid Certified (2023)',
        languages: 'English (Native)\nSpanish (Professional)\nAmerican Sign Language (Conversational)',
        professionalSummary: 'Passionate educator and curriculum developer with 10+ years of experience creating engaging learning experiences for diverse student populations. Expert in educational technology, differentiated instruction, and evidence-based pedagogical approaches. Proven track record of improving student outcomes through innovative teaching methods and data-driven instruction.',
        volunteer: [
            { role: 'Literacy Tutor', org: 'Chicago Public Library', start: '2015', end: 'Present', achievements: '- Tutoring 15+ students weekly in reading and writing\n- Organized summer reading program serving 100+ children' }
        ],
        publications: [
            { title: 'Technology Integration in Urban Classrooms', journal: 'Journal of Educational Technology', date: 'Fall 2021', url: 'https://doi.org/10.1080/example', description: 'Research on effective technology adoption in under-resourced schools' }
        ],
        patents: [],
        references: [
            { name: 'Dr. Mark Stevens', title: 'Principal', company: 'Lincoln Park High School', relationship: 'Supervisor', email: 'm.stevens@cps.edu', phone: '+1 (555) 555-6666' }
        ],
        memberships: [
            { org: 'National Education Association', role: 'Active Member', duration: '2014 - Present', activities: 'Presenter at annual conferences' },
            { org: 'International Society for Technology in Education', role: 'Member', duration: '2018 - Present', activities: 'Contributor to EdTech publications' }
        ],
        softSkills: [
            { name: 'Communication', level: 'expert' },
            { name: 'Leadership', level: 'expert' },
            { name: 'Patience', level: 'expert' },
            { name: 'Adaptability', level: 'expert' },
            { name: 'Empathy', level: 'expert' }
        ],
        portfolio: [
            { title: 'Professional Teaching Portfolio', url: 'https://jenniferthompson.edu', description: 'Lesson plans, student success stories, and teaching philosophy' }
        ]
    },
    marketing: {
        username: 'david.patel',
        fullname: 'David Patel',
        objective: 'Data-driven Digital Marketing Manager with 6+ years of experience scaling DTC brands through performance marketing, SEO, and content strategy. Proven ability to drive measurable growth and maximize ROI across multiple channels.',
        email: 'david.patel@marketing.com',
        phone: '+1 (555) 789-0123',
        address: '777 Marketing Plaza, Austin, TX 78701',
        linkedin: 'https://linkedin.com/in/davidpatel-marketing',
        github: '',
        website: 'https://davidpatel.marketing',
        twitter: 'https://twitter.com/davidpatel_mktg',
        skills: [
            { name: 'Google Ads', level: 'expert' },
            { name: 'Facebook Ads Manager', level: 'expert' },
            { name: 'SEO/SEM', level: 'expert' },
            { name: 'Google Analytics', level: 'advanced' },
            { name: 'Content Strategy', level: 'advanced' },
            { name: 'HubSpot', level: 'advanced' }
        ],
        education: [
            { degree: 'MBA - Marketing', institution: 'University of Texas at Austin', start: '2016', end: '2018', details: 'Marketing Analytics Concentration, GPA: 3.85/4.0' },
            { degree: 'B.A. Communications', institution: 'Boston University', start: '2012', end: '2016', details: 'Minor in Business Administration' }
        ],
        certEducation: [
            { name: 'Google Ads Certified Professional', issuer: 'Google', date: '2023' },
            { name: 'HubSpot Inbound Marketing Certified', issuer: 'HubSpot Academy', date: '2023' }
        ],
        experience: [
            { title: 'Senior Digital Marketing Manager', company: 'DTC E-commerce Brand ($50M ARR)', start: 'Apr 2020', end: 'Present', description: 'Manage $2M+ annual digital advertising budget across Google, Facebook, and TikTok\nGrew organic traffic by 250% through comprehensive SEO strategy\nIncreased ROAS by 65% through data-driven campaign optimization\nLead team of 5 marketing specialists and coordinate with 3 agencies' },
            { title: 'Digital Marketing Specialist', company: 'Tech Startup', start: 'Jul 2018', end: 'Mar 2020', description: 'Built paid acquisition channels from 0 to $500K ARR in 18 months\nManaged SEO strategy increasing organic traffic by 180%\nCreated content marketing calendar and managed 4 freelance writers\nA/B tested landing pages improving conversion rate by 45%' }
        ],
        projects: 'Brand Launch Campaign\n- Successfully launched DTC brand achieving $1M in first-year revenue\n- Built marketing funnel with 15% email capture rate',
        certifications: 'Google Ads Certified (2023)\nHubSpot Inbound Marketing Certified (2023)\nGoogle Analytics Individual Qualification (2023)\nFacebook Blueprint Certified (2022)',
        languages: 'English (Native)\nHindi (Native)\nSpanish (Conversational)',
        professionalSummary: 'Data-driven Digital Marketing Manager with 6+ years of experience scaling DTC brands through performance marketing, SEO, and content strategy. Proven ability to drive measurable growth and maximize ROI across multiple channels. Expert in Google Ads, Facebook advertising, and analytics-driven campaign optimization.',
        volunteer: [
            { role: 'Marketing Advisor', org: 'SCORE Mentorship Program', start: '2021', end: 'Present', achievements: '- Provided free marketing consulting to 20+ small businesses\n- Helped 3 startups develop successful launch strategies' }
        ],
        publications: [
            { title: 'The Future of Performance Marketing in E-commerce', journal: 'Marketing Land', date: 'November 2022', url: 'https://marketingland.com/future-performance-marketing', description: 'Analysis of emerging trends in digital advertising and attribution' }
        ],
        patents: [],
        references: [
            { name: 'Rachel Green', title: 'VP of Marketing', company: 'DTC E-commerce Brand', relationship: 'Manager', email: 'r.green@company.com', phone: '+1 (555) 666-7777' }
        ],
        memberships: [
            { org: 'American Marketing Association', role: 'Professional Member', duration: '2018 - Present', activities: 'Speaker at digital marketing workshops' }
        ],
        softSkills: [
            { name: 'Communication', level: 'expert' },
            { name: 'Leadership', level: 'advanced' },
            { name: 'Creativity', level: 'expert' },
            { name: 'Analytical Thinking', level: 'expert' },
            { name: 'Collaboration', level: 'advanced' }
        ],
        portfolio: [
            { title: 'Marketing Case Studies', url: 'https://davidpatel.marketing', description: 'Detailed breakdowns of successful campaigns with 100+ examples' }
        ]
    }
};

// ========================================
// LOAD INDUSTRY SAMPLE DATA
// ========================================
function loadIndustrySample(industry) {
    var data = industrySampleData[industry];
    if (!data) {
        showToast('Sample data not found for this industry', 'error');
        return;
    }

    // Clear existing dynamic entries
    document.getElementById('skills-container').innerHTML = '';
    document.getElementById('education-container').innerHTML = '';
    document.getElementById('certification-education-container').innerHTML = '';
    document.getElementById('experience-container').innerHTML = '';
    document.getElementById('volunteer-container').innerHTML = '';
    document.getElementById('publications-container').innerHTML = '';
    document.getElementById('patents-container').innerHTML = '';
    document.getElementById('references-container').innerHTML = '';
    document.getElementById('memberships-container').innerHTML = '';
    document.getElementById('soft-skills-container').innerHTML = '';
    document.getElementById('portfolio-container').innerHTML = '';
    skillCounter = 0;
    educationCounter = 0;
    certEducationCounter = 0;
    experienceCounter = 0;
    volunteerCounter = 0;
    publicationsCounter = 0;
    patentsCounter = 0;
    referencesCounter = 0;
    membershipsCounter = 0;
    softSkillCounter = 0;
    portfolioCounter = 0;

    // Fill basic fields
    document.getElementById('username').value = data.username || '';
    document.getElementById('fullname').value = data.fullname || '';
    document.getElementById('objective').value = data.objective || '';
    document.getElementById('email').value = data.email || '';
    document.getElementById('phone').value = data.phone || '';
    document.getElementById('address').value = data.address || '';
    document.getElementById('linkedin').value = data.linkedin || '';
    document.getElementById('github').value = data.github || '';
    document.getElementById('website').value = data.website || '';
    document.getElementById('twitter').value = data.twitter || '';
    document.getElementById('ProfessionalSummary').value = data.professionalSummary || '';

    // Fill skills
    if (data.skills) {
        data.skills.forEach(function(skill) {
            skillCounter++;
            var container = document.getElementById('skills-container');
            var entry = document.createElement('div');
            entry.className = 'skill-entry';
            entry.setAttribute('data-skill', skillCounter);
            entry.innerHTML = '<div class="skill-name-input">' +
                '<input type="text" placeholder="e.g., JavaScript" class="skill-name" value="' + skill.name + '">' +
                '</div>' +
                '<div class="skill-rating-select">' +
                '<select class="skill-level">' +
                '<option value="">Select Level</option>' +
                '<option value="beginner"' + (skill.level === 'beginner' ? ' selected' : '') + '>Beginner</option>' +
                '<option value="intermediate"' + (skill.level === 'intermediate' ? ' selected' : '') + '>Intermediate</option>' +
                '<option value="advanced"' + (skill.level === 'advanced' ? ' selected' : '') + '>Advanced</option>' +
                '<option value="expert"' + (skill.level === 'expert' ? ' selected' : '') + '>Expert</option>' +
                '</select>' +
                '</div>';
            container.appendChild(entry);
        });
    }

    // Fill education
    if (data.education) {
        data.education.forEach(function(edu) {
            educationCounter++;
            addEducationEntry(edu);
        });
    }

    // Fill certifications
    if (data.certEducation) {
        data.certEducation.forEach(function(cert) {
            certEducationCounter++;
            addCertEducationEntry(cert);
        });
    }

    // Fill experience
    if (data.experience) {
        data.experience.forEach(function(exp) {
            experienceCounter++;
            addExperienceEntry(exp);
        });
    }

    // Fill volunteer
    if (data.volunteer) {
        data.volunteer.forEach(function(vol) {
            volunteerCounter++;
            addVolunteerEntry(vol);
        });
    }

    // Fill publications
    if (data.publications) {
        data.publications.forEach(function(pub) {
            publicationsCounter++;
            addPublicationEntry(pub);
        });
    }

    // Fill patents
    if (data.patents) {
        data.patents.forEach(function(pat) {
            patentsCounter++;
            addPatentEntry(pat);
        });
    }

    // Fill references
    if (data.references) {
        data.references.forEach(function(ref) {
            referencesCounter++;
            addReferenceEntry(ref);
        });
    }

    // Fill memberships
    if (data.memberships) {
        data.memberships.forEach(function(mem) {
            membershipsCounter++;
            addMembershipEntry(mem);
        });
    }

    // Fill soft skills
    if (data.softSkills) {
        data.softSkills.forEach(function(skill) {
            softSkillCounter++;
            var container = document.getElementById('soft-skills-container');
            var entry = document.createElement('div');
            entry.className = 'skill-entry';
            entry.setAttribute('data-skill', softSkillCounter);
            entry.innerHTML = '<div class="skill-name-input">' +
                '<input type="text" placeholder="e.g., Communication" class="skill-name" value="' + skill.name + '">' +
                '</div>' +
                '<div class="skill-rating-select">' +
                '<select class="skill-level">' +
                '<option value="">Select Level</option>' +
                '<option value="beginner"' + (skill.level === 'beginner' ? ' selected' : '') + '>Beginner</option>' +
                '<option value="intermediate"' + (skill.level === 'intermediate' ? ' selected' : '') + '>Intermediate</option>' +
                '<option value="advanced"' + (skill.level === 'advanced' ? ' selected' : '') + '>Advanced</option>' +
                '<option value="expert"' + (skill.level === 'expert' ? ' selected' : '') + '>Expert</option>' +
                '</select>' +
                '</div>';
            container.appendChild(entry);
        });
    }

    // Fill portfolio
    if (data.portfolio) {
        data.portfolio.forEach(function(port) {
            portfolioCounter++;
            addPortfolioEntry(port);
        });
    }

    // Fill other fields
    document.getElementById('Projects').value = data.projects || '';
    document.getElementById('Certifications').value = data.certifications || '';
    document.getElementById('Languages').value = data.languages || '';
    
    // Clear errors
    document.querySelectorAll('.error-message').forEach(function(e) { e.textContent = ''; });
    document.querySelectorAll('input, textarea').forEach(function(e) { e.classList.remove('error'); });
    
    var industryNames = {
        technology: 'Technology',
        healthcare: 'Healthcare',
        finance: 'Finance',
        design: 'Design',
        education: 'Education',
        marketing: 'Marketing'
    };
    
    showToast(industryNames[industry] + ' sample data loaded! Generate resume...', 'success');
    document.getElementById('builder').scrollIntoView({ behavior: 'smooth' });
    
    updateATSScore();
    
    setTimeout(function() { document.getElementById('generate-btn').click(); }, 600);
}

// ========================================
// ========================================
// AUTO-GENERATE OBJECTIVE (Enhanced)
// ========================================
function autoGenerateObjective(fullName, education, experience, skills) {
    var parts = [];
    var hasData = false;

    // Build professional identity from experience
    if (experience && experience.length > 0) {
        var latestExp = experience[0];
        if (latestExp.title) {
            var titleClean = latestExp.title.replace(/^(Senior|Junior|Lead|Principal|Chief|Head)\s+/i, '').trim();
            parts.push('Results-driven ' + titleClean);
            hasData = true;
        }
        if (latestExp.company) {
            parts[parts.length - 1] += ' with experience at ' + latestExp.company;
        }
    }

    // Add education context
    if (education && education.length > 0) {
        var latestEdu = education[0];
        var eduStr = latestEdu.degree || '';
        if (eduStr) {
            if (parts.length > 0) {
                parts.push('and a ' + eduStr + ' from ' + (latestEdu.institution || 'a leading institution'));
            } else {
                parts.push('Motivated ' + eduStr + ' graduate');
                hasData = true;
            }
        }
    }

    // Add skills context
    if (skills && skills.length > 0) {
        var topSkills = skills.filter(function(s) { return s.name && s.name.trim(); }).slice(0, 5);
        if (topSkills.length > 0) {
            var skillNames = topSkills.map(function(s) { return s.name; });
            if (skillNames.length === 1) {
                parts.push('skilled in ' + skillNames[0]);
            } else if (skillNames.length === 2) {
                parts.push('with expertise in ' + skillNames.join(' and '));
            } else {
                var lastSkill = skillNames.pop();
                parts.push('proficient in ' + skillNames.join(', ') + ', and ' + lastSkill);
            }
            hasData = true;
        }
    }

    // If no data, provide a generic professional objective
    if (!hasData) {
        return 'Dedicated professional committed to delivering high-quality results and contributing to organizational success through strong work ethic, continuous learning, and collaborative teamwork.';
    }

    // Build complete objective
    var objective = parts.join(' ') + ', seeking to leverage my expertise to drive innovation and deliver impactful solutions in a dynamic, growth-oriented organization.';

    return objective;
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type) {
    type = type || 'success';
    var existing = document.querySelector('.toast');
    if (existing) existing.remove();
    var toast = document.createElement('div');
    toast.className = 'toast' + (type === 'error' ? ' error' : '');
    toast.innerHTML = '<span class="toast-message">' + message + '</span>';
    document.body.appendChild(toast);
    setTimeout(function() {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(function() { toast.remove(); }, 300);
    }, 3000);
}

// ========================================
// AUTO-SAVE FUNCTIONALITY
// ========================================
function autoSave() {
    var indicator = document.getElementById('auto-save-indicator');
    var spinner = document.getElementById('auto-save-spinner');
    var text = document.getElementById('auto-save-text');
    
    indicator.classList.add('show', 'saving');
    spinner.style.display = 'block';
    text.textContent = 'Saving...';
    
    clearTimeout(autoSaveTimeout);
    
    autoSaveTimeout = setTimeout(function() {
        try {
            var formData = collectFormData();
            localStorage.setItem('resumeDraft', JSON.stringify(formData));
            
            spinner.style.display = 'none';
            text.textContent = 'Saved ✓';
            indicator.classList.remove('saving');
            indicator.classList.add('saved');
            
            setTimeout(function() {
                indicator.classList.remove('show', 'saved');
            }, 2000);
        } catch (e) {
            console.error('Auto-save failed:', e);
            spinner.style.display = 'none';
            text.textContent = 'Save failed';
            indicator.classList.remove('saving');
            indicator.classList.add('saved');
        }
    }, 1000);
}

function loadDraft() {
    try {
        var draft = localStorage.getItem('resumeDraft');
        if (draft) {
            var formData = JSON.parse(draft);
            restoreFormData(formData);
            showToast('Draft restored from your last session', 'success');
        }
    } catch (e) {
        console.error('Failed to load draft:', e);
    }
}

function collectFormData() {
    var data = {
        username: document.getElementById('username').value,
        fullname: document.getElementById('fullname').value,
        objective: document.getElementById('objective').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        linkedin: document.getElementById('linkedin').value,
        github: document.getElementById('github').value,
        website: document.getElementById('website').value,
        twitter: document.getElementById('twitter').value,
        skills: collectSkills(),
        education: collectEducation(),
        certEducation: collectCertEducation(),
        experience: collectExperience(),
        projects: document.getElementById('Projects').value,
        certifications: document.getElementById('Certifications').value,
        languages: document.getElementById('Languages').value,
        otherActivities: document.getElementById('OtherActivities').value
    };
    return data;
}

function collectSkills() {
    var skills = [];
    document.querySelectorAll('#skills-container .skill-entry').forEach(function(entry) {
        var name = entry.querySelector('.skill-name').value;
        var level = entry.querySelector('.skill-level').value;
        if (name) {
            skills.push({ name: name, level: level });
        }
    });
    return skills;
}

function collectEducation() {
    var entries = [];
    document.querySelectorAll('#education-container .entry-item').forEach(function(item) {
        entries.push({
            degree: item.querySelector('.education-degree').value,
            institution: item.querySelector('.education-institution').value,
            start: item.querySelector('.education-start').value,
            end: item.querySelector('.education-end').value,
            details: item.querySelector('.education-details').value
        });
    });
    return entries;
}

function collectCertEducation() {
    var entries = [];
    document.querySelectorAll('#certification-education-container .entry-item').forEach(function(item) {
        entries.push({
            name: item.querySelector('.cert-name').value,
            issuer: item.querySelector('.cert-issuer').value,
            date: item.querySelector('.cert-date').value
        });
    });
    return entries;
}

function collectExperience() {
    var entries = [];
    document.querySelectorAll('#experience-container .entry-item').forEach(function(item) {
        var startDateInput = item.querySelector('.exp-start-date');
        var endDateInput = item.querySelector('.exp-end-date');
        var isCurrent = item.querySelector('.exp-current-position');

        var startDate = '';
        var endDate = '';

        if (startDateInput && startDateInput.value) {
            var sd = new Date(startDateInput.value);
            startDate = sd.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        }

        if (isCurrent && isCurrent.checked) {
            endDate = 'Present';
        } else if (endDateInput && endDateInput.value) {
            var ed = new Date(endDateInput.value);
            endDate = ed.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        }

        // Backwards compatibility: also check for old text fields
        if (!startDate) {
            var oldStart = item.querySelector('.exp-start');
            if (oldStart) startDate = oldStart.value;
        }
        if (!endDate) {
            var oldEnd = item.querySelector('.exp-end');
            if (oldEnd) endDate = oldEnd.value;
        }

        entries.push({
            title: item.querySelector('.exp-title').value,
            company: item.querySelector('.exp-company').value,
            start: startDate,
            end: endDate,
            description: item.querySelector('.exp-description').value
        });
    });
    return entries;
}

// ========================================
// NEW CATEGORY DATA COLLECTION FUNCTIONS
// ========================================

function collectVolunteer() {
    var entries = [];
    document.querySelectorAll('#volunteer-container .entry-item').forEach(function(item) {
        entries.push({
            role: item.querySelector('.volunteer-role').value,
            org: item.querySelector('.volunteer-org').value,
            start: item.querySelector('.volunteer-start').value,
            end: item.querySelector('.volunteer-end').value,
            achievements: item.querySelector('.volunteer-achievements').value
        });
    });
    return entries;
}

function collectPublications() {
    var entries = [];
    document.querySelectorAll('#publications-container .entry-item').forEach(function(item) {
        entries.push({
            title: item.querySelector('.pub-title').value,
            journal: item.querySelector('.pub-journal').value,
            date: item.querySelector('.pub-date').value,
            url: item.querySelector('.pub-url').value,
            description: item.querySelector('.pub-description').value
        });
    });
    return entries;
}

function collectPatents() {
    var entries = [];
    document.querySelectorAll('#patents-container .entry-item').forEach(function(item) {
        entries.push({
            title: item.querySelector('.patent-title').value,
            number: item.querySelector('.patent-number').value,
            date: item.querySelector('.patent-date').value,
            description: item.querySelector('.patent-description').value
        });
    });
    return entries;
}

function collectReferences() {
    var entries = [];
    document.querySelectorAll('#references-container .entry-item').forEach(function(item) {
        entries.push({
            name: item.querySelector('.ref-name').value,
            title: item.querySelector('.ref-title').value,
            company: item.querySelector('.ref-company').value,
            relationship: item.querySelector('.ref-relationship').value,
            email: item.querySelector('.ref-email').value,
            phone: item.querySelector('.ref-phone').value
        });
    });
    return entries;
}

function collectMemberships() {
    var entries = [];
    document.querySelectorAll('#memberships-container .entry-item').forEach(function(item) {
        entries.push({
            org: item.querySelector('.member-org').value,
            role: item.querySelector('.member-role').value,
            duration: item.querySelector('.member-duration').value,
            activities: item.querySelector('.member-activities').value
        });
    });
    return entries;
}

function collectSoftSkills() {
    var skills = [];
    document.querySelectorAll('#soft-skills-container .skill-entry').forEach(function(entry) {
        skills.push({
            name: entry.querySelector('.skill-name').value,
            level: entry.querySelector('.skill-level').value
        });
    });
    return skills;
}

function collectPortfolio() {
    var entries = [];
    document.querySelectorAll('#portfolio-container .entry-item').forEach(function(item) {
        entries.push({
            title: item.querySelector('.portfolio-title').value,
            url: item.querySelector('.portfolio-url').value,
            description: item.querySelector('.portfolio-description').value
        });
    });
    return entries;
}

function restoreFormData(data) {
    document.getElementById('username').value = data.username || '';
    document.getElementById('fullname').value = data.fullname || '';
    document.getElementById('objective').value = data.objective || '';
    document.getElementById('email').value = data.email || '';
    document.getElementById('phone').value = data.phone || '';
    document.getElementById('address').value = data.address || '';
    document.getElementById('linkedin').value = data.linkedin || '';
    document.getElementById('github').value = data.github || '';
    document.getElementById('website').value = data.website || '';
    document.getElementById('twitter').value = data.twitter || '';
    
    if (data.skills && data.skills.length > 0) {
        restoreSkills(data.skills);
    }
    
    if (data.education && data.education.length > 0) {
        restoreEducation(data.education);
    }
    
    if (data.certEducation && data.certEducation.length > 0) {
        restoreCertEducation(data.certEducation);
    }
    
    if (data.experience && data.experience.length > 0) {
        restoreExperience(data.experience);
    }
    
    document.getElementById('Projects').value = data.projects || '';
    document.getElementById('Certifications').value = data.certifications || '';
    document.getElementById('Languages').value = data.languages || '';
    document.getElementById('OtherActivities').value = data.otherActivities || '';

    updateATSScore();
}

function restoreSkills(skills) {
    var container = document.getElementById('skills-container');
    container.innerHTML = '';
    skillCounter = 0;
    
    skills.forEach(function(skill) {
        skillCounter++;
        var entry = document.createElement('div');
        entry.className = 'skill-entry';
        entry.setAttribute('data-skill', skillCounter);
        entry.innerHTML = '<div class="skill-name-input">' +
            '<input type="text" placeholder="e.g., JavaScript" class="skill-name" value="' + skill.name + '">' +
            '</div>' +
            '<div class="skill-rating-select">' +
            '<select class="skill-level">' +
            '<option value="">Select Level</option>' +
            '<option value="beginner"' + (skill.level === 'beginner' ? ' selected' : '') + '>Beginner</option>' +
            '<option value="intermediate"' + (skill.level === 'intermediate' ? ' selected' : '') + '>Intermediate</option>' +
            '<option value="advanced"' + (skill.level === 'advanced' ? ' selected' : '') + '>Advanced</option>' +
            '<option value="expert"' + (skill.level === 'expert' ? ' selected' : '') + '>Expert</option>' +
            '</select>' +
            '</div>';
        container.appendChild(entry);
    });
}

function restoreEducation(entries) {
    var container = document.getElementById('education-container');
    container.innerHTML = '';
    educationCounter = 0;
    
    entries.forEach(function(entry) {
        educationCounter++;
        addEducationEntry(entry);
    });
}

function restoreCertEducation(entries) {
    var container = document.getElementById('certification-education-container');
    container.innerHTML = '';
    certEducationCounter = 0;
    
    entries.forEach(function(entry) {
        certEducationCounter++;
        addCertEducationEntry(entry);
    });
}

function restoreExperience(entries) {
    var container = document.getElementById('experience-container');
    container.innerHTML = '';
    experienceCounter = 0;
    
    entries.forEach(function(entry) {
        experienceCounter++;
        addExperienceEntry(entry);
    });
}

// Add event listeners for auto-save
function setupAutoSave() {
    var inputs = document.querySelectorAll('#resume-form input, #resume-form textarea, #resume-form select');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            autoSave();
            updateATSScore();
        });
        input.addEventListener('change', function() {
            autoSave();
            updateATSScore();
        });
    });
}

// ========================================
// RESUME UPLOAD & PARSING
// ========================================
function setupResumeUpload() {
    var uploadInput = document.getElementById('resume-upload');
    var dropzone = document.getElementById('upload-dropzone');
    
    if (!uploadInput) return;
    
    // File input change
    uploadInput.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            handleResumeUpload(e.target.files[0]);
        }
    });
    
    // Drag and drop
    if (dropzone) {
        dropzone.addEventListener('dragover', function(e) {
            e.preventDefault();
            dropzone.classList.add('drag-over');
        });
        
        dropzone.addEventListener('dragleave', function() {
            dropzone.classList.remove('drag-over');
        });
        
        dropzone.addEventListener('drop', function(e) {
            e.preventDefault();
            dropzone.classList.remove('drag-over');
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                handleResumeUpload(e.dataTransfer.files[0]);
            }
        });
    }
}

function handleResumeUpload(file) {
    console.log('=== UPLOAD STARTED ===');
    console.log('File name:', file.name);
    console.log('File size:', file.size);
    console.log('File type:', file.type);
    
    // Validate file
    var allowedExtensions = ['.doc', '.docx', '.pdf'];
    var fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    
    console.log('File extension:', fileExtension);
    console.log('Allowed extensions:', allowedExtensions);

    if (!allowedExtensions.includes(fileExtension)) {
        showToast('Please upload a DOC, DOCX, or PDF file', 'error');
        return;
    }

    if (file.size > 10 * 1024 * 1024) {
        showToast('File size must be under 10MB', 'error');
        return;
    }

    // Show progress
    showUploadProgress('Processing your resume...');

    // Process based on file type
    if (fileExtension === '.docx') {
        console.log('Processing as DOCX');
        parseDOCX(file);
    } else if (fileExtension === '.pdf') {
        console.log('Processing as PDF');
        parsePDF(file);
    } else if (fileExtension === '.doc') {
        showToast('DOC format not supported. Please convert to DOCX or PDF', 'error');
        hideUploadProgress();
    }
}

function parseDOCX(file) {
    updateUploadProgress(30, 'Extracting text from document...');

    var reader = new FileReader();
    reader.onload = function(e) {
        try {
            updateUploadProgress(60, 'Parsing resume data...');

            console.log('Attempting to parse DOCX file...');
            console.log('File size:', file.size, 'bytes');

            // Try extractRawText first
            mammoth.extractRawText({ arrayBuffer: e.target.result })
                .then(function(result) {
                    var text = result.value;
                    console.log('DOCX extracted text length:', text.length);
                    console.log('First 1000 chars:', text.substring(0, 1000));
                    
                    if (!text || text.trim().length === 0) {
                        // Fallback: try extractDocuments
                        return mammoth.extractDocuments({ arrayBuffer: e.target.result });
                    }
                    
                    updateUploadProgress(90, 'Populating fields...');
                    extractAndPopulateData(text);
                    updateUploadProgress(100, 'Complete!');
                    showUploadResult('Resume uploaded and parsed successfully!');
                    showToast('Resume data extracted successfully!', 'success');
                })
                .catch(function(err) {
                    console.error('extractRawText failed, trying alternative...', err);
                    
                    // Fallback: try converting with different options
                    mammoth.convertToHtml({ arrayBuffer: e.target.result })
                        .then(function(result) {
                            // Strip HTML tags to get plain text
                            var tempDiv = document.createElement('div');
                            tempDiv.innerHTML = result.value;
                            var text = tempDiv.textContent || tempDiv.innerText || '';
                            
                            console.log('DOCX extracted via HTML conversion, length:', text.length);
                            console.log('First 500 chars:', text.substring(0, 500));
                            
                            if (text.length < 50) {
                                throw new Error('Extracted text too short: ' + text.length + ' chars');
                            }
                            
                            updateUploadProgress(90, 'Populating fields...');
                            extractAndPopulateData(text);
                            updateUploadProgress(100, 'Complete!');
                            showUploadResult('Resume uploaded and parsed successfully!');
                            showToast('Resume data extracted successfully!', 'success');
                        })
                        .catch(function(err2) {
                            console.error('HTML conversion failed, trying plain text...', err2);
                            
                            // Last resort: try reading as plain text
                            var textReader = new FileReader();
                            textReader.onload = function(e2) {
                                var text = e2.target.result;
                                console.log('Read as plain text, length:', text.length);
                                
                                if (text.length < 100) {
                                    throw new Error('Extracted text too short');
                                }
                                
                                updateUploadProgress(90, 'Populating fields...');
                                extractAndPopulateData(text);
                                updateUploadProgress(100, 'Complete!');
                                showUploadResult('Resume uploaded (plain text mode)!');
                                showToast('Resume data extracted (basic mode)!', 'success');
                            };
                            textReader.onerror = function() {
                                throw err2;
                            };
                            textReader.readAsText(file);
                        });
                });
        } catch (error) {
            console.error('DOCX parsing exception:', error);
            hideUploadProgress();
            showToast('Failed to parse document. Please fill manually.', 'error');
        }
    };
    reader.onerror = function() {
        hideUploadProgress();
        showToast('Failed to read file', 'error');
    };
    reader.readAsArrayBuffer(file);
}

function parsePDF(file) {
    updateUploadProgress(30, 'Extracting text from PDF...');
    
    var reader = new FileReader();
    reader.onload = function(e) {
        updateUploadProgress(60, 'Parsing resume data...');
        
        var typedarray = new Uint8Array(e.target.result);
        
        pdfjsLib.getDocument(typedarray).promise.then(function(pdf) {
            var textPromises = [];
            for (var i = 1; i <= pdf.numPages; i++) {
                textPromises.push(pdf.getPage(i).then(function(page) {
                    return page.getTextContent().then(function(textContent) {
                        // Sort items by Y position (top to bottom) then X position (left to right)
                        var items = textContent.items.map(function(item) {
                            return {
                                str: item.str,
                                x: item.transform[4],
                                y: item.transform[5]
                            };
                        });
                        
                        // Group by lines (similar Y positions)
                        var lines = {};
                        items.forEach(function(item) {
                            var yKey = Math.round(item.y / 10); // Group by 10px bands
                            if (!lines[yKey]) lines[yKey] = [];
                            lines[yKey].push(item);
                        });
                        
                        // Sort lines by Y (descending - top to bottom)
                        var sortedY = Object.keys(lines).sort(function(a, b) { return b - a; });
                        
                        var pageText = '';
                        sortedY.forEach(function(yKey) {
                            // Sort items in line by X (left to right)
                            var lineItems = lines[yKey].sort(function(a, b) { return a.x - b.x; });
                            var lineText = lineItems.map(function(item) { return item.str; }).join(' ');
                            pageText += lineText.trim() + '\n';
                        });
                        
                        return pageText;
                    });
                }));
            }
            
            Promise.all(textPromises).then(function(pages) {
                updateUploadProgress(90, 'Populating fields...');
                var fullText = pages.join('\n');
                console.log('Full extracted text:', fullText.substring(0, 1000));
                extractAndPopulateData(fullText);
                updateUploadProgress(100, 'Complete!');
                showUploadResult('Resume uploaded and parsed successfully!');
                showToast('Resume data extracted successfully!', 'success');
            });
        }).catch(function(err) {
            console.error('PDF parsing error:', err);
            hideUploadProgress();
            showToast('Failed to parse PDF. Please fill manually.', 'error');
        });
    };
    reader.onerror = function() {
        hideUploadProgress();
        showToast('Failed to read file', 'error');
    };
    reader.readAsArrayBuffer(file);
}

function extractAndPopulateData(text) {
    console.log('=== EXTRACTION STARTED ===');
    console.log('Input text length:', text.length);
    console.log('Input text preview:', text.substring(0, 500));
    console.log('Full text for debugging:', text);
    
    // Save raw text for debugging
    window._extractedText = text;
    
    // Smart data extraction using keyword-based section detection
    var extracted = {
        fullname: '',
        email: '',
        phone: '',
        address: '',
        objective: '',
        skills: [],
        experience: [],
        education: [],
        certifications: '',
        languages: '',
        otherActivities: '',
        linkedin: '',
        github: '',
        website: ''
    };
    
    // Normalize text - clean up extra whitespace and formatting artifacts
    text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    // Remove long underscore lines (formatting artifacts)
    text = text.replace(/_{10,}/g, '\n');
    // Remove long dash lines
    text = text.replace(/-{10,}/g, '\n');
    // Clean up multiple newlines
    text = text.replace(/\n{3,}/g, '\n\n');
    
    console.log('Extracted text length:', text.length);
    console.log('First 500 chars:', text.substring(0, 500));
    
    // ========================================
    // EXTRACT CONTACT INFORMATION
    // ========================================
    
    // Extract email (multiple patterns)
    var emailPatterns = [
        /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
        /Email[:\s]+([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi
    ];
    for (var i = 0; i < emailPatterns.length; i++) {
        var emailMatch = text.match(emailPatterns[i]);
        if (emailMatch) {
            extracted.email = emailMatch[0].replace(/^Email[:\s]+/i, '');
            break;
        }
    }
    
    // Extract phone (multiple international formats)
    var phonePatterns = [
        /Cell[#\s]*[:\s]*([+\d][-\d\s]{7,19}\d)/gi,
        /Mobile[#\s]*[:\s]*([+\d][-\d\s]{7,19}\d)/gi,
        /Phone[#\s]*[:\s]*([+\d][-\d\s]{7,19}\d)/gi,
        /Tel[#\s]*[:\s]*([+\d][-\d\s]{7,19}\d)/gi,
        /(\+[0-9]{1,4}[-.\s]?[0-9]{2,4}[-.\s]?[0-9]{6,14})/,  // International with country code
        /(\+?92[-.\s]?\d{3}[-.\s]?\d{7})/,  // Pakistan format
        /(\+?1[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4})/,  // US format
        /(\d{3}[-.\s]?\d{3}[-.\s]?\d{4})/  // Basic format
    ];
    for (var i = 0; i < phonePatterns.length; i++) {
        var phoneMatch = text.match(phonePatterns[i]);
        if (phoneMatch) {
            var phoneVal = phoneMatch[1] || phoneMatch[0];
            // Clean up the phone number
            phoneVal = phoneVal.replace(/^(Cell|Mobile|Phone|Tel)[#\s]*[:\s]*/i, '').trim();
            // Remove extra spaces but keep dashes
            phoneVal = phoneVal.replace(/\s+/g, '').replace(/[-]+/g, '-');
            if (phoneVal.length >= 7 && phoneVal.length <= 20 && /\d/.test(phoneVal)) {
                extracted.phone = phoneVal;
                break;
            }
        }
    }
    
    // Extract LinkedIn
    var linkedinPatterns = [
        /(linkedin\.com\/in\/[a-zA-Z0-9_-]+)/gi,
        /LinkedIn[:\s]+(https?:\/\/[^\s\n]+)/gi
    ];
    for (var i = 0; i < linkedinPatterns.length; i++) {
        var linkedinMatch = text.match(linkedinPatterns[i]);
        if (linkedinMatch) {
            var linkedinUrl = linkedinMatch[0];
            if (!linkedinUrl.startsWith('http')) {
                linkedinUrl = 'https://' + linkedinUrl;
            }
            extracted.linkedin = linkedinUrl;
            break;
        }
    }
    
    // Extract GitHub
    var githubPatterns = [
        /(github\.com\/[a-zA-Z0-9_-]+)/gi,
        /GitHub[:\s]+(https?:\/\/[^\s\n]+)/gi
    ];
    for (var i = 0; i < githubPatterns.length; i++) {
        var githubMatch = text.match(githubPatterns[i]);
        if (githubMatch) {
            var githubUrl = githubMatch[0];
            if (!githubUrl.startsWith('http')) {
                githubUrl = 'https://' + githubUrl;
            }
            extracted.github = githubUrl;
            break;
        }
    }
    
    // Extract website/portfolio
    var websitePatterns = [
        /(https?:\/\/[a-zA-Z0-9.-]+\.[a-z]{2,})/g,
        /Website[:\s]+(https?:\/\/[^\s\n]+)/gi,
        /Portfolio[:\s]+(https?:\/\/[^\s\n]+)/gi
    ];
    for (var i = 0; i < websitePatterns.length; i++) {
        var matches = text.match(websitePatterns[i]);
        if (matches) {
            for (var j = 0; j < matches.length; j++) {
                var url = matches[j];
                if (!url.includes('linkedin') && !url.includes('github') && 
                    !url.includes('email') && !url.includes('Phone')) {
                    extracted.website = url.replace(/^(Website|Portfolio)[:\s]+/i, '');
                    break;
                }
            }
            if (extracted.website) break;
        }
    }
    
    // ========================================
    // EXTRACT NAME (usually at the very top)
    // ========================================
    var allLines = text.split('\n').map(function(l) { return l.trim(); }).filter(function(l) { return l && l.length > 3; });
    
    if (allLines.length > 0) {
        var firstLine = allLines[0];
        // Name is typically:
        // 1. First line if it's 2-4 capitalized words
        // 2. Not containing common resume keywords
        var nameKeywords = ['experience', 'education', 'skills', 'objective', 'summary', 'contact', 'phone', 'email'];
        var isName = true;
        
        for (var i = 0; i < nameKeywords.length; i++) {
            if (firstLine.toLowerCase().includes(nameKeywords[i])) {
                isName = false;
                break;
            }
        }
        
        if (isName && /^([A-Z][a-z'.-]+[\s-]?){1,4}$/.test(firstLine) && firstLine.length < 60) {
            extracted.fullname = firstLine;
        } else if (allLines.length > 1) {
            // Try second line
            var secondLine = allLines[1];
            if (/^([A-Z][a-z'.-]+[\s-]?){1,4}$/.test(secondLine) && secondLine.length < 60) {
                extracted.fullname = secondLine;
            }
        }
    }
    
    // ========================================
    // SECTION-BASED PARSING
    // ========================================
    
    // Common section headers in resumes - handles various formats including underlines, dashes, etc.
    var sectionHeaders = {
        objective: /(^|\n)\s*(objective|career objective|professional summary|summary|profile|about me|career goal)\s*[\-_–—=.#~\s]*(\n|$)/gi,
        summary: /(^|\n)\s*(professional summary|summary|about|about me|profile)\s*[\-_–—=.#~\s]*(\n|$)/gi,
        skills: /(^|\n)\s*(skills|technical skills|software skills|core competencies|competencies|expertise|proficiencies|technologies|tools & technologies|knowledge|literary skills)\s*[\-_–—=.#~\s]*(\n|$)/gi,
        academicEducation: /(^|\n)\s*(academic.*?education|academic.*?qualifications?|educational.*?background)\s*[\-_–—=.#~\s]*(\n|$)/gi,
        professionalEducation: /(^|\n)\s*(professional.*?education|professional.*?qualifications?|certifications?|training|professional development|courses?|diplomas?)\s*[\-_–—=.#~\s]*(\n|$)/gi,
        education: /(^|\n)\s*(education|academic background|educational qualifications|qualifications|academic qualifications|educational background|academic & professional education|academic & professional)\s*[\-_–—=.#~\s]*(\n|$)/gi,
        experience: /(^|\n)\s*(work experience|experience|professional experience|employment history|career history|work history|professional background|technical work experience)\s*[\-_–—=.#~\s]*(\n|$)/gi,
        certifications: /(^|\n)\s*(certifications & awards|awards|honors|licenses|literary awards|awards? &? honors?)\s*[\-_–—=.#~\s]*(\n|$)/gi,
        projects: /(^|\n)\s*(projects|key projects|major projects|selected projects|personal projects)\s*[\-_–—=.#~\s]*(\n|$)/gi,
        languages: /(^|\n)\s*(languages|language skills|spoken languages|linguistic skills)\s*[\-_–—=.#~\s]*(\n|$)/gi,
        otherActivities: /(^|\n)\s*(other activities|conferences|seminars|conferences? &? seminars?|workshops|volunteering|volunteer experience|extracurricular|extracurricular activities|professional activities|activities|leadership|community involvement)\s*[\-_–—=.#~\s]*(\n|$)/gi
    };
    
    // Find all section positions - prioritize specific headers over generic ones
    var sections = {};
    var sectionPriority = ['objective', 'summary', 'academicEducation', 'professionalEducation', 'education', 
                           'skills', 'experience', 'certifications', 'projects', 'languages', 'otherActivities'];
    
    for (var i = 0; i < sectionPriority.length; i++) {
        var section = sectionPriority[i];
        var regex = sectionHeaders[section];
        var match;
        var positions = [];
        while ((match = regex.exec(text)) !== null) {
            positions.push({
                start: match.index + match[0].length,
                header: match[0].trim()
            });
            console.log('Found section:', section, 'at position', match.index, 'header:', match[0].trim());
        }
        if (positions.length > 0) {
            sections[section] = positions[0]; // Use first occurrence
        }
    }
    
    console.log('All detected sections:', Object.keys(sections));
    
    // Extract section content with improved boundary detection
    function extractSectionContent(sectionName) {
        if (!sections[sectionName]) return '';

        var start = sections[sectionName].start;
        var end = text.length;

        // Find the next section by position
        var sectionNames = Object.keys(sections);
        for (var i = 0; i < sectionNames.length; i++) {
            var otherSection = sectionNames[i];
            if (sections[otherSection].start > start && sections[otherSection].start < end) {
                end = sections[otherSection].start;
            }
        }

        var content = text.substring(start, end).trim();
        console.log('Section:', sectionName, '| Start:', start, '| End:', end, '| Content length:', content.length);
        return content;
    }
    
    // ========================================
    // EXTRACT OBJECTIVE/SUMMARY
    // ========================================
    var objectiveContent = extractSectionContent('objective') || extractSectionContent('summary');
    if (objectiveContent) {
        // Clean up the content
        objectiveContent = objectiveContent.replace(/^(objective|summary|career objective)[:\s]*/i, '').trim();
        if (objectiveContent.length > 30) {
            extracted.objective = objectiveContent;
        }
    }
    
    // ========================================
    // EXTRACT SKILLS (keyword-based extraction)
    // ========================================
    var skillsContent = extractSectionContent('skills');
    if (skillsContent) {
        // Common skill separators
        var skillItems = [];
        
        // Try different parsing strategies
        // Strategy 1: Comma-separated
        if (skillsContent.includes(',')) {
            skillItems = skillsContent.split(/[,\n•\-–—▪▸●○■□]+/).map(function(s) { 
                return s.trim(); 
            }).filter(function(s) { 
                return s && s.length > 1 && s.length < 60; 
            });
        } 
        // Strategy 2: Bullet points or newlines
        else {
            skillItems = skillsContent.split(/[\n•\-–—▪▸●○■□]+/).map(function(s) { 
                return s.trim(); 
            }).filter(function(s) { 
                return s && s.length > 1 && s.length < 60; 
            });
        }
        
        // Filter out common non-skill words
        var skillStopWords = ['skills', 'technical', 'proficiencies', 'competencies', 'expertise', 'tools', 'technologies'];
        skillItems = skillItems.filter(function(skill) {
            return skillStopWords.indexOf(skill.toLowerCase()) === -1;
        });
        
        // Remove proficiency level indicators from skill names
        skillItems = skillItems.map(function(skill) {
            return skill.replace(/\s*\((beginner|intermediate|advanced|expert|proficient|familiar|novice)\)\s*/gi, '').trim();
        }).filter(function(s) { return s; });
        
        extracted.skills = skillItems.slice(0, 15).map(function(skill) {
            // Try to detect proficiency level
            var level = '';
            if (/\b(expert|advanced|proficient)\b/i.test(skill)) level = 'expert';
            else if (/\b(intermediate|proficient)\b/i.test(skill)) level = 'intermediate';
            else if (/\b(beginner|novice|familiar)\b/i.test(skill)) level = 'beginner';
            
            return { 
                name: skill.replace(/\s*\((beginner|intermediate|advanced|expert|proficient|familiar|novice)[^)]*\)\s*/gi, '').trim(),
                level: level 
            };
        }).filter(function(s) { return s.name; });
    }
    
    // ========================================
    // EXTRACT EXPERIENCE (smart parsing)
    // ========================================
    var experienceContent = extractSectionContent('experience');
    if (experienceContent) {
        // Try to identify individual job entries
        // Common patterns: Job Title at Company (Date - Date)
        var jobPatterns = [
            // Pattern 1: Title \n Company \n Date
            /([A-Z][a-zA-Z\s&.,\-()]+?)[\n](.*?(?:company|corp|inc|ltd|llc|university|hospital|institute|agency|firm)[^,\n]*)[\n]((?:(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*[\s,\/\-]+)?\d{3,4}\s*[\-–—to]+\s*(?:present|current|now|(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*[\s,\/\-]*\d{3,4}?))/gi,
            // Pattern 2: Title at Company (Date)
            /([A-Z][a-zA-Z\s&.,\-()]+?)\s+(?:at|@|,)\s+([^,\n(]+)[\s,]+(\d{4}\s*[\-–—]\s*\d{4}|present|current)/gi
        ];
        
        // Split experience content by common job separators
        var jobBlocks = experienceContent.split(/(?=\n\s*[A-Z][a-zA-Z\s]+(?:engineer|developer|manager|director|analyst|designer|specialist|consultant|coordinator|administrator|lead|head|chief|senior|junior|intern))/gi);
        
        if (jobBlocks.length <= 1) {
            // Try splitting by date patterns
            jobBlocks = experienceContent.split(/(?=(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*[\s,\/\-]+\d{4})/gi);
        }
        
        jobBlocks.forEach(function(block) {
            block = block.trim();
            if (block.length < 20) return; // Skip very short blocks
            
            var job = {
                title: '',
                company: '',
                start: '',
                end: '',
                description: ''
            };
            
            // Extract dates
            var datePatterns = [
                /((?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*[\s,\/\-]+\d{4})\s*[\-–—to]+\s*(present|current|now|(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*[\s,\/\-]*\d{4}?)/i,
                /(\d{4})\s*[\-–—to]+\s*(\d{4}|present|current|now)/i
            ];
            
            for (var i = 0; i < datePatterns.length; i++) {
                var dateMatch = block.match(datePatterns[i]);
                if (dateMatch) {
                    job.start = dateMatch[1].trim();
                    job.end = dateMatch[2] ? dateMatch[2].trim() : '';
                    break;
                }
            }
            
            // Extract job title (first capitalized line with job-related keywords)
            var titlePatterns = [
                /(senior|junior|lead|head|chief|principal|staff)?\s*(software|product|project|program|marketing|sales|financial|hr|data)?\s*(engineer|developer|manager|director|analyst|designer|specialist|consultant|coordinator|administrator|architect|scientist|researcher|instructor|teacher|professor|physician|nurse|therapist)[^.^\n]*/i
            ];
            
            for (var i = 0; i < titlePatterns.length; i++) {
                var titleMatch = block.match(titlePatterns[i]);
                if (titleMatch) {
                    job.title = titleMatch[0].trim().replace(/[\n\r]/g, ' ');
                    break;
                }
            }
            
            // Extract company (lines with company-related keywords)
            var companyPatterns = [
                /(?:at|@|,|for)\s+([A-Z][a-zA-Z\s&.,]+(?:company|corp|corporation|inc|incorporated|ltd|limited|llc|university|college|hospital|institute|agency|firm|systems|technologies|solutions|services))/i,
                /([A-Z][a-zA-Z\s&.,]+(?:company|corp|corporation|inc|incorporated|ltd|limited|llc|university|college|hospital|institute|agency|firm|systems|technologies|solutions|services))/i
            ];
            
            for (var i = 0; i < companyPatterns.length; i++) {
                var companyMatch = block.match(companyPatterns[i]);
                if (companyMatch) {
                    job.company = companyMatch[1].trim();
                    break;
                }
            }
            
            // If no clear title/company, use first two lines
            if (!job.title || !job.company) {
                var blockLines = block.split('\n').map(function(l) { return l.trim(); }).filter(function(l) { return l && !/^\d{4}/.test(l); });
                if (blockLines.length >= 2 && !job.title) {
                    job.title = blockLines[0].substring(0, 60);
                    if (!job.company) job.company = blockLines[1].substring(0, 60);
                } else if (blockLines.length >= 1 && !job.title) {
                    job.title = blockLines[0].substring(0, 60);
                }
            }
            
            // Extract description (everything else)
            var descriptionLines = block.split('\n').filter(function(line) {
                line = line.trim();
                return line && 
                       line.length > 10 &&
                       !line.toLowerCase().includes('at ') &&
                       !line.match(/^\d{4}/) &&
                       line !== job.title && 
                       line !== job.company;
            });
            
            job.description = descriptionLines.map(function(l) {
                return l.replace(/^[\-\•\*\–\—\s]+/, '').trim();
            }).filter(function(l) { return l; }).join('\n');
            
            if (job.title || job.company) {
                extracted.experience.push(job);
            }
        });
    }
    
    // ========================================
    // EXTRACT EDUCATION (handles both academic and professional education)
    // ========================================
    var educationContent = extractSectionContent('education');
    var academicEduContent = extractSectionContent('academicEducation');
    var profEduContent = extractSectionContent('professionalEducation');
    
    // If we have separate academic/professional sections, combine them
    if (academicEduContent || profEduContent) {
        educationContent = (academicEduContent ? academicEduContent + '\n' : '') + 
                          (profEduContent ? profEduContent : '');
    }
    
    if (educationContent) {
        // Common degree keywords
        var degreeKeywords = [
            '(ph\\.?d|doctorate|doctor of philosophy)',
            '(md|doctor of medicine)',
            '(jd|juris doctor)',
            '(mba|master of business administration)',
            '(m\\.?s\\.?|master of science|ms)',
            '(m\\.?a\\.?|master of arts|ma)',
            '(m\\.?ed|master of education)',
            '(m\\.?eng|master of engineering)',
            '(m\\.?fin|master of finance)',
            '(b\\.?s\\.?|bachelor of science|bs)',
            '(b\\.?a\\.?|bachelor of arts|ba)',
            '(b\\.?ed|bachelor of education)',
            '(b\\.?tech|bachelor of technology)',
            '(b\\.?eng|bachelor of engineering)',
            '(b\\.?b\\.?a|bachelor of business administration)',
            '(associate|a\\.?s\\.?|a\\.?a\\.)',
            '(diploma|certificate|certification)'
        ];
        
        // Split by degree keywords or newlines
        var eduBlocks = educationContent.split(new RegExp('(?=' + degreeKeywords.join('|') + ')', 'gi'));
        
        if (eduBlocks.length <= 1) {
            // Try splitting by institution keywords
            eduBlocks = educationContent.split(/(?=(?:university|college|institute|school|academy))/gi);
        }
        
        eduBlocks.forEach(function(block) {
            block = block.trim();
            if (block.length < 10) return;

            var edu = {
                degree: '',
                institution: '',
                start: '',
                end: '',
                details: ''
            };

            // Extract degree
            var degreeRegex = new RegExp('(' + degreeKeywords.join('|') + ')[\\s\\w\\-.,&()]*', 'gi');
            var degreeMatch = block.match(degreeRegex);
            if (degreeMatch) {
                edu.degree = degreeMatch[0].trim().substring(0, 80);
            }

            // Extract institution
            var institutionRegex = /([A-Z][a-zA-Z\\s&.,]+(?:university|college|institute|school|academy|conservatory))/i;
            var institutionMatch = block.match(institutionRegex);
            if (institutionMatch) {
                edu.institution = institutionMatch[1].trim().substring(0, 80);
            }

            // Extract dates
            var dateRegex = /(\d{4})\s*[\-–—to]+\s*(\d{4}|present|current)/i;
            var dateMatch = block.match(dateRegex);
            if (dateMatch) {
                edu.start = dateMatch[1];
                edu.end = dateMatch[2];
            }

            // Extract GPA/honors
            var gpaRegex = /(?:gpa|cgpa)[:\s]*([0-4][.\\d]+[/\\d]*)/i;
            var honorsRegex = /(cum laude|magna cum laude|summa cum laude|honors|honor roll|dean's list)/i;
            var details = [];

            var gpaMatch = block.match(gpaRegex);
            if (gpaMatch) details.push('GPA: ' + gpaMatch[1]);

            var honorsMatch = block.match(honorsRegex);
            if (honorsMatch) details.push(honorsMatch[1]);

            edu.details = details.join(', ');

            if (edu.degree || edu.institution) {
                if (!edu.degree) edu.degree = block.split('\n')[0].trim().substring(0, 80);
                extracted.education.push(edu);
            }
        });
        
        // If no education entries were found with the degree-based approach,
        // fall back to extracting bullet points as individual entries
        if (extracted.education.length === 0) {
            var eduLines = educationContent.split('\n').map(function(l) { return l.trim(); }).filter(function(l) { return l && l.length > 10; });
            eduLines.forEach(function(line) {
                // Skip lines that are just section headers
                if (/^(education|academic|professional|qualifications?)/i.test(line)) return;
                
                var edu = {
                    degree: '',
                    institution: '',
                    start: '',
                    end: '',
                    details: ''
                };
                
                // Try to extract dates
                var dateMatch = line.match(/((?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*[\s,\/\-]+)?(\d{4})\s*[\-–—to]+\s*(?:(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*[\s,\/\-]+)?(\d{4}|present|current)/i);
                if (!dateMatch) {
                    dateMatch = line.match(/(\d{4})\s*[\-–—to]+\s*(\d{4}|present|current)/i);
                }
                if (dateMatch) {
                    edu.start = dateMatch[2] || dateMatch[1];
                    edu.end = dateMatch[3] || dateMatch[2] || '';
                }
                
                // Try to extract institution
                var instMatch = line.match(/(?:from|at)\s+([A-Z][a-zA-Z\s&.,]+(?:university|college|institute|school|academy|board))/i);
                if (instMatch) {
                    edu.institution = instMatch[1].trim().substring(0, 80);
                }
                
                // Use the whole line as degree if we couldn't parse it
                var cleanLine = line.replace(/^[\-\•\*\–\—\s\d.]+/, '').trim();
                edu.degree = cleanLine.substring(0, 100);
                
                extracted.education.push(edu);
            });
        }
    }
    
    // ========================================
    // EXTRACT CERTIFICATIONS
    // ========================================
    var certContent = extractSectionContent('certifications');
    if (certContent) {
        extracted.certifications = certContent.replace(/^(certifications?|awards|honors|licenses)[:\s]*/i, '').trim();
    }
    
    // ========================================
    // EXTRACT LANGUAGES
    // ========================================
    var langContent = extractSectionContent('languages');
    if (langContent) {
        extracted.languages = langContent.replace(/^(languages|language skills)[:\s]*/i, '').trim();
    }
    
    // ========================================
    // EXTRACT OTHER ACTIVITIES (Conferences, Seminars, etc.)
    // ========================================
    var activitiesContent = extractSectionContent('otherActivities');
    if (activitiesContent) {
        extracted.otherActivities = activitiesContent.replace(/^(other activities|conferences|seminars|conferences & seminars|workshops|volunteering|extracurricular|activities|leadership|community involvement)[:\s]*/i, '').trim();
    }

    // If no objective was found, will auto-generate later
    console.log('Extracted data:', extracted);

    // Populate form with extracted data
    populateFormWithData(extracted);
}

function populateFormWithData(data) {
    // Basic fields
    if (data.fullname) document.getElementById('fullname').value = data.fullname;
    if (data.email) document.getElementById('email').value = data.email;
    if (data.phone) document.getElementById('phone').value = data.phone;
    if (data.address) document.getElementById('address').value = data.address;
    if (data.objective) document.getElementById('objective').value = data.objective;
    if (data.linkedin) document.getElementById('linkedin').value = data.linkedin;
    if (data.github) document.getElementById('github').value = data.github;
    if (data.website) document.getElementById('website').value = data.website;
    
    // Generate username from name
    if (data.fullname) {
        document.getElementById('username').value = data.fullname.toLowerCase().replace(/[^a-z0-9]/g, '.').replace(/\.+/g, '.').replace(/^\.|\.$/g, '');
    }
    
    // Skills
    if (data.skills && data.skills.length > 0) {
        var skillsContainer = document.getElementById('skills-container');
        skillsContainer.innerHTML = '';
        skillCounter = 0;
        data.skills.forEach(function(skill) {
            skillCounter++;
            var entry = document.createElement('div');
            entry.className = 'skill-entry';
            entry.setAttribute('data-skill', skillCounter);
            entry.innerHTML = '<div class="skill-name-input">' +
                '<input type="text" placeholder="e.g., JavaScript" class="skill-name" value="' + skill.name + '">' +
                '</div>' +
                '<div class="skill-rating-select">' +
                '<select class="skill-level">' +
                '<option value="">Select Level</option>' +
                '<option value="beginner"' + (skill.level === 'beginner' ? ' selected' : '') + '>Beginner</option>' +
                '<option value="intermediate"' + (skill.level === 'intermediate' ? ' selected' : '') + '>Intermediate</option>' +
                '<option value="advanced"' + (skill.level === 'advanced' ? ' selected' : '') + '>Advanced</option>' +
                '<option value="expert"' + (skill.level === 'expert' ? ' selected' : '') + '>Expert</option>' +
                '</select>' +
                '</div>';
            skillsContainer.appendChild(entry);
        });
    }
    
    // Experience
    if (data.experience && data.experience.length > 0) {
        var expContainer = document.getElementById('experience-container');
        expContainer.innerHTML = '';
        experienceCounter = 0;
        data.experience.forEach(function(exp) {
            experienceCounter++;
            addExperienceEntry(exp);
        });
    }
    
    // Education
    if (data.education && data.education.length > 0) {
        var eduContainer = document.getElementById('education-container');
        eduContainer.innerHTML = '';
        educationCounter = 0;
        data.education.forEach(function(edu) {
            educationCounter++;
            addEducationEntry(edu);
        });
    }
    
    // Update ATS score
    updateATSScore();
    autoSave();
}

function showUploadProgress(message) {
    document.getElementById('upload-progress').style.display = 'block';
    document.getElementById('upload-status').textContent = message;
    document.getElementById('upload-progress-fill').style.width = '0%';
}

function updateUploadProgress(percent, message) {
    document.getElementById('upload-progress-fill').style.width = percent + '%';
    if (message) document.getElementById('upload-status').textContent = message;
}

function hideUploadProgress() {
    document.getElementById('upload-progress').style.display = 'none';
}

function showUploadResult(message) {
    hideUploadProgress();
    document.getElementById('upload-result').style.display = 'flex';
    document.getElementById('upload-result').querySelector('.upload-result-text').textContent = message;
}

function clearUploadedResume() {
    document.getElementById('resume-upload').value = '';
    document.getElementById('upload-progress').style.display = 'none';
    document.getElementById('upload-result').style.display = 'none';
    showToast('Upload cleared. Start fresh!', 'success');
}

// ========================================
// DYNAMIC ENTRY FUNCTIONS
// ========================================
function addSkill() {
    skillCounter++;
    var container = document.getElementById('skills-container');
    var entry = document.createElement('div');
    entry.className = 'skill-entry';
    entry.setAttribute('data-skill', skillCounter);
    entry.innerHTML = '<div class="skill-name-input">' +
        '<input type="text" placeholder="e.g., JavaScript" class="skill-name">' +
        '</div>' +
        '<div class="skill-rating-select">' +
        '<select class="skill-level">' +
        '<option value="">Select Level</option>' +
        '<option value="beginner">Beginner</option>' +
        '<option value="intermediate">Intermediate</option>' +
        '<option value="advanced">Advanced</option>' +
        '<option value="expert">Expert</option>' +
        '</select>' +
        '</div>';
    container.appendChild(entry);
    autoSave();
}

function removeSkill(element) {
    var container = document.getElementById('skills-container');
    if (container.children.length > 1) {
        element.closest('.skill-entry').remove();
        autoSave();
    } else {
        showToast('You need at least one skill', 'error');
    }
}

function addEducation() {
    educationCounter++;
    addEducationEntry();
    autoSave();
}

function addEducationEntry(data) {
    data = data || {};
    var container = document.getElementById('education-container');
    var entry = document.createElement('div');
    entry.className = 'entry-item';
    entry.setAttribute('data-entry', educationCounter);
    entry.innerHTML = '<div class="entry-header">' +
        '<div style="display: flex; align-items: center; gap: 12px;">' +
        '<span class="entry-number">' + educationCounter + '</span>' +
        '<span class="entry-title">Education Entry</span>' +
        '</div>' +
        '<button type="button" class="remove-entry-btn" onclick="removeEntry(this, \'education-container\')">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-right: 4px;">' +
        '<polyline points="3 6 5 6 21 6"></polyline>' +
        '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>' +
        '</svg> Remove' +
        '</button>' +
        '</div>' +
        '<div class="entry-row">' +
        '<div class="entry-form-group">' +
        '<label>Degree / Certificate</label>' +
        '<input type="text" placeholder="e.g., B.S. Computer Science" class="education-degree" value="' + (data.degree || '') + '">' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Institution</label>' +
        '<input type="text" placeholder="e.g., Stanford University" class="education-institution" value="' + (data.institution || '') + '">' +
        '</div>' +
        '</div>' +
        '<div class="entry-row">' +
        '<div class="entry-form-group">' +
        '<label>Start Date</label>' +
        '<input type="text" placeholder="e.g., 2016" class="education-start" value="' + (data.start || '') + '">' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>End Date</label>' +
        '<input type="text" placeholder="e.g., 2020 or Present" class="education-end" value="' + (data.end || '') + '">' +
        '</div>' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Additional Details (Optional)</label>' +
        '<textarea placeholder="e.g., GPA: 3.8/4.0, Dean\'s List, Relevant coursework" class="education-details" rows="2">' + (data.details || '') + '</textarea>' +
        '</div>';
    container.appendChild(entry);
    updateRemoveButtons('education-container');
}

function addCertificationEducation() {
    certEducationCounter++;
    addCertEducationEntry();
    autoSave();
}

function addCertEducationEntry(data) {
    data = data || {};
    var container = document.getElementById('certification-education-container');
    var entry = document.createElement('div');
    entry.className = 'entry-item';
    entry.setAttribute('data-entry', certEducationCounter);
    entry.innerHTML = '<div class="entry-header">' +
        '<div style="display: flex; align-items: center; gap: 12px;">' +
        '<span class="entry-number">' + certEducationCounter + '</span>' +
        '<span class="entry-title">Certification Entry</span>' +
        '</div>' +
        '<button type="button" class="remove-entry-btn" onclick="removeEntry(this, \'certification-education-container\')">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-right: 4px;">' +
        '<polyline points="3 6 5 6 21 6"></polyline>' +
        '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>' +
        '</svg> Remove' +
        '</button>' +
        '</div>' +
        '<div class="entry-row">' +
        '<div class="entry-form-group">' +
        '<label>Certification Name</label>' +
        '<input type="text" placeholder="e.g., AWS Solutions Architect" class="cert-name" value="' + (data.name || '') + '">' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Issuing Organization</label>' +
        '<input type="text" placeholder="e.g., Amazon Web Services" class="cert-issuer" value="' + (data.issuer || '') + '">' +
        '</div>' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Date Earned</label>' +
        '<input type="text" placeholder="e.g., 2023" class="cert-date" value="' + (data.date || '') + '">' +
        '</div>';
    container.appendChild(entry);
    updateRemoveButtons('certification-education-container');
}

function addExperience() {
    experienceCounter++;
    addExperienceEntry();
    autoSave();
}

function addExperienceEntry(data) {
    data = data || {};
    var container = document.getElementById('experience-container');
    var entry = document.createElement('div');
    entry.className = 'entry-item';
    entry.setAttribute('data-entry', experienceCounter);

    var startDateValue = data.start || '';
    var endDateValue = data.end || '';
    var isCurrent = (data.end && data.end.toLowerCase && data.end.toLowerCase() === 'present') ? ' checked' : '';
    var endDateDisplay = (isCurrent) ? 'none' : '';

    entry.innerHTML = '<div class="entry-header">' +
        '<div style="display: flex; align-items: center; gap: 12px;">' +
        '<span class="entry-number">' + experienceCounter + '</span>' +
        '<span class="entry-title">Experience Entry</span>' +
        '</div>' +
        '<button type="button" class="remove-entry-btn" onclick="removeEntry(this, \'experience-container\')">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-right: 4px;">' +
        '<polyline points="3 6 5 6 21 6"></polyline>' +
        '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>' +
        '</svg> Remove' +
        '</button>' +
        '</div>' +
        '<div class="entry-row">' +
        '<div class="entry-form-group">' +
        '<label>Job Title</label>' +
        '<input type="text" placeholder="e.g., Senior Software Engineer" class="exp-title" value="' + (data.title || '') + '">' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Company</label>' +
        '<input type="text" placeholder="e.g., TechCorp Inc." class="exp-company" value="' + (data.company || '') + '">' +
        '</div>' +
        '</div>' +
        '<div class="entry-row">' +
        '<div class="entry-form-group">' +
        '<label>Start Date</label>' +
        '<input type="date" class="exp-start-date" onchange="detectEmploymentGaps()" value="' + startDateValue + '">' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>End Date</label>' +
        '<div class="date-with-present">' +
        '<input type="date" class="exp-end-date" onchange="detectEmploymentGaps()" value="' + endDateValue + '" style="display: ' + endDateDisplay + ';">' +
        '<label class="checkbox-inline">' +
        '<input type="checkbox" class="exp-current-position" onchange="toggleEndDate(this); detectEmploymentGaps();"' + isCurrent + '> Current' +
        '</label>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Description & Achievements</label>' +
        '<textarea placeholder="e.g., &#10;- Led development of scalable web applications&#10;- Managed team of 5 developers&#10;- Reduced application load time by 40%" class="exp-description" rows="4">' + (data.description || '') + '</textarea>' +
        '</div>';
    container.appendChild(entry);
    updateRemoveButtons('experience-container');
}

function toggleEndDate(checkbox) {
    var entry = checkbox.closest('.entry-item');
    var endDateInput = entry.querySelector('.exp-end-date');
    if (checkbox.checked) {
        endDateInput.style.display = 'none';
        endDateInput.value = '';
    } else {
        endDateInput.style.display = '';
    }
}

function removeEntry(button, containerId) {
    var container = document.getElementById(containerId);
    if (container.children.length > 1) {
        button.closest('.entry-item').remove();
        updateEntryNumbers(containerId);
        updateRemoveButtons(containerId);
        autoSave();
    } else {
        showToast('You need at least one entry', 'error');
    }
}

function updateEntryNumbers(containerId) {
    var container = document.getElementById(containerId);
    var entries = container.querySelectorAll('.entry-item');
    entries.forEach(function(entry, index) {
        entry.querySelector('.entry-number').textContent = index + 1;
    });
}

function updateRemoveButtons(containerId) {
    var container = document.getElementById(containerId);
    var entries = container.querySelectorAll('.entry-item');
    entries.forEach(function(entry) {
        var removeBtn = entry.querySelector('.remove-entry-btn');
        if (entries.length > 1) {
            removeBtn.style.display = 'inline-flex';
        } else {
            removeBtn.style.display = 'none';
        }
    });
}

// ========================================
// NEW CATEGORY DYNAMIC ENTRY FUNCTIONS
// ========================================

// Volunteer Experience
var volunteerCounter = 1;
function addVolunteer() {
    volunteerCounter++;
    addVolunteerEntry();
    autoSave();
}

function addVolunteerEntry(data) {
    data = data || {};
    var container = document.getElementById('volunteer-container');
    var entry = document.createElement('div');
    entry.className = 'entry-item';
    entry.setAttribute('data-entry', volunteerCounter);
    entry.innerHTML = '<div class="entry-header">' +
        '<div style="display: flex; align-items: center; gap: 12px;">' +
        '<span class="entry-number">' + volunteerCounter + '</span>' +
        '<span class="entry-title">Volunteer Entry</span>' +
        '</div>' +
        '<button type="button" class="remove-entry-btn" onclick="removeEntry(this, \'volunteer-container\')">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-right: 4px;">' +
        '<polyline points="3 6 5 6 21 6"></polyline>' +
        '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>' +
        '</svg> Remove' +
        '</button>' +
        '</div>' +
        '<div class="entry-row">' +
        '<div class="entry-form-group">' +
        '<label>Role / Position</label>' +
        '<input type="text" placeholder="e.g., Mentor / Volunteer Coordinator" class="volunteer-role" value="' + (data.role || '') + '">' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Organization</label>' +
        '<input type="text" placeholder="e.g., Code for America" class="volunteer-org" value="' + (data.org || '') + '">' +
        '</div>' +
        '</div>' +
        '<div class="entry-row">' +
        '<div class="entry-form-group">' +
        '<label>Start Date</label>' +
        '<input type="text" placeholder="e.g., Jan 2022" class="volunteer-start" value="' + (data.start || '') + '">' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>End Date</label>' +
        '<input type="text" placeholder="e.g., Present or Dec 2023" class="volunteer-end" value="' + (data.end || '') + '">' +
        '</div>' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Achievements & Impact</label>' +
        '<textarea placeholder="e.g., &#10;- Mentored 20+ students in coding fundamentals&#10;- Organized community hackathon with 150+ participants" class="volunteer-achievements" rows="3">' + (data.achievements || '') + '</textarea>' +
        '</div>';
    container.appendChild(entry);
    updateRemoveButtons('volunteer-container');
}

// Publications & Research
var publicationsCounter = 1;
function addPublication() {
    publicationsCounter++;
    addPublicationEntry();
    autoSave();
}

function addPublicationEntry(data) {
    data = data || {};
    var container = document.getElementById('publications-container');
    var entry = document.createElement('div');
    entry.className = 'entry-item';
    entry.setAttribute('data-entry', publicationsCounter);
    entry.innerHTML = '<div class="entry-header">' +
        '<div style="display: flex; align-items: center; gap: 12px;">' +
        '<span class="entry-number">' + publicationsCounter + '</span>' +
        '<span class="entry-title">Publication Entry</span>' +
        '</div>' +
        '<button type="button" class="remove-entry-btn" onclick="removeEntry(this, \'publications-container\')">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-right: 4px;">' +
        '<polyline points="3 6 5 6 21 6"></polyline>' +
        '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>' +
        '</svg> Remove' +
        '</button>' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Publication Title</label>' +
        '<input type="text" placeholder="e.g., Machine Learning Approaches in Healthcare" class="pub-title" value="' + (data.title || '') + '">' +
        '</div>' +
        '<div class="entry-row">' +
        '<div class="entry-form-group">' +
        '<label>Journal / Conference</label>' +
        '<input type="text" placeholder="e.g., Nature Medicine / IEEE Conference" class="pub-journal" value="' + (data.journal || '') + '">' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Publication Date</label>' +
        '<input type="text" placeholder="e.g., March 2023" class="pub-date" value="' + (data.date || '') + '">' +
        '</div>' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>URL / DOI (Optional)</label>' +
        '<input type="url" placeholder="https://doi.org/10.xxxx/xxxxx" class="pub-url" value="' + (data.url || '') + '">' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Brief Description (Optional)</label>' +
        '<textarea placeholder="e.g., Research on applying deep learning to medical imaging for early cancer detection" class="pub-description" rows="2">' + (data.description || '') + '</textarea>' +
        '</div>';
    container.appendChild(entry);
    updateRemoveButtons('publications-container');
}

// Patents & Innovations
var patentsCounter = 1;
function addPatent() {
    patentsCounter++;
    addPatentEntry();
    autoSave();
}

function addPatentEntry(data) {
    data = data || {};
    var container = document.getElementById('patents-container');
    var entry = document.createElement('div');
    entry.className = 'entry-item';
    entry.setAttribute('data-entry', patentsCounter);
    entry.innerHTML = '<div class="entry-header">' +
        '<div style="display: flex; align-items: center; gap: 12px;">' +
        '<span class="entry-number">' + patentsCounter + '</span>' +
        '<span class="entry-title">Patent Entry</span>' +
        '</div>' +
        '<button type="button" class="remove-entry-btn" onclick="removeEntry(this, \'patents-container\')">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-right: 4px;">' +
        '<polyline points="3 6 5 6 21 6"></polyline>' +
        '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>' +
        '</svg> Remove' +
        '</button>' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Patent / Innovation Title</label>' +
        '<input type="text" placeholder="e.g., Method for Optimizing Database Queries" class="patent-title" value="' + (data.title || '') + '">' +
        '</div>' +
        '<div class="entry-row">' +
        '<div class="entry-form-group">' +
        '<label>Patent Number (Optional)</label>' +
        '<input type="text" placeholder="e.g., US10,123,456B2" class="patent-number" value="' + (data.number || '') + '">' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Grant / Filing Date</label>' +
        '<input type="text" placeholder="e.g., June 2022" class="patent-date" value="' + (data.date || '') + '">' +
        '</div>' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Description & Impact</label>' +
        '<textarea placeholder="e.g., Novel algorithm reducing query execution time by 60% in distributed systems" class="patent-description" rows="3">' + (data.description || '') + '</textarea>' +
        '</div>';
    container.appendChild(entry);
    updateRemoveButtons('patents-container');
}

// References
var referencesCounter = 1;
function addReference() {
    referencesCounter++;
    addReferenceEntry();
    autoSave();
}

function addReferenceEntry(data) {
    data = data || {};
    var container = document.getElementById('references-container');
    var entry = document.createElement('div');
    entry.className = 'entry-item';
    entry.setAttribute('data-entry', referencesCounter);
    entry.innerHTML = '<div class="entry-header">' +
        '<div style="display: flex; align-items: center; gap: 12px;">' +
        '<span class="entry-number">' + referencesCounter + '</span>' +
        '<span class="entry-title">Reference Entry</span>' +
        '</div>' +
        '<button type="button" class="remove-entry-btn" onclick="removeEntry(this, \'references-container\')">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-right: 4px;">' +
        '<polyline points="3 6 5 6 21 6"></polyline>' +
        '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>' +
        '</svg> Remove' +
        '</button>' +
        '</div>' +
        '<div class="entry-row">' +
        '<div class="entry-form-group">' +
        '<label>Full Name</label>' +
        '<input type="text" placeholder="e.g., Dr. Jane Smith" class="ref-name" value="' + (data.name || '') + '">' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Designation / Title</label>' +
        '<input type="text" placeholder="e.g., Director of Engineering" class="ref-title" value="' + (data.title || '') + '">' +
        '</div>' +
        '</div>' +
        '<div class="entry-row">' +
        '<div class="entry-form-group">' +
        '<label>Company / Organization</label>' +
        '<input type="text" placeholder="e.g., Google Inc." class="ref-company" value="' + (data.company || '') + '">' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Relationship</label>' +
        '<input type="text" placeholder="e.g., Former Manager" class="ref-relationship" value="' + (data.relationship || '') + '">' +
        '</div>' +
        '</div>' +
        '<div class="entry-row">' +
        '<div class="entry-form-group">' +
        '<label>Email</label>' +
        '<input type="email" placeholder="e.g., jane.smith@company.com" class="ref-email" value="' + (data.email || '') + '">' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Phone</label>' +
        '<input type="tel" placeholder="e.g., +1 (555) 123-4567" class="ref-phone" value="' + (data.phone || '') + '">' +
        '</div>' +
        '</div>';
    container.appendChild(entry);
    updateRemoveButtons('references-container');
}

// Memberships & Affiliations
var membershipsCounter = 1;
function addMembership() {
    membershipsCounter++;
    addMembershipEntry();
    autoSave();
}

function addMembershipEntry(data) {
    data = data || {};
    var container = document.getElementById('memberships-container');
    var entry = document.createElement('div');
    entry.className = 'entry-item';
    entry.setAttribute('data-entry', membershipsCounter);
    entry.innerHTML = '<div class="entry-header">' +
        '<div style="display: flex; align-items: center; gap: 12px;">' +
        '<span class="entry-number">' + membershipsCounter + '</span>' +
        '<span class="entry-title">Membership Entry</span>' +
        '</div>' +
        '<button type="button" class="remove-entry-btn" onclick="removeEntry(this, \'memberships-container\')">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-right: 4px;">' +
        '<polyline points="3 6 5 6 21 6"></polyline>' +
        '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>' +
        '</svg> Remove' +
        '</button>' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Organization Name</label>' +
        '<input type="text" placeholder="e.g., IEEE / ACM / American Medical Association" class="member-org" value="' + (data.org || '') + '">' +
        '</div>' +
        '<div class="entry-row">' +
        '<div class="entry-form-group">' +
        '<label>Role / Membership Type</label>' +
        '<input type="text" placeholder="e.g., Senior Member / Board Member" class="member-role" value="' + (data.role || '') + '">' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Duration</label>' +
        '<input type="text" placeholder="e.g., 2018 - Present" class="member-duration" value="' + (data.duration || '') + '">' +
        '</div>' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Contributions & Activities (Optional)</label>' +
        '<textarea placeholder="e.g., Active participant in AI Ethics committee, Speaker at annual conference 2022" class="member-activities" rows="2">' + (data.activities || '') + '</textarea>' +
        '</div>';
    container.appendChild(entry);
    updateRemoveButtons('memberships-container');
}

// Soft Skills
var softSkillCounter = 3;
function addSoftSkill() {
    softSkillCounter++;
    var container = document.getElementById('soft-skills-container');
    var entry = document.createElement('div');
    entry.className = 'skill-entry';
    entry.setAttribute('data-skill', softSkillCounter);
    entry.innerHTML = '<div class="skill-name-input">' +
        '<input type="text" placeholder="e.g., Communication" class="skill-name">' +
        '</div>' +
        '<div class="skill-rating-select">' +
        '<select class="skill-level">' +
        '<option value="">Select Level</option>' +
        '<option value="beginner">Beginner</option>' +
        '<option value="intermediate">Intermediate</option>' +
        '<option value="advanced">Advanced</option>' +
        '<option value="expert">Expert</option>' +
        '</select>' +
        '</div>';
    container.appendChild(entry);
    autoSave();
}

// Portfolio / Work Samples
var portfolioCounter = 1;
function addPortfolio() {
    portfolioCounter++;
    addPortfolioEntry();
    autoSave();
}

function addPortfolioEntry(data) {
    data = data || {};
    var container = document.getElementById('portfolio-container');
    var entry = document.createElement('div');
    entry.className = 'entry-item';
    entry.setAttribute('data-entry', portfolioCounter);
    entry.innerHTML = '<div class="entry-header">' +
        '<div style="display: flex; align-items: center; gap: 12px;">' +
        '<span class="entry-number">' + portfolioCounter + '</span>' +
        '<span class="entry-title">Portfolio Entry</span>' +
        '</div>' +
        '<button type="button" class="remove-entry-btn" onclick="removeEntry(this, \'portfolio-container\')">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-right: 4px;">' +
        '<polyline points="3 6 5 6 21 6"></polyline>' +
        '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>' +
        '</svg> Remove' +
        '</button>' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Project / Portfolio Title</label>' +
        '<input type="text" placeholder="e.g., GitHub Profile / Behance Portfolio" class="portfolio-title" value="' + (data.title || '') + '">' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>URL</label>' +
        '<input type="url" placeholder="https://github.com/username or https://behance.net/portfolio" class="portfolio-url" value="' + (data.url || '') + '">' +
        '</div>' +
        '<div class="entry-form-group">' +
        '<label>Description (Optional)</label>' +
        '<textarea placeholder="e.g., Collection of 15+ open-source projects with 2K+ stars" class="portfolio-description" rows="2">' + (data.description || '') + '</textarea>' +
        '</div>';
    container.appendChild(entry);
    updateRemoveButtons('portfolio-container');
}

// ========================================
// ATS OPTIMIZATION
// ========================================
function updateATSScore() {
    var score = 0;
    var tips = [];
    
    var username = document.getElementById('username').value;
    var fullname = document.getElementById('fullname').value;
    var objective = document.getElementById('objective').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var skills = collectSkills();
    var education = collectEducation();
    var experience = collectExperience();
    
    // Check required fields (10 points each)
    if (username && username.trim()) score += 10;
    else tips.push('Add your username for ATS compatibility');
    
    if (fullname && fullname.trim()) score += 10;
    else tips.push('Add your full name');
    
    if (email && email.trim()) score += 5;
    else tips.push('Add your email address');
    
    if (phone && phone.trim()) score += 5;
    else tips.push('Add your phone number');
    
    if (objective && objective.trim()) {
        score += 10;
        if (objective.length >= 50) score += 5;
        else tips.push('Expand your objective to 50+ characters');
    } else {
        tips.push('Add a career objective (ATS systems look for this)');
    }
    
    // Skills scoring (15 points)
    var filledSkills = skills.filter(function(s) { return s.name && s.name.trim(); });
    if (filledSkills.length >= 5) score += 15;
    else if (filledSkills.length >= 3) score += 10;
    else if (filledSkills.length >= 1) score += 5;
    
    if (filledSkills.length < 5) {
        tips.push('Add at least 5 skills for better ATS matching');
    }
    
    // Experience scoring (20 points)
    var filledExp = experience.filter(function(e) { return e.title && e.title.trim(); });
    if (filledExp.length >= 2) score += 20;
    else if (filledExp.length >= 1) score += 10;
    
    if (filledExp.length < 2) {
        tips.push('Add more work experience entries');
    }
    
    // Education scoring (10 points)
    var filledEdu = education.filter(function(e) { return e.degree && e.degree.trim(); });
    if (filledEdu.length >= 1) score += 10;
    else tips.push('Add your education background');
    
    // Check for action verbs in experience (10 points)
    var hasActionVerbs = false;
    var actionVerbs = ['led', 'managed', 'developed', 'created', 'implemented', 'improved', 'designed', 'built', 'optimized', 'delivered'];
    filledExp.forEach(function(exp) {
        if (exp.description) {
            var desc = exp.description.toLowerCase();
            actionVerbs.forEach(function(verb) {
                if (desc.includes(verb)) hasActionVerbs = true;
            });
        }
    });
    
    if (hasActionVerbs) score += 10;
    else tips.push('Use action verbs (Led, Managed, Developed) in your experience');
    
    // Update UI
    var scoreElement = document.getElementById('ats-score-value');
    var progressElement = document.getElementById('ats-progress-fill');
    var tipsElement = document.getElementById('ats-tips');
    
    scoreElement.textContent = score + '%';
    progressElement.style.width = score + '%';
    
    // Color coding
    if (score >= 80) {
        scoreElement.style.color = '#10B981';
        progressElement.style.background = 'linear-gradient(90deg, #10B981 0%, #34D399 100%)';
    } else if (score >= 60) {
        scoreElement.style.color = '#F59E0B';
        progressElement.style.background = 'linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%)';
    } else {
        scoreElement.style.color = '#EF4444';
        progressElement.style.background = 'linear-gradient(90deg, #EF4444 0%, #F87171 100%)';
    }
    
    // Update tips
    if (tips.length === 0) {
        tipsElement.innerHTML = '<div class="ats-tip-item">' +
            '<span class="ats-tip-icon">✓</span>' +
            '<span class="ats-tip-text">Excellent! Your resume is well-optimized for ATS systems</span>' +
            '</div>';
    } else {
        tipsElement.innerHTML = tips.slice(0, 3).map(function(tip) {
            return '<div class="ats-tip-item">' +
                '<span class="ats-tip-icon">💡</span>' +
                '<span class="ats-tip-text">' + tip + '</span>' +
                '</div>';
        }).join('');
    }
}

// ========================================
// LOAD DEMO RESUME
// ========================================
function loadDemoResume() {
    console.log('Demo button clicked!');
    
    // Clear existing dynamic entries
    document.getElementById('skills-container').innerHTML = '';
    document.getElementById('education-container').innerHTML = '';
    document.getElementById('certification-education-container').innerHTML = '';
    document.getElementById('experience-container').innerHTML = '';
    document.getElementById('volunteer-container').innerHTML = '';
    document.getElementById('publications-container').innerHTML = '';
    document.getElementById('patents-container').innerHTML = '';
    document.getElementById('references-container').innerHTML = '';
    document.getElementById('memberships-container').innerHTML = '';
    document.getElementById('soft-skills-container').innerHTML = '';
    document.getElementById('portfolio-container').innerHTML = '';
    skillCounter = 0;
    educationCounter = 0;
    certEducationCounter = 0;
    experienceCounter = 0;
    volunteerCounter = 0;
    publicationsCounter = 0;
    patentsCounter = 0;
    referencesCounter = 0;
    membershipsCounter = 0;
    softSkillCounter = 0;
    portfolioCounter = 0;

    // Fill basic fields
    document.getElementById('username').value = demoData.username;
    document.getElementById('fullname').value = demoData.fullname;
    document.getElementById('objective').value = demoData.objective;
    document.getElementById('email').value = demoData.email;
    document.getElementById('phone').value = demoData.phone;
    document.getElementById('address').value = demoData.address;
    document.getElementById('linkedin').value = demoData.linkedin;
    document.getElementById('github').value = demoData.github;
    document.getElementById('website').value = demoData.website;
    document.getElementById('twitter').value = demoData.twitter;
    document.getElementById('ProfessionalSummary').value = demoData.professionalSummary || '';

    // Fill skills
    demoData.skills.forEach(function(skill) {
        skillCounter++;
        var container = document.getElementById('skills-container');
        var entry = document.createElement('div');
        entry.className = 'skill-entry';
        entry.setAttribute('data-skill', skillCounter);
        entry.innerHTML = '<div class="skill-name-input">' +
            '<input type="text" placeholder="e.g., JavaScript" class="skill-name" value="' + skill.name + '">' +
            '</div>' +
            '<div class="skill-rating-select">' +
            '<select class="skill-level">' +
            '<option value="">Select Level</option>' +
            '<option value="beginner"' + (skill.level === 'beginner' ? ' selected' : '') + '>Beginner</option>' +
            '<option value="intermediate"' + (skill.level === 'intermediate' ? ' selected' : '') + '>Intermediate</option>' +
            '<option value="advanced"' + (skill.level === 'advanced' ? ' selected' : '') + '>Advanced</option>' +
            '<option value="expert"' + (skill.level === 'expert' ? ' selected' : '') + '>Expert</option>' +
            '</select>' +
            '</div>';
        container.appendChild(entry);
    });

    // Fill education
    demoData.education.forEach(function(edu) {
        educationCounter++;
        addEducationEntry(edu);
    });

    // Fill certifications
    demoData.certEducation.forEach(function(cert) {
        certEducationCounter++;
        addCertEducationEntry(cert);
    });

    // Fill experience
    demoData.experience.forEach(function(exp) {
        experienceCounter++;
        addExperienceEntry(exp);
    });

    // Fill volunteer
    if (demoData.volunteer) {
        demoData.volunteer.forEach(function(vol) {
            volunteerCounter++;
            addVolunteerEntry(vol);
        });
    }

    // Fill publications
    if (demoData.publications) {
        demoData.publications.forEach(function(pub) {
            publicationsCounter++;
            addPublicationEntry(pub);
        });
    }

    // Fill patents
    if (demoData.patents) {
        demoData.patents.forEach(function(pat) {
            patentsCounter++;
            addPatentEntry(pat);
        });
    }

    // Fill references
    if (demoData.references) {
        demoData.references.forEach(function(ref) {
            referencesCounter++;
            addReferenceEntry(ref);
        });
    }

    // Fill memberships
    if (demoData.memberships) {
        demoData.memberships.forEach(function(mem) {
            membershipsCounter++;
            addMembershipEntry(mem);
        });
    }

    // Fill soft skills
    if (demoData.softSkills) {
        demoData.softSkills.forEach(function(skill) {
            softSkillCounter++;
            var container = document.getElementById('soft-skills-container');
            var entry = document.createElement('div');
            entry.className = 'skill-entry';
            entry.setAttribute('data-skill', softSkillCounter);
            entry.innerHTML = '<div class="skill-name-input">' +
                '<input type="text" placeholder="e.g., Communication" class="skill-name" value="' + skill.name + '">' +
                '</div>' +
                '<div class="skill-rating-select">' +
                '<select class="skill-level">' +
                '<option value="">Select Level</option>' +
                '<option value="beginner"' + (skill.level === 'beginner' ? ' selected' : '') + '>Beginner</option>' +
                '<option value="intermediate"' + (skill.level === 'intermediate' ? ' selected' : '') + '>Intermediate</option>' +
                '<option value="advanced"' + (skill.level === 'advanced' ? ' selected' : '') + '>Advanced</option>' +
                '<option value="expert"' + (skill.level === 'expert' ? ' selected' : '') + '>Expert</option>' +
                '</select>' +
                '</div>';
            container.appendChild(entry);
        });
    }

    // Fill portfolio
    if (demoData.portfolio) {
        demoData.portfolio.forEach(function(port) {
            portfolioCounter++;
            addPortfolioEntry(port);
        });
    }

    // Fill other fields
    document.getElementById('Projects').value = demoData.projects;
    document.getElementById('Certifications').value = demoData.certifications;
    document.getElementById('Languages').value = demoData.languages;
    
    // Clear errors
    document.querySelectorAll('.error-message').forEach(function(e) { e.textContent = ''; });
    document.querySelectorAll('input, textarea').forEach(function(e) { e.classList.remove('error'); });
    
    showToast('Demo data loaded! Generating resume...', 'success');
    document.getElementById('builder').scrollIntoView({ behavior: 'smooth' });
    
    updateATSScore();
    
    setTimeout(function() { document.getElementById('generate-btn').click(); }, 600);
}

// ========================================
// TOGGLE MODE (Light/Dark)
// ========================================
function toggleMode() {
    console.log('Mode toggle clicked!');
    
    // Toggle between light and dark mode
    var isDark = document.body.classList.contains('dark-mode');
    
    if (isDark) {
        // Switch to light mode
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        console.log('Switched to light mode');
    } else {
        // Switch to dark mode
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        console.log('Switched to dark mode');
    }
}

// Initialize theme on page load
function initializeTheme() {
    var savedTheme = localStorage.getItem('theme');
    
    // Default to light mode if no preference is saved
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        // Default to light mode
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
    
    console.log('Theme initialized:', savedTheme || 'light (default)');
}

// ========================================
// VALIDATE FORM
// ========================================
function validateForm() {
    var isValid = true;
    
    // Basic fields validation
    var fields = [
        { id: 'username', name: 'Username' },
        { id: 'fullname', name: 'Full Name' },
        { id: 'email', name: 'Email' },
        { id: 'phone', name: 'Phone' },
        { id: 'address', name: 'Address' }
    ];
    
    fields.forEach(function(f) {
        var input = document.getElementById(f.id);
        var error = document.getElementById(f.id + '-error');
        input.classList.remove('error');
        if (error) error.textContent = '';
    });
    
    fields.forEach(function(f) {
        var input = document.getElementById(f.id);
        var error = document.getElementById(f.id + '-error');
        if (!input.value.trim()) {
            error.textContent = f.name + ' is required';
            input.classList.add('error');
            isValid = false;
        }
    });
    
    // Email validation
    var email = document.getElementById('email').value.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email';
        document.getElementById('email').classList.add('error');
        isValid = false;
    }
    
    // Skills validation
    var skills = collectSkills();
    var filledSkills = skills.filter(function(s) { return s.name && s.name.trim(); });
    if (filledSkills.length === 0) {
        document.getElementById('skills-error').textContent = 'Add at least one skill';
        isValid = false;
    }
    
    // Education validation
    var education = collectEducation();
    var filledEdu = education.filter(function(e) { return e.degree && e.degree.trim(); });
    if (filledEdu.length === 0) {
        document.getElementById('Qualification-error').textContent = 'Add at least one education entry';
        isValid = false;
    }
    
    // Experience validation
    var experience = collectExperience();
    var filledExp = experience.filter(function(e) { return e.title && e.title.trim(); });
    if (filledExp.length === 0) {
        document.getElementById('Experience-error').textContent = 'Add at least one experience entry';
        isValid = false;
    }
    
    return isValid;
}

// ========================================
// CLEAR FORM
// ========================================
function clearForm() {
    document.getElementById('resume-form').reset();
    document.querySelectorAll('.error-message').forEach(function(e) { e.textContent = ''; });
    document.querySelectorAll('input, textarea').forEach(function(e) { e.classList.remove('error'); });
    document.getElementById('resumeOutput').style.display = 'none';
    document.getElementById('share-url-container').style.display = 'none';
    
    // Reset dynamic entries
    document.getElementById('skills-container').innerHTML = '<div class="skill-entry" data-skill="1">' +
        '<div class="skill-name-input">' +
        '<input type="text" placeholder="e.g., JavaScript" class="skill-name">' +
        '</div>' +
        '<div class="skill-rating-select">' +
        '<select class="skill-level">' +
        '<option value="">Select Level</option>' +
        '<option value="beginner">Beginner</option>' +
        '<option value="intermediate">Intermediate</option>' +
        '<option value="advanced">Advanced</option>' +
        '<option value="expert">Expert</option>' +
        '</select>' +
        '</div>' +
        '</div>';
    skillCounter = 1;
    
    document.getElementById('education-container').innerHTML = '';
    educationCounter = 0;
    addEducation();
    
    document.getElementById('certification-education-container').innerHTML = '';
    certEducationCounter = 0;
    addCertificationEducation();
    
    document.getElementById('experience-container').innerHTML = '';
    experienceCounter = 0;
    addExperience();

    // Reset new category containers
    document.getElementById('volunteer-container').innerHTML = '';
    volunteerCounter = 0;
    addVolunteer();

    document.getElementById('publications-container').innerHTML = '';
    publicationsCounter = 0;
    addPublication();

    document.getElementById('patents-container').innerHTML = '';
    patentsCounter = 0;
    addPatent();

    document.getElementById('references-container').innerHTML = '';
    referencesCounter = 0;
    addReference();

    document.getElementById('memberships-container').innerHTML = '';
    membershipsCounter = 0;
    addMembership();

    document.getElementById('soft-skills-container').innerHTML = '<div class="skill-entry" data-skill="1">' +
        '<div class="skill-name-input">' +
        '<input type="text" placeholder="e.g., Communication" class="skill-name">' +
        '</div>' +
        '<div class="skill-rating-select">' +
        '<select class="skill-level">' +
        '<option value="">Select Level</option>' +
        '<option value="beginner">Beginner</option>' +
        '<option value="intermediate">Intermediate</option>' +
        '<option value="advanced">Advanced</option>' +
        '<option value="expert">Expert</option>' +
        '</select>' +
        '</div>' +
        '</div>' +
        '<div class="skill-entry" data-skill="2">' +
        '<div class="skill-name-input">' +
        '<input type="text" placeholder="e.g., Leadership" class="skill-name">' +
        '</div>' +
        '<div class="skill-rating-select">' +
        '<select class="skill-level">' +
        '<option value="">Select Level</option>' +
        '<option value="beginner">Beginner</option>' +
        '<option value="intermediate">Intermediate</option>' +
        '<option value="advanced">Advanced</option>' +
        '<option value="expert">Expert</option>' +
        '</select>' +
        '</div>' +
        '</div>' +
        '<div class="skill-entry" data-skill="3">' +
        '<div class="skill-name-input">' +
        '<input type="text" placeholder="e.g., Teamwork" class="skill-name">' +
        '</div>' +
        '<div class="skill-rating-select">' +
        '<select class="skill-level">' +
        '<option value="">Select Level</option>' +
        '<option value="beginner">Beginner</option>' +
        '<option value="intermediate">Intermediate</option>' +
        '<option value="advanced">Advanced</option>' +
        '<option value="expert">Expert</option>' +
        '</select>' +
        '</div>' +
        '</div>';
    softSkillCounter = 3;

    document.getElementById('portfolio-container').innerHTML = '';
    portfolioCounter = 0;
    addPortfolio();

    // Clear draft
    localStorage.removeItem('resumeDraft');
    
    updateATSScore();
    showToast('Form cleared!', 'success');
    document.getElementById('resume-form').scrollIntoView({ behavior: 'smooth' });
}

// ========================================
// DOWNLOAD PDF (with exact margins: Top 1", Bottom 1", Left 1.5", Right 1")
// ========================================
function downloadPDF() {
    var container = document.querySelector('#resumeOutput .resume-container');
    if (!container) { showToast('Generate resume first!', 'error'); return; }

    showToast('Generating PDF...', 'success');

    var userName = document.getElementById('username').value || 'user';
    var fullName = document.getElementById('fullname').value || 'Resume';

    // Clone the actual resume container to preserve all styling
    var resumeClone = container.cloneNode(true);
    
    // Create a wrapper with proper dimensions
    var pdfWrapper = document.createElement('div');
    pdfWrapper.id = 'pdf-generation-overlay';
    pdfWrapper.style.cssText = 'position: fixed; top: -9999px; left: -9999px; width: 210mm; background: white; z-index: 99999; padding: 0;';
    
    // Add necessary styles to the clone
    resumeClone.style.cssText = 'width: 100%; background: white; font-family: inherit; box-sizing: border-box;';
    
    pdfWrapper.appendChild(resumeClone);
    document.body.appendChild(pdfWrapper);

    console.log('PDF content - cloning styled resume');

    // Wait for rendering, then generate PDF
    setTimeout(function() {
        html2pdf().set({
            margin: [25.4, 25.4, 25.4, 38.1], // [top, right, bottom, left] in mm - 1" margins, 1.5" left
            filename: userName + '_resume.pdf',
            image: { type: 'jpeg', quality: 1.0 },
            html2canvas: {
                scale: 3,
                useCORS: true,
                logging: false,
                scrollX: 0,
                scrollY: 0,
                letterRendering: true,
                allowTaint: true
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait',
                compress: true
            },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        }).from(resumeClone).toPdf().get('pdf').then(function(pdf) {
            var totalPages = pdf.internal.getNumberOfPages();
            for (var i = 1; i <= totalPages; i++) {
                pdf.setPage(i);
                pdf.setFontSize(9);
                pdf.setTextColor(120);
                pdf.text(
                    'Page ' + i + ' of ' + totalPages,
                    pdf.internal.pageSize.getWidth() / 2,
                    pdf.internal.pageSize.getHeight() - 12,
                    { align: 'center' }
                );
            }
        }).save().then(function() {
            if (document.getElementById('pdf-generation-overlay')) {
                document.body.removeChild(pdfWrapper);
            }
            showToast('PDF downloaded successfully!', 'success');
        }).catch(function(err) {
            console.error('PDF error:', err);
            if (document.getElementById('pdf-generation-overlay')) {
                document.body.removeChild(pdfWrapper);
            }
            showToast('PDF generation failed. Please try again.', 'error');
        });
    }, 800);
}

// ========================================
// DOWNLOAD DOCX
// ========================================
function downloadDoc() {
    var container = document.querySelector('#resumeOutput .resume-container');
    if (!container) { showToast('Generate resume first!', 'error'); return; }
    showToast('Generating Word doc...', 'success');
    var fullName = document.getElementById('fullname').value || 'Resume';
    var userName = document.getElementById('username').value || 'user';
    var objective = document.getElementById('objective').value || '';
    var education = collectEducation();
    var experience = collectExperience();
    var skills = collectSkills();
    var professionalSummary = document.getElementById('ProfessionalSummary').value || '';
    var volunteer = collectVolunteer();
    var publications = collectPublications();
    var patents = collectPatents();
    var references = collectReferences();
    var memberships = collectMemberships();
    var softSkills = collectSoftSkills();
    var portfolio = collectPortfolio();

    // Auto-generate objective if blank
    if (!objective || !objective.trim()) {
        objective = autoGenerateObjective(fullName, education, experience, skills);
    }

    var children = [];
    children.push(new docx.Paragraph({ text: fullName, heading: docx.HeadingLevel.TITLE, alignment: docx.AlignmentType.CENTER, spacing: { after: 100 } }));
    children.push(new docx.Paragraph({ children: [new docx.Run({ text: '─'.repeat(50), size: 20 })], alignment: docx.AlignmentType.CENTER, spacing: { after: 200 } }));

    // Objective
    children.push(new docx.Paragraph({ text: 'Objective', heading: docx.HeadingLevel.HEADING_2, spacing: { before: 100, after: 100 } }));
    children.push(new docx.Paragraph({ children: [new docx.Run({ text: objective, size: 22, italics: true })], spacing: { after: 200 } }));

    ['Email: ' + document.getElementById('email').value, 'Phone: ' + document.getElementById('phone').value, 'Address: ' + document.getElementById('address').value].forEach(function(line) {
        children.push(new docx.Paragraph({ children: [new docx.Run({ text: line, size: 22 })], spacing: { after: 100 } }));
    });

    function addSection(title, content) {
        if (!content) return;
        children.push(new docx.Paragraph({ text: title, heading: docx.HeadingLevel.HEADING_2, spacing: { before: 300, after: 150 } }));
        content.split('\n').filter(function(l) { return l.trim(); }).forEach(function(line) {
            children.push(new docx.Paragraph({ children: [new docx.Run({ text: line.replace(/^[\s\-\*•]+/, ''), size: 22 })], spacing: { after: 120 }, bullet: { level: 0 } }));
        });
    }

    // Skills with levels
    if (skills.length > 0 && skills.some(function(s) { return s.name && s.name.trim(); })) {
        children.push(new docx.Paragraph({ text: 'Skills', heading: docx.HeadingLevel.HEADING_2, spacing: { before: 300, after: 150 } }));
        skills.filter(function(s) { return s.name && s.name.trim(); }).forEach(function(skill) {
            var skillText = skill.name + (skill.level ? ' (' + skill.level + ')' : '');
            children.push(new docx.Paragraph({ children: [new docx.Run({ text: skillText, size: 22 })], spacing: { after: 120 }, bullet: { level: 0 } }));
        });
    }

    addSection('Education', education.map(function(e) {
        var text = e.degree + (e.institution ? ', ' + e.institution : '') + (e.start ? ' (' + e.start : '') + (e.end ? ' - ' + e.end : '') + (e.start ? ')' : '');
        if (e.details) text += ' - ' + e.details;
        return text;
    }).join('\n'));

    addSection('Work Experience', experience.map(function(e) {
        var text = e.title + (e.company ? ' at ' + e.company : '') + (e.start ? ' (' + e.start : '') + (e.end ? ' - ' + e.end : '') + (e.start ? ')' : '');
        if (e.description) text += '\n' + e.description;
        return text;
    }).join('\n'));

    addSection('Projects', document.getElementById('Projects').value);
    addSection('Certifications', document.getElementById('Certifications').value);
    addSection('Languages', document.getElementById('Languages').value);
    addSection('Other Activities', document.getElementById('OtherActivities').value);

    // Professional Summary
    if (professionalSummary) {
        children.push(new docx.Paragraph({ text: 'Professional Summary', heading: docx.HeadingLevel.HEADING_2, spacing: { before: 300, after: 150 } }));
        children.push(new docx.Paragraph({ children: [new docx.Run({ text: professionalSummary, size: 22 })], spacing: { after: 200 } }));
    }

    // Soft Skills
    if (softSkills.length > 0 && softSkills.some(function(s) { return s.name && s.name.trim(); })) {
        children.push(new docx.Paragraph({ text: 'Soft Skills', heading: docx.HeadingLevel.HEADING_2, spacing: { before: 300, after: 150 } }));
        softSkills.filter(function(s) { return s.name && s.name.trim(); }).forEach(function(skill) {
            var skillText = skill.name + (skill.level ? ' (' + skill.level + ')' : '');
            children.push(new docx.Paragraph({ children: [new docx.Run({ text: skillText, size: 22 })], spacing: { after: 120 }, bullet: { level: 0 } }));
        });
    }

    // Volunteer Experience
    if (volunteer.length > 0 && volunteer.some(function(v) { return v.role && v.role.trim(); })) {
        children.push(new docx.Paragraph({ text: 'Volunteer Experience', heading: docx.HeadingLevel.HEADING_2, spacing: { before: 300, after: 150 } }));
        volunteer.filter(function(v) { return v.role && v.role.trim(); }).forEach(function(vol) {
            var volText = vol.role + (vol.org ? ' at ' + vol.org : '') + (vol.start ? ' (' + vol.start + (vol.end ? ' - ' + vol.end : '') + ')' : '');
            children.push(new docx.Paragraph({ children: [new docx.Run({ text: volText, size: 22, bold: true })], spacing: { after: 120 }, bullet: { level: 0 } }));
            if (vol.achievements) {
                vol.achievements.split('\n').filter(function(l) { return l.trim(); }).forEach(function(line) {
                    children.push(new docx.Paragraph({ children: [new docx.Run({ text: line.replace(/^[\s\-\*•]+/, ''), size: 20 })], spacing: { after: 100 }, indent: { left: 720 } }));
                });
            }
        });
    }

    // Publications
    if (publications.length > 0 && publications.some(function(p) { return p.title && p.title.trim(); })) {
        children.push(new docx.Paragraph({ text: 'Publications & Research', heading: docx.HeadingLevel.HEADING_2, spacing: { before: 300, after: 150 } }));
        publications.filter(function(p) { return p.title && p.title.trim(); }).forEach(function(pub) {
            var pubText = pub.title + (pub.journal ? '. ' + pub.journal : '') + (pub.date ? ', ' + pub.date : '');
            children.push(new docx.Paragraph({ children: [new docx.Run({ text: pubText, size: 22, italics: true })], spacing: { after: 120 }, bullet: { level: 0 } }));
        });
    }

    // Patents
    if (patents.length > 0 && patents.some(function(p) { return p.title && p.title.trim(); })) {
        children.push(new docx.Paragraph({ text: 'Patents & Innovations', heading: docx.HeadingLevel.HEADING_2, spacing: { before: 300, after: 150 } }));
        patents.filter(function(p) { return p.title && p.title.trim(); }).forEach(function(pat) {
            var patText = pat.title + (pat.number ? ' (Patent No: ' + pat.number + ')' : '') + (pat.date ? ', ' + pat.date : '');
            children.push(new docx.Paragraph({ children: [new docx.Run({ text: patText, size: 22 })], spacing: { after: 120 }, bullet: { level: 0 } }));
        });
    }

    // Memberships
    if (memberships.length > 0 && memberships.some(function(m) { return m.org && m.org.trim(); })) {
        children.push(new docx.Paragraph({ text: 'Memberships & Affiliations', heading: docx.HeadingLevel.HEADING_2, spacing: { before: 300, after: 150 } }));
        memberships.filter(function(m) { return m.org && m.org.trim(); }).forEach(function(mem) {
            var memText = mem.org + (mem.role ? ' - ' + mem.role : '') + (mem.duration ? ' (' + mem.duration + ')' : '');
            children.push(new docx.Paragraph({ children: [new docx.Run({ text: memText, size: 22 })], spacing: { after: 120 }, bullet: { level: 0 } }));
        });
    }

    // Portfolio
    if (portfolio.length > 0 && portfolio.some(function(p) { return p.title && p.title.trim(); })) {
        children.push(new docx.Paragraph({ text: 'Portfolio & Work Samples', heading: docx.HeadingLevel.HEADING_2, spacing: { before: 300, after: 150 } }));
        portfolio.filter(function(p) { return p.title && p.title.trim(); }).forEach(function(port) {
            var portText = port.title + (port.url ? ' - ' + port.url : '');
            children.push(new docx.Paragraph({ children: [new docx.Run({ text: portText, size: 22 })], spacing: { after: 120 }, bullet: { level: 0 } }));
        });
    }

    // References
    if (references.length > 0 && references.some(function(r) { return r.name && r.name.trim(); })) {
        children.push(new docx.Paragraph({ text: 'References', heading: docx.HeadingLevel.HEADING_2, spacing: { before: 300, after: 150 } }));
        references.filter(function(r) { return r.name && r.name.trim(); }).forEach(function(ref) {
            children.push(new docx.Paragraph({ children: [new docx.Run({ text: ref.name + (ref.title ? ', ' + ref.title : '') + (ref.company ? ', ' + ref.company : ''), size: 22, bold: true })], spacing: { after: 120 }, bullet: { level: 0 } }));
            if (ref.email) {
                children.push(new docx.Paragraph({ children: [new docx.Run({ text: 'Email: ' + ref.email, size: 20 })], spacing: { after: 80 }, indent: { left: 720 } }));
            }
            if (ref.phone) {
                children.push(new docx.Paragraph({ children: [new docx.Run({ text: 'Phone: ' + ref.phone, size: 20 })], spacing: { after: 80 }, indent: { left: 720 } }));
            }
        });
    }

    var doc = new docx.Document({ sections: [{ children: children }] });
    docx.Packer.toBlob(doc).then(function(blob) {
        saveAs(blob, userName + '_resume.docx');
        showToast('Word doc downloaded!', 'success');
    }).catch(function(err) {
        console.error(err);
        showToast('DOCX generation failed', 'error');
    });
}

// ========================================
// DOWNLOAD HTML
// ========================================
function downloadHTML() {
    var container = document.querySelector('#resumeOutput .resume-container');
    if (!container) { showToast('Generate resume first!', 'error'); return; }
    var userName = document.getElementById('username').value || 'user';
    var fullName = document.getElementById('fullname').value || 'Resume';
    
    var htmlContent = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Resume - ' + fullName + '</title>' +
        '<style>' +
        'body { font-family: Inter, Arial, sans-serif; max-width: 210mm; margin: 0 auto; padding: 40px; color: #111827; background: white; line-height: 1.6; }' +
        'h2 { text-align: center; font-size: 2rem; margin-bottom: 8px; color: #111827; }' +
        'h3 { color: #4F46E5; margin-top: 24px; text-transform: uppercase; font-size: 1.125rem; font-weight: 700; letter-spacing: 0.05em; }' +
        'hr { border: none; height: 3px; background: linear-gradient(90deg, #4F46E5, #6366F1); margin: 16px 0; border-radius: 2px; }' +
        'ul { padding-left: 28px; margin: 12px 0; }' +
        'li { margin-bottom: 6px; line-height: 1.6; color: #374151; }' +
        'li strong { color: #111827; font-weight: 600; }' +
        'li em { color: #6B7280; font-style: italic; }' +
        '.resume-header { display: flex; align-items: center; gap: 24px; margin-bottom: 16px; }' +
        '.resume-header-image { width: 80px; height: 80px; border-radius: 50%; overflow: hidden; border: 3px solid #4F46E5; }' +
        '.resume-header-image img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }' +
        '.resume-header-info h2 { text-align: left; margin: 0 0 8px; }' +
        '.resume-contact { display: flex; gap: 8px; flex-wrap: wrap; font-size: 0.875rem; color: #6B7280; margin: 0; }' +
        '.resume-contact-item { display: inline-flex; align-items: center; gap: 6px; }' +
        '.resume-contact-separator { color: #E5E7EB; }' +
        '.objective { margin: 20px 0; padding: 18px 24px; background: #F9FAFB; border-left: 4px solid #4F46E5; border-radius: 0 8px 8px 0; }' +
        '.objective h3 { margin: 0 0 10px; font-size: 1rem; }' +
        '.objective p { margin: 0; font-style: italic; color: #6B7280; line-height: 1.75; }' +
        'section { margin-bottom: 20px; page-break-inside: avoid; }' +
        '@media print { @page { size: A4; margin: 25.4mm 25.4mm 25.4mm 38.1mm; } body { padding: 0; } }' +
        '</style></head><body>' + container.innerHTML + '</body></html>';
    
    var blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = userName + '_resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
    showToast('HTML downloaded!', 'success');
}

// ========================================
// GENERATE UNIQUE URL
// ========================================
function generateUniqueUrl(userName) {
    return 'https://versal.com/resume/' + encodeURIComponent(userName);
}

// ========================================
// PRINT RESUME - PROFESSIONALLY FORMATTED
// ========================================
function printResume() {
    var container = document.querySelector('#resumeOutput .resume-container');
    if (!container) {
        showToast('Generate resume first!', 'error');
        return;
    }

    // Show print dialog
    window.print();
}

// ========================================
// GENERATE RESUME
// ========================================
function generateResume() {
    if (!validateForm()) {
        showToast('Please fix the errors', 'error');
        var firstError = document.querySelector('.error');
        if (firstError) { firstError.scrollIntoView({ behavior: 'smooth', block: 'center' }); firstError.focus(); }
        return;
    }
    generateBtn.disabled = true;
    generateBtn.textContent = 'Generating...';
    var loadingSkeleton = document.getElementById('loading-skeleton');
    if (loadingSkeleton) loadingSkeleton.style.display = 'block';
    resumeOutput.style.display = 'block';
    var profilepicInput = document.getElementById('profilepic');
    var userName = document.getElementById('username').value;
    var fullName = document.getElementById('fullname').value;
    var objective = document.getElementById('objective').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;
    var website = document.getElementById('website').value;
    var twitter = document.getElementById('twitter').value;
    var skills = collectSkills();
    var education = collectEducation();
    var certEducation = collectCertEducation();
    var experience = collectExperience();
    var projects = document.getElementById('Projects').value;
    var certs = document.getElementById('Certifications').value;
    var languages = document.getElementById('Languages').value;
    var otherActivities = document.getElementById('OtherActivities').value;
    var professionalSummary = document.getElementById('ProfessionalSummary').value;
    var volunteer = collectVolunteer();
    var publications = collectPublications();
    var patents = collectPatents();
    var references = collectReferences();
    var memberships = collectMemberships();
    var softSkills = collectSoftSkills();
    var portfolio = collectPortfolio();

    // Auto-generate objective if blank
    if (!objective || !objective.trim()) {
        objective = autoGenerateObjective(fullName, education, experience, skills);
        var isAutoGenerated = true;
    } else {
        var isAutoGenerated = false;
    }

    function processResume() { displayResume(null); }
    if (profilepicInput.files && profilepicInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) { displayResume(e.target.result); };
        reader.readAsDataURL(profilepicInput.files[0]);
    } else { processResume(); }
    
    function displayResume(picData) {
        if (loadingSkeleton) loadingSkeleton.style.display = 'none';
        resumeOutput.style.display = 'block';
        
        function toList(text) {
            if (!text || !text.trim()) return '';
            var lines = text.split('\n').filter(function(l) { return l.trim(); });
            return '<ul>' + lines.map(function(l) { return '<li>' + l.replace(/^[\s\-\*•]+/, '') + '</li>'; }).join('') + '</ul>';
        }
        
        var html = '<div class="resume-container">';
        html += '<div class="resume-header">';
        if (picData) {
            html += '<div class="resume-header-image"><img src="' + picData + '" alt="Photo"></div>';
        } else {
            html += '<div class="resume-header-image resume-header-image-placeholder"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>';
        }
        html += '<div class="resume-header-info"><h2>' + fullName + '</h2>';
        html += '<p class="resume-contact">';
        html += '<span class="resume-contact-item">✉ ' + email + '</span>';
        html += '<span class="resume-contact-separator">|</span>';
        html += '<span class="resume-contact-item">📞 ' + phone + '</span>';
        if (linkedin) {
            html += '<span class="resume-contact-separator">|</span>';
            html += '<span class="resume-contact-item">💼 <a href="' + linkedin + '" target="_blank" style="color: inherit; text-decoration: none;">LinkedIn</a></span>';
        }
        if (github) {
            html += '<span class="resume-contact-separator">|</span>';
            html += '<span class="resume-contact-item">🐙 <a href="' + github + '" target="_blank" style="color: inherit; text-decoration: none;">GitHub</a></span>';
        }
        html += '</p></div></div>';
        
        // Objective section (always displayed)
        var objectiveClass = 'objective' + (isAutoGenerated ? ' auto-generated' : '');
        html += '<div class="' + objectiveClass + '"><h3>Objective:</h3><p>' + objective + '</p></div>';
        html += '<hr>';
        
        // Skills with levels
        if (skills.length > 0 && skills.some(function(s) { return s.name && s.name.trim(); })) {
            html += '<h3>Skills:</h3><ul>';
            skills.filter(function(s) { return s.name && s.name.trim(); }).forEach(function(skill) {
                var levelText = skill.level ? ' - ' + skill.level.charAt(0).toUpperCase() + skill.level.slice(1) : '';
                html += '<li>' + skill.name + levelText + '</li>';
            });
            html += '</ul>';
        }
        
        // Education
        if (education.length > 0 && education.some(function(e) { return e.degree && e.degree.trim(); })) {
            html += '<h3>Education:</h3><ul>';
            education.filter(function(e) { return e.degree && e.degree.trim(); }).forEach(function(edu) {
                var eduText = edu.degree;
                if (edu.institution) eduText += ', ' + edu.institution;
                if (edu.start || edu.end) {
                    eduText += ' (' + (edu.start || '') + (edu.end ? ' - ' + edu.end : '') + ')';
                }
                html += '<li>' + eduText + '</li>';
                if (edu.details) {
                    html += '<ul><li><em>' + edu.details + '</em></li></ul>';
                }
            });
            html += '</ul>';
        }
        
        // Professional Certifications
        if (certEducation.length > 0 && certEducation.some(function(c) { return c.name && c.name.trim(); })) {
            html += '<h3>Professional Certifications:</h3><ul>';
            certEducation.filter(function(c) { return c.name && c.name.trim(); }).forEach(function(cert) {
                var certText = cert.name;
                if (cert.issuer) certText += ' - ' + cert.issuer;
                if (cert.date) certText += ' (' + cert.date + ')';
                html += '<li>' + certText + '</li>';
            });
            html += '</ul>';
        }
        
        // Work Experience
        if (experience.length > 0 && experience.some(function(e) { return e.title && e.title.trim(); })) {
            html += '<h3>Work Experience:</h3><ul>';
            experience.filter(function(e) { return e.title && e.title.trim(); }).forEach(function(exp) {
                var expText = '<strong>' + exp.title + '</strong>';
                if (exp.company) expText += ' at ' + exp.company;
                if (exp.start || exp.end) {
                    expText += ' (' + (exp.start || '') + (exp.end ? ' - ' + exp.end : '') + ')';
                }
                html += '<li>' + expText;
                if (exp.description) {
                    var lines = exp.description.split('\n').filter(function(l) { return l.trim(); });
                    html += '<ul>';
                    lines.forEach(function(line) {
                        html += '<li>' + line.replace(/^[\s\-\*•]+/, '') + '</li>';
                    });
                    html += '</ul>';
                }
                html += '</li>';
            });
            html += '</ul>';
        }
        
        if (projects) html += '<h3>Projects:</h3>' + toList(projects);
        if (certs) html += '<h3>Certifications & Awards:</h3>' + toList(certs);
        if (languages) html += '<h3>Languages:</h3>' + toList(languages);
        if (otherActivities) html += '<h3>Other Activities:</h3>' + toList(otherActivities);

        // Professional Summary
        if (professionalSummary && professionalSummary.trim()) {
            html += '<h3>Professional Summary:</h3>';
            html += '<p>' + professionalSummary.replace(/\n/g, '<br>') + '</p>';
        }

        // Soft Skills
        if (softSkills.length > 0 && softSkills.some(function(s) { return s.name && s.name.trim(); })) {
            html += '<h3>Soft Skills:</h3><ul>';
            softSkills.filter(function(s) { return s.name && s.name.trim(); }).forEach(function(skill) {
                var levelText = skill.level ? ' - ' + skill.level.charAt(0).toUpperCase() + skill.level.slice(1) : '';
                html += '<li>' + skill.name + levelText + '</li>';
            });
            html += '</ul>';
        }

        // Volunteer Experience
        if (volunteer.length > 0 && volunteer.some(function(v) { return v.role && v.role.trim(); })) {
            html += '<h3>Volunteer Experience:</h3><ul>';
            volunteer.filter(function(v) { return v.role && v.role.trim(); }).forEach(function(vol) {
                var volText = '<strong>' + vol.role + '</strong>';
                if (vol.org) volText += ' at ' + vol.org;
                if (vol.start || vol.end) {
                    volText += ' (' + (vol.start || '') + (vol.end ? ' - ' + vol.end : '') + ')';
                }
                html += '<li>' + volText;
                if (vol.achievements) {
                    var lines = vol.achievements.split('\n').filter(function(l) { return l.trim(); });
                    html += '<ul>';
                    lines.forEach(function(line) {
                        html += '<li>' + line.replace(/^[\s\-\*•]+/, '') + '</li>';
                    });
                    html += '</ul>';
                }
                html += '</li>';
            });
            html += '</ul>';
        }

        // Publications & Research
        if (publications.length > 0 && publications.some(function(p) { return p.title && p.title.trim(); })) {
            html += '<h3>Publications & Research:</h3><ul>';
            publications.filter(function(p) { return p.title && p.title.trim(); }).forEach(function(pub) {
                var pubText = '<em>' + pub.title + '</em>';
                if (pub.journal) pubText += '. ' + pub.journal;
                if (pub.date) pubText += ', ' + pub.date;
                if (pub.url) {
                    pubText += '. <a href="' + pub.url + '" target="_blank" style="color: var(--primary);">View Publication</a>';
                }
                html += '<li>' + pubText;
                if (pub.description) {
                    html += '<br><small>' + pub.description + '</small>';
                }
                html += '</li>';
            });
            html += '</ul>';
        }

        // Patents & Innovations
        if (patents.length > 0 && patents.some(function(p) { return p.title && p.title.trim(); })) {
            html += '<h3>Patents & Innovations:</h3><ul>';
            patents.filter(function(p) { return p.title && p.title.trim(); }).forEach(function(pat) {
                var patText = '<strong>' + pat.title + '</strong>';
                if (pat.number) patText += ' (Patent No: ' + pat.number + ')';
                if (pat.date) patText += ', ' + pat.date;
                html += '<li>' + patText;
                if (pat.description) {
                    html += '<br><small>' + pat.description + '</small>';
                }
                html += '</li>';
            });
            html += '</ul>';
        }

        // Memberships & Affiliations
        if (memberships.length > 0 && memberships.some(function(m) { return m.org && m.org.trim(); })) {
            html += '<h3>Memberships & Affiliations:</h3><ul>';
            memberships.filter(function(m) { return m.org && m.org.trim(); }).forEach(function(mem) {
                var memText = '<strong>' + mem.org + '</strong>';
                if (mem.role) memText += ' - ' + mem.role;
                if (mem.duration) memText += ' (' + mem.duration + ')';
                html += '<li>' + memText;
                if (mem.activities) {
                    html += '<br><small>' + mem.activities + '</small>';
                }
                html += '</li>';
            });
            html += '</ul>';
        }

        // Portfolio / Work Samples
        if (portfolio.length > 0 && portfolio.some(function(p) { return p.title && p.title.trim(); })) {
            html += '<h3>Portfolio & Work Samples:</h3><ul>';
            portfolio.filter(function(p) { return p.title && p.title.trim(); }).forEach(function(port) {
                var portText = '<strong>' + port.title + '</strong>';
                if (port.url) {
                    portText += ' - <a href="' + port.url + '" target="_blank" style="color: var(--primary);">' + port.url + '</a>';
                }
                html += '<li>' + portText;
                if (port.description) {
                    html += '<br><small>' + port.description + '</small>';
                }
                html += '</li>';
            });
            html += '</ul>';
        }

        // References
        if (references.length > 0 && references.some(function(r) { return r.name && r.name.trim(); })) {
            html += '<h3>References:</h3><ul>';
            references.filter(function(r) { return r.name && r.name.trim(); }).forEach(function(ref) {
                html += '<li><strong>' + ref.name + '</strong>';
                if (ref.title) html += '<br>' + ref.title;
                if (ref.company) html += '<br>' + ref.company;
                if (ref.relationship) html += '<br><em>Relationship:</em> ' + ref.relationship;
                if (ref.email) html += '<br>✉ ' + ref.email;
                if (ref.phone) html += '<br>📞 ' + ref.phone;
                html += '</li>';
            });
            html += '</ul>';
        }

        html += '</div>';
        resumeOutput.innerHTML = '<h3 style="text-align:center;color:#6B7280;font-size:0.875rem;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:16px;">📄 Your Resume Preview</h3>' + html;
        uniqueUrlElement.textContent = generateUniqueUrl(userName);
        shareUrlContainer.style.display = 'block';
        generateBtn.disabled = false;
        generateBtn.textContent = '🚀 Generate Resume';
        showToast('Resume generated!', 'success');
        setTimeout(function() { resumeOutput.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
        setTimeout(function() {
            document.getElementById('download-btn').onclick = function() { downloadHTML(); analyticsData.downloads++; updateAnalytics(); };
            document.getElementById('download-pdf-btn').onclick = function() { downloadPDF(); analyticsData.downloads++; updateAnalytics(); };
            document.getElementById('download-doc-btn').onclick = function() { downloadDoc(); analyticsData.downloads++; updateAnalytics(); };
            document.getElementById('print-btn').onclick = function() { printResume(); };
            document.getElementById('share-btn').onclick = function() {
                window.location.href = 'mailto:?subject=My Resume: ' + fullName + '&body=Here is my resume:\n\n' + generateUniqueUrl(userName);
            };

            // Generate QR code
            var resumeUrl = generateUniqueUrl(userName);
            generateQRCode(resumeUrl);

            // Detect employment gaps
            detectEmploymentGaps();
        }, 100);
    }
}

// ========================================
// WORD COUNT & STATS
// ========================================
function updateWordCount() {
    var allText = '';
    var textInputs = document.querySelectorAll('#resume-form textarea, #resume-form input[type="text"]');
    textInputs.forEach(function(input) {
        allText += ' ' + (input.value || '');
    });

    // Also collect from dynamic entries
    document.querySelectorAll('.exp-description, .education-details').forEach(function(ta) {
        allText += ' ' + (ta.value || '');
    });

    var words = allText.trim().split(/\s+/).filter(function(w) { return w.length > 0; });
    var chars = allText.replace(/\s/g, '').length;
    var wordCount = words.length;
    var charCount = chars;

    // Estimate pages (roughly 400-500 words per page)
    var pages = Math.max(1, Math.ceil(wordCount / 400));
    // Read time (average 200 words per minute)
    var readSeconds = Math.ceil((wordCount / 200) * 60);
    var readTime = readSeconds < 60 ? readSeconds + 's' : Math.ceil(readSeconds / 60) + 'm';

    document.getElementById('word-count').textContent = wordCount;
    document.getElementById('char-count').textContent = charCount;
    document.getElementById('page-count').textContent = pages;
    document.getElementById('read-time').textContent = readTime;
}

// ========================================
// TEMPLATE & CUSTOMIZATION
// ========================================
function applyTemplate(template) {
    var output = document.getElementById('resumeOutput');
    output.classList.remove('template-modern', 'template-classic', 'template-minimal', 'template-executive');
    output.classList.add('template-' + template);
    autoSave();
}

function applyFont(font) {
    var output = document.getElementById('resumeOutput');
    var resumeContainer = output.querySelector('.resume-container');
    if (resumeContainer) {
        resumeContainer.style.fontFamily = "'" + font + "', 'Inter', Arial, sans-serif";
    }
    autoSave();
}

function applyFontSize(size) {
    var output = document.getElementById('resumeOutput');
    var resumeContainer = output.querySelector('.resume-container');
    if (resumeContainer) {
        var sizes = { small: '13px', medium: '15px', large: '17px' };
        resumeContainer.style.fontSize = sizes[size] || '15px';
    }
    autoSave();
}

function applyColorTheme(theme) {
    var colors = {
        indigo: { primary: '#4F46E5', primaryLight: '#6366F1', primaryDark: '#4338CA' },
        emerald: { primary: '#059669', primaryLight: '#10B981', primaryDark: '#047857' },
        rose: { primary: '#E11D48', primaryLight: '#F43F5E', primaryDark: '#BE123C' },
        amber: { primary: '#D97706', primaryLight: '#F59E0B', primaryDark: '#B45309' },
        sky: { primary: '#0284C7', primaryLight: '#0EA5E9', primaryDark: '#0369A1' },
        purple: { primary: '#7C3AED', primaryLight: '#A78BFA', primaryDark: '#6D28D9' },
        slate: { primary: '#475569', primaryLight: '#64748B', primaryDark: '#334155' }
    };

    if (theme === 'custom') {
        var customColor = document.getElementById('custom-color-picker').value;
        colors.custom = { primary: customColor, primaryLight: customColor + 'CC', primaryDark: customColor + '99' };
        theme = 'custom';
    }

    var color = colors[theme];
    if (!color) return;

    document.documentElement.style.setProperty('--primary', color.primary);
    document.documentElement.style.setProperty('--primary-light', color.primaryLight);
    document.documentElement.style.setProperty('--primary-dark', color.primaryDark);
    autoSave();
}

function getIndustryKeywords(industry) {
    var keywords = {
        tech: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Agile', 'REST APIs', 'TypeScript'],
        design: ['Figma', 'Adobe Creative Suite', 'UI/UX', 'Prototyping', 'Wireframing', 'Design Systems', 'User Research', 'Sketch'],
        finance: ['Financial Analysis', 'Excel', 'Bloomberg', 'Risk Management', 'Financial Modeling', 'CPA', 'CFA', 'SAP'],
        healthcare: ['Patient Care', 'EHR Systems', 'HIPAA', 'Clinical Research', 'Medical Terminology', 'EMR', 'CPR Certified'],
        education: ['Curriculum Development', 'Instructional Design', 'Learning Management Systems', 'Student Assessment', 'Classroom Management'],
        marketing: ['SEO/SEM', 'Google Analytics', 'Content Strategy', 'Social Media Marketing', 'Email Marketing', 'A/B Testing', 'Copywriting']
    };
    return keywords[industry] || [];
}

// ========================================
// EMPLOYMENT GAP DETECTION
// ========================================
function detectEmploymentGaps() {
    var entries = [];
    document.querySelectorAll('#experience-container .entry-item').forEach(function(item) {
        var startDate = item.querySelector('.exp-start-date');
        var endDate = item.querySelector('.exp-end-date');
        var isCurrent = item.querySelector('.exp-current-position');

        if (startDate && startDate.value) {
            entries.push({
                start: new Date(startDate.value),
                end: (isCurrent && isCurrent.checked) ? new Date() : (endDate && endDate.value ? new Date(endDate.value) : null),
                startStr: startDate.value,
                endStr: (isCurrent && isCurrent.checked) ? 'Present' : (endDate ? endDate.value : '')
            });
        }
    });

    // Sort by start date
    entries.sort(function(a, b) { return a.start - b.start; });

    var gaps = [];
    for (var i = 1; i < entries.length; i++) {
        if (entries[i - 1].end && entries[i].start) {
            var gapMonths = (entries[i].start.getFullYear() - entries[i - 1].end.getFullYear()) * 12 +
                           (entries[i].start.getMonth() - entries[i - 1].end.getMonth());
            if (gapMonths > 3) {
                var gapStart = entries[i - 1].endStr;
                var gapEnd = entries[i].startStr;
                gaps.push(gapMonths + ' month gap between ' + gapStart + ' and ' + gapEnd);
            }
        }
    }

    var warningContainer = document.getElementById('gap-warning-container');
    var warningText = document.getElementById('gap-warning-text');

    if (gaps.length > 0) {
        warningText.textContent = 'Employment gaps detected: ' + gaps.join('; ');
        warningContainer.style.display = 'block';
    } else {
        warningContainer.style.display = 'none';
    }

    return gaps;
}

// ========================================
// QR CODE GENERATION
// ========================================
function generateQRCode(url) {
    var container = document.getElementById('qr-code');
    container.innerHTML = '';

    if (typeof QRCode !== 'undefined') {
        qrCodeInstance = new QRCode(container, {
            text: url,
            width: 180,
            height: 180,
            colorDark: '#111827',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.M
        });
        document.getElementById('qr-code-container').style.display = 'block';
    } else {
        console.warn('QRCode library not loaded');
    }
}

function downloadQRCode() {
    var canvas = document.querySelector('#qr-code canvas');
    if (canvas) {
        var link = document.createElement('a');
        link.download = 'resume_qr_code.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        showToast('QR code downloaded!', 'success');
    } else {
        var img = document.querySelector('#qr-code img');
        if (img) {
            var link = document.createElement('a');
            link.download = 'resume_qr_code.png';
            link.href = img.src;
            link.click();
            showToast('QR code downloaded!', 'success');
        }
    }
}

// ========================================
// COVER LETTER GENERATOR
// ========================================
function toggleCoverLetterSection() {
    var section = document.getElementById('cover-letter-section');
    if (section.style.display === 'none') {
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        section.style.display = 'none';
    }
}

function generateCoverLetter() {
    var jobTitle = document.getElementById('cover-job-title').value.trim();
    var company = document.getElementById('cover-company').value.trim();
    var hiringManager = document.getElementById('cover-hiring-manager').value.trim();
    var additionalInfo = document.getElementById('cover-additional-info').value.trim();

    if (!jobTitle || !company) {
        showToast('Please enter job title and company', 'error');
        return;
    }

    var fullName = document.getElementById('fullname').value || 'Your Name';
    var email = document.getElementById('email').value || '';
    var phone = document.getElementById('phone').value || '';
    var address = document.getElementById('address').value || '';
    var objective = document.getElementById('objective').value || '';
    var experience = collectExperience();
    var skills = collectSkills();
    var education = collectEducation();

    var salutation = hiringManager ? 'Dear ' + hiringManager + ',' : 'Dear Hiring Manager,';

    // Build opening paragraph
    var opening = 'I am writing to express my strong interest in the ' + jobTitle + ' position at ' + company + '. ' +
        (objective ? objective : 'With my background and skill set, I am confident in my ability to make meaningful contributions to your team.');

    // Build experience paragraph
    var experiencePara = '';
    if (experience.length > 0 && experience[0].title) {
        var exp = experience[0];
        experiencePara = 'In my current role as ' + exp.title + (exp.company ? ' at ' + exp.company : '') + ', ' +
            'I have developed strong capabilities in delivering results. ' +
            (exp.description ? 'Key achievements include: ' + exp.description.split('\n').filter(function(l) { return l.trim(); }).slice(0, 2).join('. ') + '.' : '');
    }

    // Build skills paragraph
    var skillsPara = '';
    var topSkills = skills.filter(function(s) { return s.name && s.name.trim(); }).slice(0, 5);
    if (topSkills.length > 0) {
        skillsPara = 'My technical expertise includes ' + topSkills.map(function(s) { return s.name; }).join(', ') + '. ' +
            'These skills, combined with my passion for continuous learning, position me to excel in this role.';
    }

    // Build closing
    var closing = 'I would welcome the opportunity to discuss how my experience and skills align with the needs of your team. ' +
        'Thank you for considering my application. I look forward to the possibility of contributing to ' + company + '\'s continued success.';

    var additionalPara = additionalInfo ? 'Additionally, ' + additionalInfo : '';

    var today = new Date();
    var dateStr = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    currentCoverLetter = dateStr + '\n\n' +
        fullName + '\n' +
        (address ? address + '\n' : '') +
        (email ? email + ' | ' : '') + (phone ? phone : '') + '\n\n' +
        salutation + '\n\n' +
        opening + '\n\n' +
        (experiencePara ? experiencePara + '\n\n' : '') +
        (skillsPara ? skillsPara + '\n\n' : '') +
        (additionalPara ? additionalPara + '\n\n' : '') +
        closing + '\n\n' +
        'Sincerely,\n' +
        fullName;

    // Display cover letter
    var output = document.getElementById('cover-letter-output');
    output.style.display = 'block';
    output.innerHTML = '<div style="white-space: pre-wrap; font-family: inherit;">' +
        currentCoverLetter.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</div>';

    document.getElementById('cover-letter-actions').style.display = 'flex';
    showToast('Cover letter generated!', 'success');

    // Track analytics
    analyticsData.downloads++;
    updateAnalytics();
}

function downloadCoverLetterPDF() {
    if (!currentCoverLetter) {
        showToast('Generate a cover letter first', 'error');
        return;
    }

    var fullName = document.getElementById('fullname').value || 'Cover_Letter';
    var htmlContent = '<div style="width: 210mm; padding: 25.4mm 38.1mm; font-family: Arial, sans-serif; background: white; color: #111827;">' +
        '<div style="white-space: pre-wrap; font-size: 11pt; line-height: 1.7;">' +
        currentCoverLetter.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</div></div>';

    var overlay = document.createElement('div');
    overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: white; z-index: 99999; overflow-y: auto; display: flex; justify-content: center;';
    var contentDiv = document.createElement('div');
    contentDiv.innerHTML = htmlContent;
    overlay.appendChild(contentDiv);
    document.body.appendChild(overlay);

    setTimeout(function() {
        if (typeof html2pdf !== 'undefined') {
            html2pdf().set({
                margin: [25.4, 25.4, 25.4, 25.4],
                filename: fullName.replace(/\s+/g, '_') + '_cover_letter.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            }).from(contentDiv).save().then(function() {
                document.body.removeChild(overlay);
                showToast('Cover letter PDF downloaded!', 'success');
                analyticsData.downloads++;
                updateAnalytics();
            });
        } else {
            document.body.removeChild(overlay);
            showToast('PDF library not loaded', 'error');
        }
    }, 300);
}

function copyCoverLetter() {
    if (!currentCoverLetter) {
        showToast('Generate a cover letter first', 'error');
        return;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(currentCoverLetter).then(function() {
            showToast('Cover letter copied to clipboard!', 'success');
        });
    } else {
        var textarea = document.createElement('textarea');
        textarea.value = currentCoverLetter;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Cover letter copied to clipboard!', 'success');
    }
}

// ========================================
// GDPR & PRIVACY CONTROLS
// ========================================
function exportMyData() {
    var data = {
        exportDate: new Date().toISOString(),
        version: '1.0',
        resumeData: collectFormData(),
        preferences: {
            template: document.getElementById('template-selector').value,
            font: document.getElementById('font-selector').value,
            fontSize: document.getElementById('font-size-selector').value,
            colorTheme: document.querySelector('input[name="color-theme"]:checked').value,
            darkMode: document.body.classList.contains('dark-mode')
        },
        analytics: analyticsData
    };

    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'my_resume_data_' + new Date().toISOString().split('T')[0] + '.json';
    a.click();
    URL.revokeObjectURL(a.href);
    showToast('Data exported successfully!', 'success');
}

function deleteAllData() {
    if (confirm('Are you sure you want to delete ALL your data? This action cannot be undone. Your resume, preferences, and analytics will be permanently removed.')) {
        if (confirm('Final confirmation: This will delete all your data. Continue?')) {
            localStorage.removeItem('resumeDraft');
            localStorage.removeItem('darkMode');
            localStorage.removeItem('resumeAnalytics');
            localStorage.removeItem('resumePreferences');
            clearForm();
            showToast('All data has been permanently deleted', 'success');
        }
    }
}

function togglePrivacyDetails() {
    var details = document.getElementById('privacy-details');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

// ========================================
// JSON RESUME EXPORT (JSON Resume Standard)
// ========================================
function downloadJSONResume() {
    var data = collectFormData();
    var fullName = document.getElementById('fullname').value || 'Resume';
    var userName = document.getElementById('username').value || 'user';

    // Build JSON Resume format (https://jsonresume.org/schema/)
    var jsonResume = {
        basics: {
            name: data.fullname,
            label: data.experience.length > 0 ? data.experience[0].title : 'Professional',
            email: data.email,
            phone: data.phone,
            location: {
                address: data.address
            },
            profiles: []
        },
        summary: data.objective,
        work: [],
        education: [],
        skills: [],
        certifications: [],
        projects: [],
        languages: [],
        interests: []
    };

    // Add profiles
    if (data.linkedin) jsonResume.basics.profiles.push({ network: 'LinkedIn', url: data.linkedin });
    if (data.github) jsonResume.basics.profiles.push({ network: 'GitHub', url: data.github });
    if (data.website) jsonResume.basics.profiles.push({ network: 'Website', url: data.website });
    if (data.twitter) jsonResume.basics.profiles.push({ network: 'Twitter/X', url: data.twitter });

    // Add work experience
    data.experience.forEach(function(exp) {
        if (exp.title) {
            jsonResume.work.push({
                position: exp.title,
                company: exp.company,
                startDate: exp.start,
                endDate: exp.end,
                summary: exp.description,
                highlights: exp.description ? exp.description.split('\n').filter(function(l) { return l.trim(); }) : []
            });
        }
    });

    // Add education
    data.education.forEach(function(edu) {
        if (edu.degree) {
            jsonResume.education.push({
                institution: edu.institution,
                area: edu.degree,
                startDate: edu.start,
                endDate: edu.end,
                notes: edu.details
            });
        }
    });

    // Add skills
    data.skills.forEach(function(skill) {
        if (skill.name) {
            jsonResume.skills.push({
                name: skill.name,
                level: skill.level || ''
            });
        }
    });

    // Add certifications
    data.certEducation.forEach(function(cert) {
        if (cert.name) {
            jsonResume.certifications.push({
                name: cert.name,
                issuer: cert.issuer,
                date: cert.date
            });
        }
    });

    // Add projects
    if (data.projects) {
        jsonResume.projects.push({
            name: 'Key Projects',
            description: data.projects
        });
    }

    // Add languages
    if (data.languages) {
        data.languages.split('\n').filter(function(l) { return l.trim(); }).forEach(function(lang) {
            var parts = lang.split(/\s*\(/);
            jsonResume.languages.push({
                language: parts[0].trim(),
                fluency: parts[1] ? parts[1].replace(')', '').trim() : ''
            });
        });
    }

    var blob = new Blob([JSON.stringify(jsonResume, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = userName + '_resume.json';
    a.click();
    URL.revokeObjectURL(a.href);
    showToast('JSON Resume exported!', 'success');
    analyticsData.downloads++;
    updateAnalytics();
}

// ========================================
// ANALYTICS DASHBOARD
// ========================================
function updateAnalytics() {
    // Load analytics from storage
    try {
        var stored = localStorage.getItem('resumeAnalytics');
        if (stored) {
            var parsed = JSON.parse(stored);
            analyticsData.views = parsed.views || 0;
            analyticsData.downloads = parsed.downloads || 0;
            analyticsData.lastUpdated = parsed.lastUpdated || null;
        }
    } catch (e) {
        console.error('Failed to load analytics:', e);
    }

    analyticsData.lastUpdated = new Date().toISOString();
    analyticsData.atsScore = parseInt(document.getElementById('ats-score-value').textContent) || 0;

    // Calculate completion progress
    var completionProgress = calculateCompletionProgress();
    analyticsData.completionProgress = completionProgress;

    // Save analytics
    try {
        localStorage.setItem('resumeAnalytics', JSON.stringify(analyticsData));
    } catch (e) {
        console.error('Failed to save analytics:', e);
    }

    // Update UI
    document.getElementById('analytics-views').textContent = analyticsData.views;
    document.getElementById('analytics-downloads').textContent = analyticsData.downloads;
    document.getElementById('analytics-last-updated').textContent = analyticsData.lastUpdated ?
        new Date(analyticsData.lastUpdated).toLocaleString() : '-';
    document.getElementById('analytics-ats-score').textContent = analyticsData.atsScore + '%';
    document.getElementById('analytics-progress-fill').style.width = completionProgress + '%';
    document.getElementById('analytics-progress-text').textContent = completionProgress + '% complete';
}

function calculateCompletionProgress() {
    var total = 0;
    var completed = 0;

    // Required fields (weighted)
    var checks = [
        { check: function() { return document.getElementById('username').value.trim(); }, weight: 5 },
        { check: function() { return document.getElementById('fullname').value.trim(); }, weight: 5 },
        { check: function() { return document.getElementById('email').value.trim(); }, weight: 10 },
        { check: function() { return document.getElementById('phone').value.trim(); }, weight: 5 },
        { check: function() { return document.getElementById('address').value.trim(); }, weight: 5 },
        { check: function() { return document.getElementById('objective').value.trim(); }, weight: 10 },
        { check: function() { return collectSkills().filter(function(s) { return s.name; }).length >= 3; }, weight: 15 },
        { check: function() { return collectEducation().filter(function(e) { return e.degree; }).length > 0; }, weight: 15 },
        { check: function() { return collectExperience().filter(function(e) { return e.title; }).length > 0; }, weight: 20 },
        { check: function() { return document.getElementById('Projects').value.trim(); }, weight: 5 },
        { check: function() { return document.getElementById('Certifications').value.trim(); }, weight: 3 },
        { check: function() { return document.getElementById('Languages').value.trim(); }, weight: 2 }
    ];

    checks.forEach(function(item) {
        total += item.weight;
        if (item.check()) completed += item.weight;
    });

    return Math.round((completed / total) * 100);
}

function showAnalytics() {
    var container = document.getElementById('analytics-container');
    updateAnalytics();
    container.style.display = 'block';
    container.scrollIntoView({ behavior: 'smooth' });
}

// ========================================
// INITIALIZE APP
// ========================================
function initApp() {
    console.log('App initializing...');
    
    // Set PDF.js worker source
    if (typeof pdfjsLib !== 'undefined') {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }
    
    form = document.getElementById('resume-form');
    generateBtn = document.getElementById('generate-btn');
    clearBtn = document.getElementById('clear-btn');
    resumeOutput = document.getElementById('resumeOutput');
    shareUrlContainer = document.getElementById('share-url-container');
    uniqueUrlElement = document.getElementById('unique-url');
    downloadBtn = document.getElementById('download-btn');
    printBtn = document.getElementById('print-btn');
    shareBtn = document.getElementById('share-btn');
    demoBtn = document.getElementById('demo-btn');
    demoBtnHeader = document.getElementById('demo-btn-header');
    darkModeToggle = document.getElementById('dark-mode-toggle');
    profilePicInput = document.getElementById('profilepic');
    console.log('demoBtn:', demoBtn, 'darkModeToggle:', darkModeToggle);
    var yearEl = document.getElementById('copyright-year');
    if (yearEl) yearEl.textContent = '© ' + new Date().getFullYear();
    if (localStorage.getItem('darkMode') === 'true' || (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-mode');
    }
    if (darkModeToggle) darkModeToggle.onclick = toggleMode;
    if (demoBtn) demoBtn.onclick = loadDemoResume;
    if (demoBtnHeader) demoBtnHeader.onclick = function(e) { e.preventDefault(); loadDemoResume(); };
    if (clearBtn) clearBtn.onclick = clearForm;
    if (generateBtn) generateBtn.onclick = function(e) { e.preventDefault(); generateResume(); };
    if (profilePicInput) profilePicInput.onchange = function() {
        var file = this.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) { showToast('Photo must be under 2MB', 'error'); this.value = ''; return; }
            if (!file.type.match('image.*')) { showToast('Please upload an image file', 'error'); this.value = ''; return; }
            showToast('Photo uploaded!', 'success');
            autoSave();
        }
    };

    // Initialize auto-save
    setupAutoSave();
    
    // Initialize resume upload
    setupResumeUpload();

    // Load draft if available
    if (localStorage.getItem('resumeDraft')) {
        loadDraft();
    }

    // Initialize ATS score
    updateATSScore();

    // Initialize word count
    updateWordCount();

    // Wire up word count updates
    var allInputs = document.querySelectorAll('#resume-form input, #resume-form textarea, #resume-form select');
    allInputs.forEach(function(input) {
        input.addEventListener('input', function() {
            updateWordCount();
        });
    });

    // Wire up template selector
    var templateSelector = document.getElementById('template-selector');
    if (templateSelector) {
        templateSelector.addEventListener('change', function() {
            applyTemplate(this.value);
        });
    }

    // Wire up font selector
    var fontSelector = document.getElementById('font-selector');
    if (fontSelector) {
        fontSelector.addEventListener('change', function() {
            applyFont(this.value);
        });
    }

    // Wire up font size selector
    var fontSizeSelector = document.getElementById('font-size-selector');
    if (fontSizeSelector) {
        fontSizeSelector.addEventListener('change', function() {
            applyFontSize(this.value);
        });
    }

    // Wire up color theme radio buttons
    var colorThemeRadios = document.querySelectorAll('input[name="color-theme"]');
    colorThemeRadios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            applyColorTheme(this.value);
        });
    });

    // Wire up custom color picker
    var customColorPicker = document.getElementById('custom-color-picker');
    if (customColorPicker) {
        customColorPicker.addEventListener('input', function() {
            document.getElementById('theme-custom').checked = true;
            applyColorTheme('custom');
        });
    }

    // Wire up JSON export button
    var jsonBtn = document.getElementById('download-json-btn');
    if (jsonBtn) {
        jsonBtn.onclick = downloadJSONResume;
    }

    // Wire up privacy link
    var privacyLink = document.querySelector('.privacy-link');
    if (privacyLink) {
        privacyLink.addEventListener('click', function(e) {
            e.preventDefault();
            togglePrivacyDetails();
        });
    }

    // Restore preferences
    restorePreferences();

    // Load analytics
    try {
        var stored = localStorage.getItem('resumeAnalytics');
        if (stored) {
            var parsed = JSON.parse(stored);
            analyticsData.views = parsed.views || 0;
            analyticsData.downloads = parsed.downloads || 0;
        }
    } catch (e) {}

    // Track resume generation for analytics
    var origGenerate = generateResume;
    generateBtn.onclick = function(e) {
        e.preventDefault();
        analyticsData.views++;
        generateResume();
        setTimeout(function() {
            updateAnalytics();
            // Show analytics after resume generation
            document.getElementById('analytics-container').style.display = 'block';
        }, 500);
    };

    console.log('App initialized successfully');
    
    // Initialize theme (light/dark mode)
    initializeTheme();
}

// ========================================
// RESTORE PREFERENCES
// ========================================
function restorePreferences() {
    try {
        var prefs = localStorage.getItem('resumePreferences');
        if (prefs) {
            var data = JSON.parse(prefs);
            if (data.template) {
                document.getElementById('template-selector').value = data.template;
                applyTemplate(data.template);
            }
            if (data.font) {
                document.getElementById('font-selector').value = data.font;
                applyFont(data.font);
            }
            if (data.fontSize) {
                document.getElementById('font-size-selector').value = data.fontSize;
                applyFontSize(data.fontSize);
            }
            if (data.colorTheme) {
                var radio = document.querySelector('input[name="color-theme"][value="' + data.colorTheme + '"]');
                if (radio) {
                    radio.checked = true;
                    applyColorTheme(data.colorTheme);
                }
            }
            if (data.customColor) {
                document.getElementById('custom-color-picker').value = data.customColor;
            }
        }
    } catch (e) {
        console.error('Failed to restore preferences:', e);
    }
}

// Override autoSave to also save preferences
var origAutoSave = autoSave;
autoSave = function() {
    origAutoSave();

    // Save preferences
    try {
        var prefs = {
            template: document.getElementById('template-selector').value,
            font: document.getElementById('font-selector').value,
            fontSize: document.getElementById('font-size-selector').value,
            colorTheme: document.querySelector('input[name="color-theme"]:checked').value,
            customColor: document.getElementById('custom-color-picker').value
        };
        localStorage.setItem('resumePreferences', JSON.stringify(prefs));
    } catch (e) {}
};

// ========================================
// INDUSTRY QUICK START - TREE HIERARCHY
// ========================================
var selectedIndustry = null;
var selectedSubcategory = null;

// Initialize Industry Quick Start on DOMContentLoaded
function initializeIndustryQuickStart() {
    if (!industryData) {
        console.error('Industry data not loaded');
        return;
    }
    
    renderIndustryGrid();
}

// Render the main industry grid
function renderIndustryGrid() {
    var grid = document.getElementById('industry-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    Object.keys(industryData).forEach(function(industryKey) {
        var industry = industryData[industryKey];
        var subcategoryCount = Object.keys(industry.subcategories).length;
        
        var card = document.createElement('div');
        card.className = 'industry-card';
        card.setAttribute('data-industry', industryKey);
        card.onclick = function() { selectIndustry(industryKey); };
        
        card.innerHTML = 
            '<div class="industry-icon">' + industry.icon + '</div>' +
            '<div class="industry-name">' + industry.name + '</div>' +
            '<div class="industry-count">' + subcategoryCount + ' specializations</div>';
        
        grid.appendChild(card);
    });
}

// Select an industry and show subcategories
function selectIndustry(industryKey) {
    selectedIndustry = industryKey;
    selectedSubcategory = null;
    
    // Update UI - highlight selected industry
    document.querySelectorAll('.industry-card').forEach(function(card) {
        card.classList.remove('selected');
    });
    document.querySelector('.industry-card[data-industry="' + industryKey + '"]').classList.add('selected');
    
    // Show subcategory panel
    var panel = document.getElementById('subcategory-panel');
    panel.style.display = 'block';
    
    // Update header
    document.getElementById('selected-industry-name').textContent = industryData[industryKey].icon + ' ' + industryData[industryKey].name;
    
    // Render subcategories
    renderSubcategories(industryKey);
    
    // Show custom subcategory container
    document.getElementById('custom-subcategory-container').style.display = 'block';
    
    // Scroll to panel
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Render subcategories for selected industry
function renderSubcategories(industryKey) {
    var grid = document.getElementById('subcategory-grid');
    grid.innerHTML = '';
    
    var industry = industryData[industryKey];
    
    Object.keys(industry.subcategories).forEach(function(subKey) {
        var subcategory = industry.subcategories[subKey];
        var skillsPreview = subcategory.skills.slice(0, 3).map(function(s) { return s.name; }).join(', ');
        
        var card = document.createElement('div');
        card.className = 'subcategory-card';
        card.setAttribute('data-subcategory', subKey);
        card.onclick = function() { selectSubcategory(industryKey, subKey); };
        
        card.innerHTML = 
            '<div class="subcategory-name">' + subcategory.name + '</div>' +
            '<div class="subcategory-skills-preview">Skills: ' + skillsPreview + '...</div>';
        
        grid.appendChild(card);
    });
}

// Select a subcategory and load sample data
function selectSubcategory(industryKey, subKey) {
    selectedSubcategory = subKey;
    
    // Update UI - highlight selected subcategory
    document.querySelectorAll('.subcategory-card').forEach(function(card) {
        card.classList.remove('selected');
    });
    document.querySelector('.subcategory-card[data-subcategory="' + subKey + '"]').classList.add('selected');
    
    // Load industry sample data
    loadIndustrySubcategorySample(industryKey, subKey);
}

// Go back to industry selection
function backToIndustries() {
    document.getElementById('subcategory-panel').style.display = 'none';
    document.getElementById('custom-subcategory-container').style.display = 'none';
    selectedIndustry = null;
    selectedSubcategory = null;
    
    document.querySelectorAll('.industry-card').forEach(function(card) {
        card.classList.remove('selected');
    });
}

// Load sample data for selected subcategory
function loadIndustrySubcategorySample(industryKey, subKey) {
    var subcategory = industryData[industryKey].subcategories[subKey];
    if (!subcategory) {
        showToast('Subcategory not found', 'error');
        return;
    }
    
    // Clear existing dynamic entries
    document.getElementById('skills-container').innerHTML = '';
    document.getElementById('education-container').innerHTML = '';
    document.getElementById('certification-education-container').innerHTML = '';
    document.getElementById('experience-container').innerHTML = '';
    document.getElementById('volunteer-container').innerHTML = '';
    document.getElementById('publications-container').innerHTML = '';
    document.getElementById('patents-container').innerHTML = '';
    document.getElementById('references-container').innerHTML = '';
    document.getElementById('memberships-container').innerHTML = '';
    document.getElementById('soft-skills-container').innerHTML = '';
    document.getElementById('portfolio-container').innerHTML = '';
    
    skillCounter = 0;
    educationCounter = 0;
    certEducationCounter = 0;
    experienceCounter = 0;
    volunteerCounter = 0;
    publicationsCounter = 0;
    patentsCounter = 0;
    referencesCounter = 0;
    membershipsCounter = 0;
    softSkillCounter = 0;
    portfolioCounter = 0;
    
    // Generate realistic resume data based on industry/subcategory
    var generatedData = generateResumeData(industryKey, subKey, subcategory);
    
    // Fill basic fields
    document.getElementById('username').value = generatedData.username || '';
    document.getElementById('fullname').value = generatedData.fullname || '';
    document.getElementById('objective').value = generatedData.objective || '';
    document.getElementById('email').value = generatedData.email || '';
    document.getElementById('phone').value = generatedData.phone || '';
    document.getElementById('address').value = generatedData.address || '';
    document.getElementById('linkedin').value = generatedData.linkedin || '';
    document.getElementById('github').value = generatedData.github || '';
    document.getElementById('website').value = generatedData.website || '';
    document.getElementById('twitter').value = generatedData.twitter || '';
    document.getElementById('ProfessionalSummary').value = generatedData.professionalSummary || '';
    
    // Fill skills from subcategory data
    if (subcategory.skills) {
        subcategory.skills.forEach(function(skill) {
            skillCounter++;
            var container = document.getElementById('skills-container');
            var entry = document.createElement('div');
            entry.className = 'skill-entry';
            entry.setAttribute('data-skill', skillCounter);
            entry.innerHTML = '<div class="skill-name-input">' +
                '<input type="text" placeholder="e.g., JavaScript" class="skill-name" value="' + skill.name + '">' +
                '</div>' +
                '<div class="skill-rating-select">' +
                '<select class="skill-level">' +
                '<option value="">Select Level</option>' +
                '<option value="beginner"' + (skill.level === 'beginner' ? ' selected' : '') + '>Beginner</option>' +
                '<option value="intermediate"' + (skill.level === 'intermediate' ? ' selected' : '') + '>Intermediate</option>' +
                '<option value="advanced"' + (skill.level === 'advanced' ? ' selected' : '') + '>Advanced</option>' +
                '<option value="expert"' + (skill.level === 'expert' ? ' selected' : '') + '>Expert</option>' +
                '</select>' +
                '</div>';
            container.appendChild(entry);
        });
    }
    
    // Fill education
    if (generatedData.education) {
        generatedData.education.forEach(function(edu) {
            educationCounter++;
            addEducationEntry(edu);
        });
    }
    
    // Fill certifications
    if (generatedData.certEducation) {
        generatedData.certEducation.forEach(function(cert) {
            certEducationCounter++;
            addCertEducationEntry(cert);
        });
    }
    
    // Fill experience
    if (generatedData.experience) {
        generatedData.experience.forEach(function(exp) {
            experienceCounter++;
            addExperienceEntry(exp);
        });
    }
    
    // Fill other fields
    document.getElementById('Projects').value = generatedData.projects || '';
    document.getElementById('Certifications').value = generatedData.certifications || '';
    document.getElementById('Languages').value = generatedData.languages || '';
    document.getElementById('OtherActivities').value = generatedData.otherActivities || '';
    
    // Clear errors
    document.querySelectorAll('.error-message').forEach(function(e) { e.textContent = ''; });
    document.querySelectorAll('input, textarea').forEach(function(e) { e.classList.remove('error'); });
    
    showToast(subcategory.name + ' template loaded! Customize and generate your resume...', 'success');
    document.getElementById('builder').scrollIntoView({ behavior: 'smooth' });
    
    updateATSScore();
}

// Generate realistic resume data based on industry and subcategory
function generateResumeData(industryKey, subKey, subcategory) {
    var industry = industryData[industryKey];
    var jobTitle = subcategory.jobTitles[Math.floor(Math.random() * Math.min(3, subcategory.jobTitles.length))];
    var certification = subcategory.certifications[Math.floor(Math.random() * subcategory.certifications.length)];
    
    // Generate name
    var firstNames = ['John', 'Sarah', 'Michael', 'Emily', 'David', 'Jennifer', 'Robert', 'Lisa', 'Daniel', 'Jessica'];
    var lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
    var firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    var lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    var fullName = firstName + ' ' + lastName;
    var username = firstName.toLowerCase() + '.' + lastName.toLowerCase();
    
    // Generate objective
    var topSkill = subcategory.skills[0].name;
    var secondSkill = subcategory.skills[1].name;
    var objective = 'Results-driven ' + jobTitle + ' with 5+ years of experience seeking to leverage expertise in ' + topSkill + ' and ' + secondSkill + ' to contribute to innovative projects and drive organizational success.';
    
    // Generate email
    var email = username + '@email.com';
    
    // Generate phone
    var phone = '+1 (555) ' + String(Math.floor(Math.random() * 9000) + 1000) + '-' + String(Math.floor(Math.random() * 9000) + 1000);
    
    // Generate address
    var cities = ['New York, NY', 'San Francisco, CA', 'Chicago, IL', 'Austin, TX', 'Seattle, WA', 'Boston, MA', 'Denver, CO', 'Atlanta, GA'];
    var address = Math.floor(Math.random() * 9999) + ' Innovation Drive, ' + cities[Math.floor(Math.random() * cities.length)];
    
    // Generate education
    var universities = ['State University', 'Tech Institute', 'University of Technology', 'Polytechnic University', 'College of Engineering'];
    var degrees = ['B.S.', 'M.S.', 'B.A.', 'M.B.A.', 'Ph.D.'];
    var education = [
        {
            degree: degrees[Math.floor(Math.random() * degrees.length)] + ' ' + industry.name,
            institution: universities[Math.floor(Math.random() * universities.length)],
            start: '2016',
            end: '2020',
            details: 'GPA: 3.7/4.0, Dean\'s List'
        }
    ];
    
    // Generate certifications
    var certEducation = [
        {
            name: certification,
            issuer: 'Professional Certification Board',
            date: '2023'
        }
    ];
    
    // Generate experience
    var companies = ['Tech Corp', 'Industry Solutions Inc.', 'Global Enterprises', 'Innovation Labs', 'Professional Services LLC'];
    var experience = [
        {
            title: 'Senior ' + jobTitle,
            company: companies[Math.floor(Math.random() * companies.length)],
            start: 'Jan 2021',
            end: 'Present',
            description: 'Led multiple high-impact projects utilizing ' + topSkill + ' and ' + secondSkill + '\nManaged cross-functional team of 5+ professionals\nImplemented best practices resulting in 30% efficiency improvement\nMentored junior team members and conducted training sessions'
        },
        {
            title: jobTitle,
            company: companies[Math.floor(Math.random() * companies.length)],
            start: 'Jun 2018',
            end: 'Dec 2020',
            description: 'Developed and maintained critical systems using ' + topSkill + '\nCollaborated with stakeholders to define project requirements\nAchieved 95% client satisfaction rating\nReceived Employee Excellence Award'
        }
    ];
    
    // Generate projects
    var projects = 'Key Project (2023)\n- Implemented solution using ' + topSkill + ' serving 10K+ users\n- Achieved 40% performance improvement through optimization\n- Led team of 4 developers and delivered 2 weeks ahead of schedule';
    
    // Generate certifications text
    var certifications = certification + ' (2023)\n' + subcategory.certifications[0] + ' (2022)\nIndustry Excellence Award (2023)';
    
    // Generate languages
    var languages = 'English (Native)\nSpanish (Professional)\nFrench (Conversational)';
    
    // Generate professional summary
    var professionalSummary = 'Experienced ' + jobTitle + ' with proven expertise in ' + topSkill + ', ' + secondSkill + ', and ' + subcategory.skills[2].name + '. Demonstrated track record of delivering high-quality solutions and leading cross-functional teams. Strong communicator with excellent problem-solving abilities and commitment to continuous improvement.';
    
    // Generate other activities
    var otherActivities = 'Industry Conference 2023 - Speaker\n' + industry.name + ' Workshop - Attendee\nProfessional Development Seminar 2022\nVolunteer Mentor - Junior Professionals Program';
    
    return {
        username: username,
        fullname: fullName,
        objective: objective,
        email: email,
        phone: phone,
        address: address,
        linkedin: 'https://linkedin.com/in/' + username,
        github: industryKey === 'software_and_it' ? 'https://github.com/' + username : '',
        website: 'https://' + username + '.com',
        twitter: '',
        education: education,
        certEducation: certEducation,
        experience: experience,
        projects: projects,
        certifications: certifications,
        languages: languages,
        professionalSummary: professionalSummary,
        otherActivities: otherActivities
    };
}

// Apply custom subcategory
function applyCustomSubcategory() {
    var input = document.getElementById('custom-subcategory-input');
    var customValue = input.value.trim();
    
    if (!customValue) {
        showToast('Please enter a subcategory name', 'error');
        return;
    }
    
    // Find the closest matching industry based on keywords
    var bestMatch = findClosestIndustry(customValue);
    
    if (bestMatch) {
        showToast('Loading skills for "' + customValue + '" based on ' + industryData[bestMatch.industry].name + ' template...', 'success');
        
        // Select the industry
        selectIndustry(bestMatch.industry);
        
        // If there's a close subcategory match, select it
        if (bestMatch.subcategory) {
            selectSubcategory(bestMatch.industry, bestMatch.subcategory);
        }
    } else {
        showToast('Could not match your input. Please select an industry manually.', 'error');
    }
}

// Find closest matching industry based on input text
function findClosestIndustry(input) {
    var inputLower = input.toLowerCase();
    var bestMatch = null;
    var bestScore = 0;
    
    Object.keys(industryData).forEach(function(industryKey) {
        var industry = industryData[industryKey];
        var industryName = industry.name.toLowerCase();
        
        // Check industry name match
        if (inputLower.includes(industryName) || industryName.includes(inputLower)) {
            var score = 100;
            if (score > bestScore) {
                bestScore = score;
                bestMatch = { industry: industryKey, subcategory: null };
            }
        }
        
        // Check subcategory matches
        Object.keys(industry.subcategories).forEach(function(subKey) {
            var subcategory = industry.subcategories[subKey];
            var subName = subcategory.name.toLowerCase();
            
            var score = 0;
            if (inputLower.includes(subName) || subName.includes(inputLower)) {
                score = 90;
            } else {
                // Check keywords match
                subcategory.keywords.forEach(function(keyword) {
                    if (inputLower.includes(keyword.toLowerCase())) {
                        score += 10;
                    }
                });
            }
            
            if (score > bestScore) {
                bestScore = score;
                bestMatch = { industry: industryKey, subcategory: subKey };
            }
        });
    });
    
    return bestScore > 0 ? bestMatch : null;
}

// Initialize industry quick start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeIndustryQuickStart);
} else {
    initializeIndustryQuickStart();
}

initApp();
