const dropDownMenu = () => {

    const clubsList = document.querySelector('.clubs-list > ul');

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.clubs-list')) {
            if (!clubsList.style.display || clubsList.style.display === 'none') {
                clubsList.style.display = 'block';
            } else {
                clubsList.style.display = 'none';
            }
        } else {
            clubsList.style.display = 'none';
        }

    });

};

export default dropDownMenu;