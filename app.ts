declare var jsPDF: any;

// Get DOM elements
const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const shareLinkButton = document.getElementById('share-link') as HTMLButtonElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
const resumeContainer = document.getElementById('resumeContainer') as HTMLElement;

toggleSkillsButton.addEventListener('click', () => {
  const skillsContainer = document.getElementById('skills-container') as HTMLElement;
  if (skillsContainer) {
    const isHidden = skillsContainer.style.display === 'none' || skillsContainer.style.display === '';
    skillsContainer.style.display = isHidden ? 'block' : 'none';
    toggleSkillsButton.textContent = isHidden ? 'Hide Skills' : 'Show Skills';
  }
});

resumeForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const github = (document.getElementById('github') as HTMLInputElement).value;
  const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;

  const degree = (document.getElementById('degree') as HTMLInputElement).value;
  const university = (document.getElementById('university') as HTMLInputElement).value;
  const semester = (document.getElementById('semester') as HTMLInputElement).value;

  const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
  const companyName = (document.getElementById('companyName') as HTMLInputElement).value;
  const jobDuration = (document.getElementById('jobDuration') as HTMLInputElement).value;
  const jobDesc = (document.getElementById('jobDesc') as HTMLTextAreaElement).value;

  const skills = (document.getElementById('skills') as HTMLInputElement).value;

  if (!name || !email || !degree || !university || !skills) {
    alert('Please fill out all the required fields.');
    return;
  }

  resumeContainer.innerHTML = `
    <div class="resume-heading" contenteditable="true">${name}</div>
    <div class="contact-info">
    <p contenteditable="true">${email} | ${phone}</p>
  </div>
  
  <div class="links">
    ${github ? `<a href="${github}" target="_blank" class="left-link">GitHub</a>` : ''}
    ${linkedin ? `<a href="${linkedin}" target="_blank" class="right-link">LinkedIn</a>` : ''}
  </div>

    <div class="resume-section">
      <h2>Education</h2>
      <div contenteditable="true">${degree}</div>
      <p contenteditable="true">${university}, ${semester}</p>
    </div>

    <div class="resume-section">
      <h2>Work Experience</h2>
      <div contenteditable="true">${jobTitle}</div>
      <p contenteditable="true">${companyName}, ${jobDuration}</p>
      <p contenteditable="true">${jobDesc}</p>
    </div>

    <div id="skills-container" class="resume-section">
      <h2>Skills</h2>
      <div id="skills-content" contenteditable="true">${skills}</div>
    </div>
  `;

  const uniqueUrl = `${window.location.origin}/${name.toLowerCase().replace(/\s+/g, '-')}/resume`;
  alert(`Your resume link: ${uniqueUrl}`);

  shareLinkButton.onclick = () => {
    navigator.clipboard.writeText(uniqueUrl).then(() => {
      alert('Resume link copied to clipboard!');
    });
  };

  downloadPdfButton.onclick = downloadResumeAsPDF;
});
function downloadResumeAsPDF() {
  const resumeElement = document.getElementById('resumeContainer');
  if (resumeElement) {
    const pdf = new jsPDF();
    pdf.html(resumeElement, {
      callback: function (pdf) {
        pdf.save('resume.pdf');
      },
      x: 10,
      y: 10,
    });
  }
}
