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

let scale = 1; // 初始缩放比例
let startX = 0, startY = 0, moveX = 0, moveY = 0; // 拖拽变量
let isDragging = false;
let lastX = 0, lastY = 0; // 存储最后的位置

function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    
    modal.style.display = "flex"; // 显示模态窗口
    modalImg.src = imgElement.src; // 设置模态窗口图片
    scale = 1; // 重置缩放比例
    modalImg.style.transform = "scale(1) translate(0px, 0px)"; // 重置变换
}

// 关闭模态框
function closeModal() {
    document.getElementById("imageModal").style.display = "none"; // 关闭模态窗口
}

// 禁用右键菜单
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();  // 禁用右键菜单
});

// 滚轮缩放图片
document.getElementById("imageContainer").addEventListener("wheel", function(event) {
    event.preventDefault();
    if (event.deltaY < 0) {
        scale *= 1.1; // 放大
    } else {
        scale /= 1.1; // 缩小
    }
    scale = Math.max(1, Math.min(5, scale)); // 限制缩放范围 1x - 5x
    document.getElementById("modalImage").style.transform = `scale(${scale}) translate(${moveX}px, ${moveY}px)`;
});

// 监听鼠标拖拽
document.getElementById("imageContainer").addEventListener("mousedown", function(event) {
    isDragging = true;
    startX = event.clientX - moveX;
    startY = event.clientY - moveY;
    this.style.cursor = "grabbing";
});

document.addEventListener("mousemove", function(event) {
    if (!isDragging) return;
    moveX = event.clientX - startX;
    moveY = event.clientY - startY;
    // 使用 requestAnimationFrame 优化拖拽体验
    requestAnimationFrame(() => {
        document.getElementById("modalImage").style.transform = `scale(${scale}) translate(${moveX}px, ${moveY}px)`;
    });
});

document.addEventListener("mouseup", function() {
    isDragging = false;
    document.getElementById("imageContainer").style.cursor = "grab";
});

// 监听触摸手势（移动端缩放）
let touchStartDist = 0;
document.getElementById("imageContainer").addEventListener("touchstart", function(event) {
    if (event.touches.length === 2) {
        touchStartDist = getDistance(event.touches[0], event.touches[1]);
    }
});

document.getElementById("imageContainer").addEventListener("touchmove", function(event) {
    if (event.touches.length === 2) {
        event.preventDefault();
        let newDist = getDistance(event.touches[0], event.touches[1]);
        let zoomFactor = newDist / touchStartDist;
        scale = Math.max(1, Math.min(5, scale * zoomFactor));
        touchStartDist = newDist;
        document.getElementById("modalImage").style.transform = `scale(${scale}) translate(${moveX}px, ${moveY}px)`;
    }
});

function getDistance(touch1, touch2) {
    let dx = touch1.clientX - touch2.clientX;
    let dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

// 禁用拖拽操作
document.getElementById("modalImage").setAttribute("draggable", "false");
