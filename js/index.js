$(document).ready(function() {
    // 设置 Buy Now 按钮链接
    function setBuyNowLink() {
        var domain = window.location.hostname; // 获取当前页面的域名
        var buyNowUrl = "https://dan.com/zh-cn/buy-domain/" + domain;
        $('#buyNowButton').attr('href', buyNowUrl); // 更新按钮的 href 属性
    }

    // 执行函数
    setBuyNowLink();

    // Vegas Background Slideshow (vegas.slider kenburns)
    $('#kenburnsSliderContainer').vegas({
        slides: [{ src: "images/slider/4.webp" }],
        overlay: true,
        transition: 'fade2',
        animation: 'kenburnsUpRight',
        transitionDuration: 1000,
        delay: 10000,
        animationDuration: 20000
    });

    // JavaScript to set domain name
    function formatDomain(domain) {
        return domain.charAt(0).toUpperCase() + domain.slice(1);
    }

    function setDomainName() {
        var domain = window.location.hostname;
        var domainName = formatDomain(domain);
        document.getElementById('domainName').textContent = domainName;
    }

    setDomainName();
});

$(document).ready(function() {
    // 设置 Buy Now 按钮链接
    function setBuyNowLink() {
        var domain = window.location.hostname; // 获取当前页面的域名
        var buyNowUrl = "https://dan.com/zh-cn/buy-domain/" + domain;
        $('#buyNowButton').attr('href', buyNowUrl); // 更新按钮的 href 属性
    }

    // 执行函数
    setBuyNowLink();

    // Vegas Background Slideshow (vegas.slider kenburns)
    $('#kenburnsSliderContainer').vegas({
        slides: [{ src: "images/slider/4.webp" }],
        overlay: true,
        transition: 'fade2',
        animation: 'kenburnsUpRight',
        transitionDuration: 1000,
        delay: 10000,
        animationDuration: 20000
    });

    // JavaScript to set domain name
    function formatDomain(domain) {
        return domain.charAt(0).toUpperCase() + domain.slice(1);
    }

    function setDomainName() {
        var domain = window.location.hostname;
        var domainName = formatDomain(domain);
        document.getElementById('domainName').textContent = domainName;
    }

    setDomainName();

    // Form Popup
    var formPopup = $('#buyNowForm');
    var closeBtn = $('.close-btn');

    $('#buyNowButton').click(function(event) {
        event.preventDefault(); // 防止默认链接行为
        formPopup.show(); // 显示表单框
    });

    closeBtn.click(function() {
        formPopup.hide(); // 隐藏表单框
    });

    $(window).click(function(event) {
        if ($(event.target).is('#buyNowForm')) {
            formPopup.hide(); // 点击窗外区域时隐藏表单框
        }
    });
});

// Function to open the form popup
function openForm() {
    document.querySelector('.form-popup').style.display = 'block';
}

// Function to close the form popup
function closeForm() {
    document.querySelector('.form-popup').style.display = 'none';
}

// Function to close the success popup
function closeSuccessPopup() {
    document.getElementById('successPopup').style.display = 'none';
}

// Function to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Simulate a successful submission with a timeout
    setTimeout(function() {
        // Hide the form popup
        closeForm();

        // Show the success popup
        document.getElementById('successPopup').style.display = 'block';
    }, 500); // Adjust the timeout as needed
});
document.addEventListener('DOMContentLoaded', function() {
    const formPopup = document.getElementById('buyNowForm');
    const closeButton = document.querySelector('.form-popup .close-btn');

    // Open form popup
    function openForm() {
        formPopup.style.display = 'block';
    }

    // Close form popup
    function closeForm() {
        formPopup.style.display = 'none';
    }

    // Close button event listener
    closeButton.addEventListener('click', closeForm);

    // You can open the form popup by calling openForm() function from elsewhere
});