document.addEventListener('DOMContentLoaded', function() {
    // Get current page path
    const currentPage = window.location.pathname.split('/').pop();

    // Add active class to current page links
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Mobile menu functionality
    function createMobileMenu() {
        if (window.innerWidth <= 768) {
            const nav = document.querySelector('nav ul');
            let toggle = document.querySelector('.mobile-toggle');
            
            if (!toggle) {
                toggle = document.createElement('button');
                toggle.innerHTML = '☰';
                toggle.className = 'mobile-toggle';
                toggle.style.cssText = `
                    position: fixed;
                    top: 1rem;
                    right: 1rem;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    z-index: 1000;
                    color: var(--text);
                `;
                
                document.body.appendChild(toggle);
                
                toggle.addEventListener('click', () => {
                    nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
                    document.querySelectorAll('.sidebar').forEach(sidebar => {
                        sidebar.style.display = nav.style.display;
                    });
                });
            }
        } else {
            const toggle = document.querySelector('.mobile-toggle');
            if (toggle) {
                toggle.remove();
            }
            document.querySelector('nav ul').style.display = '';
            document.querySelectorAll('.sidebar').forEach(sidebar => {
                sidebar.style.display = '';
            });
        }
    }

    // Initialize mobile menu
    createMobileMenu();
    
    // Update on resize
    window.addEventListener('resize', createMobileMenu);
});