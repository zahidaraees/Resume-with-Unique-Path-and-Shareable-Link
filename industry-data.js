// ========================================
// COMPREHENSIVE INDUSTRY DATA STRUCTURE
// ========================================
var industryData = {
    engineering: {
        name: "Engineering",
        icon: "\u2699\uFE0F",
        subcategories: {
            electrical_engineering: {
                name: "Electrical Engineering",
                skills: [
                    { name: "Circuit Design", level: "expert" },
                    { name: "PCB Design", level: "advanced" },
                    { name: "Power Systems Analysis", level: "expert" },
                    { name: "Control Systems", level: "advanced" },
                    { name: "MATLAB/Simulink", level: "advanced" },
                    { name: "AutoCAD Electrical", level: "intermediate" },
                    { name: "PLC Programming", level: "advanced" },
                    { name: "Signal Processing", level: "intermediate" },
                    { name: "Electrical Testing", level: "expert" },
                    { name: "IEEE Standards Compliance", level: "advanced" }
                ],
                keywords: ["Electrical Engineering", "Circuit Design", "Power Systems", "Control Systems", "PCB Design", "PLC", "SCADA", "Motor Control", "Switchgear", "Transformer Design", "Power Distribution", "Electrical Safety", "NEC Code", "Arc Flash Analysis", "Load Flow Analysis"],
                jobTitles: ["Electrical Engineer", "Power Systems Engineer", "Controls Engineer", "Instrumentation Engineer", "Electrical Design Engineer", "Protection Engineer", "Substation Engineer", "Test Engineer"],
                certifications: ["Professional Engineer (PE) - Electrical", "Certified Electrical Engineer (CEE)", "NICET Certification", "OSHA 30-Hour Electrical Safety"]
            },
            mechanical_engineering: {
                name: "Mechanical Engineering",
                skills: [
                    { name: "CAD/CAM (SolidWorks, CATIA)", level: "expert" },
                    { name: "Thermodynamics", level: "expert" },
                    { name: "Finite Element Analysis (FEA)", level: "advanced" },
                    { name: "Computational Fluid Dynamics (CFD)", level: "advanced" },
                    { name: "GD&T", level: "expert" },
                    { name: "HVAC Design", level: "advanced" },
                    { name: "Manufacturing Processes", level: "advanced" },
                    { name: "Materials Science", level: "intermediate" },
                    { name: "ANSYS", level: "advanced" },
                    { name: "Project Management", level: "intermediate" }
                ],
                keywords: ["Mechanical Engineering", "SolidWorks", "CAD", "FEA", "CFD", "Thermodynamics", "HVAC", "Machine Design", "GD&T", "Manufacturing", "Prototyping", "Stress Analysis", "Heat Transfer", "Fluid Mechanics", "Kinematics"],
                jobTitles: ["Mechanical Engineer", "Design Engineer", "HVAC Engineer", "Manufacturing Engineer", "Project Engineer", "R&D Engineer", "Quality Engineer", "Maintenance Engineer"],
                certifications: ["Professional Engineer (PE) - Mechanical", "Certified Manufacturing Engineer (CMfgE)", "Six Sigma Green Belt", "Certified SolidWorks Professional (CSWP)"]
            },
            civil_engineering: {
                name: "Civil Engineering",
                skills: [
                    { name: "Structural Analysis", level: "expert" },
                    { name: "AutoCAD Civil 3D", level: "expert" },
                    { name: "Geotechnical Engineering", level: "advanced" },
                    { name: "Transportation Engineering", level: "advanced" },
                    { name: "Construction Management", level: "advanced" },
                    { name: "Revit/BIM", level: "intermediate" },
                    { name: "Hydraulics & Hydrology", level: "advanced" },
                    { name: "Surveying", level: "intermediate" },
                    { name: "STAAD.Pro", level: "advanced" },
                    { name: "Cost Estimation", level: "advanced" }
                ],
                keywords: ["Civil Engineering", "Structural Engineering", "Geotechnical", "Transportation Planning", "Construction Management", "BIM", "AutoCAD Civil 3D", "Site Development", "Stormwater Management", "Foundation Design", "Bridge Design", "Highway Engineering", "Environmental Engineering", "Urban Planning"],
                jobTitles: ["Civil Engineer", "Structural Engineer", "Geotechnical Engineer", "Transportation Engineer", "Construction Manager", "Site Engineer", "Project Engineer", "Environmental Engineer"],
                certifications: ["Professional Engineer (PE) - Civil", "LEED Accredited Professional", "OSHA 30-Hour Construction", "PMP Certification"]
            },
            chemical_engineering: {
                name: "Chemical Engineering",
                skills: [
                    { name: "Process Design", level: "expert" },
                    { name: "Process Simulation (Aspen HYSYS)", level: "advanced" },
                    { name: "Reaction Engineering", level: "expert" },
                    { name: "Heat & Mass Transfer", level: "advanced" },
                    { name: "Process Safety Management", level: "advanced" },
                    { name: "Distillation Design", level: "advanced" },
                    { name: "P&ID Development", level: "expert" },
                    { name: "Six Sigma", level: "intermediate" },
                    { name: "Hazardous Materials Handling", level: "advanced" },
                    { name: "Scale-up Engineering", level: "advanced" }
                ],
                keywords: ["Chemical Engineering", "Process Engineering", "Process Design", "Aspen HYSYS", "P&ID", "Reaction Engineering", "Distillation", "Process Safety", "PHA/HAZOP", "Process Optimization", "Mass Balance", "Energy Balance", "Petrochemical", "Pharmaceutical Manufacturing"],
                jobTitles: ["Chemical Engineer", "Process Engineer", "Process Safety Engineer", "Production Engineer", "R&D Engineer", "Quality Control Engineer", "Plant Engineer", "Operations Engineer"],
                certifications: ["Professional Engineer (PE) - Chemical", "Certified Process Safety Professional (CCPSC)", "Six Sigma Green Belt", "HAZOP Leader Certification"]
            },
            aerospace_engineering: {
                name: "Aerospace Engineering",
                skills: [
                    { name: "Aerodynamics", level: "expert" },
                    { name: "Propulsion Systems", level: "advanced" },
                    { name: "Structural Analysis", level: "expert" },
                    { name: "CATIA V5", level: "advanced" },
                    { name: "Systems Engineering", level: "advanced" },
                    { name: "Flight Dynamics", level: "intermediate" },
                    { name: "Composite Materials", level: "advanced" },
                    { name: "Avionics", level: "intermediate" },
                    { name: "DO-178C/DO-254", level: "advanced" },
                    { name: "CFD Analysis", level: "advanced" }
                ],
                keywords: ["Aerospace Engineering", "Aerodynamics", "Propulsion", "Avionics", "Flight Mechanics", "Aircraft Design", "Spacecraft Systems", "Systems Engineering", "Composite Structures", "Wind Tunnel Testing", "DO-178C", "MIL-STD-810", "Airworthiness", "FATCA"],
                jobTitles: ["Aerospace Engineer", "Aerodynamics Engineer", "Structures Engineer", "Systems Engineer", "Propulsion Engineer", "Avionics Engineer", "Flight Test Engineer", "Mission Systems Engineer"],
                certifications: ["Professional Engineer (PE) - Aerospace", "Systems Engineering Certification (INCOSE)", "FAA Airworthiness Certification", "Project Management Professional (PMP)"]
            },
            industrial_engineering: {
                name: "Industrial Engineering",
                skills: [
                    { name: "Lean Manufacturing", level: "expert" },
                    { name: "Six Sigma", level: "expert" },
                    { name: "Process Optimization", level: "expert" },
                    { name: "Supply Chain Management", level: "advanced" },
                    { name: "Ergonomics", level: "advanced" },
                    { name: "Statistical Analysis", level: "advanced" },
                    { name: "Simulation Modeling", level: "advanced" },
                    { name: "Time & Motion Studies", level: "expert" },
                    { name: "Quality Control", level: "advanced" },
                    { name: "ERP Systems", level: "intermediate" }
                ],
                keywords: ["Industrial Engineering", "Lean Manufacturing", "Six Sigma", "Process Improvement", "Supply Chain", "Operations Research", "Quality Management", "Ergonomics", "Production Planning", "Facility Layout", "Continuous Improvement", "Kaizen", "5S", "Value Stream Mapping"],
                jobTitles: ["Industrial Engineer", "Process Engineer", "Manufacturing Engineer", "Quality Engineer", "Operations Analyst", "Supply Chain Analyst", "Continuous Improvement Manager", "Lean Six Sigma Black Belt"],
                certifications: ["Certified Six Sigma Black Belt (CSSBB)", "Certified in Production and Inventory Management (CPIM)", "Professional Engineer (PE) - Industrial", "Lean Certification"]
            },
            environmental_engineering: {
                name: "Environmental Engineering",
                skills: [
                    { name: "Water/Wastewater Treatment", level: "expert" },
                    { name: "Air Quality Modeling", level: "advanced" },
                    { name: "Environmental Impact Assessment", level: "expert" },
                    { name: "Remediation Technologies", level: "advanced" },
                    { name: "GIS Mapping", level: "advanced" },
                    { name: "Regulatory Compliance (EPA)", level: "expert" },
                    { name: "Solid Waste Management", level: "advanced" },
                    { name: "Environmental Sampling", level: "intermediate" },
                    { name: "Sustainability Planning", level: "advanced" },
                    { name: "Stormwater Management", level: "advanced" }
                ],
                keywords: ["Environmental Engineering", "Water Treatment", "Air Quality", "Environmental Compliance", "EPA Regulations", "Remediation", "Waste Management", "Sustainability", "Environmental Impact Assessment", "GIS", "Stormwater", "Soil Remediation", "NEPA", "ISO 14001"],
                jobTitles: ["Environmental Engineer", "Water Resources Engineer", "Air Quality Engineer", "Environmental Consultant", "Remediation Engineer", "Sustainability Engineer", "Compliance Engineer", "Environmental Scientist"],
                certifications: ["Professional Engineer (PE) - Environmental", "LEED Accredited Professional", "Certified Environmental Professional (CEP)", "OSHA HAZWOPER 40-Hour"]
            },
            biomedical_engineering: {
                name: "Biomedical Engineering",
                skills: [
                    { name: "Medical Device Design", level: "expert" },
                    { name: "Biomaterials", level: "advanced" },
                    { name: "Biomechanics", level: "advanced" },
                    { name: "FDA Regulatory Affairs", level: "expert" },
                    { name: "Signal Processing", level: "advanced" },
                    { name: "Medical Imaging", level: "advanced" },
                    { name: "Tissue Engineering", level: "intermediate" },
                    { name: "ISO 13485", level: "expert" },
                    { name: "Clinical Trials", level: "intermediate" },
                    { name: "MATLAB", level: "advanced" }
                ],
                keywords: ["Biomedical Engineering", "Medical Devices", "FDA Regulations", "ISO 13485", "Biomaterials", "Biomechanics", "Medical Imaging", "Clinical Engineering", "Biocompatibility", "Quality Systems", "Risk Management (ISO 14971)", "Design Controls", "510(k)", "PMA"],
                jobTitles: ["Biomedical Engineer", "Medical Device Engineer", "Clinical Engineer", "R&D Engineer", "Quality Engineer", "Regulatory Affairs Specialist", "Validation Engineer", "Biomechanics Engineer"],
                certifications: ["Certified Clinical Engineer (CCE)", "Regulatory Affairs Certification (RAC)", "Certified Quality Engineer (CQE)", "Biomedical Equipment Technician (CBET)"]
            }
        }
    },
    software_and_it: {
        name: "Software & IT",
        icon: "\uD83D\uDCBB",
        subcategories: {
            software_development: {
                name: "Software Development",
                skills: [
                    { name: "JavaScript/TypeScript", level: "expert" },
                    { name: "React/Angular/Vue", level: "expert" },
                    { name: "Node.js", level: "advanced" },
                    { name: "Python", level: "advanced" },
                    { name: "RESTful API Design", level: "expert" },
                    { name: "Git/Version Control", level: "expert" },
                    { name: "Agile/Scrum", level: "advanced" },
                    { name: "CI/CD Pipelines", level: "advanced" },
                    { name: "Unit Testing (Jest, Mocha)", level: "advanced" },
                    { name: "Microservices Architecture", level: "advanced" }
                ],
                keywords: ["Software Development", "Full Stack Development", "JavaScript", "TypeScript", "React", "Node.js", "Python", "API Development", "Agile", "CI/CD", "Git", "Microservices", "REST API", "GraphQL", "TDD"],
                jobTitles: ["Software Developer", "Full Stack Developer", "Frontend Developer", "Backend Developer", "Software Engineer", "Application Developer", "Systems Developer", "Junior Developer"],
                certifications: ["AWS Certified Developer", "Microsoft Certified: Azure Developer", "Google Associate Cloud Developer", "Certified Secure Software Lifecycle Professional (CSSLP)"]
            },
            data_science: {
                name: "Data Science & Analytics",
                skills: [
                    { name: "Python (Pandas, NumPy)", level: "expert" },
                    { name: "Machine Learning", level: "expert" },
                    { name: "SQL", level: "expert" },
                    { name: "Statistical Analysis", level: "expert" },
                    { name: "Data Visualization (Tableau, Power BI)", level: "advanced" },
                    { name: "Deep Learning (TensorFlow/PyTorch)", level: "advanced" },
                    { name: "Big Data (Spark, Hadoop)", level: "intermediate" },
                    { name: "R Programming", level: "advanced" },
                    { name: "A/B Testing", level: "advanced" },
                    { name: "Feature Engineering", level: "advanced" }
                ],
                keywords: ["Data Science", "Machine Learning", "Deep Learning", "Statistical Analysis", "Python", "R", "SQL", "Data Visualization", "Predictive Modeling", "Natural Language Processing", "Computer Vision", "Feature Engineering", "A/B Testing", "Big Data", "ETL"],
                jobTitles: ["Data Scientist", "Machine Learning Engineer", "Data Analyst", "Business Intelligence Analyst", "Analytics Manager", "Quantitative Analyst", "Research Scientist", "Data Engineer"],
                certifications: ["Google Professional Data Engineer", "Microsoft Certified: Azure Data Scientist", "Certified Analytics Professional (CAP)", "AWS Certified Machine Learning Specialty"]
            },
            cybersecurity: {
                name: "Cybersecurity",
                skills: [
                    { name: "Network Security", level: "expert" },
                    { name: "Penetration Testing", level: "advanced" },
                    { name: "SIEM Tools (Splunk, QRadar)", level: "advanced" },
                    { name: "Incident Response", level: "expert" },
                    { name: "Risk Assessment", level: "expert" },
                    { name: "Firewall Configuration", level: "advanced" },
                    { name: "Vulnerability Assessment", level: "advanced" },
                    { name: "Cryptography", level: "intermediate" },
                    { name: "Compliance (NIST, ISO 27001)", level: "advanced" },
                    { name: "Cloud Security", level: "advanced" }
                ],
                keywords: ["Cybersecurity", "Information Security", "Network Security", "Penetration Testing", "Incident Response", "Vulnerability Assessment", "SIEM", "Risk Management", "NIST Framework", "ISO 27001", "SOC 2", "Threat Intelligence", "Ethical Hacking", "Firewall Management"],
                jobTitles: ["Cybersecurity Analyst", "Security Engineer", "Penetration Tester", "Security Architect", "Incident Response Analyst", "Security Consultant", "CISO", "SOC Analyst"],
                certifications: ["Certified Information Systems Security Professional (CISSP)", "Certified Ethical Hacker (CEH)", "CompTIA Security+", "Certified Information Security Manager (CISM)"]
            },
            cloud_computing: {
                name: "Cloud Computing & DevOps",
                skills: [
                    { name: "AWS Services", level: "expert" },
                    { name: "Azure/GCP", level: "advanced" },
                    { name: "Docker & Kubernetes", level: "expert" },
                    { name: "Terraform/Infrastructure as Code", level: "advanced" },
                    { name: "Jenkins/GitHub Actions", level: "advanced" },
                    { name: "Linux Administration", level: "advanced" },
                    { name: "Monitoring (Datadog, Prometheus)", level: "advanced" },
                    { name: "Networking (VPC, Load Balancers)", level: "intermediate" },
                    { name: "Serverless Architecture", level: "advanced" },
                    { name: "Site Reliability Engineering", level: "advanced" }
                ],
                keywords: ["Cloud Computing", "AWS", "Azure", "Google Cloud", "DevOps", "Docker", "Kubernetes", "Terraform", "CI/CD", "Infrastructure as Code", "Serverless", "Microservices", "SRE", "Cloud Migration", "Cloud Architecture"],
                jobTitles: ["Cloud Engineer", "DevOps Engineer", "Site Reliability Engineer", "Cloud Architect", "Platform Engineer", "Infrastructure Engineer", "Release Engineer", "Cloud Consultant"],
                certifications: ["AWS Solutions Architect Professional", "Microsoft Certified: Azure Solutions Architect", "Google Professional Cloud Architect", "Certified Kubernetes Administrator (CKA)"]
            },
            database_administration: {
                name: "Database Administration",
                skills: [
                    { name: "SQL Server", level: "expert" },
                    { name: "PostgreSQL/MySQL", level: "expert" },
                    { name: "Oracle Database", level: "advanced" },
                    { name: "Database Performance Tuning", level: "expert" },
                    { name: "Backup & Recovery", level: "expert" },
                    { name: "NoSQL (MongoDB, Cassandra)", level: "advanced" },
                    { name: "Data Modeling", level: "advanced" },
                    { name: "ETL Processes", level: "advanced" },
                    { name: "Database Security", level: "advanced" },
                    { name: "High Availability Solutions", level: "advanced" }
                ],
                keywords: ["Database Administration", "SQL", "PostgreSQL", "MySQL", "Oracle", "Database Performance", "Backup and Recovery", "Data Modeling", "ETL", "NoSQL", "Database Security", "Replication", "Clustering", "Data Warehousing"],
                jobTitles: ["Database Administrator (DBA)", "Database Developer", "Data Architect", "Database Engineer", "SQL Developer", "NoSQL Developer", "Data Warehouse Developer", "BI Developer"],
                certifications: ["Oracle Certified Professional (OCP)", "Microsoft Certified: Azure Database Administrator", "MongoDB Certified Developer", "AWS Certified Database Specialty"]
            },
            mobile_development: {
                name: "Mobile App Development",
                skills: [
                    { name: "React Native", level: "expert" },
                    { name: "Swift/iOS Development", level: "expert" },
                    { name: "Kotlin/Android Development", level: "expert" },
                    { name: "Flutter", level: "advanced" },
                    { name: "REST API Integration", level: "advanced" },
                    { name: "App Store Optimization", level: "intermediate" },
                    { name: "Mobile UI/UX Design", level: "advanced" },
                    { name: "Push Notifications", level: "intermediate" },
                    { name: "Offline Storage", level: "advanced" },
                    { name: "Mobile Testing", level: "advanced" }
                ],
                keywords: ["Mobile Development", "iOS Development", "Android Development", "React Native", "Flutter", "Swift", "Kotlin", "Mobile App Design", "App Store", "Cross-Platform", "Mobile UI/UX", "Push Notifications", "In-App Purchases", "Mobile Security"],
                jobTitles: ["Mobile Developer", "iOS Developer", "Android Developer", "React Native Developer", "Flutter Developer", "Mobile App Architect", "Mobile QA Engineer", "Mobile DevOps Engineer"],
                certifications: ["Google Associate Android Developer", "Apple Certified iOS Developer", "Flutter Certified Developer", "AWS Mobile Specialty"]
            },
            ui_ux_design: {
                name: "UI/UX Design",
                skills: [
                    { name: "Figma", level: "expert" },
                    { name: "Adobe XD", level: "expert" },
                    { name: "User Research", level: "advanced" },
                    { name: "Wireframing & Prototyping", level: "expert" },
                    { name: "Design Systems", level: "advanced" },
                    { name: "Usability Testing", level: "advanced" },
                    { name: "Interaction Design", level: "expert" },
                    { name: "Accessibility (WCAG)", level: "advanced" },
                    { name: "HTML/CSS", level: "intermediate" },
                    { name: "Information Architecture", level: "advanced" }
                ],
                keywords: ["UI/UX Design", "User Experience", "User Interface", "Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research", "Usability Testing", "Design Systems", "Accessibility", "WCAG", "Interaction Design", "Information Architecture"],
                jobTitles: ["UX Designer", "UI Designer", "UX Researcher", "Product Designer", "Interaction Designer", "UX Architect", "Design Systems Lead", "User Experience Manager"],
                certifications: ["Google UX Design Certificate", "Certified Usability Analyst (CUA)", "Nielsen Norman Group UX Certification", "IAAP Certified Professional in Accessibility (CPACC)"]
            },
            it_support: {
                name: "IT Support & Helpdesk",
                skills: [
                    { name: "Windows/Mac OS Support", level: "expert" },
                    { name: "Active Directory", level: "advanced" },
                    { name: "Troubleshooting", level: "expert" },
                    { name: "Network Configuration", level: "advanced" },
                    { name: "Helpdesk Ticketing Systems", level: "advanced" },
                    { name: "Remote Desktop Support", level: "expert" },
                    { name: "Hardware Maintenance", level: "advanced" },
                    { name: "Office 365 Administration", level: "advanced" },
                    { name: "Customer Service", level: "expert" },
                    { name: "ITIL Framework", level: "intermediate" }
                ],
                keywords: ["IT Support", "Helpdesk", "Technical Support", "Troubleshooting", "Active Directory", "Windows Server", "Office 365", "Remote Support", "Ticketing Systems", "ITIL", "Hardware Repair", "Network Setup", "Desktop Support", "End User Support"],
                jobTitles: ["IT Support Specialist", "Helpdesk Technician", "Desktop Support Engineer", "IT Technician", "Technical Support Analyst", "Service Desk Analyst", "IT Coordinator", "Field Service Technician"],
                certifications: ["CompTIA A+", "CompTIA Network+", "ITIL Foundation", "Microsoft 365 Certified: Modern Desktop Administrator"]
            },
            quality_assurance: {
                name: "Quality Assurance & Testing",
                skills: [
                    { name: "Selenium WebDriver", level: "expert" },
                    { name: "Test Planning", level: "expert" },
                    { name: "API Testing (Postman)", level: "advanced" },
                    { name: "Cypress/Playwright", level: "advanced" },
                    { name: "Performance Testing (JMeter)", level: "advanced" },
                    { name: "Bug Tracking (Jira)", level: "expert" },
                    { name: "Manual Testing", level: "expert" },
                    { name: "Regression Testing", level: "expert" },
                    { name: "Test Automation Frameworks", level: "advanced" },
                    { name: "Cross-Browser Testing", level: "advanced" }
                ],
                keywords: ["Quality Assurance", "Software Testing", "Test Automation", "Selenium", "Manual Testing", "API Testing", "Performance Testing", "Regression Testing", "Jira", "Test Plans", "Bug Tracking", "Load Testing", "UAT", "Defect Management"],
                jobTitles: ["QA Engineer", "QA Analyst", "Test Automation Engineer", "QA Lead", "Performance Test Engineer", "Manual Tester", "SDET", "QA Manager"],
                certifications: ["ISTQB Foundation Level", "Certified Selenium Professional", "ISTQB Advanced Test Manager", "AWS Certified Testing Specialty"]
            },
            blockchain_development: {
                name: "Blockchain & Web3 Development",
                skills: [
                    { name: "Solidity", level: "expert" },
                    { name: "Smart Contract Development", level: "expert" },
                    { name: "Ethereum", level: "advanced" },
                    { name: "Web3.js/Ethers.js", level: "advanced" },
                    { name: "DeFi Protocols", level: "advanced" },
                    { name: "NFT Development", level: "intermediate" },
                    { name: "IPFS", level: "intermediate" },
                    { name: "Cryptocurrency", level: "advanced" },
                    { name: "Consensus Algorithms", level: "intermediate" },
                    { name: "Security Auditing", level: "advanced" }
                ],
                keywords: ["Blockchain", "Web3", "Solidity", "Smart Contracts", "Ethereum", "DeFi", "NFT", "Cryptocurrency", "Decentralized Applications", "dApp", "Consensus Mechanisms", "Tokenomics", "Layer 2", "Zero-Knowledge Proofs"],
                jobTitles: ["Blockchain Developer", "Smart Contract Engineer", "Web3 Developer", "Solidity Developer", "DeFi Protocol Engineer", "Blockchain Architect", "Crypto Analyst", "Blockchain Security Auditor"],
                certifications: ["Certified Blockchain Developer (CBD)", "Ethereum Developer Certification", "ConsenSys Academy Blockchain Developer", "Blockchain Council Certified Expert"]
            }
        }
    },
    textile_industry: {
        name: "Textile Industry",
        icon: "\uD83E\uDEA1",
        subcategories: {
            textile_design: {
                name: "Textile Design",
                skills: [
                    { name: "Pattern Development", level: "expert" },
                    { name: "CAD for Textiles (NedGraphics)", level: "advanced" },
                    { name: "Color Theory", level: "expert" },
                    { name: "Fabric Construction", level: "advanced" },
                    { name: "Print Design", level: "expert" },
                    { name: "Weaving Techniques", level: "advanced" },
                    { name: "Textile Testing", level: "intermediate" },
                    { name: "Adobe Photoshop/Illustrator", level: "advanced" },
                    { name: "Trend Forecasting", level: "advanced" },
                    { name: "Surface Design", level: "expert" }
                ],
                keywords: ["Textile Design", "Pattern Design", "Fabric Design", "Print Design", "Color Matching", "Weave Design", "Knit Design", "Jacquard", "Textile CAD", "Surface Pattern", "Digital Printing", "Screen Printing", "Dyeing", "Fabric Manipulation"],
                jobTitles: ["Textile Designer", "Print Designer", "Colorist", "Pattern Developer", "Knitwear Designer", "Surface Design Specialist", "Textile CAD Designer", "Creative Director - Textiles"],
                certifications: ["Certified Textile Designer (CTD)", "Digital Textile Printing Certification", "Color Management Certification", "Sustainable Textile Certification"]
            },
            garment_manufacturing: {
                name: "Garment Manufacturing",
                skills: [
                    { name: "Production Planning", level: "expert" },
                    { name: "Cutting & Sewing Operations", level: "expert" },
                    { name: "Quality Control", level: "advanced" },
                    { name: "Lean Manufacturing", level: "advanced" },
                    { name: "Industrial Engineering", level: "advanced" },
                    { name: "Merchandising", level: "intermediate" },
                    { name: "Supply Chain Management", level: "advanced" },
                    { name: "Cost Estimation", level: "advanced" },
                    { name: "Apparel CAD", level: "intermediate" },
                    { name: "Sewing Machine Maintenance", level: "intermediate" }
                ],
                keywords: ["Garment Manufacturing", "Apparel Production", "Cutting", "Sewing", "Quality Control", "Production Planning", "Lean Manufacturing", "Apparel Merchandising", "Factory Management", "Costing", "Sampling", "Tech Pack", "Fit Testing", "Bulk Production"],
                jobTitles: ["Production Manager", "Garment Technician", "Quality Control Inspector", "Merchandiser", "Cutting Master", "Sewing Supervisor", "Factory Manager", "Industrial Engineer"],
                certifications: ["Certified Apparel Professional", "Lean Six Sigma Green Belt", "Quality Management Certification", "OSHA General Industry Certification"]
            },
            fashion_design: {
                name: "Fashion Design",
                skills: [
                    { name: "Fashion Illustration", level: "expert" },
                    { name: "Draping & Pattern Making", level: "expert" },
                    { name: "Adobe Illustrator", level: "advanced" },
                    { name: "Trend Analysis", level: "advanced" },
                    { name: "Technical Drawing", level: "expert" },
                    { name: "Sewing & Construction", level: "advanced" },
                    { name: "Collection Development", level: "advanced" },
                    { name: "Textile Selection", level: "advanced" },
                    { name: "CLO 3D", level: "intermediate" },
                    { name: "Brand Development", level: "intermediate" }
                ],
                keywords: ["Fashion Design", "Fashion Illustration", "Pattern Making", "Draping", "Collection Design", "Technical Flats", "Trend Forecasting", "Fashion Merchandising", "Garment Construction", "Fabric Sourcing", "Line Development", "Lookbook", "Runway", "Ready-to-Wear"],
                jobTitles: ["Fashion Designer", "Apparel Designer", "Technical Designer", "Fashion Illustrator", "Pattern Maker", "Design Director", "Creative Director", "Assistant Designer"],
                certifications: ["Certified Fashion Designer", "Adobe Certified Professional - Illustrator", "CLO Virtual Fashion Certification", "Sustainable Fashion Certification"]
            },
            textile_chemistry: {
                name: "Textile Chemistry & Dyeing",
                skills: [
                    { name: "Dye Chemistry", level: "expert" },
                    { name: "Color Matching", level: "expert" },
                    { name: "Fabric Testing", level: "advanced" },
                    { name: "Wet Processing", level: "expert" },
                    { name: "Chemical Formulation", level: "advanced" },
                    { name: "Environmental Compliance", level: "advanced" },
                    { name: "Spectrophotometry", level: "advanced" },
                    { name: "Finishing Processes", level: "advanced" },
                    { name: "Quality Assurance", level: "expert" },
                    { name: "Sustainable Dyeing Methods", level: "advanced" }
                ],
                keywords: ["Textile Chemistry", "Dyeing", "Color Matching", "Wet Processing", "Chemical Testing", "Fabric Testing", "Spectrophotometer", "Fastness Testing", "Eco-Friendly Dyes", "Finishing", "Chemical Formulation", "AATCC Standards", "ISO Testing", "REACH Compliance"],
                jobTitles: ["Textile Chemist", "Colorist", "Dyeing Technician", "Quality Control Chemist", "Lab Manager", "Chemical Technician", "Process Engineer", "Environmental Compliance Officer"],
                certifications: ["AATCC Certification", "Color Management Certification", "ISO 17025 Laboratory Certification", "Environmental Management Certification"]
            },
            textile_testing: {
                name: "Textile Testing & Quality Control",
                skills: [
                    { name: "Fabric Strength Testing", level: "expert" },
                    { name: "Colorfastness Testing", level: "expert" },
                    { name: "ASTM/ISO Standards", level: "expert" },
                    { name: "Dimensional Stability", level: "advanced" },
                    { name: "Flammability Testing", level: "advanced" },
                    { name: "Pilling & Abrasion Testing", level: "advanced" },
                    { name: "Moisture Management", level: "intermediate" },
                    { name: "Statistical Analysis", level: "advanced" },
                    { name: "Lab Equipment Operation", level: "expert" },
                    { name: "Documentation & Reporting", level: "expert" }
                ],
                keywords: ["Textile Testing", "Quality Control", "ASTM Standards", "ISO Standards", "Fabric Testing", "Colorfastness", "Tensile Strength", "Abrasion Resistance", "Pilling", "Flammability", "Shrinkage", "AATCC", "Lab Testing", "Compliance Testing"],
                jobTitles: ["Textile Testing Engineer", "Quality Control Analyst", "Lab Technician", "Quality Assurance Manager", "Test Engineer", "Compliance Specialist", "Materials Tester", "Inspection Manager"],
                certifications: ["AATCC Certification", "ISO 17025 Lead Assessor", "Certified Quality Technician (CQT)", "ASTM Testing Certification"]
            },
            textile_merchandising: {
                name: "Textile Merchandising",
                skills: [
                    { name: "Buyer Relations", level: "expert" },
                    { name: "Costing & Pricing", level: "expert" },
                    { name: "Order Management", level: "advanced" },
                    { name: "Supply Chain Coordination", level: "advanced" },
                    { name: "ERP Systems", level: "intermediate" },
                    { name: "Vendor Management", level: "advanced" },
                    { name: "Market Analysis", level: "advanced" },
                    { name: "Sampling Coordination", level: "expert" },
                    { name: "Export Documentation", level: "advanced" },
                    { name: "Negotiation", level: "expert" }
                ],
                keywords: ["Textile Merchandising", "Apparel Merchandising", "Buyer Management", "Costing", "Order Processing", "Supply Chain", "Vendor Relations", "Export Documentation", "Sampling", "Purchase Orders", "Lead Time Management", "Pricing Strategy", "Market Research"],
                jobTitles: ["Textile Merchandiser", "Senior Merchandiser", "Merchandising Manager", "Export Merchandiser", "Buying Assistant", "Sourcing Manager", "Product Developer", "Account Manager"],
                certifications: ["Certified Merchandiser (CM)", "Supply Chain Professional Certification", "Export Management Certification", "Negotiation Skills Certification"]
            },
            sustainable_textiles: {
                name: "Sustainable Textiles",
                skills: [
                    { name: "Organic Fiber Sourcing", level: "expert" },
                    { name: "Recycled Materials", level: "advanced" },
                    { name: "Life Cycle Assessment", level: "advanced" },
                    { name: "GOTS Certification Standards", level: "expert" },
                    { name: "Water Conservation", level: "advanced" },
                    { name: "Circular Economy", level: "advanced" },
                    { name: "Biodegradable Textiles", level: "intermediate" },
                    { name: "Carbon Footprint Analysis", level: "advanced" },
                    { name: "Sustainable Dyeing", level: "advanced" },
                    { name: "Ethical Sourcing", level: "expert" }
                ],
                keywords: ["Sustainable Textiles", "Organic Cotton", "Recycled Polyester", "GOTS", "Fair Trade", "Circular Fashion", "Eco-Friendly", "Carbon Footprint", "Water Conservation", "Ethical Sourcing", "Biodegradable", "Zero Waste", "Green Manufacturing", "Sustainability Reporting"],
                jobTitles: ["Sustainability Manager", "Sustainable Textile Specialist", "Environmental Compliance Manager", "Circular Economy Consultant", "Sourcing Specialist", "Sustainability Analyst", "Green Product Developer", "CSR Manager"],
                certifications: ["GOTS Certification", "LEED Accredited Professional", "Sustainable Apparel Coalition Certification", "Textile Exchange Certification"]
            }
        }
    },
    healthcare: {
        name: "Healthcare",
        icon: "\uD83C\uDFE5",
        subcategories: {
            nursing: {
                name: "Nursing",
                skills: [
                    { name: "Patient Care", level: "expert" },
                    { name: "Medication Administration", level: "expert" },
                    { name: "Vital Signs Monitoring", level: "expert" },
                    { name: "Electronic Health Records (EHR)", level: "advanced" },
                    { name: "IV Therapy", level: "advanced" },
                    { name: "Wound Care", level: "advanced" },
                    { name: "Emergency Response", level: "expert" },
                    { name: "Patient Education", level: "expert" },
                    { name: "Infection Control", level: "expert" },
                    { name: "Care Plan Development", level: "advanced" }
                ],
                keywords: ["Nursing", "Patient Care", "Medication Administration", "EHR", "IV Therapy", "Vital Signs", "Infection Control", "Care Planning", "Clinical Assessment", "Patient Safety", "HIPAA", "BLS", "ACLS", "Triage"],
                jobTitles: ["Registered Nurse (RN)", "Licensed Practical Nurse (LPN)", "Nurse Practitioner", "Charge Nurse", "Clinical Nurse Specialist", "Nurse Educator", "Case Manager", "Travel Nurse"],
                certifications: ["Registered Nurse License (RN)", "Basic Life Support (BLS)", "Advanced Cardiac Life Support (ACLS)", "Certified Critical Care Nurse (CCRN)"]
            },
            medical_practice: {
                name: "Medical Practice (Physicians)",
                skills: [
                    { name: "Clinical Diagnosis", level: "expert" },
                    { name: "Patient Examination", level: "expert" },
                    { name: "Treatment Planning", level: "expert" },
                    { name: "Electronic Medical Records", level: "advanced" },
                    { name: "Medical Research", level: "advanced" },
                    { name: "Pharmacology", level: "expert" },
                    { name: "Surgical Procedures", level: "expert" },
                    { name: "Patient Communication", level: "expert" },
                    { name: "Evidence-Based Medicine", level: "advanced" },
                    { name: "Clinical Documentation", level: "advanced" }
                ],
                keywords: ["Medical Practice", "Clinical Medicine", "Diagnosis", "Treatment Planning", "Patient Care", "Medical Records", "Pharmacology", "Surgery", "Evidence-Based Medicine", "Continuing Medical Education", "HIPAA", "ICD-10", "CPT Coding"],
                jobTitles: ["Physician", "Medical Doctor (MD/DO)", "General Practitioner", "Specialist Physician", "Resident Physician", "Attending Physician", "Medical Director", "Chief Medical Officer"],
                certifications: ["Board Certification (ABMS)", "Medical License (State)", "DEA License", "BLS/ACLS/PALS Certification"]
            },
            pharmacy: {
                name: "Pharmacy",
                skills: [
                    { name: "Pharmacology", level: "expert" },
                    { name: "Prescription Dispensing", level: "expert" },
                    { name: "Drug Interactions", level: "expert" },
                    { name: "Patient Counseling", level: "advanced" },
                    { name: "Pharmacy Management Software", level: "advanced" },
                    { name: "Compounding", level: "advanced" },
                    { name: "Inventory Management", level: "advanced" },
                    { name: "Clinical Pharmacy", level: "advanced" },
                    { name: "Immunizations", level: "intermediate" },
                    { name: "Medication Therapy Management", level: "expert" }
                ],
                keywords: ["Pharmacy", "Pharmacology", "Prescription Dispensing", "Drug Interactions", "Patient Counseling", "Compounding", "Pharmacy Management", "Clinical Pharmacy", "Medication Therapy", "Pharmaceutical Care", "Controlled Substances", "HIPAA", "Immunization"],
                jobTitles: ["Pharmacist", "Clinical Pharmacist", "Pharmacy Technician", "Pharmacy Manager", "Hospital Pharmacist", "Retail Pharmacist", "Consultant Pharmacist", "Compounding Pharmacist"],
                certifications: ["PharmD License", "Board Certified Pharmacologist (BCPS)", "Certified Pharmacy Technician (CPhT)", "Immunization Certification"]
            },
            physical_therapy: {
                name: "Physical Therapy",
                skills: [
                    { name: "Patient Assessment", level: "expert" },
                    { name: "Therapeutic Exercise", level: "expert" },
                    { name: "Manual Therapy", level: "advanced" },
                    { name: "Rehabilitation Planning", level: "expert" },
                    { name: "Gait Training", level: "advanced" },
                    { name: "Pain Management", level: "advanced" },
                    { name: "Electrotherapy", level: "intermediate" },
                    { name: "Documentation", level: "advanced" },
                    { name: "Patient Education", level: "expert" },
                    { name: "Orthopedic Assessment", level: "advanced" }
                ],
                keywords: ["Physical Therapy", "Rehabilitation", "Therapeutic Exercise", "Manual Therapy", "Patient Assessment", "Gait Training", "Pain Management", "Orthopedics", "Neurological Rehabilitation", "Sports Medicine", "Functional Assessment", "Treatment Planning"],
                jobTitles: ["Physical Therapist (PT)", "Physical Therapist Assistant (PTA)", "Rehabilitation Specialist", "Sports Physical Therapist", "Pediatric Physical Therapist", "Neurological PT", "Home Health PT", "Clinic Director"],
                certifications: ["Licensed Physical Therapist", "Board Certified Orthopedic Specialist (OCS)", "Certified Strength and Conditioning Specialist (CSCS)", "Dry Needling Certification"]
            },
            medical_technology: {
                name: "Medical Technology & Laboratory",
                skills: [
                    { name: "Laboratory Equipment Operation", level: "expert" },
                    { name: "Specimen Collection", level: "expert" },
                    { name: "Hematology", level: "advanced" },
                    { name: "Microbiology", level: "advanced" },
                    { name: "Quality Control", level: "advanced" },
                    { name: "Laboratory Information Systems", level: "advanced" },
                    { name: "Phlebotomy", level: "expert" },
                    { name: "Urinalysis", level: "advanced" },
                    { name: "Blood Banking", level: "intermediate" },
                    { name: "Chemical Analysis", level: "advanced" }
                ],
                keywords: ["Medical Technology", "Laboratory Science", "Specimen Analysis", "Hematology", "Microbiology", "Phlebotomy", "Quality Control", "Laboratory Information System", "Clinical Chemistry", "Blood Bank", "Urinalysis", "Pathology", "Diagnostic Testing"],
                jobTitles: ["Medical Technologist", "Medical Laboratory Scientist", "Phlebotomist", "Lab Technician", "Histotechnologist", "Cytotechnologist", "Blood Bank Technician", "Lab Manager"],
                certifications: ["Medical Laboratory Scientist (MLS)", "Certified Phlebotomy Technician (CPT)", "ASCP Certification", "Specialist in Chemistry (SC)"]
            },
            mental_health: {
                name: "Mental Health & Psychology",
                skills: [
                    { name: "Counseling", level: "expert" },
                    { name: "Cognitive Behavioral Therapy", level: "expert" },
                    { name: "Crisis Intervention", level: "expert" },
                    { name: "Psychological Assessment", level: "advanced" },
                    { name: "Group Therapy", level: "advanced" },
                    { name: "Treatment Planning", level: "expert" },
                    { name: "Case Management", level: "advanced" },
                    { name: "Motivational Interviewing", level: "advanced" },
                    { name: "EMDR", level: "intermediate" },
                    { name: "Family Therapy", level: "advanced" }
                ],
                keywords: ["Mental Health", "Psychology", "Counseling", "CBT", "Psychotherapy", "Crisis Intervention", "Mental Health Assessment", "Treatment Planning", "Behavioral Health", "Substance Abuse", "Group Therapy", "Family Therapy", "Trauma-Informed Care"],
                jobTitles: ["Licensed Counselor", "Clinical Psychologist", "Mental Health Counselor", "Marriage and Family Therapist", "Social Worker", "Psychiatric Nurse", "Substance Abuse Counselor", "Behavioral Health Technician"],
                certifications: ["Licensed Professional Counselor (LPC)", "Licensed Clinical Social Worker (LCSW)", "National Certified Counselor (NCC)", "Certified Alcohol and Drug Counselor (CADC)"]
            },
            healthcare_administration: {
                name: "Healthcare Administration",
                skills: [
                    { name: "Healthcare Operations", level: "expert" },
                    { name: "Budget Management", level: "advanced" },
                    { name: "Regulatory Compliance", level: "expert" },
                    { name: "Staff Management", level: "advanced" },
                    { name: "Healthcare IT Systems", level: "advanced" },
                    { name: "Patient Satisfaction", level: "advanced" },
                    { name: "Quality Improvement", level: "expert" },
                    { name: "Policy Development", level: "advanced" },
                    { name: "Insurance Billing", level: "intermediate" },
                    { name: "Strategic Planning", level: "advanced" }
                ],
                keywords: ["Healthcare Administration", "Hospital Management", "Healthcare Operations", "Regulatory Compliance", "Quality Improvement", "Patient Satisfaction", "Budget Management", "Staff Management", "Healthcare IT", "JCAHO", "HIPAA", "Revenue Cycle"],
                jobTitles: ["Healthcare Administrator", "Hospital Manager", "Clinic Manager", "Practice Manager", "Healthcare Consultant", "Quality Improvement Manager", "Compliance Officer", "Director of Operations"],
                certifications: ["Fellow of American College of Healthcare Executives (FACHE)", "Certified Professional in Healthcare Risk Management (CPHRM)", "Certified Medical Manager (CMM)", "Lean Six Sigma in Healthcare"]
            },
            radiology: {
                name: "Radiology & Medical Imaging",
                skills: [
                    { name: "X-Ray Imaging", level: "expert" },
                    { name: "CT Scanning", level: "advanced" },
                    { name: "MRI Operation", level: "advanced" },
                    { name: "Ultrasound", level: "intermediate" },
                    { name: "Patient Positioning", level: "expert" },
                    { name: "Radiation Safety", level: "expert" },
                    { name: "PACS Systems", level: "advanced" },
                    { name: "Image Analysis", level: "advanced" },
                    { name: "Contrast Administration", level: "intermediate" },
                    { name: "Equipment Maintenance", level: "intermediate" }
                ],
                keywords: ["Radiology", "Medical Imaging", "X-Ray", "CT Scan", "MRI", "Ultrasound", "Radiation Safety", "PACS", "Diagnostic Imaging", "Patient Positioning", "Fluoroscopy", "Mammography", "Nuclear Medicine", "Radiologic Technology"],
                jobTitles: ["Radiologic Technologist", "Radiation Therapist", "MRI Technologist", "CT Technologist", "Ultrasound Technician", "Mammography Technologist", "Radiology Assistant", "PACS Administrator"],
                certifications: ["ARRT Registered Radiologic Technologist", "Advanced MRI Certification", "Mammography Certification (MQSA)", "BLS Certification"]
            },
            public_health: {
                name: "Public Health",
                skills: [
                    { name: "Epidemiology", level: "expert" },
                    { name: "Health Education", level: "advanced" },
                    { name: "Community Outreach", level: "expert" },
                    { name: "Program Evaluation", level: "advanced" },
                    { name: "Data Analysis", level: "advanced" },
                    { name: "Grant Writing", level: "advanced" },
                    { name: "Policy Analysis", level: "intermediate" },
                    { name: "Disease Surveillance", level: "advanced" },
                    { name: "Biostatistics", level: "advanced" },
                    { name: "Health Communication", level: "expert" }
                ],
                keywords: ["Public Health", "Epidemiology", "Health Education", "Community Health", "Disease Prevention", "Health Promotion", "Program Evaluation", "Biostatistics", "Health Policy", "Global Health", "Health Disparities", "Outbreak Investigation", "Vaccination Programs"],
                jobTitles: ["Public Health Specialist", "Epidemiologist", "Health Educator", "Community Health Worker", "Public Health Analyst", "Program Coordinator", "Health Policy Analyst", "Environmental Health Specialist"],
                certifications: ["Certified in Public Health (CPH)", "Certified Health Education Specialist (CHES)", "Certified Professional in Infection Prevention (CIC)", "Fellow of American College of Epidemiology"]
            },
            dentistry: {
                name: "Dentistry",
                skills: [
                    { name: "Clinical Examination", level: "expert" },
                    { name: "Restorative Dentistry", level: "expert" },
                    { name: "Dental Radiography", level: "advanced" },
                    { name: "Periodontal Treatment", level: "advanced" },
                    { name: "Endodontics", level: "advanced" },
                    { name: "Patient Education", level: "expert" },
                    { name: "Dental Software", level: "intermediate" },
                    { name: "Oral Surgery", level: "intermediate" },
                    { name: "Orthodontics", level: "intermediate" },
                    { name: "Infection Control", level: "expert" }
                ],
                keywords: ["Dentistry", "Dental Care", "Restorative Dentistry", "Periodontics", "Endodontics", "Oral Surgery", "Dental Radiography", "Teeth Whitening", "Dental Implants", "Orthodontics", "Prosthodontics", "Infection Control", "Patient Care"],
                jobTitles: ["Dentist (DDS/DMD)", "Dental Hygienist", "Dental Assistant", "Orthodontist", "Oral Surgeon", "Periodontist", "Endodontist", "Pediatric Dentist"],
                certifications: ["DDS/DMD License", "Certified Dental Assistant (CDA)", "Registered Dental Hygienist (RDH)", "Invisalign Certification"]
            }
        }
    },
    business_and_management: {
        name: "Business & Management",
        icon: "\uD83D\uDCCA",
        subcategories: {
            human_resources: {
                name: "Human Resources",
                skills: [
                    { name: "Recruitment & Talent Acquisition", level: "expert" },
                    { name: "Employee Relations", level: "expert" },
                    { name: "Performance Management", level: "advanced" },
                    { name: "Compensation & Benefits", level: "advanced" },
                    { name: "HRIS Systems", level: "advanced" },
                    { name: "Employment Law", level: "advanced" },
                    { name: "Training & Development", level: "advanced" },
                    { name: "Onboarding", level: "expert" },
                    { name: "HR Compliance", level: "expert" },
                    { name: "Conflict Resolution", level: "expert" }
                ],
                keywords: ["Human Resources", "HR", "Recruitment", "Talent Acquisition", "Employee Relations", "Performance Management", "Compensation", "Benefits Administration", "HRIS", "Employment Law", "Training", "Onboarding", "HR Compliance", "Workforce Planning"],
                jobTitles: ["HR Manager", "HR Specialist", "Recruiter", "Talent Acquisition Specialist", "Benefits Administrator", "HR Business Partner", "HR Director", "Employee Relations Manager"],
                certifications: ["SHRM Certified Professional (SHRM-CP)", "Senior Professional in Human Resources (SPHR)", "Certified Compensation Professional (CCP)", "HR Certification Institute (HRCI)"]
            },
            marketing: {
                name: "Marketing & Digital Marketing",
                skills: [
                    { name: "Digital Marketing Strategy", level: "expert" },
                    { name: "SEO/SEM", level: "advanced" },
                    { name: "Social Media Marketing", level: "expert" },
                    { name: "Content Marketing", level: "expert" },
                    { name: "Google Analytics", level: "advanced" },
                    { name: "Email Marketing", level: "advanced" },
                    { name: "Marketing Automation", level: "advanced" },
                    { name: "Brand Management", level: "advanced" },
                    { name: "Market Research", level: "advanced" },
                    { name: "Campaign Management", level: "expert" }
                ],
                keywords: ["Marketing", "Digital Marketing", "SEO", "SEM", "Social Media Marketing", "Content Marketing", "Google Analytics", "Email Marketing", "Marketing Automation", "Brand Strategy", "Campaign Management", "PPC", "Conversion Optimization", "Market Research"],
                jobTitles: ["Marketing Manager", "Digital Marketing Specialist", "SEO Specialist", "Content Marketing Manager", "Social Media Manager", "Brand Manager", "Marketing Analyst", "Growth Marketing Manager"],
                certifications: ["Google Ads Certification", "HubSpot Inbound Marketing", "Facebook Blueprint Certification", "Google Analytics Individual Qualification"]
            },
            sales: {
                name: "Sales & Business Development",
                skills: [
                    { name: "B2B Sales", level: "expert" },
                    { name: "CRM (Salesforce)", level: "advanced" },
                    { name: "Lead Generation", level: "expert" },
                    { name: "Negotiation", level: "expert" },
                    { name: "Pipeline Management", level: "advanced" },
                    { name: "Sales Presentations", level: "expert" },
                    { name: "Account Management", level: "advanced" },
                    { name: "Cold Calling", level: "expert" },
                    { name: "Closing Techniques", level: "expert" },
                    { name: "Sales Forecasting", level: "advanced" }
                ],
                keywords: ["Sales", "Business Development", "B2B Sales", "CRM", "Salesforce", "Lead Generation", "Pipeline Management", "Account Management", "Sales Strategy", "Cold Calling", "Closing", "Sales Forecasting", "Territory Management", "Revenue Growth"],
                jobTitles: ["Sales Representative", "Account Executive", "Business Development Manager", "Sales Manager", "Regional Sales Director", "Inside Sales Representative", "Outside Sales Representative", "VP of Sales"],
                certifications: ["Certified Sales Professional (CSP)", "Salesforce Certified Administrator", "Challenger Sale Certification", "SPIN Selling Certification"]
            },
            project_management: {
                name: "Project Management",
                skills: [
                    { name: "Project Planning", level: "expert" },
                    { name: "Agile/Scrum", level: "expert" },
                    { name: "Risk Management", level: "advanced" },
                    { name: "Budget Management", level: "advanced" },
                    { name: "Stakeholder Management", level: "expert" },
                    { name: "MS Project/Jira", level: "advanced" },
                    { name: "Resource Allocation", level: "advanced" },
                    { name: "Team Leadership", level: "expert" },
                    { name: "Change Management", level: "advanced" },
                    { name: "Quality Management", level: "advanced" }
                ],
                keywords: ["Project Management", "Agile", "Scrum", "Project Planning", "Risk Management", "Stakeholder Management", "Budget Management", "Resource Allocation", "Change Management", "Waterfall", "Kanban", "PRINCE2", "PMP", "Project Delivery"],
                jobTitles: ["Project Manager", "Program Manager", "Project Coordinator", "Scrum Master", "PMO Analyst", "Portfolio Manager", "Project Director", "Agile Coach"],
                certifications: ["Project Management Professional (PMP)", "Certified Scrum Master (CSM)", "PRINCE2 Foundation", "Certified Associate in Project Management (CAPM)"]
            },
            accounting: {
                name: "Accounting & Finance",
                skills: [
                    { name: "Financial Reporting", level: "expert" },
                    { name: "Tax Preparation", level: "advanced" },
                    { name: "QuickBooks/Xero", level: "advanced" },
                    { name: "Accounts Payable/Receivable", level: "expert" },
                    { name: "Payroll Processing", level: "advanced" },
                    { name: "Auditing", level: "advanced" },
                    { name: "Budgeting & Forecasting", level: "advanced" },
                    { name: "GAAP Compliance", level: "expert" },
                    { name: "Financial Analysis", level: "advanced" },
                    { name: "Excel (Advanced)", level: "expert" }
                ],
                keywords: ["Accounting", "Financial Reporting", "Tax Preparation", "Accounts Payable", "Accounts Receivable", "Payroll", "Auditing", "GAAP", "QuickBooks", "Budgeting", "Financial Analysis", "General Ledger", "Reconciliation", "Tax Compliance"],
                jobTitles: ["Accountant", "Senior Accountant", "Staff Accountant", "Accounting Manager", "Controller", "Tax Preparer", "Auditor", "Financial Analyst"],
                certifications: ["Certified Public Accountant (CPA)", "Certified Management Accountant (CMA)", "Certified Internal Auditor (CIA)", "QuickBooks ProAdvisor"]
            },
            operations_management: {
                name: "Operations Management",
                skills: [
                    { name: "Process Improvement", level: "expert" },
                    { name: "Supply Chain Management", level: "advanced" },
                    { name: "Inventory Management", level: "advanced" },
                    { name: "Vendor Management", level: "advanced" },
                    { name: "Logistics Coordination", level: "advanced" },
                    { name: "Lean/Six Sigma", level: "expert" },
                    { name: "KPI Tracking", level: "advanced" },
                    { name: "ERP Systems (SAP)", level: "intermediate" },
                    { name: "Facility Management", level: "intermediate" },
                    { name: "Cross-Functional Leadership", level: "expert" }
                ],
                keywords: ["Operations Management", "Process Improvement", "Supply Chain", "Inventory Management", "Vendor Management", "Logistics", "Lean Manufacturing", "Six Sigma", "KPIs", "Operational Excellence", "Continuous Improvement", "ERP", "Warehouse Management", "Production Planning"],
                jobTitles: ["Operations Manager", "Operations Director", "Supply Chain Manager", "Logistics Coordinator", "Warehouse Manager", "Process Improvement Manager", "Plant Manager", "VP of Operations"],
                certifications: ["Lean Six Sigma Black Belt", "Certified Supply Chain Professional (CSCP)", "Certified in Production and Inventory Management (CPIM)", "PMP Certification"]
            },
            entrepreneurship: {
                name: "Entrepreneurship & Startups",
                skills: [
                    { name: "Business Planning", level: "expert" },
                    { name: "Fundraising", level: "advanced" },
                    { name: "Product Development", level: "advanced" },
                    { name: "Market Validation", level: "advanced" },
                    { name: "Pitch Deck Creation", level: "expert" },
                    { name: "Growth Hacking", level: "intermediate" },
                    { name: "Financial Modeling", level: "advanced" },
                    { name: "Team Building", level: "expert" },
                    { name: "Customer Acquisition", level: "advanced" },
                    { name: "Venture Capital Relations", level: "intermediate" }
                ],
                keywords: ["Entrepreneurship", "Startup", "Business Planning", "Fundraising", "Venture Capital", "Angel Investing", "Product-Market Fit", "MVP", "Growth Hacking", "Business Model", "Pitch Deck", "Seed Funding", "Scaling", "Bootstrapping"],
                jobTitles: ["Founder/CEO", "Co-Founder", "Startup Advisor", "Product Manager", "Business Development Manager", "Growth Manager", "Chief Operating Officer", "Venture Capital Analyst"],
                certifications: ["Certified Startup Professional", "Lean Canvas Certification", "Y Combinator Startup School", "Entrepreneurship Certification (edX/Coursera)"]
            }
        }
    },
    education: {
        name: "Education",
        icon: "\uD83C\uDF93",
        subcategories: {
            teaching: {
                name: "Teaching & Instruction",
                skills: [
                    { name: "Lesson Planning", level: "expert" },
                    { name: "Classroom Management", level: "expert" },
                    { name: "Curriculum Development", level: "advanced" },
                    { name: "Student Assessment", level: "expert" },
                    { name: "Differentiated Instruction", level: "advanced" },
                    { name: "Educational Technology", level: "advanced" },
                    { name: "Parent Communication", level: "advanced" },
                    { name: "IEP Implementation", level: "intermediate" },
                    { name: "Behavior Management", level: "expert" },
                    { name: "State Standards Alignment", level: "advanced" }
                ],
                keywords: ["Teaching", "Education", "Lesson Planning", "Classroom Management", "Curriculum Development", "Student Assessment", "Differentiated Instruction", "Educational Technology", "Common Core", "IEP", "Student Engagement", "Professional Learning Communities"],
                jobTitles: ["Teacher", "Elementary Teacher", "Middle School Teacher", "High School Teacher", "Special Education Teacher", "Substitute Teacher", "Lead Teacher", "Department Head"],
                certifications: ["State Teaching License", "National Board Certification", "ESL/ELL Certification", "Special Education Endorsement"]
            },
            higher_education: {
                name: "Higher Education",
                skills: [
                    { name: "Research Methodology", level: "expert" },
                    { name: "Academic Writing", level: "expert" },
                    { name: "Grant Writing", level: "advanced" },
                    { name: "Student Advising", level: "advanced" },
                    { name: "Learning Management Systems", level: "advanced" },
                    { name: "Peer Review", level: "advanced" },
                    { name: "Curriculum Design", level: "advanced" },
                    { name: "Academic Program Development", level: "expert" },
                    { name: "Data Analysis", level: "intermediate" },
                    { name: "Conference Presentation", level: "advanced" }
                ],
                keywords: ["Higher Education", "University", "College", "Academic Research", "Peer-Reviewed Publications", "Grant Writing", "Student Affairs", "Academic Administration", "Faculty Development", "Tenure Track", "Learning Outcomes", "Accreditation"],
                jobTitles: ["Professor", "Associate Professor", "Assistant Professor", "Lecturer", "Academic Advisor", "Dean", "Department Chair", "Researcher"],
                certifications: ["Terminal Degree (PhD/EdD)", "Higher Education Administration Certificate", "Online Teaching Certification", "Grant Writing Certification"]
            },
            instructional_design: {
                name: "Instructional Design",
                skills: [
                    { name: "ADDIE Model", level: "expert" },
                    { name: "Articulate Storyline", level: "advanced" },
                    { name: "E-Learning Development", level: "expert" },
                    { name: "Learning Management Systems", level: "advanced" },
                    { name: "Adult Learning Theory", level: "advanced" },
                    { name: "Needs Analysis", level: "expert" },
                    { name: "Storyboarding", level: "advanced" },
                    { name: "Video Editing", level: "intermediate" },
                    { name: "Gamification", level: "intermediate" },
                    { name: "Accessibility (Section 508)", level: "advanced" }
                ],
                keywords: ["Instructional Design", "E-Learning", "ADDIE", "Articulate Storyline", "Learning Management System", "Adult Learning", "Training Development", "Curriculum Design", "Needs Assessment", "Storyboarding", "Blended Learning", "Microlearning", "Learning Analytics"],
                jobTitles: ["Instructional Designer", "E-Learning Developer", "Learning & Development Specialist", "Training Developer", "Curriculum Designer", "Learning Experience Designer", "Instructional Technologist", "L&D Manager"],
                certifications: ["Certified Professional in Learning and Performance (CPLP)", "Articulate Certified Professional", "ATD Master Trainer", "Accessibility Specialist Certification"]
            },
            early_childhood: {
                name: "Early Childhood Education",
                skills: [
                    { name: "Child Development", level: "expert" },
                    { name: "Play-Based Learning", level: "expert" },
                    { name: "Classroom Setup", level: "advanced" },
                    { name: "Parent Partnerships", level: "expert" },
                    { name: "Developmental Screening", level: "advanced" },
                    { name: "Activity Planning", level: "expert" },
                    { name: "Behavior Guidance", level: "advanced" },
                    { name: "Health & Safety", level: "expert" },
                    { name: "Literacy Development", level: "advanced" },
                    { name: "Observation & Documentation", level: "advanced" }
                ],
                keywords: ["Early Childhood Education", "Child Development", "Preschool", "Kindergarten", "Play-Based Learning", "Montessori", "Developmentally Appropriate Practice", "Childcare", "Infant Care", "Toddler Education", "Family Engagement", "NAEYC Standards"],
                jobTitles: ["Preschool Teacher", "Kindergarten Teacher", "Childcare Worker", "Early Childhood Specialist", "Montessori Teacher", "Childcare Center Director", "Family Childcare Provider", "Head Start Teacher"],
                certifications: ["Child Development Associate (CDA)", "Early Childhood Education License", "Montessori Certification", "CPR/First Aid Certification"]
            },
            special_education: {
                name: "Special Education",
                skills: [
                    { name: "IEP Development", level: "expert" },
                    { name: "Behavior Intervention Plans", level: "advanced" },
                    { name: "Differentiated Instruction", level: "expert" },
                    { name: "Assistive Technology", level: "advanced" },
                    { name: "Autism Spectrum Support", level: "advanced" },
                    { name: "Data Collection", level: "advanced" },
                    { name: "Parent Collaboration", level: "expert" },
                    { name: "Crisis Intervention", level: "advanced" },
                    { name: "Functional Behavior Assessment", level: "advanced" },
                    { name: "Transition Planning", level: "advanced" }
                ],
                keywords: ["Special Education", "IEP", "Behavior Intervention", "Assistive Technology", "Autism", "Learning Disabilities", "Inclusive Education", "Accommodations", "Modifications", "Section 504", "FAPE", "LRE", "RTI", "PBIS"],
                jobTitles: ["Special Education Teacher", "Resource Teacher", "Behavior Specialist", "Autism Specialist", "Paraprofessional", "IEP Coordinator", "Transition Specialist", "Learning Support Teacher"],
                certifications: ["Special Education License", "Board Certified Behavior Analyst (BCBA)", "Crisis Prevention Intervention (CPI)", "Autism Certificate"]
            },
            corporate_training: {
                name: "Corporate Training",
                skills: [
                    { name: "Training Needs Analysis", level: "expert" },
                    { name: "Facilitation", level: "expert" },
                    { name: "Presentation Skills", level: "expert" },
                    { name: "Learning Management Systems", level: "advanced" },
                    { name: "Workshop Design", level: "advanced" },
                    { name: "Performance Consulting", level: "advanced" },
                    { name: "Coaching", level: "expert" },
                    { name: "Leadership Development", level: "advanced" },
                    { name: "ROI Measurement", level: "intermediate" },
                    { name: "Virtual Training Delivery", level: "advanced" }
                ],
                keywords: ["Corporate Training", "Employee Training", "Leadership Development", "Facilitation", "Workshop Design", "Learning Management System", "Performance Improvement", "Coaching", "Onboarding", "Skills Assessment", "Training Delivery", "Soft Skills Training"],
                jobTitles: ["Corporate Trainer", "Training Manager", "Learning & Development Manager", "Leadership Development Specialist", "Training Coordinator", "Organizational Development Consultant", "Talent Development Manager", "Training Specialist"],
                certifications: ["Certified Professional in Learning and Performance (CPLP)", "Certified Training and Development Professional (CTDP)", "ATD Master Trainer", "Coaching Certification (ICF)"]
            },
            educational_technology: {
                name: "Educational Technology",
                skills: [
                    { name: "LMS Administration", level: "expert" },
                    { name: "Video Production", level: "advanced" },
                    { name: "Interactive Content Creation", level: "advanced" },
                    { name: "Google Workspace for Education", level: "expert" },
                    { name: "Microsoft Teams for Education", level: "advanced" },
                    { name: "EdTech Integration", level: "expert" },
                    { name: "Data Analytics", level: "intermediate" },
                    { name: "Accessibility Standards", level: "advanced" },
                    { name: "Digital Citizenship", level: "advanced" },
                    { name: "Technical Support", level: "intermediate" }
                ],
                keywords: ["Educational Technology", "EdTech", "LMS", "Online Learning", "Digital Learning", "Virtual Classroom", "Google Classroom", "Blended Learning", "Flipped Classroom", "Interactive Whiteboard", "Digital Assessment", "Learning Analytics", "Accessibility"],
                jobTitles: ["Educational Technologist", "EdTech Specialist", "LMS Administrator", "Digital Learning Coordinator", "Technology Integration Specialist", "Online Learning Designer", "IT Support for Education", "Distance Learning Coordinator"],
                certifications: ["Google Certified Educator", "Microsoft Innovative Educator", "Apple Teacher", "EdTech Leadership Certificate"]
            }
        }
    },
    media_and_creative_arts: {
        name: "Media & Creative Arts",
        icon: "\uD83C\uDFA8",
        subcategories: {
            graphic_design: {
                name: "Graphic Design",
                skills: [
                    { name: "Adobe Photoshop", level: "expert" },
                    { name: "Adobe Illustrator", level: "expert" },
                    { name: "Adobe InDesign", level: "advanced" },
                    { name: "Typography", level: "expert" },
                    { name: "Brand Identity", level: "advanced" },
                    { name: "Layout Design", level: "expert" },
                    { name: "Print Production", level: "advanced" },
                    { name: "Logo Design", level: "expert" },
                    { name: "Color Theory", level: "expert" },
                    { name: "Figma/Sketch", level: "intermediate" }
                ],
                keywords: ["Graphic Design", "Adobe Creative Suite", "Photoshop", "Illustrator", "InDesign", "Typography", "Brand Identity", "Logo Design", "Print Design", "Digital Design", "Layout", "Color Theory", "Visual Communication", "Design Principles"],
                jobTitles: ["Graphic Designer", "Senior Graphic Designer", "Visual Designer", "Brand Designer", "Art Director", "Creative Director", "Production Artist", "Junior Designer"],
                certifications: ["Adobe Certified Professional", "Graphic Design Certification (Coursera/edX)", "Brand Identity Specialist", "UI/UX Design Certification"]
            },
            video_production: {
                name: "Video Production & Editing",
                skills: [
                    { name: "Adobe Premiere Pro", level: "expert" },
                    { name: "After Effects", level: "advanced" },
                    { name: "DaVinci Resolve", level: "advanced" },
                    { name: "Camera Operation", level: "expert" },
                    { name: "Lighting Setup", level: "advanced" },
                    { name: "Audio Recording", level: "intermediate" },
                    { name: "Color Grading", level: "advanced" },
                    { name: "Motion Graphics", level: "advanced" },
                    { name: "Storyboarding", level: "intermediate" },
                    { name: "Script Writing", level: "intermediate" }
                ],
                keywords: ["Video Production", "Video Editing", "Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics", "Color Grading", "Camera Operation", "Cinematography", "Audio Production", "Lighting", "Post-Production", "Live Streaming"],
                jobTitles: ["Video Editor", "Videographer", "Video Producer", "Motion Graphics Designer", "Director of Photography", "Post-Production Supervisor", "Camera Operator", "Video Content Creator"],
                certifications: ["Adobe Certified Professional - Video", "Avid Media Composer Certification", "DaVinci Resolve Certification", "Drone Pilot License (FAA Part 107)"]
            },
            content_writing: {
                name: "Content Writing & Copywriting",
                skills: [
                    { name: "SEO Writing", level: "expert" },
                    { name: "Copywriting", level: "expert" },
                    { name: "Content Strategy", level: "advanced" },
                    { name: "Blog Writing", level: "expert" },
                    { name: "Technical Writing", level: "advanced" },
                    { name: "Social Media Content", level: "advanced" },
                    { name: "Editing & Proofreading", level: "expert" },
                    { name: "WordPress/CMS", level: "intermediate" },
                    { name: "Brand Voice Development", level: "advanced" },
                    { name: "Research Skills", level: "expert" }
                ],
                keywords: ["Content Writing", "Copywriting", "SEO Writing", "Content Strategy", "Blog Writing", "Technical Writing", "Creative Writing", "Editing", "Proofreading", "Content Marketing", "Brand Voice", "Storytelling", "Editorial Calendar", "CMS"],
                jobTitles: ["Content Writer", "Copywriter", "Content Strategist", "Technical Writer", "Editor", "Content Marketing Manager", "Freelance Writer", "Grant Writer"],
                certifications: ["HubSpot Content Marketing Certification", "Google Analytics Certification", "Certified Professional Technical Communicator (CPTC)", "Copyblogger Certified Content Marketer"]
            },
            journalism: {
                name: "Journalism & Media",
                skills: [
                    { name: "Investigative Reporting", level: "expert" },
                    { name: "News Writing", level: "expert" },
                    { name: "Interviewing", level: "expert" },
                    { name: "Fact-Checking", level: "expert" },
                    { name: "AP Style", level: "expert" },
                    { name: "Broadcast Journalism", level: "intermediate" },
                    { name: "Multimedia Storytelling", level: "advanced" },
                    { name: "Social Media Journalism", level: "advanced" },
                    { name: "Photojournalism", level: "intermediate" },
                    { name: "Ethical Reporting", level: "expert" }
                ],
                keywords: ["Journalism", "News Writing", "Investigative Reporting", "Broadcast Journalism", "AP Style", "Fact-Checking", "Editorial", "Press Releases", "Media Relations", "Multimedia Journalism", "Digital Journalism", "Freelance Journalism", "Feature Writing"],
                jobTitles: ["Journalist", "Reporter", "News Anchor", "Editor", "Correspondent", "Feature Writer", "Investigative Reporter", "Sports Journalist"],
                certifications: ["Society of Professional Journalists Certification", "Online News Association Membership", "Broadcast Journalism Certificate", "Data Journalism Certification"]
            },
            photography: {
                name: "Photography",
                skills: [
                    { name: "DSLR/Mirrorless Operation", level: "expert" },
                    { name: "Adobe Lightroom", level: "expert" },
                    { name: "Adobe Photoshop", level: "advanced" },
                    { name: "Studio Lighting", level: "advanced" },
                    { name: "Portrait Photography", level: "expert" },
                    { name: "Event Photography", level: "expert" },
                    { name: "Photo Editing", level: "expert" },
                    { name: "Composition", level: "expert" },
                    { name: "Drone Photography", level: "intermediate" },
                    { name: "Product Photography", level: "advanced" }
                ],
                keywords: ["Photography", "DSLR", "Mirrorless", "Lightroom", "Photoshop", "Portrait Photography", "Event Photography", "Studio Lighting", "Photo Editing", "Composition", "Drone Photography", "Product Photography", "Wedding Photography", "Photojournalism"],
                jobTitles: ["Photographer", "Portrait Photographer", "Event Photographer", "Product Photographer", "Wedding Photographer", "Photo Editor", "Studio Manager", "Drone Photographer"],
                certifications: ["Professional Photographers of America (PPA) Certification", "Drone Pilot License (FAA Part 107)", "Adobe Certified Professional", "Wedding Photography Certification"]
            },
            music_production: {
                name: "Music Production",
                skills: [
                    { name: "Ableton Live", level: "expert" },
                    { name: "Logic Pro X", level: "advanced" },
                    { name: "Pro Tools", level: "advanced" },
                    { name: "Audio Mixing", level: "expert" },
                    { name: "Sound Design", level: "advanced" },
                    { name: "Mastering", level: "advanced" },
                    { name: "MIDI Programming", level: "expert" },
                    { name: "Recording Techniques", level: "expert" },
                    { name: "Music Theory", level: "advanced" },
                    { name: "Beat Making", level: "expert" }
                ],
                keywords: ["Music Production", "Audio Engineering", "Ableton Live", "Logic Pro", "Pro Tools", "Mixing", "Mastering", "Sound Design", "Recording", "MIDI", "Beat Making", "Music Theory", "DAW", "Audio Post-Production"],
                jobTitles: ["Music Producer", "Audio Engineer", "Sound Designer", "Mixing Engineer", "Mastering Engineer", "Recording Engineer", "Beat Maker", "Composer"],
                certifications: ["Avid Pro Tools Certification", "Ableton Certified Training Center", "Audio Engineering Society Membership", "Music Production Certification (Berklee Online)"]
            },
            animation: {
                name: "Animation & Motion Design",
                skills: [
                    { name: "Adobe After Effects", level: "expert" },
                    { name: "Cinema 4D", level: "advanced" },
                    { name: "Blender", level: "advanced" },
                    { name: "2D Animation", level: "expert" },
                    { name: "3D Modeling", level: "advanced" },
                    { name: "Character Animation", level: "expert" },
                    { name: "Storyboarding", level: "advanced" },
                    { name: "Rigging", level: "intermediate" },
                    { name: "Motion Graphics", level: "expert" },
                    { name: "Visual Effects", level: "advanced" }
                ],
                keywords: ["Animation", "Motion Graphics", "After Effects", "Cinema 4D", "Blender", "3D Animation", "2D Animation", "Character Animation", "Storyboarding", "Rigging", "Visual Effects", "VFX", "3D Modeling", "Compositing"],
                jobTitles: ["Animator", "Motion Graphics Designer", "3D Artist", "Character Animator", "VFX Artist", "Storyboard Artist", "Rigger", "Animation Director"],
                certifications: ["Adobe Certified Professional - After Effects", "Autodesk Certified Professional", "Maxon Cinema 4D Certification", "Animation Mentor Certificate"]
            },
            public_relations: {
                name: "Public Relations",
                skills: [
                    { name: "Media Relations", level: "expert" },
                    { name: "Press Release Writing", level: "expert" },
                    { name: "Crisis Communication", level: "advanced" },
                    { name: "Event Planning", level: "advanced" },
                    { name: "Social Media Management", level: "advanced" },
                    { name: "Brand Messaging", level: "expert" },
                    { name: "Media Monitoring", level: "intermediate" },
                    { name: "Stakeholder Engagement", level: "advanced" },
                    { name: "Pitching", level: "expert" },
                    { name: "Reputation Management", level: "advanced" }
                ],
                keywords: ["Public Relations", "Media Relations", "Press Releases", "Crisis Communication", "Event Planning", "Brand Messaging", "Media Outreach", "Pitching", "Reputation Management", "Corporate Communications", "Media Monitoring", "Influencer Relations"],
                jobTitles: ["PR Specialist", "PR Manager", "Communications Manager", "Media Relations Specialist", "Publicist", "Corporate Communications Director", "Event Coordinator", "Social Media Manager"],
                certifications: ["Accredited in Public Relations (APR)", "Certified Public Relations Counselor", "Digital Marketing Certification", "Crisis Communication Certification"]
            }
        }
    },
    government_and_public_sector: {
        name: "Government & Public Sector",
        icon: "\uD83C\uDFDB\uFE0F",
        subcategories: {
            civil_service: {
                name: "Civil Service",
                skills: [
                    { name: "Policy Analysis", level: "expert" },
                    { name: "Public Administration", level: "advanced" },
                    { name: "Regulatory Compliance", level: "expert" },
                    { name: "Report Writing", level: "advanced" },
                    { name: "Budget Management", level: "advanced" },
                    { name: "Public Speaking", level: "advanced" },
                    { name: "Stakeholder Engagement", level: "expert" },
                    { name: "Government Procurement", level: "intermediate" },
                    { name: "Data Management", level: "intermediate" },
                    { name: "Project Coordination", level: "advanced" }
                ],
                keywords: ["Civil Service", "Public Administration", "Policy Analysis", "Government", "Regulatory Compliance", "Public Policy", "Federal Employment", "State Government", "Local Government", "Public Sector", "Government Operations", "Civic Engagement"],
                jobTitles: ["Civil Servant", "Government Analyst", "Policy Analyst", "Administrative Officer", "Program Coordinator", "Government Affairs Specialist", "Public Administrator", "City Manager"],
                certifications: ["Certified Public Manager (CPM)", "Government Financial Management Certification", "Federal Acquisition Certification", "Project Management Professional (PMP)"]
            },
            public_policy: {
                name: "Public Policy & Analysis",
                skills: [
                    { name: "Policy Research", level: "expert" },
                    { name: "Legislative Analysis", level: "expert" },
                    { name: "Data Analysis", level: "advanced" },
                    { name: "Stakeholder Mapping", level: "advanced" },
                    { name: "Policy Writing", level: "expert" },
                    { name: "Cost-Benefit Analysis", level: "advanced" },
                    { name: "Government Relations", level: "advanced" },
                    { name: "Public Administration", level: "advanced" },
                    { name: "Statistical Software (SPSS/R)", level: "intermediate" },
                    { name: "Briefing Preparation", level: "expert" }
                ],
                keywords: ["Public Policy", "Policy Analysis", "Legislative Affairs", "Policy Research", "Government Relations", "Regulatory Affairs", "Policy Development", "Public Administration", "Think Tank", "Advocacy", "Lobbying", "Impact Assessment"],
                jobTitles: ["Policy Analyst", "Legislative Analyst", "Public Policy Advisor", "Government Relations Manager", "Research Analyst", "Policy Director", "Regulatory Affairs Specialist", "Advocacy Coordinator"],
                certifications: ["Certified Government Financial Manager (CGFM)", "Public Policy Certificate", "Certified Legislative Affairs Professional", "MPA/MPP Degree"]
            },
            law_enforcement: {
                name: "Law Enforcement",
                skills: [
                    { name: "Criminal Investigation", level: "expert" },
                    { name: "Evidence Collection", level: "expert" },
                    { name: "Patrol Operations", level: "expert" },
                    { name: "Community Policing", level: "advanced" },
                    { name: "Report Writing", level: "advanced" },
                    { name: "Emergency Response", level: "expert" },
                    { name: "Firearms Proficiency", level: "expert" },
                    { name: "De-escalation Techniques", level: "advanced" },
                    { name: "Criminal Law", level: "advanced" },
                    { name: "Interrogation", level: "advanced" }
                ],
                keywords: ["Law Enforcement", "Police", "Criminal Investigation", "Patrol", "Evidence Collection", "Community Policing", "Emergency Response", "Crime Prevention", "Criminal Justice", "Public Safety", "Traffic Enforcement", "Incident Command"],
                jobTitles: ["Police Officer", "Detective", "Sergeant", "Lieutenant", "Captain", "Special Agent", "K9 Unit Officer", "SWAT Team Member"],
                certifications: ["Police Academy Certification", "Criminal Justice Certification", "TASER Certification", "Active Shooter Response Training"]
            },
            military: {
                name: "Military & Defense",
                skills: [
                    { name: "Strategic Planning", level: "expert" },
                    { name: "Operations Management", level: "expert" },
                    { name: "Leadership", level: "expert" },
                    { name: "Logistics", level: "advanced" },
                    { name: "Intelligence Analysis", level: "advanced" },
                    { name: "Risk Assessment", level: "advanced" },
                    { name: "Security Clearance", level: "expert" },
                    { name: "Training Development", level: "advanced" },
                    { name: "Team Leadership", level: "expert" },
                    { name: "Crisis Management", level: "expert" }
                ],
                keywords: ["Military", "Defense", "Armed Forces", "Strategic Planning", "Operations", "Logistics", "Intelligence", "Security Clearance", "Leadership", "Combat Operations", "Defense Contracting", "Veteran", "Military Transition", "National Security"],
                jobTitles: ["Military Officer", "Enlisted Service Member", "Intelligence Analyst", "Logistics Officer", "Defense Contractor", "Security Specialist", "Training Coordinator", "Veterans Affairs Specialist"],
                certifications: ["Security Clearance (Secret/TS)", "Military Occupational Specialty Certification", "Defense Acquisition Certification", "Project Management Professional (PMP)"]
            },
            diplomacy: {
                name: "Diplomacy & International Relations",
                skills: [
                    { name: "Diplomatic Protocol", level: "expert" },
                    { name: "International Negotiation", level: "expert" },
                    { name: "Foreign Language", level: "advanced" },
                    { name: "Cultural Awareness", level: "expert" },
                    { name: "Policy Analysis", level: "advanced" },
                    { name: "Report Writing", level: "advanced" },
                    { name: "Public Diplomacy", level: "advanced" },
                    { name: "Consular Services", level: "intermediate" },
                    { name: "International Law", level: "advanced" },
                    { name: "Crisis Management", level: "advanced" }
                ],
                keywords: ["Diplomacy", "International Relations", "Foreign Service", "Diplomatic Protocol", "International Negotiation", "Foreign Policy", "Embassy", "Consular Services", "Cultural Diplomacy", "International Law", "Bilateral Relations", "Multilateral Affairs"],
                jobTitles: ["Diplomat", "Foreign Service Officer", "Consular Officer", "International Relations Analyst", "Political Officer", "Cultural Affairs Officer", "Embassy Staff", "International Development Specialist"],
                certifications: ["Foreign Service Officer Certification", "Diplomatic Protocol Certification", "International Relations Certificate", "Language Proficiency Certification"]
            },
            emergency_management: {
                name: "Emergency Management",
                skills: [
                    { name: "Disaster Response", level: "expert" },
                    { name: "Emergency Planning", level: "expert" },
                    { name: "Incident Command System", level: "expert" },
                    { name: "Risk Assessment", level: "advanced" },
                    { name: "Evacuation Planning", level: "advanced" },
                    { name: "Crisis Communication", level: "expert" },
                    { name: "Resource Coordination", level: "advanced" },
                    { name: "FEMA Regulations", level: "advanced" },
                    { name: "GIS Mapping", level: "intermediate" },
                    { name: "First Aid/CPR", level: "expert" }
                ],
                keywords: ["Emergency Management", "Disaster Response", "Emergency Planning", "Incident Command", "FEMA", "Risk Assessment", "Crisis Management", "Evacuation", "Business Continuity", "Emergency Operations", "Homeland Security", "Hazard Mitigation"],
                jobTitles: ["Emergency Management Director", "Emergency Coordinator", "Disaster Response Specialist", "Business Continuity Planner", "Emergency Operations Manager", "FEMA Liaison", "Homeland Security Analyst", "Crisis Manager"],
                certifications: ["Certified Emergency Manager (CEM)", "FEMA Professional Development Series", "Incident Command System Certification", "Business Continuity Professional (CBCP)"]
            },
            social_work: {
                name: "Social Work",
                skills: [
                    { name: "Case Management", level: "expert" },
                    { name: "Client Assessment", level: "expert" },
                    { name: "Crisis Intervention", level: "expert" },
                    { name: "Counseling", level: "advanced" },
                    { name: "Community Resources", level: "expert" },
                    { name: "Advocacy", level: "expert" },
                    { name: "Documentation", level: "advanced" },
                    { name: "Group Facilitation", level: "advanced" },
                    { name: "Trauma-Informed Care", level: "advanced" },
                    { name: "Cultural Competency", level: "expert" }
                ],
                keywords: ["Social Work", "Case Management", "Crisis Intervention", "Counseling", "Community Resources", "Advocacy", "Child Welfare", "Mental Health", "Substance Abuse", "Family Services", "Trauma-Informed Care", "Cultural Competency"],
                jobTitles: ["Social Worker", "Case Manager", "Clinical Social Worker", "Child Welfare Specialist", "Community Outreach Coordinator", "Family Counselor", "Substance Abuse Counselor", "School Social Worker"],
                certifications: ["Licensed Clinical Social Worker (LCSW)", "Certified Case Manager (CCM)", "Certified Alcohol and Drug Counselor", "Trauma-Informed Care Certification"]
            },
            urban_planning: {
                name: "Urban Planning & Development",
                skills: [
                    { name: "Land Use Planning", level: "expert" },
                    { name: "GIS Mapping", level: "advanced" },
                    { name: "Zoning Regulations", level: "expert" },
                    { name: "Community Engagement", level: "expert" },
                    { name: "Environmental Impact Assessment", level: "advanced" },
                    { name: "Transportation Planning", level: "advanced" },
                    { name: "Urban Design", level: "advanced" },
                    { name: "Policy Development", level: "advanced" },
                    { name: "Project Management", level: "intermediate" },
                    { name: "AutoCAD", level: "intermediate" }
                ],
                keywords: ["Urban Planning", "City Planning", "Land Use", "Zoning", "GIS", "Community Development", "Environmental Planning", "Transportation Planning", "Urban Design", "Smart Growth", "Sustainability", "Comprehensive Planning", "Redevelopment"],
                jobTitles: ["Urban Planner", "City Planner", "Land Use Planner", "Transportation Planner", "Environmental Planner", "Community Development Specialist", "Zoning Administrator", "Planning Director"],
                certifications: ["American Institute of Certified Planners (AICP)", "GIS Professional Certification", "LEED Accredited Professional", "Urban Design Certificate"]
            }
        }
    },
    freelancing_and_gig_economy: {
        name: "Freelancing & Gig Economy",
        icon: "\uD83D\uDE80",
        subcategories: {
            freelance_writing: {
                name: "Freelance Writing",
                skills: [
                    { name: "SEO Writing", level: "expert" },
                    { name: "Blog Writing", level: "expert" },
                    { name: "Copywriting", level: "advanced" },
                    { name: "Content Strategy", level: "advanced" },
                    { name: "Editing", level: "expert" },
                    { name: "Research", level: "expert" },
                    { name: "WordPress", level: "intermediate" },
                    { name: "Pitching", level: "advanced" },
                    { name: "Client Management", level: "advanced" },
                    { name: "Time Management", level: "expert" }
                ],
                keywords: ["Freelance Writing", "Content Writing", "SEO Writing", "Blog Writing", "Copywriting", "Ghostwriting", "Technical Writing", "Editing", "Proofreading", "Content Creation", "Article Writing", "Web Content"],
                jobTitles: ["Freelance Writer", "Content Writer", "Copywriter", "Ghostwriter", "Technical Writer", "Blog Writer", "Grant Writer", "Editor"],
                certifications: ["HubSpot Content Marketing Certification", "Google Analytics Certification", "Freelance Writing Certificate (Society of Editors)", "SEO Certification"]
            },
            freelance_design: {
                name: "Freelance Design",
                skills: [
                    { name: "Adobe Creative Suite", level: "expert" },
                    { name: "Brand Design", level: "expert" },
                    { name: "Web Design", level: "advanced" },
                    { name: "Logo Design", level: "expert" },
                    { name: "Client Communication", level: "expert" },
                    { name: "Project Management", level: "advanced" },
                    { name: "Figma", level: "advanced" },
                    { name: "UI/UX Design", level: "advanced" },
                    { name: "Print Design", level: "advanced" },
                    { name: "Pricing Strategy", level: "intermediate" }
                ],
                keywords: ["Freelance Design", "Graphic Design", "Brand Design", "Logo Design", "Web Design", "Adobe Creative Suite", "UI/UX", "Visual Design", "Print Design", "Client Projects", "Portfolio", "Design Consulting"],
                jobTitles: ["Freelance Designer", "Graphic Designer", "Brand Designer", "Web Designer", "UI/UX Designer", "Creative Consultant", "Illustrator", "Packaging Designer"],
                certifications: ["Adobe Certified Professional", "UX Design Certification", "Brand Strategy Certification", "Freelance Business Certificate"]
            },
            freelance_development: {
                name: "Freelance Development",
                skills: [
                    { name: "JavaScript", level: "expert" },
                    { name: "React/Next.js", level: "advanced" },
                    { name: "WordPress Development", level: "advanced" },
                    { name: "API Integration", level: "advanced" },
                    { name: "Responsive Design", level: "expert" },
                    { name: "Version Control (Git)", level: "advanced" },
                    { name: "Client Requirements Gathering", level: "expert" },
                    { name: "Testing", level: "advanced" },
                    { name: "Deployment", level: "advanced" },
                    { name: "Documentation", level: "intermediate" }
                ],
                keywords: ["Freelance Developer", "Web Development", "JavaScript", "React", "WordPress", "Frontend Development", "Backend Development", "API", "Responsive Design", "Freelance Programming", "Custom Websites", "E-Commerce"],
                jobTitles: ["Freelance Developer", "Web Developer", "Frontend Developer", "WordPress Developer", "Full Stack Developer", "E-Commerce Developer", "Software Consultant", "Mobile Developer"],
                certifications: ["AWS Certified Developer", "Google Mobile Web Specialist", "WordPress Development Certification", "Meta Frontend Developer Certificate"]
            },
            virtual_assistant: {
                name: "Virtual Assistant",
                skills: [
                    { name: "Email Management", level: "expert" },
                    { name: "Calendar Management", level: "expert" },
                    { name: "Data Entry", level: "expert" },
                    { name: "Customer Service", level: "expert" },
                    { name: "Social Media Management", level: "advanced" },
                    { name: "Bookkeeping", level: "intermediate" },
                    { name: "Travel Planning", level: "intermediate" },
                    { name: "Microsoft Office", level: "expert" },
                    { name: "Google Workspace", level: "expert" },
                    { name: "Communication Skills", level: "expert" }
                ],
                keywords: ["Virtual Assistant", "Administrative Support", "Email Management", "Calendar Management", "Data Entry", "Customer Service", "Remote Work", "Office Administration", "Scheduling", "Research", "Social Media Management"],
                jobTitles: ["Virtual Assistant", "Executive Assistant", "Administrative Assistant", "Remote Assistant", "Personal Assistant", "Online Business Manager", "Social Media VA", "Bookkeeping VA"],
                certifications: ["Certified Virtual Assistant (CVA)", "Microsoft Office Specialist", "Google Workspace Certification", "QuickBooks Certification"]
            },
            freelance_consulting: {
                name: "Freelance Consulting",
                skills: [
                    { name: "Strategic Planning", level: "expert" },
                    { name: "Business Analysis", level: "expert" },
                    { name: "Problem Solving", level: "expert" },
                    { name: "Client Relationship Management", level: "expert" },
                    { name: "Presentation Skills", level: "expert" },
                    { name: "Data Analysis", level: "advanced" },
                    { name: "Change Management", level: "advanced" },
                    { name: "Industry Expertise", level: "expert" },
                    { name: "Proposal Writing", level: "advanced" },
                    { name: "Workshop Facilitation", level: "advanced" }
                ],
                keywords: ["Freelance Consulting", "Management Consulting", "Business Consulting", "Strategic Planning", "Problem Solving", "Client Advisory", "Business Analysis", "Change Management", "Industry Expert", "Advisory Services", "Consulting Practice"],
                jobTitles: ["Freelance Consultant", "Management Consultant", "Business Advisor", "Strategy Consultant", "Operations Consultant", "IT Consultant", "HR Consultant", "Marketing Consultant"],
                certifications: ["Certified Management Consultant (CMC)", "Project Management Professional (PMP)", "Lean Six Sigma Black Belt", "Change Management Certification"]
            },
            gig_driving: {
                name: "Gig Economy (Driving & Delivery)",
                skills: [
                    { name: "Safe Driving", level: "expert" },
                    { name: "Navigation Apps", level: "expert" },
                    { name: "Customer Service", level: "advanced" },
                    { name: "Time Management", level: "expert" },
                    { name: "Vehicle Maintenance", level: "intermediate" },
                    { name: "Route Optimization", level: "advanced" },
                    { name: "Communication", level: "advanced" },
                    { name: "Problem Solving", level: "intermediate" },
                    { name: "Record Keeping", level: "intermediate" },
                    { name: "Cash Handling", level: "intermediate" }
                ],
                keywords: ["Gig Economy", "Rideshare", "Delivery Driver", "Uber", "Lyft", "DoorDash", "Food Delivery", "Courier", "Transportation", "Independent Contractor", "Flexible Work", "Gig Worker"],
                jobTitles: ["Rideshare Driver", "Delivery Driver", "Courier", "Food Delivery Driver", "Package Delivery Driver", "Chauffeur", "Freight Driver", "Last-Mile Delivery Driver"],
                certifications: ["Valid Driver's License", "Commercial Driver's License (CDL)", "Defensive Driving Certificate", "Food Handler's Permit"]
            },
            freelance_teaching: {
                name: "Freelance Teaching & Tutoring",
                skills: [
                    { name: "Subject Matter Expertise", level: "expert" },
                    { name: "Online Teaching Platforms", level: "advanced" },
                    { name: "Lesson Planning", level: "expert" },
                    { name: "Student Assessment", level: "advanced" },
                    { name: "Communication", level: "expert" },
                    { name: "Patience", level: "expert" },
                    { name: "Adaptability", level: "advanced" },
                    { name: "Technology Integration", level: "intermediate" },
                    { name: "Curriculum Development", level: "advanced" },
                    { name: "Progress Tracking", level: "advanced" }
                ],
                keywords: ["Freelance Teaching", "Online Tutoring", "Private Tutor", "Teaching", "Education", "Online Education", "Test Prep", "Subject Tutoring", "Language Teaching", "Homework Help", "Academic Coaching", "Virtual Classroom"],
                jobTitles: ["Online Tutor", "Private Tutor", "Freelance Teacher", "Test Prep Instructor", "Language Teacher", "Academic Coach", "Subject Specialist", "Homeschool Teacher"],
                certifications: ["Teaching License", "TESOL/TEFL Certification", "Subject-Specific Certification", "Online Teaching Certificate"]
            },
            freelance_photography: {
                name: "Freelance Photography",
                skills: [
                    { name: "Camera Operation", level: "expert" },
                    { name: "Photo Editing", level: "expert" },
                    { name: "Client Management", level: "advanced" },
                    { name: "Event Coverage", level: "expert" },
                    { name: "Lighting", level: "advanced" },
                    { name: "Composition", level: "expert" },
                    { name: "Business Management", level: "intermediate" },
                    { name: "Marketing", level: "intermediate" },
                    { name: "Social Media", level: "advanced" },
                    { name: "Printing", level: "intermediate" }
                ],
                keywords: ["Freelance Photography", "Event Photography", "Portrait Photography", "Wedding Photography", "Photo Editing", "Photography Business", "Stock Photography", "Commercial Photography", "Product Photography", "Real Estate Photography"],
                jobTitles: ["Freelance Photographer", "Event Photographer", "Wedding Photographer", "Portrait Photographer", "Commercial Photographer", "Real Estate Photographer", "Stock Photographer", "Photojournalist"],
                certifications: ["Professional Photographers of America (PPA)", "Drone Pilot License (FAA Part 107)", "Adobe Certified Professional", "Wedding Photography Certification"]
            }
        }
    },
    students_and_fresh_graduates: {
        name: "Students & Fresh Graduates",
        icon: "\uD83C\uDF93",
        subcategories: {
            internships: {
                name: "Internships",
                skills: [
                    { name: "Adaptability", level: "expert" },
                    { name: "Willingness to Learn", level: "expert" },
                    { name: "Communication", level: "advanced" },
                    { name: "Teamwork", level: "expert" },
                    { name: "Time Management", level: "advanced" },
                    { name: "Problem Solving", level: "advanced" },
                    { name: "Basic Technical Skills", level: "intermediate" },
                    { name: "Research", level: "advanced" },
                    { name: "Note Taking", level: "intermediate" },
                    { name: "Professional Etiquette", level: "intermediate" }
                ],
                keywords: ["Internship", "Intern", "Entry Level", "Training Program", "Summer Intern", "Co-op", "Apprenticeship", "Career Development", "Professional Growth", "Learning Opportunity", "Mentorship", "Hands-On Experience"],
                jobTitles: ["Intern", "Summer Intern", "Co-op Student", "Trainee", "Apprentice", "Junior Intern", "Research Intern", "Marketing Intern"],
                certifications: ["Internship Completion Certificate", "Industry-Specific Training", "Professional Development Workshop", "Online Course Certificates"]
            },
            entry_level_tech: {
                name: "Entry-Level Technology Roles",
                skills: [
                    { name: "Programming Fundamentals", level: "intermediate" },
                    { name: "Web Development Basics", level: "intermediate" },
                    { name: "Git/GitHub", level: "intermediate" },
                    { name: "Problem Solving", level: "advanced" },
                    { name: "Agile Methodology", level: "intermediate" },
                    { name: "Database Basics", level: "intermediate" },
                    { name: "Linux Basics", level: "intermediate" },
                    { name: "Team Collaboration", level: "expert" },
                    { name: "Communication", level: "advanced" },
                    { name: "Continuous Learning", level: "expert" }
                ],
                keywords: ["Entry Level", "Junior Developer", "Associate Engineer", "New Graduate", "Junior Software Engineer", "Trainee Developer", "Graduate Program", "Technology Careers", "Coding Bootcamp", "Tech Entry Level"],
                jobTitles: ["Junior Software Developer", "Associate Software Engineer", "Junior Web Developer", "IT Support Technician", "Junior Data Analyst", "Associate QA Engineer", "Technical Trainee", "Graduate Developer"],
                certifications: ["AWS Cloud Practitioner", "Google IT Support Certificate", "CompTIA A+", "Coding Bootcamp Certificate"]
            },
            campus_leadership: {
                name: "Campus Leadership & Activities",
                skills: [
                    { name: "Leadership", level: "expert" },
                    { name: "Event Planning", level: "advanced" },
                    { name: "Public Speaking", level: "advanced" },
                    { name: "Team Management", level: "expert" },
                    { name: "Budget Management", level: "intermediate" },
                    { name: "Conflict Resolution", level: "advanced" },
                    { name: "Communication", level: "expert" },
                    { name: "Networking", level: "advanced" },
                    { name: "Project Coordination", level: "advanced" },
                    { name: "Social Media Management", level: "intermediate" }
                ],
                keywords: ["Student Leadership", "Student Government", "Campus Activities", "Club President", "Event Planning", "Student Organization", "Peer Mentor", "Resident Advisor", "Student Ambassador", "Greek Life", "Campus Involvement"],
                jobTitles: ["Student Government President", "Club President", "Resident Advisor", "Peer Mentor", "Student Ambassador", "Event Coordinator", "Campus Tour Guide", "Greek Life Officer"],
                certifications: ["Student Leadership Certificate", "Event Planning Certification", "Peer Mentor Training", "Diversity & Inclusion Certificate"]
            },
            research_experience: {
                name: "Research Experience",
                skills: [
                    { name: "Research Methodology", level: "advanced" },
                    { name: "Data Collection", level: "advanced" },
                    { name: "Statistical Analysis", level: "intermediate" },
                    { name: "Literature Review", level: "advanced" },
                    { name: "Academic Writing", level: "advanced" },
                    { name: "Presentation Skills", level: "intermediate" },
                    { name: "Lab Techniques", level: "intermediate" },
                    { name: "Critical Thinking", level: "expert" },
                    { name: "Attention to Detail", level: "expert" },
                    { name: "Collaboration", level: "advanced" }
                ],
                keywords: ["Research", "Academic Research", "Undergraduate Research", "Research Assistant", "Lab Research", "Scientific Method", "Data Analysis", "Literature Review", "Research Publication", "Conference Presentation", "Grant Writing"],
                jobTitles: ["Research Assistant", "Lab Assistant", "Undergraduate Researcher", "Research Intern", "Graduate Research Assistant", "Teaching Assistant", "Study Coordinator", "Data Collector"],
                certifications: ["Research Ethics Certification (IRB)", "Lab Safety Training", "Statistical Software Certification", "Research Methods Certificate"]
            },
            study_abroad: {
                name: "Study Abroad Experience",
                skills: [
                    { name: "Cross-Cultural Communication", level: "expert" },
                    { name: "Foreign Language", level: "advanced" },
                    { name: "Adaptability", level: "expert" },
                    { name: "Independence", level: "expert" },
                    { name: "Problem Solving", level: "advanced" },
                    { name: "Cultural Awareness", level: "expert" },
                    { name: "Global Perspective", level: "advanced" },
                    { name: "Intercultural Competency", level: "expert" },
                    { name: "Travel Planning", level: "intermediate" },
                    { name: "Networking", level: "advanced" }
                ],
                keywords: ["Study Abroad", "International Education", "Exchange Program", "Cross-Cultural", "Global Experience", "Foreign Language", "International Student", "Cultural Immersion", "Study Overseas", "Semester Abroad", "International Programs"],
                jobTitles: ["Study Abroad Student", "Exchange Student", "International Student", "Cultural Ambassador", "Language Tutor", "Study Abroad Advisor", "International Programs Coordinator"],
                certifications: ["Language Proficiency Certification", "Intercultural Competency Certificate", "Study Abroad Program Certificate", "TOEFL/IELTS Score"]
            },
            volunteer_experience: {
                name: "Volunteer & Community Service",
                skills: [
                    { name: "Community Outreach", level: "advanced" },
                    { name: "Teamwork", level: "expert" },
                    { name: "Communication", level: "advanced" },
                    { name: "Event Coordination", level: "intermediate" },
                    { name: "Fundraising", level: "intermediate" },
                    { name: "Leadership", level: "advanced" },
                    { name: "Empathy", level: "expert" },
                    { name: "Problem Solving", level: "advanced" },
                    { name: "Organization", level: "intermediate" },
                    { name: "Time Management", level: "advanced" }
                ],
                keywords: ["Volunteer", "Community Service", "Nonprofit", "Volunteering", "Charity Work", "Social Impact", "Community Engagement", "Service Learning", "Philanthropy", "Civic Engagement", "Volunteer Coordination"],
                jobTitles: ["Volunteer", "Volunteer Coordinator", "Community Service Coordinator", "Nonprofit Assistant", "Fundraising Volunteer", "Event Volunteer", "Service Learning Student", "Youth Mentor"],
                certifications: ["Volunteer Management Certificate", "Community Service Recognition", "First Aid/CPR Certification", "Nonprofit Management Certificate"]
            },
            capstone_projects: {
                name: "Capstone & Academic Projects",
                skills: [
                    { name: "Project Management", level: "advanced" },
                    { name: "Team Collaboration", level: "expert" },
                    { name: "Research", level: "advanced" },
                    { name: "Technical Skills", level: "intermediate" },
                    { name: "Presentation", level: "advanced" },
                    { name: "Documentation", level: "advanced" },
                    { name: "Problem Solving", level: "expert" },
                    { name: "Critical Thinking", level: "expert" },
                    { name: "Innovation", level: "advanced" },
                    { name: "Time Management", level: "expert" }
                ],
                keywords: ["Capstone Project", "Senior Project", "Academic Project", "Final Year Project", "Thesis", "Project Portfolio", "Group Project", "Research Project", "Design Project", "Engineering Design", "Software Project"],
                jobTitles: ["Capstone Team Lead", "Project Coordinator", "Research Student", "Design Team Member", "Thesis Student", "Project Developer", "Student Researcher", "Academic Project Lead"],
                certifications: ["Project Management Certificate", "Technical Skills Certification", "Research Ethics Training", "Industry-Specific Certifications"]
            }
        }
    },
    global_industries: {
        name: "Global Industries",
        icon: "\uD83C\uDF0D",
        subcategories: {
            agriculture: {
                name: "Agriculture & Farming",
                skills: [
                    { name: "Crop Management", level: "expert" },
                    { name: "Soil Science", level: "advanced" },
                    { name: "Irrigation Systems", level: "advanced" },
                    { name: "Farm Equipment Operation", level: "intermediate" },
                    { name: "Pest Management", level: "advanced" },
                    { name: "Agricultural Technology", level: "intermediate" },
                    { name: "Sustainable Farming", level: "advanced" },
                    { name: "Harvest Planning", level: "expert" },
                    { name: "Livestock Management", level: "intermediate" },
                    { name: "Farm Business Management", level: "advanced" }
                ],
                keywords: ["Agriculture", "Farming", "Crop Management", "Soil Science", "Irrigation", "Pest Control", "Sustainable Agriculture", "Organic Farming", "Precision Agriculture", "Farm Management", "Harvest", "Livestock", "AgTech", "Horticulture"],
                jobTitles: ["Farm Manager", "Agricultural Specialist", "Crop Consultant", "Agronomist", "Farm Hand", "Livestock Manager", "Agricultural Technician", "Soil Scientist"],
                certifications: ["Certified Crop Advisor (CCA)", "Pesticide Applicator License", "Organic Certification", "Agricultural Safety Certification"]
            },
            oil_and_gas: {
                name: "Oil & Gas",
                skills: [
                    { name: "Drilling Operations", level: "advanced" },
                    { name: "Petroleum Engineering", level: "expert" },
                    { name: "Pipeline Operations", level: "advanced" },
                    { name: "HSE Compliance", level: "expert" },
                    { name: "Reservoir Engineering", level: "advanced" },
                    { name: "Process Engineering", level: "advanced" },
                    { name: "Geological Analysis", level: "intermediate" },
                    { name: "Equipment Maintenance", level: "advanced" },
                    { name: "Risk Assessment", level: "expert" },
                    { name: "Production Optimization", level: "advanced" }
                ],
                keywords: ["Oil & Gas", "Petroleum", "Drilling", "Pipeline", "Reservoir Engineering", "Upstream", "Downstream", "Midstream", "HSE", "Production Engineering", "Refinery", "Natural Gas", "Offshore", "Onshore"],
                jobTitles: ["Petroleum Engineer", "Drilling Engineer", "Production Engineer", "Reservoir Engineer", "HSE Officer", "Pipeline Engineer", "Geologist", "Roughneck"],
                certifications: ["Professional Engineer (PE) - Petroleum", "NEBOSH Certification", "H2S Awareness", "Offshore Survival Training (BOSIET)"]
            },
            mining: {
                name: "Mining & Minerals",
                skills: [
                    { name: "Mine Planning", level: "expert" },
                    { name: "Geological Surveying", level: "advanced" },
                    { name: "Blasting Operations", level: "advanced" },
                    { name: "Heavy Equipment Operation", level: "intermediate" },
                    { name: "Safety Management", level: "expert" },
                    { name: "Mineral Processing", level: "advanced" },
                    { name: "Environmental Compliance", level: "advanced" },
                    { name: "Ventilation Systems", level: "intermediate" },
                    { name: "Geotechnical Analysis", level: "advanced" },
                    { name: "Mine Reclamation", level: "intermediate" }
                ],
                keywords: ["Mining", "Mineral Processing", "Mine Planning", "Geology", "Blasting", "Mine Safety", "Underground Mining", "Surface Mining", "Mineral Exploration", "Rock Mechanics", "Mine Ventilation", "Tailings Management", "Mine Reclamation"],
                jobTitles: ["Mining Engineer", "Geologist", "Mine Supervisor", "Blasting Engineer", "Mine Safety Officer", "Driller", "Mine Planner", "Metallurgist"],
                certifications: ["Professional Engineer (PE) - Mining", "Mine Safety Certification", "Blasting License", "MSHA Training"]
            },
            shipping_and_logistics: {
                name: "Shipping & Logistics",
                skills: [
                    { name: "Supply Chain Management", level: "expert" },
                    { name: "Freight Forwarding", level: "advanced" },
                    { name: "Customs Compliance", level: "advanced" },
                    { name: "Warehouse Management", level: "advanced" },
                    { name: "Transportation Planning", level: "expert" },
                    { name: "Inventory Management", level: "advanced" },
                    { name: "Shipping Documentation", level: "advanced" },
                    { name: "Incoterms", level: "expert" },
                    { name: "Logistics Software", level: "intermediate" },
                    { name: "Vendor Relations", level: "advanced" }
                ],
                keywords: ["Shipping", "Logistics", "Supply Chain", "Freight", "Customs", "Warehousing", "Transportation", "Import/Export", "Freight Forwarding", "Cargo", "Shipping Lines", "Container Management", "Last Mile Delivery", "Fleet Management"],
                jobTitles: ["Logistics Coordinator", "Supply Chain Manager", "Freight Forwarder", "Warehouse Manager", "Shipping Clerk", "Customs Broker", "Transportation Manager", "Fleet Manager"],
                certifications: ["Certified Supply Chain Professional (CSCP)", "Customs Broker License", "Certified in Logistics, Transportation and Distribution (CLTD)", "Dangerous Goods Certification"]
            },
            aviation: {
                name: "Aviation",
                skills: [
                    { name: "Flight Operations", level: "expert" },
                    { name: "Aircraft Maintenance", level: "advanced" },
                    { name: "Air Traffic Control", level: "intermediate" },
                    { name: "Safety Management", level: "expert" },
                    { name: "FAA Regulations", level: "expert" },
                    { name: "Navigation", level: "expert" },
                    { name: "Crew Resource Management", level: "advanced" },
                    { name: "Aviation Weather", level: "advanced" },
                    { name: "Flight Planning", level: "expert" },
                    { name: "Emergency Procedures", level: "expert" }
                ],
                keywords: ["Aviation", "Flight Operations", "Pilot", "Aircraft Maintenance", "Air Traffic Control", "FAA", "Aviation Safety", "Flight Planning", "Airport Operations", "Aviation Management", "Crew Resource", "Navigation", "Instrument Rating"],
                jobTitles: ["Commercial Pilot", "First Officer", "Air Traffic Controller", "Aircraft Mechanic", "Flight Dispatcher", "Aviation Safety Inspector", "Airport Manager", "Flight Instructor"],
                certifications: ["Commercial Pilot License (CPL)", "Airline Transport Pilot (ATP)", "Aircraft Maintenance Technician (AMT)", "FAA Certifications"]
            },
            maritime: {
                name: "Maritime & Shipping",
                skills: [
                    { name: "Navigation", level: "expert" },
                    { name: "Ship Operations", level: "expert" },
                    { name: "Maritime Law", level: "advanced" },
                    { name: "Cargo Handling", level: "advanced" },
                    { name: "Safety Management", level: "expert" },
                    { name: "Port Operations", level: "advanced" },
                    { name: "Marine Engineering", level: "intermediate" },
                    { name: "STCW Compliance", level: "expert" },
                    { name: "Communication Systems", level: "intermediate" },
                    { name: "Emergency Response", level: "advanced" }
                ],
                keywords: ["Maritime", "Shipping", "Navigation", "Ship Operations", "Port Operations", "Maritime Law", "Cargo", "Container Shipping", "STCW", "IMO Regulations", "Marine Engineering", "Vessel Management", "Offshore"],
                jobTitles: ["Ship Captain", "Chief Officer", "Marine Engineer", "Port Manager", "Maritime Officer", "Cargo Supervisor", "Navigation Officer", "Ship Broker"],
                certifications: ["STCW Certification", "Master Mariner License", "Marine Engineer License", "Tanker Familiarization Certificate"]
            },
            hospitality: {
                name: "Hospitality & Tourism",
                skills: [
                    { name: "Customer Service", level: "expert" },
                    { name: "Hotel Management", level: "advanced" },
                    { name: "Food & Beverage", level: "advanced" },
                    { name: "Event Planning", level: "advanced" },
                    { name: "Revenue Management", level: "intermediate" },
                    { name: "Reservation Systems", level: "advanced" },
                    { name: "Housekeeping Management", level: "intermediate" },
                    { name: "Tour Operations", level: "intermediate" },
                    { name: "Multilingual Communication", level: "advanced" },
                    { name: "Conflict Resolution", level: "expert" }
                ],
                keywords: ["Hospitality", "Hotel Management", "Tourism", "Customer Service", "Food & Beverage", "Event Planning", "Resort Management", "Travel", "Guest Relations", "Front Desk", "Concierge", "Revenue Management", "Housekeeping"],
                jobTitles: ["Hotel Manager", "Front Desk Agent", "Concierge", "Event Coordinator", "Restaurant Manager", "Travel Agent", "Tour Guide", "Guest Relations Manager"],
                certifications: ["Certified Hotel Administrator (CHA)", "Food Safety Manager Certification", "Certified Meeting Professional (CMP)", "Tourism Management Certificate"]
            },
            real_estate: {
                name: "Real Estate & Property",
                skills: [
                    { name: "Property Management", level: "expert" },
                    { name: "Real Estate Transactions", level: "expert" },
                    { name: "Market Analysis", level: "advanced" },
                    { name: "Negotiation", level: "expert" },
                    { name: "Client Relations", level: "expert" },
                    { name: "Property Valuation", level: "advanced" },
                    { name: "Lease Administration", level: "advanced" },
                    { name: "Real Estate Law", level: "intermediate" },
                    { name: "Investment Analysis", level: "advanced" },
                    { name: "Marketing", level: "advanced" }
                ],
                keywords: ["Real Estate", "Property Management", "Real Estate Agent", "Realtor", "Property Valuation", "Leasing", "Real Estate Investment", "Commercial Real Estate", "Residential Real Estate", "Property Development", "Appraisal", "MLS", "Closing"],
                jobTitles: ["Real Estate Agent", "Realtor", "Property Manager", "Real Estate Broker", "Leasing Agent", "Real Estate Appraiser", "Property Developer", "Real Estate Investor"],
                certifications: ["Real Estate License", "Certified Property Manager (CPM)", "Accredited Buyer's Representative (ABR)", "Real Estate Appraiser License"]
            }
        }
    },
    future_and_emerging_fields: {
        name: "Future & Emerging Fields",
        icon: "\uD83D\uDD2E",
        subcategories: {
            artificial_intelligence: {
                name: "Artificial Intelligence & Machine Learning",
                skills: [
                    { name: "Machine Learning Algorithms", level: "expert" },
                    { name: "Deep Learning (PyTorch/TensorFlow)", level: "expert" },
                    { name: "Natural Language Processing", level: "advanced" },
                    { name: "Computer Vision", level: "advanced" },
                    { name: "Python", level: "expert" },
                    { name: "Model Training & Evaluation", level: "expert" },
                    { name: "Feature Engineering", level: "advanced" },
                    { name: "MLOps", level: "advanced" },
                    { name: "Reinforcement Learning", level: "intermediate" },
                    { name: "AI Ethics", level: "advanced" }
                ],
                keywords: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Neural Networks", "NLP", "Computer Vision", "AI/ML", "TensorFlow", "PyTorch", "MLOps", "Model Training", "AI Ethics", "Generative AI", "LLM"],
                jobTitles: ["AI Engineer", "Machine Learning Engineer", "Data Scientist", "NLP Engineer", "Computer Vision Engineer", "AI Research Scientist", "MLOps Engineer", "AI Product Manager"],
                certifications: ["Google Professional Machine Learning Engineer", "AWS Certified Machine Learning Specialty", "DeepLearning.AI TensorFlow Developer", "Microsoft Azure AI Engineer"]
            },
            renewable_energy: {
                name: "Renewable Energy & Sustainability",
                skills: [
                    { name: "Solar Energy Systems", level: "advanced" },
                    { name: "Wind Energy", level: "advanced" },
                    { name: "Energy Storage", level: "intermediate" },
                    { name: "Sustainability Assessment", level: "advanced" },
                    { name: "Carbon Accounting", level: "advanced" },
                    { name: "Energy Auditing", level: "expert" },
                    { name: "Green Building Design", level: "advanced" },
                    { name: "Environmental Compliance", level: "advanced" },
                    { name: "Energy Policy", level: "intermediate" },
                    { name: "Project Development", level: "advanced" }
                ],
                keywords: ["Renewable Energy", "Solar Energy", "Wind Energy", "Sustainability", "Green Energy", "Energy Efficiency", "Carbon Neutral", "LEED", "Energy Storage", "Clean Technology", "Net Zero", "ESG", "Climate Action", "Energy Transition"],
                jobTitles: ["Renewable Energy Engineer", "Solar Engineer", "Wind Energy Technician", "Sustainability Manager", "Energy Auditor", "Environmental Consultant", "Green Building Specialist", "Carbon Analyst"],
                certifications: ["LEED Accredited Professional", "Certified Energy Manager (CEM)", "NABCEP Solar Certification", "GARP Sustainability and Climate Risk Certificate"]
            },
            space_technology: {
                name: "Space Technology",
                skills: [
                    { name: "Orbital Mechanics", level: "advanced" },
                    { name: "Satellite Systems", level: "advanced" },
                    { name: "Spacecraft Design", level: "expert" },
                    { name: "Propulsion Engineering", level: "advanced" },
                    { name: "Remote Sensing", level: "intermediate" },
                    { name: "Mission Planning", level: "advanced" },
                    { name: "Telemetry & Tracking", level: "intermediate" },
                    { name: "Space Law", level: "intermediate" },
                    { name: "Payload Integration", level: "advanced" },
                    { name: "Ground Station Operations", level: "intermediate" }
                ],
                keywords: ["Space Technology", "Satellite", "Spacecraft", "Orbital Mechanics", "Space Exploration", "Rocket Propulsion", "Remote Sensing", "Space Systems", "Mission Design", "Payload", "Ground Station", "Space Operations", "Astrodynamics"],
                jobTitles: ["Spacecraft Engineer", "Satellite Engineer", "Mission Analyst", "Propulsion Engineer", "Orbital Analyst", "Payload Specialist", "Ground Station Operator", "Space Systems Engineer"],
                certifications: ["Systems Engineering Certification (INCOSE)", "Space Systems Certification", "Project Management Professional (PMP)", "Remote Sensing Certification"]
            },
            robotics: {
                name: "Robotics & Automation",
                skills: [
                    { name: "Robot Programming", level: "expert" },
                    { name: "ROS (Robot Operating System)", level: "expert" },
                    { name: "Computer Vision", level: "advanced" },
                    { name: "Motion Planning", level: "advanced" },
                    { name: "Sensor Integration", level: "advanced" },
                    { name: "Control Systems", level: "expert" },
                    { name: "Machine Learning", level: "intermediate" },
                    { name: "PLC Programming", level: "advanced" },
                    { name: "CAD for Robotics", level: "advanced" },
                    { name: "Human-Robot Interaction", level: "intermediate" }
                ],
                keywords: ["Robotics", "Automation", "Robot Programming", "ROS", "Computer Vision", "Motion Planning", "Sensors", "Control Systems", "Industrial Robotics", "Autonomous Systems", "Cobots", "Machine Vision", "Robot Integration"],
                jobTitles: ["Robotics Engineer", "Automation Engineer", "Robot Programmer", "Controls Engineer", "Robotics Software Engineer", "Integration Engineer", "Robotics Technician", "AI Robotics Engineer"],
                certifications: ["Certified Robotics Technician", "FANUC Robot Certification", "ABB Robot Programming Certification", "ROS Developer Certification"]
            },
            quantum_computing: {
                name: "Quantum Computing",
                skills: [
                    { name: "Quantum Algorithms", level: "expert" },
                    { name: "Qiskit", level: "advanced" },
                    { name: "Linear Algebra", level: "expert" },
                    { name: "Quantum Mechanics", level: "advanced" },
                    { name: "Python Programming", level: "advanced" },
                    { name: "Cirq", level: "intermediate" },
                    { name: "Quantum Error Correction", level: "intermediate" },
                    { name: "Quantum Cryptography", level: "intermediate" },
                    { name: "Research Methodology", level: "advanced" },
                    { name: "Statistical Analysis", level: "intermediate" }
                ],
                keywords: ["Quantum Computing", "Quantum Algorithms", "Qiskit", "Quantum Mechanics", "Qubits", "Quantum Gates", "Quantum Supremacy", "Quantum Cryptography", "Quantum Error Correction", "Superposition", "Entanglement", "Quantum Simulation"],
                jobTitles: ["Quantum Computing Researcher", "Quantum Algorithm Developer", "Quantum Software Engineer", "Quantum Physicist", "Quantum Systems Engineer", "Quantum Applications Scientist", "Quantum Hardware Engineer"],
                certifications: ["IBM Quantum Developer Certification", "Qiskit Global Summer School Certificate", "Quantum Computing Certificate (MIT xPRO)", "Quantum Machine Learning Certification"]
            },
            biotechnology: {
                name: "Biotechnology",
                skills: [
                    { name: "Molecular Biology", level: "expert" },
                    { name: "CRISPR/Gene Editing", level: "advanced" },
                    { name: "Cell Culture", level: "advanced" },
                    { name: "PCR & qPCR", level: "expert" },
                    { name: "Protein Purification", level: "advanced" },
                    { name: "Bioinformatics", level: "intermediate" },
                    { name: "Bioprocessing", level: "advanced" },
                    { name: "Laboratory Safety", level: "expert" },
                    { name: "Regulatory Compliance", level: "advanced" },
                    { name: "Data Analysis", level: "intermediate" }
                ],
                keywords: ["Biotechnology", "Molecular Biology", "Gene Editing", "CRISPR", "Cell Culture", "PCR", "Protein Engineering", "Bioprocessing", "Bioinformatics", "Genomics", "Biopharma", "Drug Discovery", "Clinical Trials", "GMP"],
                jobTitles: ["Biotechnologist", "Research Scientist", "Molecular Biologist", "Cell Culture Specialist", "Bioinformatics Analyst", "Bioprocess Engineer", "Lab Technician", "Quality Control Analyst"],
                certifications: ["Good Manufacturing Practices (GMP)", "Laboratory Safety Certification", "Biotechnology Certificate", "Clinical Research Certification"]
            },
            nanotechnology: {
                name: "Nanotechnology",
                skills: [
                    { name: "Nanomaterials", level: "expert" },
                    { name: "Scanning Electron Microscopy", level: "advanced" },
                    { name: "Thin Film Deposition", level: "advanced" },
                    { name: "Nanofabrication", level: "expert" },
                    { name: "Characterization Techniques", level: "advanced" },
                    { name: "Surface Science", level: "intermediate" },
                    { name: "Quantum Dots", level: "intermediate" },
                    { name: "Clean Room Operations", level: "advanced" },
                    { name: "Atomic Force Microscopy", level: "intermediate" },
                    { name: "Materials Science", level: "advanced" }
                ],
                keywords: ["Nanotechnology", "Nanomaterials", "Nanofabrication", "SEM", "TEM", "AFM", "Thin Films", "Quantum Dots", "Carbon Nanotubes", "Graphene", "Clean Room", "Surface Science", "Nanoengineering", "Characterization"],
                jobTitles: ["Nanotechnology Engineer", "Nanomaterials Scientist", "Research Scientist", "Clean Room Technician", "Process Engineer", "Materials Scientist", "Nanofabrication Specialist", "Characterization Analyst"],
                certifications: ["Clean Room Safety Certification", "Nanotechnology Certificate", "SEM/TEM Operation Certification", "Laboratory Safety Training"]
            },
            metaverse_and_vr: {
                name: "Metaverse & Virtual Reality",
                skills: [
                    { name: "Unity 3D", level: "expert" },
                    { name: "Unreal Engine", level: "advanced" },
                    { name: "VR Development", level: "expert" },
                    { name: "3D Modeling", level: "advanced" },
                    { name: "C#", level: "expert" },
                    { name: "AR Development", level: "advanced" },
                    { name: "Spatial Computing", level: "intermediate" },
                    { name: "Blockchain Integration", level: "intermediate" },
                    { name: "User Experience Design", level: "advanced" },
                    { name: "Shader Programming", level: "intermediate" }
                ],
                keywords: ["Metaverse", "Virtual Reality", "VR", "Augmented Reality", "AR", "Unity 3D", "Unreal Engine", "3D Modeling", "Spatial Computing", "Mixed Reality", "XR", "Immersive Technology", "Virtual Worlds", "Digital Twins"],
                jobTitles: ["VR Developer", "AR Developer", "Metaverse Developer", "3D Artist", "XR Engineer", "Virtual World Designer", "Spatial Computing Engineer", "Unity Developer"],
                certifications: ["Unity Certified Developer", "Unreal Engine Certification", "VR/AR Developer Certification", "3D Modeling Certification"]
            }
        }
    }
};
