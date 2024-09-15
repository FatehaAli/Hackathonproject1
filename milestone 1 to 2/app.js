var toggleButton = document.getElementById('toggleSkillsBtn');
var skillsSection = document.getElementById('skillsSection');
function toggleSkillsSection() {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills Section';
    }
    else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills Section';
    }
}
toggleButton.addEventListener('click', toggleSkillsSection);
