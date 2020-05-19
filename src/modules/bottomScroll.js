const bottomScroll = () => {

    const toTop = document.querySelector('#totop'),
        headerMain = document.querySelector('.header-main');

    const height = headerMain.scrollHeight;

    //Scroll to Top
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > height) {
            toTop.style.display = 'block';
        } else if (document.documentElement.scrollTop < height) {
            toTop.style.display = 'none';
        }
    });

    //Smooth Scroll
    toTop.addEventListener('click', (event) => {
        event.preventDefault();
        headerMain.scrollIntoView({behavior: "smooth"})
    });

};

export default bottomScroll;