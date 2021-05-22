const popup = function() {
    let buttons = document.querySelectorAll('[data-popup]');

    const remove = function() {
        let popupElem = document.querySelector('.popup');
        
        if(!popupElem) return;

        popupElem.remove();
    };

    const create = function() {
        let popupElem = document.querySelector('.popup');

        if(popupElem) {
            popupElem.querySelector('.popup_container').innerHTML = '';

            return popupElem;
        };

        popupElem = document.createElement('div');
        const popupOverElem = document.createElement('div');
        const popupContElem = document.createElement('div');

        popupElem.classList.add('popup');
        popupOverElem.classList.add('popup_overlay');
        popupContElem.classList.add('popup_container');

        popupElem.appendChild(popupOverElem);
        popupElem.appendChild(popupContElem);

        return popupElem;
    };

    const show = function(event) {
        let id = event.target.dataset.popup;
        
        if (!id) return;

        const content = document.querySelector(`#${id}`);

        if (!content) return;

        const popupElem = create();

        if (!popupElem) return;

        popupElem.querySelector('.popup_container').innerHTML = content.innerHTML;

        const popupCloElem = document.createElement('div');

        popupCloElem.classList.add('popup_close');
        popupCloElem.innerHTML = 'X';

        popupElem.querySelector('.popup_container').appendChild(popupCloElem);

        popupCloElem.addEventListener('click', remove);        
        
        popupElem.classList.add('active'); 

        document.body.appendChild(popupElem);
    };

    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            show(event);
        });
    });
};

window.addEventListener('load', function() {
    popup();
});