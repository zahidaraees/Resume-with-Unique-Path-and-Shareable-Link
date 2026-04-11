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
    languages: 'English (Native)\nSpanish (Professional)\nFrench (Conversational)'
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
        languages: 'English (Native)\nMandarin (Native)\nJapanese (Conversational)'
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
        languages: 'English (Native)\nSpanish (Native)\nPortuguese (Professional)'
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
        languages: 'English (Native)\nCantonese (Native)\nMandarin (Professional)'
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
        languages: 'English (Native)\nFrench (Professional)\nItalian (Conversational)'
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
        languages: 'English (Native)\nSpanish (Professional)\nAmerican Sign Language (Conversational)'
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
        languages: 'English (Native)\nHindi (Native)\nSpanish (Conversational)'
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
    skillCounter = 0;
    educationCounter = 0;
    certEducationCounter = 0;
    experienceCounter = 0;
    
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
// AUTO-GENERATE OBJECTIVE
// ========================================
function autoGenerateObjective(qualification, experience, skills) {
    var parts = [];
    if (experience) {
        var firstLine = experience.split('\n')[0].trim();
        if (firstLine) parts.push('Experienced ' + firstLine.split(' at ')[0].replace(/^(Senior |Junior |Lead |Principal )?/, '').trim());
    }
    if (qualification) {
        var edu = qualification.split(',')[0].trim();
        if (edu) parts.push('with ' + edu);
    }
    if (skills) {
        var topSkills = skills.split(',').slice(0, 3).map(function(s) { return s.trim(); });
        if (topSkills.length) parts.push('skilled in ' + topSkills.join(', '));
    }
    if (parts.length === 0) {
        return 'Motivated professional seeking opportunities to contribute strong work ethic and willingness to learn.';
    }
    return parts.join(' ') + ', seeking to deliver high-quality results in a dynamic team environment.';
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
        languages: document.getElementById('Languages').value
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
    // Validate file
    var allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    var allowedExtensions = ['.doc', '.docx', '.pdf'];
    var fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    
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
        parseDOCX(file);
    } else if (fileExtension === '.pdf') {
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
        updateUploadProgress(60, 'Parsing resume data...');
        
        mammoth.extractRawText({ arrayBuffer: e.target.result })
            .then(function(result) {
                updateUploadProgress(90, 'Populating fields...');
                var text = result.value;
                extractAndPopulateData(text);
                updateUploadProgress(100, 'Complete!');
                showUploadResult('Resume uploaded and parsed successfully!');
                showToast('Resume data extracted successfully!', 'success');
            })
            .catch(function(err) {
                console.error('DOCX parsing error:', err);
                hideUploadProgress();
                showToast('Failed to parse document. Please fill manually.', 'error');
            });
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
                        return textContent.items.map(function(item) {
                            return item.str;
                        }).join(' ');
                    });
                }));
            }
            
            Promise.all(textPromises).then(function(pages) {
                updateUploadProgress(90, 'Populating fields...');
                var fullText = pages.join('\n');
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
    // Smart data extraction using regex patterns
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
        linkedin: '',
        github: '',
        website: ''
    };
    
    // Extract email
    var emailMatch = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/);
    if (emailMatch) extracted.email = emailMatch[1];
    
    // Extract phone
    var phoneMatch = text.match(/(\+?1?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4})/);
    if (phoneMatch) extracted.phone = phoneMatch[1].trim();
    
    // Extract LinkedIn
    var linkedinMatch = text.match(/(linkedin\.com\/in\/[a-zA-Z0-9_-]+)/);
    if (linkedinMatch) extracted.linkedin = 'https://' + linkedinMatch[1];
    
    // Extract GitHub
    var githubMatch = text.match(/(github\.com\/[a-zA-Z0-9_-]+)/);
    if (githubMatch) extracted.github = 'https://' + githubMatch[1];
    
    // Extract website
    var websiteMatch = text.match(/(https?:\/\/[a-zA-Z0-9.-]+\.[a-z]{2,})/);
    if (websiteMatch && !websiteMatch[1].includes('linkedin') && !websiteMatch[1].includes('github')) {
        extracted.website = websiteMatch[1];
    }
    
    // Extract name (usually at the beginning, capitalized words)
    var lines = text.split('\n').map(function(l) { return l.trim(); }).filter(function(l) { return l; });
    if (lines.length > 0) {
        var firstLine = lines[0];
        // Check if it looks like a name (2-4 words, capitalized)
        if (/^([A-Z][a-z]+[\s-]?){2,4}$/.test(firstLine) && firstLine.length < 50) {
            extracted.fullname = firstLine;
        }
    }
    
    // Extract objective/summary (paragraph after name, before experience)
    var objectivePatterns = [/objective[:\s]*([\s\S]{50,300})(?=experience|work|skills|education)/i];
    for (var i = 0; i < objectivePatterns.length; i++) {
        var match = text.match(objectivePatterns[i]);
        if (match) {
            extracted.objective = match[1].trim();
            break;
        }
    }
    
    // Extract skills
    var skillsSection = text.match(/skills[:\s]*([\s\S]*?)(?=experience|education|work|languages)/i);
    if (skillsSection) {
        var skillsText = skillsSection[1];
        var skills = skillsText.split(/[,\n•\-]+/).map(function(s) { return s.trim(); }).filter(function(s) { return s && s.length < 50; });
        extracted.skills = skills.slice(0, 10).map(function(skill) {
            return { name: skill, level: '' };
        });
    }
    
    // Extract experience
    var expPattern = /([A-Z][a-z]+[\sA-Za-z]+)\n([A-Z][a-zA-Z\s&,.]+)\n((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4}\s*[-–—]\s*(?:Present|Current|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4}))/gi;
    var expMatch;
    while ((expMatch = expPattern.exec(text)) !== null) {
        extracted.experience.push({
            title: expMatch[1].trim(),
            company: expMatch[2].trim(),
            start: '',
            end: '',
            description: ''
        });
    }
    
    // Extract education
    var eduPattern = /((?:B\.?[AS]\.?|M\.?[AS]\.?|MBA|Ph\.?D|MD|JD|Ed\.?D)[\s\w.-]+)\n([A-Z][a-zA-Z\s&,.]+(?:University|College|Institute|School))/gi;
    var eduMatch;
    while ((eduMatch = eduPattern.exec(text)) !== null) {
        extracted.education.push({
            degree: eduMatch[1].trim(),
            institution: eduMatch[2].trim(),
            start: '',
            end: '',
            details: ''
        });
    }
    
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
    skillCounter = 0;
    educationCounter = 0;
    certEducationCounter = 0;
    experienceCounter = 0;
    
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
// TOGGLE DARK MODE
// ========================================
function toggleMode() {
    console.log('Mode toggle clicked!');
    document.body.classList.toggle('dark-mode');
    var isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
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
    var objective = document.getElementById('objective').value || '';
    var email = document.getElementById('email').value || '';
    var phone = document.getElementById('phone').value || '';
    var address = document.getElementById('address').value || '';
    var linkedin = document.getElementById('linkedin').value || '';
    var github = document.getElementById('github').value || '';
    var website = document.getElementById('website').value || '';
    var skills = collectSkills();
    var education = collectEducation();
    var certEducation = collectCertEducation();
    var experience = collectExperience();
    var projects = document.getElementById('Projects').value || '';
    var certs = document.getElementById('Certifications').value || '';
    var languages = document.getElementById('Languages').value || '';

    // Auto-generate objective if blank
    if (!objective || !objective.trim()) {
        var eduStr = education.map(function(e) { return e.degree; }).join(', ');
        var expStr = experience.map(function(e) { return e.title + ' at ' + e.company; }).join(', ');
        var skillStr = skills.map(function(s) { return s.name; }).join(', ');
        objective = autoGenerateObjective(eduStr, expStr, skillStr);
    }

    // Helper to convert text to clean HTML list
    function toCleanList(text) {
        if (!text || !text.trim()) return '';
        var lines = text.split('\n').filter(function(l) { return l.trim(); });
        var items = lines.map(function(l) {
            return '<li style="margin-bottom: 4px; line-height: 1.5; color: #374151; font-size: 11pt;">' +
                   l.replace(/^[\s\-\*•]+/, '').trim() + '</li>';
        }).join('');
        return '<ul style="margin: 4px 0 8px 20px; padding-left: 16px; list-style-type: disc;">' + items + '</ul>';
    }

    // Build clean HTML for PDF
    var pdfHTML = '';
    pdfHTML += '<div style="width: 210mm; padding: 25.4mm 25.4mm 25.4mm 38.1mm; font-family: Arial, Helvetica, sans-serif; background: white; color: #111827; box-sizing: border-box;">';

    // Header - Name
    pdfHTML += '<h1 style="text-align: center; font-size: 22pt; font-weight: bold; margin: 0 0 6px; color: #111827;">' + fullName + '</h1>';

    // Contact info line
    pdfHTML += '<div style="text-align: center; border-bottom: 2px solid #4F46E5; padding-bottom: 10px; margin-bottom: 16px;">';
    pdfHTML += '<p style="margin: 0; font-size: 10pt; color: #6B7280;">';
    var contactParts = [];
    if (email) contactParts.push(email);
    if (phone) contactParts.push(phone);
    if (address) contactParts.push(address);
    if (linkedin) contactParts.push('LinkedIn');
    if (github) contactParts.push('GitHub');
    pdfHTML += contactParts.join(' &nbsp;|&nbsp; ');
    pdfHTML += '</p></div>';

    // Objective
    pdfHTML += '<div style="margin-bottom: 14px;">';
    pdfHTML += '<h2 style="font-size: 12pt; font-weight: bold; color: #4F46E5; text-transform: uppercase; margin: 0 0 6px; letter-spacing: 0.5px;">Objective</h2>';
    pdfHTML += '<p style="margin: 0; font-size: 10pt; line-height: 1.5; color: #374151; font-style: italic;">' + objective + '</p>';
    pdfHTML += '</div>';

    // Skills section
    if (skills.length > 0 && skills.some(function(s) { return s.name && s.name.trim(); })) {
        pdfHTML += '<div style="margin-bottom: 12px; page-break-inside: avoid;">';
        pdfHTML += '<h2 style="font-size: 12pt; font-weight: bold; color: #4F46E5; text-transform: uppercase; margin: 0 0 6px; letter-spacing: 0.5px;">Skills</h2>';
        var skillItems = skills.filter(function(s) { return s.name && s.name.trim(); }).map(function(s) {
            var levelStr = s.level ? ' (' + s.level.charAt(0).toUpperCase() + s.level.slice(1) + ')' : '';
            return '<li style="margin-bottom: 4px; line-height: 1.5; color: #374151; font-size: 11pt;">' + s.name + levelStr + '</li>';
        }).join('');
        pdfHTML += '<ul style="margin: 4px 0 8px 20px; padding-left: 16px; list-style-type: disc;">' + skillItems + '</ul>';
        pdfHTML += '</div>';
    }

    // Education section
    if (education.length > 0 && education.some(function(e) { return e.degree && e.degree.trim(); })) {
        pdfHTML += '<div style="margin-bottom: 12px; page-break-inside: avoid;">';
        pdfHTML += '<h2 style="font-size: 12pt; font-weight: bold; color: #4F46E5; text-transform: uppercase; margin: 0 0 6px; letter-spacing: 0.5px;">Education</h2>';
        education.filter(function(e) { return e.degree && e.degree.trim(); }).forEach(function(edu) {
            var eduText = edu.degree;
            if (edu.institution) eduText += ', ' + edu.institution;
            if (edu.start || edu.end) {
                eduText += ' (' + (edu.start || '') + (edu.end ? ' - ' + edu.end : '') + ')';
            }
            pdfHTML += '<p style="margin: 4px 0; font-size: 10pt; line-height: 1.5; color: #374151;">• ' + eduText + '</p>';
            if (edu.details) {
                pdfHTML += '<p style="margin: 2px 0 6px 16px; font-size: 10pt; line-height: 1.5; color: #6B7280; font-style: italic;">' + edu.details + '</p>';
            }
        });
        pdfHTML += '</div>';
    }

    // Professional Certifications
    if (certEducation.length > 0 && certEducation.some(function(c) { return c.name && c.name.trim(); })) {
        pdfHTML += '<div style="margin-bottom: 12px; page-break-inside: avoid;">';
        pdfHTML += '<h2 style="font-size: 12pt; font-weight: bold; color: #4F46E5; text-transform: uppercase; margin: 0 0 6px; letter-spacing: 0.5px;">Professional Certifications</h2>';
        certEducation.filter(function(c) { return c.name && c.name.trim(); }).forEach(function(cert) {
            var certText = cert.name;
            if (cert.issuer) certText += ' - ' + cert.issuer;
            if (cert.date) certText += ' (' + cert.date + ')';
            pdfHTML += '<p style="margin: 4px 0; font-size: 10pt; line-height: 1.5; color: #374151;">• ' + certText + '</p>';
        });
        pdfHTML += '</div>';
    }

    // Work Experience section
    if (experience.length > 0 && experience.some(function(e) { return e.title && e.title.trim(); })) {
        pdfHTML += '<div style="margin-bottom: 12px; page-break-inside: avoid;">';
        pdfHTML += '<h2 style="font-size: 12pt; font-weight: bold; color: #4F46E5; text-transform: uppercase; margin: 0 0 6px; letter-spacing: 0.5px;">Work Experience</h2>';
        experience.filter(function(e) { return e.title && e.title.trim(); }).forEach(function(exp) {
            pdfHTML += '<p style="margin: 8px 0 2px 0; font-size: 11pt; font-weight: bold; color: #111827;">' + exp.title + (exp.company ? ' at ' + exp.company : '') + (exp.start || exp.end ? ' (' + (exp.start || '') + (exp.end ? ' - ' + exp.end : '') + ')' : '') + '</p>';
            if (exp.description) {
                var lines = exp.description.split('\n').filter(function(l) { return l.trim(); });
                lines.forEach(function(line) {
                    pdfHTML += '<p style="margin: 2px 0; font-size: 10pt; line-height: 1.5; color: #374151;">• ' + line.replace(/^[\s\-\*•]+/, '') + '</p>';
                });
            }
        });
        pdfHTML += '</div>';
    }

    // Projects
    if (projects && projects.trim()) {
        pdfHTML += '<div style="margin-bottom: 12px; page-break-inside: avoid;">';
        pdfHTML += '<h2 style="font-size: 12pt; font-weight: bold; color: #4F46E5; text-transform: uppercase; margin: 0 0 6px; letter-spacing: 0.5px;">Projects</h2>';
        pdfHTML += toCleanList(projects);
        pdfHTML += '</div>';
    }

    // Certifications & Awards
    if (certs && certs.trim()) {
        pdfHTML += '<div style="margin-bottom: 12px; page-break-inside: avoid;">';
        pdfHTML += '<h2 style="font-size: 12pt; font-weight: bold; color: #4F46E5; text-transform: uppercase; margin: 0 0 6px; letter-spacing: 0.5px;">Certifications & Awards</h2>';
        pdfHTML += toCleanList(certs);
        pdfHTML += '</div>';
    }

    // Languages
    if (languages && languages.trim()) {
        pdfHTML += '<div style="margin-bottom: 12px; page-break-inside: avoid;">';
        pdfHTML += '<h2 style="font-size: 12pt; font-weight: bold; color: #4F46E5; text-transform: uppercase; margin: 0 0 6px; letter-spacing: 0.5px;">Languages</h2>';
        pdfHTML += toCleanList(languages);
        pdfHTML += '</div>';
    }

    pdfHTML += '</div>';

    // Create visible overlay for PDF generation
    var overlay = document.createElement('div');
    overlay.id = 'pdf-generation-overlay';
    overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: white; z-index: 99999; overflow-y: auto; display: flex; justify-content: center;';

    var contentDiv = document.createElement('div');
    contentDiv.id = 'pdf-content';
    contentDiv.innerHTML = pdfHTML;
    contentDiv.style.cssText = 'width: 210mm; background: white;';

    overlay.appendChild(contentDiv);
    document.body.appendChild(overlay);

    console.log('PDF content length:', pdfHTML.length);

    // Wait for rendering, then generate PDF
    setTimeout(function() {
        html2pdf().set({
            margin: [25.4, 25.4, 25.4, 25.4], // [top, right, bottom, left] in mm - 1 inch all sides
            filename: userName + '_resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                logging: false,
                scrollX: 0,
                scrollY: 0
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait'
            },
            pagebreak: { mode: ['css', 'legacy'] }
        }).from(contentDiv).save().then(function() {
            document.body.removeChild(overlay);
            showToast('PDF downloaded!', 'success');
        }).catch(function(err) {
            console.error('PDF error:', err);
            if (document.getElementById('pdf-generation-overlay')) {
                document.body.removeChild(overlay);
            }
            showToast('PDF generation failed', 'error');
        });
    }, 500);
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

    // Auto-generate objective if blank
    if (!objective || !objective.trim()) {
        var eduStr = education.map(function(e) { return e.degree; }).join(', ');
        var expStr = experience.map(function(e) { return e.title; }).join(', ');
        var skillStr = skills.map(function(s) { return s.name; }).join(', ');
        objective = autoGenerateObjective(eduStr, expStr, skillStr);
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
    var htmlContent = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Resume - ' + document.getElementById('fullname').value + '</title><style>body{font-family:Inter,Arial,sans-serif;max-width:210mm;margin:auto;padding:40px;color:#111827;}h2{text-align:center;font-size:2rem;margin-bottom:8px;}h3{color:#4F46E5;margin-top:24px;text-transform:uppercase;}hr{border:none;height:3px;background:#4F46E5;margin:16px 0;}ul{padding-left:28px;}li{margin-bottom:6px;line-height:1.6;}.resume-header{display:flex;align-items:center;gap:24px;margin-bottom:16px;}.resume-header-image{width:80px;height:80px;border-radius:50%;overflow:hidden;border:3px solid #4F46E6;}.resume-header-image img{width:100%;height:100%;object-fit:cover;}.resume-contact{display:flex;gap:8px;flex-wrap:wrap;font-size:0.875rem;color:#6B7280;}.objective{margin:16px 0;padding:16px 20px;background:#F9FAFB;border-left:4px solid #4F46E5;}.objective p{font-style:italic;}</style></head><body>' + container.innerHTML + '</body></html>';
    var blob = new Blob([htmlContent], { type: 'text/html' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = userName + '_resume.html';
    a.click();
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

    // Auto-generate objective if blank
    if (!objective || !objective.trim()) {
        var eduStr = education.map(function(e) { return e.degree; }).join(', ');
        var expStr = experience.map(function(e) { return e.title; }).join(', ');
        var skillStr = skills.map(function(s) { return s.name; }).join(', ');
        objective = autoGenerateObjective(eduStr, expStr, skillStr);
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
        html += '<div class="objective"><h3>Objective:</h3><p>' + objective + '</p></div>';
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
initApp();
