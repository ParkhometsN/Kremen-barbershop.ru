document.getElementById('open').addEventListener("click", function() {
    const navigation = document.getElementById('navigation');
    const navigationLinks = document.querySelector('.navigation_links');
    const content_for_nav = document.querySelector('.content_for_nav')

    if (navigation.offsetHeight === 0) {
        navigation.classList.add("open");
        navigationLinks.classList.add("visible");
        content_for_nav.classList.add("opena")
    } else {
        navigation.classList.remove("open");
        navigationLinks.classList.remove("visible"); 
        content_for_nav.classList.remove("opena")
    }
});
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});


