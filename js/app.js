$(document).ready(function () {

    $('.menu-about').click(function () {
        $('.menu-about').closest('.overviewOptions').addClass('hideX');
        $('.aboutContainer').removeClass('hideX');
    })

    $('.menu-contact').click(function () {
        $('.menu-contact').closest('.overviewOptions').addClass('hideX');
        $('.contactContainer').removeClass('hideX');
    })

    $('.menu-skills').click(function () {
        $('.menu-contact').closest('.overviewOptions').addClass('hideX');
        $('.skillContainer').removeClass('hideX');
    })

    $('.menu-experience').click(function () {
        $('.menu-contact').closest('.overviewOptions').addClass('hideX');
        $('.experienceContainer').removeClass('hideX');
    })

    $('.menu-projects').click(function () {
        $('.menu-contact').closest('.overviewOptions').addClass('hideX');
        $('.projectsContainer').removeClass('hideX');
    })

    $('.close').click(function () {
        $(this).parent().addClass('hideX');
        $('.overviewOptions').removeClass('hideX');
    })

});