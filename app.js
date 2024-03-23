function toggleMenu() {
    const navbar = document.querySelector('nav');
    navbar.classList.toggle('show');
    const navItems = document.querySelectorAll('nav a');

    navItems.forEach(item => {
        item.classList.toggle('show-navitems');
    });
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('close');
}


fetchContent('home');
function navigateTo(page) {
    fetchContent(page);
}

function fetchContent(page) {
    let content = [];
    switch (page) {
        case 'home':
            content.push(`
            <header class="home-page">
            <div class="half-circle">
                <div class="half-circle-content">
                    <img src="/college-logo1.png" class="logo_dep">
                    <h1 class="lakshya">Farewell Party</h1>
                    <span id="timer"></span>
                    <button id="beginButton" class="button-85" role="button">Let's Begin</button>

                </div>
            </div>
        </header>

        
            `);
            break;
           
        default:
            content = ["<h2>Page Not Found</h2><p>The requested page could not be found.</p>"];
            break;
    }

    // Update the main content
    document.querySelector('main').innerHTML = content.join('');
}
