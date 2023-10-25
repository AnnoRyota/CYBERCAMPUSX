function fadeInOnScroll() {
            var elements = document.querySelectorAll('.smoothTrigger');
            elements.forEach(function (element) {
                var elementPosition = element.getBoundingClientRect().top;
                var windowHeight = window.innerHeight;
                var isAnimated = element.classList.contains('smooth');

                if (elementPosition < windowHeight * 0.9 && !isAnimated) {
                    element.classList.add('smooth');
                } else if (elementPosition >= windowHeight * 0.9 && isAnimated) {
                    element.classList.remove('smooth');
                }
            });
}

function fadeInRight() {
            var elements = document.querySelectorAll('.rightInTrigger');
            elements.forEach(function (element) {
                var elementPosition = element.getBoundingClientRect().top;
                var windowHeight = window.innerHeight;
                var isAnimated = element.classList.contains('rightIn');

                if (elementPosition < windowHeight * 0.9 && !isAnimated) {
                    element.classList.add('rightIn');
                } else if (elementPosition >= windowHeight * 0.9 && isAnimated) {
                    element.classList.remove('rightIn');
                }
            });
}

function fadeInLeft() {
            var elements = document.querySelectorAll('.leftInTrigger');
            elements.forEach(function (element) {
                var elementPosition = element.getBoundingClientRect().top;
                var windowHeight = window.innerHeight;
                var isAnimated = element.classList.contains('leftIn');

                if (elementPosition < windowHeight * 0.9 && !isAnimated) {
                    element.classList.add('leftIn');
                } else if (elementPosition >= windowHeight * 0.9 && isAnimated) {
                    element.classList.remove('leftIn');
                }
            });
}

function fadeUpAnimation() {
    var fadeUpTriggers = document.querySelectorAll('.fadeUpTrigger');
    fadeUpTriggers.forEach(function (element) {
        var elemPos = element.getBoundingClientRect().top;
        var scroll = window.scrollY;
        var windowHeight = window.innerHeight;
        if (scroll >= elemPos - windowHeight) {
            element.classList.add('fadeUp');
        } else {
            element.classList.remove('fadeUp');
        }
    });
}

// スクロール時にアニメーションを実行
window.addEventListener('scroll', function () {
    fadeUpAnimation();
    fadeInOnScroll(); // 以前のアニメーションも実行
    fadeInLeft(); // 以前のアニメーションも実行
    fadeInRight(); // 以前のアニメーションも実行
});

// ページ読み込み時に初期状態を確認
fadeUpAnimation();
fadeInOnScroll(); // 以前のアニメーションも実行
fadeInLeft(); // 以前のアニメーションも実行
fadeInRight(); // 以前のアニメーションも実行

function showContent(contentId) {
        const contentElements = document.querySelectorAll('.image');
        contentElements.forEach(element => {
            element.style.display = 'none';
        });

        const selectedContent = document.getElementById(contentId);
        selectedContent.style.display = 'block';
    }
