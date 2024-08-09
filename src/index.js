import _ from 'lodash';
import './styles/main.scss';

document.addEventListener('DOMContentLoaded', function() {
    const titlesExpand = document.querySelectorAll('.title');
    
    titlesExpand.forEach(function(title){
        title.addEventListener('click', function() {
            const projectContainer = title.closest('.project-detail');
            const projectDesc = projectContainer.querySelector('#project-desc');
            projectDesc.classList.toggle('expanded');
        });
    });
});