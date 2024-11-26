// capture values from form elements .
const form = document.getElementById('resume-form') as HTMLFormElement;
const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
const shareUrlContainer = document.getElementById('share-url-container') as HTMLDivElement;
const uniqueUrlElement = document.getElementById('unique-url') as HTMLSpanElement;
const downloadBtn = document.getElementById('download-btn') as HTMLButtonElement;
const shareBtn = document.getElementById('share-btn') as HTMLButtonElement;

// Function to generate the unique URL

function generateUniqueUrl(userName: string): string {
  return `https://versal.com/resume/${encodeURIComponent(userName)}`;
}

// To generate the resume, here is the function to handle form submission process.  
generateBtn.addEventListener('click', (event: Event) => {
  event.preventDefault();

  // Capture or assign, input data from the HTML form
  const profilepicInput = document.getElementById('profilepic') as HTMLInputElement;
  const userName = (document.getElementById('username') as HTMLInputElement).value;
  const fullName = (document.getElementById('fullname') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const address = (document.getElementById('address') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  const qualification = (document.getElementById('Qualification') as HTMLTextAreaElement).value;
  const professionalQualification = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('Experience') as HTMLTextAreaElement).value;

  // Validate the form

  if (!userName || !fullName || !email || !phone || !address || !skills || !qualification || !professionalQualification || !experience) {
    alert("Please fill out all required fields.");
    return;
  }

  // Read the uploaded profile picture. (if any)
  let profilePicDataUrl: string | null = null;
  if (profilepicInput.files && profilepicInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(event) {
      profilePicDataUrl = event.target?.result as string;
      displayResume(profilePicDataUrl);
    };
    reader.readAsDataURL(profilepicInput.files[0]);
  } else {
    displayResume(null);
  }

  // Function to display resume with or without profile picture.
  function displayResume(profilePicDataUrl: string | null) {
    const resumeHTML = `
      <div class="resume-container">
        <h2><u>${fullName}</u></h2>
        ${profilePicDataUrl ? `<p><img src="${profilePicDataUrl}" alt="Profile Picture" style="width: 180px; height: 180px; object-fit: cover; border-radius: 50%;"></p>` : ''}
        <hr>
        <p><strong>Username:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Residential Address:</strong><br>${address}</p>
        <h3>Skills:</h3> 
        <p>${skills}</p>

        <h3>Education:</h3>
        <p><strong>Academic Qualification:</strong><br>${qualification}</p>
        <p><strong>Professional Qualification:</strong><br>${professionalQualification}</p>
        <h3>Work Experience:</h3>
        <p>${experience}</p>
      </div>
    `;
    resumeOutput.innerHTML = resumeHTML;

    // Generate the unique URL
    const uniqueUrl = generateUniqueUrl(userName);
    uniqueUrlElement.textContent = uniqueUrl;

    // Show the share URL section
    shareUrlContainer.style.display = 'block';

    // Set up the download button
    downloadBtn.addEventListener('click', () => {
    
      // Here we could use jsPDF or other libraries to generate a PDF, but for now, we'll use a simple download feature.

      const element = document.createElement('a');
      const resumeContent = resumeOutput.innerHTML;
      const blob = new Blob([resumeContent], { type: 'text/html' });
      element.href = URL.createObjectURL(blob);
      element.download = `${userName}_resume.html`; //  Save as .html file
      element.click();
    });

    // Set up the share button to open email client

    shareBtn.addEventListener('click', () => {
      const subject = `My Resume: ${fullName}`;
      const body = `Hello, \n\nHere is my resume for your kind consideration.<br>: ${uniqueUrl}\n\nBest regards,\n${fullName}`;
      const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink; // This will open the default email client with the pre-filled message
    });
  }
});
