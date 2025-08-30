document.getElementById('open').addEventListener("click", function() {
    const navigation = document.getElementById('navigation');
    const navigationLinks = document.querySelector('.navigation_links');
    const navigationLinksSec = document.querySelector('.sale');
    const buttonmagic = document.querySelector('.active_button')
    const content_for_nav = document.querySelector('.content_for_nav')

    if (navigation.offsetHeight === 0) {
        navigation.classList.add("open");
        navigationLinks.classList.add("visible");
        navigationLinksSec.classList.add("visible");
        buttonmagic.classList.add("visibility")
        content_for_nav.classList.add("opena")
    } else {
        navigation.classList.remove("open");
        navigationLinks.classList.remove("visible"); 
        navigationLinksSec.classList.remove("visible");
        buttonmagic.classList.remove("visibility")
        content_for_nav.classList.remove("opena")
    }
});
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    toggleBtn.textContent = toggleBtn.classList.contains('active') ? '−' : '+';
});
document.getElementById('toggleBtn').addEventListener('click', function(){
    document.getElementById("answer").classList.toggle("question");
});
document.getElementById('toggleBtnn').addEventListener('click', function(){
    document.getElementById("answerr").classList.toggle("question");
});
document.getElementById('toggleBtnnn').addEventListener('click', function(){
    document.getElementById("answerrr").classList.toggle("question");
});
const toggleBtnn = document.getElementById('toggleBtnn');

toggleBtnn.addEventListener('click', () => {
    toggleBtnn.classList.toggle('active');
    toggleBtnn.textContent = toggleBtnn.classList.contains('active') ? '−' : '+';
});
toggleBtnnn.addEventListener('click', () => {
    toggleBtnnn.classList.toggle('active');
    toggleBtnnn.textContent = toggleBtnnn.classList.contains('active') ? '−' : '+';
});
window.onload = function() {
    document.getElementById('services-content').style.display = 'block';
    document.getElementById('additional-services-content').style.display = 'none';
    document.getElementById('btn-services').style.opacity = '0.8';
    document.getElementById('btn-additional-services').style.opacity = '1';
};
    document.getElementById('btn-services').addEventListener('click', function() {
    document.getElementById('services-content').style.display = 'block';
    document.getElementById('additional-services-content').style.display = 'none';
    
    document.getElementById('btn-services').style.opacity = '0.8';
    document.getElementById('btn-additional-services').style.opacity = '1';
});
    document.getElementById('btn-additional-services').addEventListener('click', function() {
    document.getElementById('services-content').style.display = 'none';
    document.getElementById('additional-services-content').style.display = 'block';
    
    document.getElementById('btn-services').style.opacity = '1';
    document.getElementById('btn-additional-services').style.opacity = '0.8';
});
document.getElementById('first_information_').addEventListener('mouseenter', function() {
    document.querySelector('.infoprmatiuon_blick').style.visibility = 'visible';
});
document.addEventListener('DOMContentLoaded', function() {
    const infoBlock = document.querySelector('.infoprmatiuon_blick');
    const infoText = document.getElementById('info_text');

    document.getElementById('first_information_').addEventListener('mouseenter', function() {
        infoText.textContent = 'Страший мастер, заслуженный работник сети, годами оправдавший свои навыки, а также способности работы с клиентом на долгосрочное время.';
        infoBlock.classList.add('visible'); 
    });

    document.getElementById('second_information_').addEventListener('mouseenter', function() {
        infoText.textContent = 'Эксперт-барбер сети Kremen — это мастер с высоким уровнем профессионализма и опытом. Он отлично владеет современными техниками стрижки и бритья, использует качественные инструменты и косметику, чтобы обеспечить безупречный результат для каждого клиента.';
        infoBlock.classList.add('visible'); 
    });
    document.getElementById('tree_information_').addEventListener('mouseenter', function() {
        infoText.textContent = 'Топ-эксперт сети Kremen — мастер с безупречным опытом и высоким уровнем профессионализма. Владея современными техниками стрижки и бритья, он использует лучшие инструменты и косметику, чтобы каждый клиент уходил с ощущением абсолютного совершенства.';
        infoBlock.classList.add('visible'); 
    });

    document.querySelectorAll('.hover_serv').forEach(function(element) {
        element.addEventListener('mouseleave', function() {
            infoBlock.classList.remove('visible');
        });
    });
});
//под мобильное приложение банннер с иконкой
// document.getElementById('closed_app').addEventListener('click', function() {
//     document.getElementById('banner_download_app').classList.add('closed');
// });
// window.addEventListener('load', function() {
//     document.querySelector('.loader').style.display = 'none';
//     document.body.classList.add('loaded');
// });
