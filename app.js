// Get DOM elements
var toggleSkillsButton = document.getElementById('toggle-skills');
var resumeForm = document.getElementById('resumeForm');
var shareLinkButton = document.getElementById('share-link');
var downloadPdfButton = document.getElementById('download-pdf');
var resumeContainer = document.getElementById('resumeContainer');
toggleSkillsButton.addEventListener('click', function () {
    var skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        var isHidden = skillsContainer.style.display === 'none' || skillsContainer.style.display === '';
        skillsContainer.style.display = isHidden ? 'block' : 'none';
        toggleSkillsButton.textContent = isHidden ? 'Hide Skills' : 'Show Skills';
    }
});
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var github = document.getElementById('github').value;
    var linkedin = document.getElementById('linkedin').value;
    var degree = document.getElementById('degree').value;
    var university = document.getElementById('university').value;
    var semester = document.getElementById('semester').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var companyName = document.getElementById('companyName').value;
    var jobDuration = document.getElementById('jobDuration').value;
    var jobDesc = document.getElementById('jobDesc').value;
    var skills = document.getElementById('skills').value;
    if (!name || !email || !degree || !university || !skills) {
        alert('Please fill out all the required fields.');
        return;
    }
    resumeContainer.innerHTML = "\n    <div class=\"resume-heading\" contenteditable=\"true\">".concat(name, "</div>\n    <div class=\"contact-info\">\n    <p contenteditable=\"true\">").concat(email, " | ").concat(phone, "</p>\n  </div>\n  \n  <div class=\"links\">\n    ").concat(github ? "<a href=\"".concat(github, "\" target=\"_blank\" class=\"left-link\">GitHub</a>") : '', "\n    ").concat(linkedin ? "<a href=\"".concat(linkedin, "\" target=\"_blank\" class=\"right-link\">LinkedIn</a>") : '', "\n  </div>\n\n    <div class=\"resume-section\">\n      <h2>Education</h2>\n      <div contenteditable=\"true\">").concat(degree, "</div>\n      <p contenteditable=\"true\">").concat(university, ", ").concat(semester, "</p>\n    </div>\n\n    <div class=\"resume-section\">\n      <h2>Work Experience</h2>\n      <div contenteditable=\"true\">").concat(jobTitle, "</div>\n      <p contenteditable=\"true\">").concat(companyName, ", ").concat(jobDuration, "</p>\n      <p contenteditable=\"true\">").concat(jobDesc, "</p>\n    </div>\n\n    <div id=\"skills-container\" class=\"resume-section\">\n      <h2>Skills</h2>\n      <div id=\"skills-content\" contenteditable=\"true\">").concat(skills, "</div>\n    </div>\n  ");
    var uniqueUrl = "".concat(window.location.origin, "/").concat(name.toLowerCase().replace(/\s+/g, '-'), "/resume");
    alert("Your resume link: ".concat(uniqueUrl));
    shareLinkButton.onclick = function () {
        navigator.clipboard.writeText(uniqueUrl).then(function () {
            alert('Resume link copied to clipboard!');
        });
    };
    downloadPdfButton.onclick = downloadResumeAsPDF;
});
function downloadResumeAsPDF() {
    var resumeElement = document.getElementById('resumeContainer');
    if (resumeElement) {
        var pdf = new jsPDF();
        pdf.html(resumeElement, {
            callback: function (pdf) {
                pdf.save('resume.pdf');
            },
            x: 10,
            y: 10,
        });
    }
}
