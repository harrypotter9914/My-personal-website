// Tab切换功能
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = document.getElementById(button.dataset.target);

        // 激活按钮
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // 显示对应的内容
        tabContents.forEach(content => content.style.display = 'none');
        target.style.display = 'block';
    });
});

    // 获取按钮元素
    const backToTopButton = document.getElementById('back-to-top');

    // 当用户滚动时调用此函数
    window.onscroll = function () {
        // 如果页面滚动超过100px，显示按钮，否则隐藏
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    // 当用户点击按钮时，回到页面顶部
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // 平滑滚动效果
        });
    });
