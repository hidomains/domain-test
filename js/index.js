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
            <p>1: ${domain} <a href="https://dan.com" target="_blank">高级名称的TLD链接</a>。要购买域名，请使用“立即购买”按钮并通过 <a href="https://dan.com" target="_blank">DAN.com</a> 完成流程。域名将在 24 小时内交付给您。</p>
            <p>2: 此域名支持分期付款-先祖后买方式。自定义期限，最大支持期限为12期。</p>
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