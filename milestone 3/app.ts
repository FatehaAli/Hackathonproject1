const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContainer = document.getElementById('resumeContainer') as HTMLElement;
resumeForm.addEventListener('submit', function (e) {
    e.preventDefault(); 
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
    resumeContainer.innerHTML = `
        <div class="resume-heading">${name}</div>
        <div class="contact-info">
    <p contenteditable="true">${email} | ${phone}</p>
  </div>
  <div class="links">
    ${github ? `<a href="${github}" target="_blank" class="left-link">GitHub</a>` : ''}
    ${linkedin ? `<a href="${linkedin}" target="_blank" class="right-link">LinkedIn</a>` : ''}
  </div>
        <div class="resume-section">
            <h2>Education</h2>
            <p class="resume-label">${degree}</p>
            <p>${university}, ${semester}</p>
        </div>

        <div class="resume-section">
            <h2>Work Experience</h2>
            <p class="resume-label">${jobTitle}</p>
            <p>${companyName}, ${jobDuration}</p>
            <p>${jobDesc}</p>
        </div>

        <div class="resume-section">
            <h2>Skills</h2>
            <p>${skills}</p>
        </div>
    `;
});
