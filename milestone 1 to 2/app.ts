const toggleButton = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skillsSection = document.getElementById('skillsSection') as HTMLElement;

function toggleSkillsSection(): void {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block'; 
        toggleButton.textContent = 'Hide Skills Section'; 
    } else {
        skillsSection.style.display = 'none'; 
        toggleButton.textContent = 'Show Skills Section'; 
    }
}
toggleButton.addEventListener('click', toggleSkillsSection);
