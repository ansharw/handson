const toggleButton = document.getElementById('toggle');
const navList = document.getElementById('nav-list');
toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
})