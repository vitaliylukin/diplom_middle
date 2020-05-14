const scrollAnchors = () => {

    const anchors = document.querySelectorAll('.smooth-scroll');

    /*Anchors of items*/
    anchors.forEach((item) => item.addEventListener('click', (event) => {
            event.preventDefault();
            const blockScroll = item.getAttribute('href').substr(1);
            document.getElementById(blockScroll).scrollIntoView({behavior: "smooth"});
        })
    );

};

export default scrollAnchors;