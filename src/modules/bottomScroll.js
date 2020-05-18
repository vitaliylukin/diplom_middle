const bottomScroll = () => {

    const toTop = document.querySelector('#totop'),
        headerMain = document.querySelector('.header-main');

    const height = headerMain.scrollHeight;

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > height) {
            toTop.style.display = 'block';
        } else if (document.documentElement.scrollTop < height) {
            toTop.style.display = 'none';
        }
    });

};

export default bottomScroll;