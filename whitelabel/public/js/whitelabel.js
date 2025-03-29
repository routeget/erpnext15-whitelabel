frappe.ready(() => {
    // Set favicon
    const setFavicon = () => {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = '/assets/whitelabel/images/favicon.ico';
    };
    setFavicon();

    // Remove help menu
    const removeHelpMenu = () => {
        const helpMenu = document.querySelector('.dropdown-help');
        if (helpMenu) helpMenu.remove();
    };
    removeHelpMenu();

    // Replace all logos
    const replaceLogos = () => {
        document.querySelectorAll('.navbar-brand img, .app-logo img, .sidebar-brand img').forEach(img => {
            img.src = '/assets/whitelabel/images/applogo.svg';
        });
    };
    replaceLogos();

    // Handle login page
    if (window.location.pathname === '/login') {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        
        if (isMobile) {
            // Mobile layout
            document.body.innerHTML = `
                <div class="login-container">
                    <div class="login-right">
                        <div class="mobile-header">
                            <img src="/assets/whitelabel/images/applogo.svg" class="mobile-logo">
                            <h2>Welcome Back</h2>
                            <p>Please sign in to continue</p>
                        </div>
                        <div class="page-card"></div>
                    </div>
                    <div class="mobile-footer">
                        © ${new Date().getFullYear()} Radius ERP. All Rights Reserved.
                    </div>
                </div>
            `;
        } else {
            // Desktop layout
            document.body.innerHTML = `
                <div class="login-container">
                    <div class="login-left">
                        <img src="/assets/whitelabel/images/applogo.svg" class="company-logo">
                        <div class="marquee-container">
                            <div class="marquee-content"></div>
                        </div>
                        <div class="copyright">© ${new Date().getFullYear()} Radius ERP. All Rights Reserved.</div>
                    </div>
                    <div class="login-right">
                        <div class="page-card"></div>
                    </div>
                </div>
            `;
            
            // Add marquee logos
            const logos = [
                '/assets/whitelabel/images/marquee-logos/marquee-logo-1.png',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-2.svg',
                '/assets/whitelabel/images/marquee-logos/marquee-logo-3.png',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-4.svg',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-5.png',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-6.svg',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-7.svg',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-8.svg',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-9.svg',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-10.svg',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-11.svg','/assets/whitelabel/images/marquee-logos/marquee-logo-12.svg','/assets/whitelabel/images/marquee-logos/marquee-logo-13.png',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-14.png',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-15.svg',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-16.svg','/assets/whitelabel/images/marquee-logos/marquee-logo-17.svg','/assets/whitelabel/images/marquee-logos/marquee-logo-18.png',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-19.svg',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-20.svg',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-21.svg',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-22.svg',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-23.svg',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-24.svg',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-25.svg',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-26.svg',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-27.svg',
				'/assets/whitelabel/images/marquee-logos/marquee-logo-18.svg'
            ];
            
            const marqueeContent = document.querySelector('.marquee-content');
            logos.forEach(logo => {
                const img = document.createElement('img');
                img.src = logo;
                img.alt = 'Customer';
                marqueeContent.appendChild(img);
            });
            
            // Clone the marquee for seamless looping
            marqueeContent.innerHTML += marqueeContent.innerHTML;
        }
        
        // Move the login form
        const pageCard = document.querySelector('.page-card');
        const loginForm = document.querySelector('.login-content') || document.querySelector('.page-card');
        if (loginForm && pageCard) {
            pageCard.appendChild(loginForm);
        }
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.location.pathname === '/login') {
        location.reload();
    }
});