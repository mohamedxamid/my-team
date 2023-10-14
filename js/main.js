const modifiers = {
    itemDirectorMoreBtnActive: "item-director__more-btn--active",
    itemDirectorActive: "item-director--active",
    elMenubarTogglerActive: "menubar-toggler--active",
    elSiteHeaderActive: "site-header--active"
}

const elsItemDirectorMoreBtn = document.querySelectorAll('.item-director__more-btn');
const elsItemDirectorActiveContent = document.querySelectorAll('.item-director__active-content');

elsItemDirectorMoreBtn.forEach(function (elItemDirectorMoreBtn) {
    elItemDirectorMoreBtn.addEventListener('click', function (evt) {
        evt.preventDefault();

        elItemDirectorMoreBtn.classList.toggle(modifiers.itemDirectorMoreBtnActive);
        // elItemDirectorMoreBtn.parentElement.nextElementSibling.classList.toggle(modifiers.activeContentDirectorActive);
        // elItemDirectorMoreBtn.parentElement.closest('.active-content-director').classList.toggle(modifiers.activeContentDirectorActive);
        elItemDirectorMoreBtn.closest('.item-director').classList.toggle(modifiers.itemDirectorActive);
    })
})

// SITENAV-TOGGLER
const elSiteHeader = document.querySelector('.site-header');
const elMenuBarToggler = elSiteHeader.querySelector('.js-menubar-toggler');

if (elMenuBarToggler) {
    elMenuBarToggler.addEventListener('click', function() {
        elSiteHeader.classList.toggle(modifiers.elSiteHeaderActive);
        elMenuBarToggler.classList.toggle(modifiers.elMenubarTogglerActive);
    })
}