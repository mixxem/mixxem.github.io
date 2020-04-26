const more = document.getElementById('more');
const close = document.getElementsByClassName('close')[0];
const btn = document.getElementsByClassName('btn_2')[0];

btn.onclick = function	() {
	more.style.display = 'block';	
}

close.onclick = function () {
	more.style.display = 'none';
}

window.onclick = function (event) {
	if (event.target == more)
	more.style.display = 'none'; 
}

+function () {

function initAccordeon () {
    var firstSectionBodyHeight = document.querySelector('.accordeon-section .accordeon-body > *').clientHeight
    document.querySelector('.accordeon-section .accordeon-body').style.maxHeight = firstSectionBodyHeight + 'px'
}

initAccordeon()



var accordeonHeaderClickHandler = function(e) {
    document.querySelectorAll('.accordeon-section').forEach(function(section) {
        section.querySelector('.accordeon-body').style.maxHeight = '0px'
    })

    var accordeonSection = e.target.closest('.accordeon-section')

    var insideElHeight = accordeonSection.querySelector('.accordeon-body > *').clientHeight

    accordeonSection.querySelector('.accordeon-body').style.maxHeight = insideElHeight + 'px'
}

document.querySelectorAll('.accordeon-section')
    .forEach(function(section) {
        section.addEventListener('click', accordeonHeaderClickHandler)
    })

}()