import _ from 'lodash';
import './styles/main.scss';

document.addEventListener('DOMContentLoaded', function() {
    const projectCard = document.querySelectorAll('.project-card');
    
    projectCard.forEach(function(project){
        project.addEventListener('mouseover', function() {
            // const projectContainer = project.closest('.project-detail');
            const projectDesc = project.querySelector('.project-desc');
            projectDesc.classList.toggle('expanded');
        });

        project.addEventListener('mouseout', function() {
            const projectDesc = project.querySelector('.project-desc');
            projectDesc.classList.toggle('expanded');
        });
    });
});