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


    // --- FORM VALIDATION AND SUBMISSION ---
    const form = document.getElementById('ticket-form');
    const successModal = document.getElementById('success-modal');
    const btnModalOk = document.getElementById('btn-modal-ok');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isFormValid = true;

        // Form Fields
        const name = document.getElementById('requester-name');
        const email = document.getElementById('requester-email');
        const category = document.getElementById('ticket-category');
        const priority = document.getElementById('ticket-priority');
        const subject = document.getElementById('ticket-subject');
        const desc = document.getElementById('ticket-desc');

        // Validation helpers
        function validateField(field, condition) {
            const group = field.parentElement;
            if (condition) {
                group.classList.remove('invalid');
            } else {
                group.classList.add('invalid');
                isFormValid = false;
            }
        }

        // Validate Name
        validateField(name, name.value.trim() !== '');

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        validateField(email, emailRegex.test(email.value.trim()));

        // Validate Category
        validateField(category, category.value !== '');

        // Validate Priority
        validateField(priority, priority.value !== '');

        // Validate Subject
        validateField(subject, subject.value.trim() !== '');

        // Validate Description (min 10 chars)
        validateField(desc, desc.value.trim().length >= 10);

        if (isFormValid) {
            // Log target form values
            const ticketData = {
                name: name.value.trim(),
                email: email.value.trim(),
                category: category.value,
                priority: priority.value,
                subject: subject.value.trim(),
                desc: desc.value.trim(),
                timestamp: new Date().toISOString()
            };
            console.log('Ticket Submitted:', ticketData);

            // Show confirmation popup modal
            successModal.classList.add('active');
        }
    });

    // Close Modal event
    btnModalOk.addEventListener('click', () => {
        successModal.classList.remove('active');
        form.reset();
        // Clear all validation styles
        const inputGroups = document.querySelectorAll('.input-group');
        inputGroups.forEach(group => group.classList.remove('invalid'));
        // Return to Landing view
        showView('landing');
    });

    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }
});
