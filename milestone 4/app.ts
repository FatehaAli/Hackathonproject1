const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContainer = document.getElementById('resumeContainer') as HTMLElement;

function createEditableSection(content: string, className: string): string {
    return `
        <div class="${className}" contenteditable="true">${content}</div>
    `;
}
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
            ${createEditableSection(degree, 'resume-label')}
            <p contenteditable="true">${university}, ${semester}</p>
        </div>

        <div class="resume-section">
            <h2>Work Experience</h2>
            ${createEditableSection(jobTitle, 'resume-label')}
            <p contenteditable="true">${companyName}, ${jobDuration}</p>
            <p contenteditable="true">${jobDesc}</p>
        </div>

        <div class="resume-section">
            <h2>Skills</h2>
            ${createEditableSection(skills, 'resume-label')}
        </div>
    `;
});
resumeContainer.addEventListener('input', (e) => {
    const target = e.target as HTMLElement;
    if (target.contentEditable === "true") {
        console.log(`Updated content: ${target.innerHTML}`);
    }
});
