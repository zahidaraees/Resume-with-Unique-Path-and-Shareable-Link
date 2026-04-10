// capture values from form elements .
var form = document.getElementById('resume-form');
var generateBtn = document.getElementById('generate-btn');
var clearBtn = document.getElementById('clear-btn');
var resumeOutput = document.getElementById('resumeOutput');
var shareUrlContainer = document.getElementById('share-url-container');
var uniqueUrlElement = document.getElementById('unique-url');
var downloadBtn = document.getElementById('download-btn');
var printBtn = document.getElementById('print-btn');
var shareBtn = document.getElementById('share-btn');

// Set dynamic copyright year
document.addEventListener('DOMContentLoaded', function() {
    var copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = "© " + new Date().getFullYear();
    }

    // Dark mode toggle
    var darkModeToggle = document.getElementById('dark-mode-toggle');
    var body = document.body;

    // Check for saved dark mode preference or respect system preference
    if (localStorage.getItem('darkMode') === 'true' ||
        (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        body.classList.add('dark-mode');
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
        });
    }
});

// Demo button handlers
var demoBtn = document.getElementById('demo-btn');
var demoBtnHeader = document.getElementById('demo-btn-header');

// Demo data
var demoData = {
    username: 'john.anderson',
    fullname: 'John Anderson',
    email: 'john.anderson@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Innovation Drive\nSan Francisco, CA 94102',
    skills: 'JavaScript, TypeScript, React, Node.js, Python, Project Management, Agile Methodologies, Team Leadership, Communication',
    qualification: 'B.S. Computer Science\nStanford University (2016-2020)\nGPA: 3.8/4.0',
    education: 'AWS Certified Solutions Architect - Associate (2021)\nGoogle Analytics Certified (2022)\nMeta Front-End Developer Certificate (2023)',
    experience: 'Senior Software Engineer at TechCorp Inc. (2022-Present)\n• Led development of scalable web applications serving 100K+ users\n• Managed a team of 5 developers and implemented agile practices\n• Reduced application load time by 40% through optimization\n\nSoftware Developer at StartupXYZ (2020-2022)\n• Built responsive React components for customer-facing dashboard\n• Integrated RESTful APIs and implemented real-time features\n• Collaborated with design team to improve UX'
};

// Toast notification function
function showToast(message, type) {
    if (type === void 0) { type = 'success'; }
    // Remove existing toast
    var existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    var toast = document.createElement('div');
    toast.className = "toast ".concat(type === 'error' ? 'error' : '');
    toast.innerHTML = "<span class=\"toast-message\">".concat(message, "</span>");
    document.body.appendChild(toast);
    // Auto remove after 3 seconds
    setTimeout(function() {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(function() { return toast.remove(); }, 300);
    }, 3000);
}

// Validation function
function validateForm() {
    var isValid = true;
    var fields = [
        { id: 'username', name: 'Username' },
        { id: 'fullname', name: 'Full Name' },
        { id: 'email', name: 'Email' },
        { id: 'phone', name: 'Phone' },
        { id: 'address', name: 'Address' },
        { id: 'skills', name: 'Skills' },
        { id: 'Qualification', name: 'Academic Qualification' },
        { id: 'education', name: 'Professional Qualification' },
        { id: 'Experience', name: 'Work Experience' }
    ];
    // Clear all errors first
    fields.forEach(function(field) {
        var input = document.getElementById(field.id);
        var error = document.getElementById("".concat(field.id, "-error"));
        input.classList.remove('error');
        if (error)
            error.textContent = '';
    });
    // Validate each field
    fields.forEach(function(field) {
        var input = document.getElementById(field.id);
        var error = document.getElementById("".concat(field.id, "-error"));
        var value = input.value.trim();
        if (!value) {
            error.textContent = "".concat(field.name, " is required");
            input.classList.add('error');
            isValid = false;
        }
    });
    // Email validation
    var email = document.getElementById('email').value.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        document.getElementById('email').classList.add('error');
        isValid = false;
    }
    return isValid;
}

// Clear form function
function clearForm() {
    form.reset();
    // Clear all error messages
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(error) { return error.textContent = ''; });
    // Remove error classes
    var inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(function(input) { return input.classList.remove('error'); });
    // Hide resume output and share container
    resumeOutput.style.display = 'none';
    shareUrlContainer.style.display = 'none';
    showToast('Form cleared successfully!', 'success');
    // Scroll to top of form
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Function to fill demo data
function fillDemoData() {
    document.getElementById('username').value = demoData.username;
    document.getElementById('fullname').value = demoData.fullname;
    document.getElementById('email').value = demoData.email;
    document.getElementById('phone').value = demoData.phone;
    document.getElementById('address').value = demoData.address;
    document.getElementById('skills').value = demoData.skills;
    document.getElementById('Qualification').value = demoData.qualification;
    document.getElementById('education').value = demoData.education;
    document.getElementById('Experience').value = demoData.experience;
    // Clear all errors
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(error) { return error.textContent = ''; });
    var inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(function(input) { return input.classList.remove('error'); });
    // Scroll to builder section
    document.getElementById('builder').scrollIntoView({ behavior: 'smooth' });
    showToast('Demo data loaded! Generating resume...', 'success');
    // Auto-generate resume after filling demo data
    setTimeout(function() {
        generateBtn.click();
    }, 500);
}

// Add event listeners to demo buttons
document.addEventListener('DOMContentLoaded', function() {
    demoBtn = document.getElementById('demo-btn');
    demoBtnHeader = document.getElementById('demo-btn-header');
    
    if (demoBtn) {
        demoBtn.addEventListener('click', fillDemoData);
    }
    if (demoBtnHeader) {
        demoBtnHeader.addEventListener('click', function(e) {
            e.preventDefault();
            fillDemoData();
        });
    }
});
// Add event listener to clear button
document.addEventListener('DOMContentLoaded', function() {
    clearBtn = document.getElementById('clear-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearForm);
    }

    // Photo upload validation
    profilePicInput = document.getElementById('profilepic');
    if (profilePicInput) {
        profilePicInput.addEventListener('change', function() {
            var file = this.files[0];
            if (file) {
                // Check file size (2MB max)
                if (file.size > 2 * 1024 * 1024) {
                    showToast('Photo must be less than 2MB', 'error');
                    this.value = '';
                    return;
                }
                // Check file type
                if (!file.type.match('image.*')) {
                    showToast('Please upload an image file (JPG, PNG, GIF)', 'error');
                    this.value = '';
                    return;
                }
                showToast('Photo uploaded successfully!', 'success');
            }
        });
    }
});

// ========================================
// PDF DOWNLOAD FUNCTION (using html2pdf.js)
// ========================================
function downloadPDF() {
    var resumeContainer = document.querySelector('#resumeOutput .resume-container');
    if (!resumeContainer) {
        showToast('Please generate your resume first!', 'error');
        return;
    }

    showToast('Generating PDF...', 'success');

    var userName = document.getElementById('username').value || 'user';
    var fullName = document.getElementById('fullname').value || 'resume';

    // Clone the resume container to avoid modifying the visible preview
    var clone = resumeContainer.cloneNode(true);
    
    // Create a temporary container for PDF generation
    var pdfContainer = document.createElement('div');
    pdfContainer.style.position = 'absolute';
    pdfContainer.style.left = '-9999px';
    pdfContainer.style.width = '210mm'; // A4 width
    pdfContainer.style.padding = '20mm';
    pdfContainer.style.background = 'white';
    pdfContainer.style.fontFamily = 'Inter, Arial, sans-serif';
    pdfContainer.appendChild(clone);
    document.body.appendChild(pdfContainer);

    // Configure html2pdf options
    var options = {
        margin: [15, 15, 15, 15], // Top, Left, Bottom, Right margins in mm
        filename: userName + '_resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            letterRendering: true,
            scrollY: 0
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait' 
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // Generate PDF
    html2pdf().set(options).from(pdfContainer).save().then(function() {
        // Clean up temporary container
        document.body.removeChild(pdfContainer);
        showToast('PDF downloaded successfully!', 'success');
    }).catch(function(error) {
        console.error('PDF generation error:', error);
        document.body.removeChild(pdfContainer);
        showToast('Failed to generate PDF. Try again.', 'error');
    });
}

// ========================================
// DOCX DOWNLOAD FUNCTION
// ========================================
function downloadDoc() {
    var resumeContainer = document.querySelector('#resumeOutput .resume-container');
    if (!resumeContainer) {
        showToast('Please generate your resume first!', 'error');
        return;
    }

    showToast('Generating Word document...', 'success');

    var fullName = document.getElementById('fullname').value || 'Your Name';
    var userName = document.getElementById('username').value || 'user';
    var email = document.getElementById('email').value || '';
    var phone = document.getElementById('phone').value || '';
    var address = document.getElementById('address').value || '';
    var skills = document.getElementById('skills').value || '';
    var qualification = document.getElementById('Qualification').value || '';
    var professionalQualification = document.getElementById('education').value || '';
    var experience = document.getElementById('Experience').value || '';
    var projects = document.getElementById('Projects').value || '';
    var certifications = document.getElementById('Certifications').value || '';
    var languages = document.getElementById('Languages').value || '';

    // Helper function to split text into paragraphs
    function splitParagraphs(text) {
        return text.split('\n').filter(function(line) { return line.trim(); });
    }

    // Build document children
    var children = [];

    // Title (Name)
    children.push(
        new docx.Paragraph({
            text: fullName,
            heading: docx.HeadingLevel.TITLE,
            spacing: { after: 200 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    // Divider
    children.push(
        new docx.Paragraph({
            children: [
                new docx.Run({
                    text: '─'.repeat(50),
                    size: 20
                })
            ],
            alignment: docx.AlignmentType.CENTER,
            spacing: { after: 200 }
        })
    );

    // Contact Information
    if (email || phone || address) {
        var contactLines = [];
        if (email) contactLines.push('Email: ' + email);
        if (phone) contactLines.push('Phone: ' + phone);
        if (address) contactLines.push('Address: ' + address);

        contactLines.forEach(function(line) {
            children.push(
                new docx.Paragraph({
                    children: [
                        new docx.Run({
                            text: line,
                            size: 22
                        })
                    ],
                    spacing: { after: 100 }
                })
            );
        });

        children.push(
            new docx.Paragraph({
                children: [
                    new docx.Run({
                        text: '─'.repeat(50),
                        size: 20
                    })
                ],
                alignment: docx.AlignmentType.CENTER,
                spacing: { before: 100, after: 200 }
            })
        );
    }

    // Helper function to add section
    function addSection(title, content) {
        if (!content) return;

        // Section heading
        children.push(
            new docx.Paragraph({
                text: title,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 300, after: 150 },
                alignment: docx.AlignmentType.LEFT
            })
        );

        // Content paragraphs
        splitParagraphs(content).forEach(function(line) {
            children.push(
                new docx.Paragraph({
                    children: [
                        new docx.Run({
                            text: line,
                            size: 22
                        })
                    ],
                    spacing: { after: 120 },
                    bullet: { level: 0 }
                })
            );
        });
    }

    // Add all sections
    addSection('Skills', skills);
    addSection('Education', qualification);
    addSection('Professional Qualification', professionalQualification);
    addSection('Work Experience', experience);
    addSection('Projects', projects);
    addSection('Certifications & Awards', certifications);
    addSection('Languages', languages);

    // Create document
    var doc = new docx.Document({
        sections: [{
            properties: {},
            children: children
        }]
    });

    // Generate and download
    docx.Packer.toBlob(doc).then(function(blob) {
        saveAs(blob, userName + '_resume.docx');
        showToast('Word document downloaded successfully!', 'success');
    }).catch(function(error) {
        console.error('DOCX generation error:', error);
        showToast('Failed to generate Word document. Try again.', 'error');
    });
}
// Function to generate the unique URL
function generateUniqueUrl(userName) {
    return "https://versal.com/resume/".concat(encodeURIComponent(userName));
}
// To generate the resume, here is the function to handle form submission process.
generateBtn.addEventListener('click', function (event) {
    event.preventDefault();
    // Validate form with inline errors
    if (!validateForm()) {
        showToast('Please fix the errors and try again.', 'error');
        // Scroll to first error field
        var firstError = document.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstError.focus();
        }
        return;
    }
    // Show loading state
    generateBtn.disabled = true;
    generateBtn.textContent = '⏳ Generating Resume...';
    
    // Show loading skeleton
    var loadingSkeleton = document.getElementById('loading-skeleton');
    if (loadingSkeleton) {
        loadingSkeleton.style.display = 'block';
    }
    resumeOutput.style.display = 'block';
    // Capture or assign, input data from the HTML form
    var profilepicInput = document.getElementById('profilepic');
    var userName = document.getElementById('username').value;
    var fullName = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var qualification = document.getElementById('Qualification').value;
    var professionalQualification = document.getElementById('education').value;
    var experience = document.getElementById('Experience').value;
    var projects = document.getElementById('Projects').value;
    var certifications = document.getElementById('Certifications').value;
    var languages = document.getElementById('Languages').value;
    // Read the uploaded profile picture. (if any)
    var profilePicDataUrl = null;
    if (profilepicInput.files && profilepicInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            profilePicDataUrl = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            displayResume(profilePicDataUrl);
        };
        reader.readAsDataURL(profilepicInput.files[0]);
    }
    else {
        displayResume(null);
    }
    // Function to display resume with or without profile picture.
    function displayResume(profilePicDataUrl) {
        // Hide loading skeleton
        if (loadingSkeleton) {
            loadingSkeleton.style.display = 'none';
        }
        
        // Show the resume output section
        resumeOutput.style.display = 'block';
        
        // Helper function to convert line breaks to bullet list
        function toBulletList(text) {
            if (!text || !text.trim()) return '';
            var lines = text.split('\n').filter(function(line) { return line.trim(); });
            if (lines.length === 0) return '';
            
            var listItems = lines.map(function(line) {
                // Remove leading bullets, dashes, or asterisks
                var cleanLine = line.replace(/^[\s\-\*\•]+/, '').trim();
                return '<li>' + cleanLine + '</li>';
            }).join('');
            
            return '<ul>' + listItems + '</ul>';
        }
        
        // Build optional sections
        var projectsSection = projects ? "<h3>Projects:</h3>\n        " + toBulletList(projects) : '';
        var certificationsSection = certifications ? "<h3>Certifications & Awards:</h3>\n        " + toBulletList(certifications) : '';
        var languagesSection = languages ? "<h3>Languages:</h3>\n        " + toBulletList(languages) : '';
        
        var resumeHTML = "\n      <div class=\"resume-container\">\n        <div class=\"resume-header\">\n          " + (profilePicDataUrl ? "<div class=\"resume-header-image\"><img src=\"" + profilePicDataUrl + "\" alt=\"Profile Picture\"></div>" : "<div class=\"resume-header-image resume-header-image-placeholder\"><svg width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle></svg></div>") + "\n          <div class=\"resume-header-info\">\n            <h2>" + fullName + "</h2>\n            <p class=\"resume-contact\">\n              <span class=\"resume-contact-item\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"></path><polyline points=\"22,6 12,13 2,6\"></polyline></svg> " + email + "</span>\n              <span class=\"resume-contact-separator\">|</span>\n              <span class=\"resume-contact-item\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path></svg> " + phone + "</span>\n              <span class=\"resume-contact-separator\">|</span>\n              <span class=\"resume-contact-item\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"></path><circle cx=\"12\" cy=\"10" r="4"></circle></svg> " + address + "</span>\n            </p>\n          </div>\n        </div>\n        <hr>\n        <h3>Skills:</h3>\n        " + toBulletList(skills) + "\n\n        <h3>Education:</h3>\n        " + toBulletList(qualification) + "\n        <h3>Professional Qualification:</h3>\n        " + toBulletList(professionalQualification) + "\n        <h3>Work Experience:</h3>\n        " + toBulletList(experience) + "\n        " + projectsSection + "\n        " + certificationsSection + "\n        " + languagesSection + "\n      </div>\n    ");
        resumeOutput.innerHTML = '<h3 style="text-align: center; color: #6B7280; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">📄 Your Resume Preview</h3>' + resumeHTML;
        // Generate the unique URL
        var uniqueUrl = generateUniqueUrl(userName);
        uniqueUrlElement.textContent = uniqueUrl;
        // Show the share URL section
        shareUrlContainer.style.display = 'block';
        // Reset button state
        generateBtn.disabled = false;
        generateBtn.textContent = '🚀 Generate Resume';
        // Show success toast
        showToast('✅ Resume generated successfully!', 'success');
        // Scroll to resume output
        setTimeout(function () {
            resumeOutput.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        // Set up the download button
        downloadBtn.replaceWith(downloadBtn.cloneNode(true));
        downloadBtn = document.getElementById('download-btn');
        downloadBtn.addEventListener('click', function () {
            var element = document.createElement('a');
            var resumeContent = resumeOutput.innerHTML;
            var blob = new Blob([resumeContent], { type: 'text/html' });
            element.href = URL.createObjectURL(blob);
            element.download = "".concat(userName, "_resume.html");
            element.click();
        });

        // Set up the PDF download button
        var pdfBtn = document.getElementById('download-pdf-btn');
        if (pdfBtn) {
            pdfBtn.replaceWith(pdfBtn.cloneNode(true));
            pdfBtn = document.getElementById('download-pdf-btn');
            pdfBtn.addEventListener('click', downloadPDF);
        }

        // Set up the DOCX download button
        var docBtn = document.getElementById('download-doc-btn');
        if (docBtn) {
            docBtn.replaceWith(docBtn.cloneNode(true));
            docBtn = document.getElementById('download-doc-btn');
            docBtn.addEventListener('click', downloadDoc);
        }

        // Set up the print button
        if (printBtn) {
            printBtn.replaceWith(printBtn.cloneNode(true));
            printBtn = document.getElementById('print-btn');
            printBtn.addEventListener('click', function () {
                window.print();
            });
        }
        // Set up the share button to open email client
        shareBtn.replaceWith(shareBtn.cloneNode(true));
        shareBtn = document.getElementById('share-btn');
        shareBtn.addEventListener('click', function () {
            var subject = "My Resume: ".concat(fullName);
            var body = "Hello, \n\nHere is my resume for your kind consideration.\n\n".concat(uniqueUrl, "\n\nBest regards,\n").concat(fullName);
            var mailtoLink = "mailto:?subject=".concat(encodeURIComponent(subject), "&body=").concat(encodeURIComponent(body));
            window.location.href = mailtoLink;
        });
    }
});
