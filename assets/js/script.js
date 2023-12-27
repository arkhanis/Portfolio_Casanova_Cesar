/***********************************************************************
Dark theme
***********************************************************************/


const body = document.querySelector('body');
const themeSwitcher = document.querySelector('.theme-switch__checkbox');

themeSwitcher.addEventListener('click', () => {
  body.classList.toggle('darkMode');
});

/***********************************************************************
Switch Languaje
***********************************************************************/

const langSwitcher = document.querySelector('.languaje');
const buttons = document.querySelectorAll('a');
// main
const mainTitle = document.querySelector('.main__title');
const mainDescription = document.querySelector('.main__description');
const githubDescription = document.querySelector('.github__description');
const projectsTitle = document.querySelector('.projects__title-h2');
const projectsDescription = document.querySelector('.projects__description');
const xpDescription = document.querySelector('.xp__description');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        langSwitcher.querySelector('.active').classList.remove('active');
        button.classList.add('active');

        const attr = button.getAttribute('languaje');

        mainTitle.textContent = data[attr].main__title;
        mainDescription.textContent = data[attr].main__description;
        githubDescription.textContent = data[attr].github__description;
        projectsTitle.textContent = data[attr].projects__title;
        projectsDescription.textContent = data[attr].projects__description;
        xpDescription.textContent = data[attr].xp__description;
    });
});


const data = {

    'english': 
    {
        "main__title": "Hi!, I'm César Casanova.",
        "main__description": "I am a Frontend Developer specialized in React.JS, with solid knowledge in HTML, CSS and JavaScript. I believe in professional reinvention, always seeking to learn and adapt to new technological trends. I enjoy exploring and experimenting with new tools and technologies to expand my capabilities.",

        "github__description": "My Github profile, where I upload my projects.",

        "projects__title": "Projects",
        "projects__description": "Here you can see some of my projects.",

        "xp__description": "Years of experience"
    },

    'spanish': 
    {
        "main__title": "Hola, soy César Casanova.",
        "main__description": "Soy Desarrollador Frontend especializado en React.JS, con sólidos conocimientos en HTML, CSS y JavaScript. Creo en la reinvención profesional, siempre buscando aprender y adaptarme a las nuevas tendencias tecnológicas. Disfruto explorando y experimentando con nuevas herramientas y tecnologías para expandir mis capacidades.",

        "github__description": "Mi perfil de Github, donde subo mis proyectos.",

        "projects__title": "Proyectos",
        "projects__description": "Aquí encontrarás algunos de mis proyectos.",

        "xp__description": "Años de experiencia"
    }
}