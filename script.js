// capture values from form elements .
var form = document.getElementById('resume-form');
var generateBtn = document.getElementById('generate-btn');
var resumeOutput = document.getElementById('resumeOutput');
var shareUrlContainer = document.getElementById('share-url-container');
var uniqueUrlElement = document.getElementById('unique-url');
var downloadBtn = document.getElementById('download-btn');
var shareBtn = document.getElementById('share-btn');
// Function to generate the unique URL
function generateUniqueUrl(userName) {
    return "https://versal.com/resume/".concat(encodeURIComponent(userName));
}
// To generate the resume, here is the function to handle form submission process.  
generateBtn.addEventListener('click', function (event) {
    event.preventDefault();
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
    // Validate the form
    if (!userName || !fullName || !email || !phone || !address || !skills || !qualification || !professionalQualification || !experience) {
        alert("Please fill out all required fields.");
        return;
    }
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
        var resumeHTML = "\n      <div class=\"resume-container\">\n        <h2><u>".concat(fullName, "</u></h2>\n        ").concat(profilePicDataUrl ? "<p><img src=\"".concat(profilePicDataUrl, "\" alt=\"Profile Picture\" style=\"width: 180px; height: 180px; object-fit: cover; border-radius: 50%;\"></p>") : '', "\n        <hr>\n        <p><strong>Username:</strong> ").concat(userName, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Residential Address:</strong><br>").concat(address, "</p>\n        <h3>Skills:</h3> \n        <p>").concat(skills, "</p>\n\n        <h3>Education:</h3>\n        <p><strong>Academic Qualification:</strong><br>").concat(qualification, "</p>\n        <p><strong>Professional Qualification:</strong><br>").concat(professionalQualification, "</p>\n        <h3>Work Experience:</h3>\n        <p>").concat(experience, "</p>\n      </div>\n    ");
        resumeOutput.innerHTML = resumeHTML;
        // Generate the unique URL
        var uniqueUrl = generateUniqueUrl(userName);
        uniqueUrlElement.textContent = uniqueUrl;
        // Show the share URL section
        shareUrlContainer.style.display = 'block';
        // Set up the download button
        downloadBtn.addEventListener('click', function () {
            // Here we could use jsPDF or other libraries to generate a PDF, but for now, we'll use a simple download feature.
            var element = document.createElement('a');
            var resumeContent = resumeOutput.innerHTML;
            var blob = new Blob([resumeContent], { type: 'text/html' });
            element.href = URL.createObjectURL(blob);
            element.download = "".concat(userName, "_resume.html"); //  Save as .html file
            element.click();
        });
        // Set up the share button to open email client
        shareBtn.addEventListener('click', function () {
            var subject = "My Resume: ".concat(fullName);
            var body = "Hello, \n\nHere is my resume for your kind consideration.<br>: ".concat(uniqueUrl, "\n\nBest regards,\n").concat(fullName);
            var mailtoLink = "mailto:?subject=".concat(encodeURIComponent(subject), "&body=").concat(encodeURIComponent(body));
            window.location.href = mailtoLink; // This will open the default email client with the pre-filled message
        });
    }
});
