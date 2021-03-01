! function(window) {
	/* 设计图文档宽度 */
	var docWidth = 720;
	var doc = window.document,
		docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	var recalc = (function refreshRem() {
		/* 窗口当前宽度 */
		var clientWidth = docEl.getBoundingClientRect().width;
		/* 页面宽度大于 750 时不再放大 */
		clientWidth = clientWidth > 720 ? 720 : clientWidth;
		var oldSize = (clientWidth / docWidth * 100) + 'px';
		docEl.style.fontSize = oldSize;

		/* 获取设置后的字体大小情况 - 因微信设置APP字体大小后会影响该设置 */
		var nowSize = window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize;
		var oldSizeValue = parseFloat(oldSize, 10);
		var nowSizeValue = parseFloat(nowSize, 10);

		/* 当差值大于1时重新按差比计算出正确的px值 */
		if((nowSizeValue - oldSizeValue) > 1 || (nowSizeValue - oldSizeValue) < -1) {
			var diff = (oldSizeValue / nowSizeValue);
			docEl.style.fontSize = ((clientWidth / docWidth * 100) * diff) + 'px';
		}
		return refreshRem;
	})();
	/* 添加倍屏标识，安卓为1 */
	docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1);
	if(/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
		/* 添加IOS标识 */
		doc.documentElement.classList.add('ios');
		/* IOS8以上给html添加hairline样式，以便特殊处理 */
		if(parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
			doc.documentElement.classList.add('hairline');
	}
	if(!doc.addEventListener) return;
	window.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
}(window);