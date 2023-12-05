$('#myself').css('display', 'block');
$('#education').css('display', 'none');
$('#skills').css('display', 'none');
$('#myself_nav').css('color', 'black');
$('#education_nav').css('color', 'white');
$('#skills_nav').css('color', 'white');

$('#myself_nav').on('click', () => {
    $('#myself_nav').css('color', 'black');
    $('#education_nav').css('color', 'white');
    $('#skills_nav').css('color', 'white');
    $('#myself').css('display', 'block');
    $('#education').css('display', 'none');
    $('#skills').css('display', 'none');
});

$('#education_nav').on('click', () => {
    $('#myself_nav').css('color', 'white');
    $('#education_nav').css('color', 'black');
    $('#skills_nav').css('color', 'white');
    $('#myself').css('display', 'none');
    $('#education').css('display', 'block');
    $('#skills').css('display', 'none');
});

$('#skills_nav').on('click', () => {
    $('#myself_nav').css('color', 'white');
    $('#education_nav').css('color', 'white');
    $('#skills_nav').css('color', 'black');
    $('#myself').css('display', 'none');
    $('#education').css('display', 'none');
    $('#skills').css('display', 'block');
});