window.onscroll = function() {
    let btnTopo = document.querySelector(".btn-topo");
    if (document.documentElement.scrollTop > 200) {
        btnTopo.classList.add('slide');
    } else {
        btnTopo.classList.remove('slide');
    }
};

function scrollToTop() {
    window.scrollTo({top: 0,});
}