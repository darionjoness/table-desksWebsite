const hamburgerBar = document.querySelector('.hamburgerBtn');
const mobileNavbar = document.querySelector('.mobileNavbar');
const faqItems = document.querySelectorAll('.faqItem');

hamburgerBar.addEventListener('click', activateMobileNavbar);
faqItems.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('faqActive')
    })
})

// MOBILE NAVBAR FUNCTION
function activateMobileNavbar(){
    // Toggle hamburger bar on and off
    document.querySelector('.hamburgerBtn i').classList.toggle('fa-bars');
    // Toggles X button on and off
    document.querySelector('.hamburgerBtn i').classList.toggle('fa-x')
    // Fixes mobile navbar position
    document.querySelector('.mobileNavbar').classList.toggle('fixPosition')
    // Fixes navbar position
    document.querySelector('.navbar').classList.toggle('fixPositionNav')
    // Use active class to display mobileNavbar
    mobileNavbar.classList.toggle('mobileNavbarActive')


    // Add event listener to each mobileNav link
    document.querySelectorAll('.mobileNavbarItems ul li a').forEach((item) => {
        item.addEventListener('click', () => {
            // Remove mobileNav fix class
            document.querySelector('.mobileNavbar').classList.remove('fixPosition')
            // Remove navbar fix class
            document.querySelector('.navbar').classList.remove('fixPositionNav')
            // Remove navbarActive class
            mobileNavbar.classList.remove('mobileNavbarActive')
            // Remove X button
            document.querySelector('.hamburgerBtn i').classList.remove('fa-x')
            // Add hamburger btn
            document.querySelector('.hamburgerBtn i').classList.add('fa-bars');
        })
    })
}


    
const nav = document.querySelector('.navbar');

window.addEventListener('scroll', fixNav);

function fixNav(){
	if(window.scrollY > nav.offsetHeight + 580){
		nav.classList.add('navActive');
        mobileNavbar.classList.add('navActive');

	} else{
		nav.classList.remove('navActive')
        mobileNavbar.classList.remove('navActive')
	}
}








