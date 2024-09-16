var resumeForm = document.getElementById('resumeForm');
var resumeContainer = document.getElementById('resumeContainer');
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
    resumeContainer.innerHTML = "\n        <div class=\"resume-heading\">".concat(name, "</div>\n        <div class=\"contact-info\">\n    <p contenteditable=\"true\">").concat(email, " | ").concat(phone, "</p>\n  </div>\n  <div class=\"links\">\n    ").concat(github ? "<a href=\"".concat(github, "\" target=\"_blank\" class=\"left-link\">GitHub</a>") : '', "\n    ").concat(linkedin ? "<a href=\"".concat(linkedin, "\" target=\"_blank\" class=\"right-link\">LinkedIn</a>") : '', "\n  </div>\n        <div class=\"resume-section\">\n            <h2>Education</h2>\n            <p class=\"resume-label\">").concat(degree, "</p>\n            <p>").concat(university, ", ").concat(semester, "</p>\n        </div>\n\n        <div class=\"resume-section\">\n            <h2>Work Experience</h2>\n            <p class=\"resume-label\">").concat(jobTitle, "</p>\n            <p>").concat(companyName, ", ").concat(jobDuration, "</p>\n            <p>").concat(jobDesc, "</p>\n        </div>\n\n        <div class=\"resume-section\">\n            <h2>Skills</h2>\n            <p>").concat(skills, "</p>\n        </div>\n    ");
});
