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
if (demoBtn) {
    demoBtn.addEventListener('click', fillDemoData);
}
if (demoBtnHeader) {
    demoBtnHeader.addEventListener('click', function(e) {
        e.preventDefault();
        fillDemoData();
    });
}
// Add event listener to clear button
if (clearBtn) {
    clearBtn.addEventListener('click', clearForm);
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
        // Show the resume output section
        resumeOutput.style.display = 'block';
        var resumeHTML = "\n      <div class=\"resume-container\">\n        <h2>".concat(fullName, "</h2>\n        ").concat(profilePicDataUrl ? "<p><img src=\"".concat(profilePicDataUrl, "\" alt=\"Profile Picture\"></p>") : '', "\n        <hr>\n        <p><strong>Username:</strong> ").concat(userName, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Residential Address:</strong><br>").concat(address, "</p>\n        <h3>Skills:</h3> \n        <p>").concat(skills, "</p>\n\n        <h3>Education:</h3>\n        <p><strong>Academic Qualification:</strong><br>").concat(qualification, "</p>\n        <p><strong>Professional Qualification:</strong><br>").concat(professionalQualification, "</p>\n        <h3>Work Experience:</h3>\n        <p>").concat(experience, "</p>\n      </div>\n    ");
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
