$(document).ready(function() {
    // 设置 Buy Now 按钮链接
    function setBuyNowLink() {
        var domain = window.location.hostname;
        var buyNowUrl = "https://dan.com/zh-cn/buy-domain/" + domain;
        $('#buyNowButton').attr('href', buyNowUrl);
        $('#buyNowButtonFooter').attr('href', buyNowUrl); // Update footer button link
    }

    // 执行设置 Buy Now 按钮链接的函数
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
        $('#domainName').text(domainName);
    }

    // 执行设置域名的函数
    setDomainName();

    // Modal functionality
    var modal = $('#offerModal');
    var btn = $('#buyNowButton');
    var span = $('.close');

    btn.on('click', function(event) {
        event.preventDefault(); // 防止默认行为
        var domain = window.location.hostname;
        $('#modalTitle').text(domain);

        var message = `
            <p>1: <a href="https://dan.com" target="_blank">${domain}</a> is a premium domain and is currently for sale. To purchase the domain, please use the "Buy Now" button and complete the process through <a href="https://dan.com" target="_blank">DAN.com</a>. The domain will be delivered to you within 24 hours.</p>
            <p>2: This domain supports installment payments - pay first and buy later. Custom payment terms are available, with a maximum term of 12 installments.</p>
        `;
        $('#modalMessage').html(message);

        // 设置价格标签和立即购买按钮
        var price = "$5000"; // 示例价格，你可以根据需要修改
        $('#priceLabel').text("价格: " + price);

        modal.show();
    });

    span.on('click', function() {
        modal.hide();
    });

    $(window).on('click', function(event) {
        if ($(event.target).is(modal)) {
            modal.hide();
        }
    });
});