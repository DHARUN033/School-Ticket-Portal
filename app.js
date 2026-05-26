document.addEventListener('DOMContentLoaded', () => {
    // View Switcher Elements
    const viewLanding = document.getElementById('view-landing');
    const viewForm = document.getElementById('view-form');

    const navHome = document.getElementById('nav-home');
    const navForm = document.getElementById('nav-form');
    const logoLink = document.getElementById('logo-link');

    const btnGoToForm = document.getElementById('btn-go-to-form');
    const btnBackHome = document.getElementById('btn-back-home');

    // Navigation and Routing logic
    function showView(viewName) {
        if (viewName === 'landing') {
            viewLanding.classList.add('active');
            viewForm.classList.remove('active');
            navHome.classList.add('active');
            navForm.classList.remove('active');
        } else if (viewName === 'form') {
            viewForm.classList.add('active');
            viewLanding.classList.remove('active');
            navForm.classList.add('active');
            navHome.classList.remove('active');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Event Listeners for Navigating
    navHome.addEventListener('click', () => showView('landing'));
    navForm.addEventListener('click', () => showView('form'));
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        showView('landing');
    });

    btnGoToForm.addEventListener('click', () => showView('form'));
    btnBackHome.addEventListener('click', () => showView('landing'));

    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }
});
