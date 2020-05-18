const bottomScroll = () => {

    const toTop = document.querySelector('#totop'),
        headerMain = document.querySelector('.header-main');

    const height = headerMain.scrollHeight;

    console.log(height);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > height) {
            toTop.style.display = 'block';
        } else if (document.documentElement.scrollTop < height) {
            toTop.style.display = 'none';
        }
    });

};

export default bottomScroll;