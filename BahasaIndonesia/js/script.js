// Back To Top Btn Start

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnScrollToTop").style.display = "block";
    } else {
        document.getElementById("btnScrollToTop").style.display = "none";
    }
}

// Back To Top Btn Finish

// Bars Btn Start

const navigation = document.querySelector('.navigation');
document.querySelector('#bars'). onclick = () => {
    navigation.classList.toggle('active');
};

const bars = document.querySelector('#bars');
document.addEventListener('click', function(e){
    if(!bars.contains(e.target) && !navigation.contains(e.target)) {
        navigation.classList.remove('active');
    }
});

// Bars Btn Finish