const { default: axios } = require("axios");

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

// FORM
const elsForm = document.querySelectorAll('form')

elsForm.forEach(elForm => {
    elForm.addEventListener('submit', (evt) => {
        evt.preventDefault()

        const formData = new FormData(evt.target)
        const json = JSON.stringify(Object.fromEntries(formData.entries()))

        postData('http://localhost:3000/requests', json)
            .then(({data}) => console.log(data))
            .catch(err => console.log(err.message))
            .finally(() => evt.target.reset())
    })
})

async function postData(url, data) {
    return await axios.post(url, data, {
        headers: {
            "Content-Type": "application/json",
        }
    })
}