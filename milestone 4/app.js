var resumeForm = document.getElementById('resumeForm');
var resumeContainer = document.getElementById('resumeContainer');
function createEditableSection(content, className) {
    return "\n        <div class=\"".concat(className, "\" contenteditable=\"true\">").concat(content, "</div>\n    ");
}
resumeForm.addEventListener('submit', function (e) {
    e.preventDefault();
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
    resumeContainer.innerHTML = "\n        <div class=\"resume-heading\" contenteditable=\"true\">".concat(name, "</div>\n         <div class=\"contact-info\">\n    <p contenteditable=\"true\">").concat(email, " | ").concat(phone, "</p>\n  </div>\n  \n  <div class=\"links\">\n    ").concat(github ? "<a href=\"".concat(github, "\" target=\"_blank\" class=\"left-link\">GitHub</a>") : '', "\n    ").concat(linkedin ? "<a href=\"".concat(linkedin, "\" target=\"_blank\" class=\"right-link\">LinkedIn</a>") : '', "\n  </div>\n\n        <div class=\"resume-section\">\n            <h2>Education</h2>\n            ").concat(createEditableSection(degree, 'resume-label'), "\n            <p contenteditable=\"true\">").concat(university, ", ").concat(semester, "</p>\n        </div>\n\n        <div class=\"resume-section\">\n            <h2>Work Experience</h2>\n            ").concat(createEditableSection(jobTitle, 'resume-label'), "\n            <p contenteditable=\"true\">").concat(companyName, ", ").concat(jobDuration, "</p>\n            <p contenteditable=\"true\">").concat(jobDesc, "</p>\n        </div>\n\n        <div class=\"resume-section\">\n            <h2>Skills</h2>\n            ").concat(createEditableSection(skills, 'resume-label'), "\n        </div>\n    ");
});
resumeContainer.addEventListener('input', function (e) {
    var target = e.target;
    if (target.contentEditable === "true") {
        console.log("Updated content: ".concat(target.innerHTML));
    }
});
