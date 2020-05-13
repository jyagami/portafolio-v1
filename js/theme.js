/* variables*/
const radioTheme = document.querySelectorAll('[name=theme]'),
    rootStyles = document.documentElement.style,
    lightTheme = {
        '--color-aside': '#86002A',
        '--color-main': '#F0F8FF',
        '--color-aside-black': 'rgb(102, 1, 33)',
        '--color-scroll': 'rgb(104, 0, 33)',
        '--color-brown': 'rgb(88, 17, 17)',
        '--color-hover': 'rgb(97, 1, 1)',
        '--icolor-title': 'rgb(45, 45, 45)',
        '--icolor-subtitle': 'rgb(55, 55, 55)',
        '--icolor-paragraph': 'rgb(65, 65, 65)',
        '--icolor-seudo': '#86002A',
        '--icolor-card': 'rgb(253, 254, 255)'
    },
    darkTheme = {
        '--color-aside': 'rgb(17,19,22)',
        '--color-main': 'rgb(35,38,45)',
        '--color-aside-black': 'grey',
        '--color-scroll': 'rgb(29, 29, 29)',
        '--color-brown': 'black',
        '--color-hover': 'grey',
        '--icolor-title': 'rgb(236, 236, 236)',
        '--icolor-subtitle': 'rgb(209, 209, 209)',
        '--icolor-paragraph': 'rgb(179, 179, 179)',
        '--icolor-seudo': 'rgb(177, 0, 56)',
        '--icolor-card': 'rgb(17,19,22)'
    };
/* inicial: main: #333, aside: #222
    secundaria: aside: rgb(17,19,22), main: rgb(35,38,45) */
/* obtenemos el valor del radio-button */
for (let btn of radioTheme) {
    btn.addEventListener('change', function (e) {
        if (e.target.id === 'radio-dark') {
            changeTheme(darkTheme);
            localStorage.session = "themeDark";
        } else if (e.target.id === 'radio-light') {
            changeTheme(lightTheme);
            localStorage.session = "themeLight";
        }
    });
}

/* funcion para cambiar los valores de las variables css */
function changeTheme(theme) {
    let keysTheme = Object.keys(theme);
    for (let keyTheme of keysTheme) {
        rootStyles.setProperty(keyTheme, theme[keyTheme]);
    }
}

/* mediante localStorage.session mantenemos el tema seleccionado */
if (localStorage.session === 'themeDark') {
    changeTheme(darkTheme);
    document.getElementById('radio-dark').setAttribute('checked', 'true')
}
else if (localStorage.session === 'themeLigth') {
    changeTheme(lightTheme);
}

/* cambiar la imagen del boton "ecribeme" */
let imgWriteMe = document.getElementById('img-write-me'),
    btnWrite = document.getElementById('btn-write');

btnWrite.addEventListener('mouseenter', () => {
    imgWriteMe.setAttribute('src', 'img/icons/write-me-light.png')
});

btnWrite.addEventListener('mouseout', () => {
    imgWriteMe.setAttribute('src', 'img/icons/write-me-white.png');
});

/* menu hamburguesa */

const btnMenu = document.getElementById('button-menu');
const aside = document.getElementById('aside').style
console.log(aside);

btnMenu.addEventListener('click', function () {
    let height = rootStyles.getPropertyValue('--aside-height');

    if (height != '100vh') {
        rootStyles.setProperty('--aside-height', '100vh');
        aside.setProperty('overflow-y', 'scroll')
    } else {
        rootStyles.setProperty('--aside-height', '4rem');
        aside.setProperty('overflow', 'hidden')
    }

});

