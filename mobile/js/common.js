$(function() {
	// 底部tab
	(function() {
		$('#footer .item').on('click', function() {
			$('#footer .item').removeClass('active');
			$(this).addClass('active');

			let tabIndex = $(this).attr('data-index');
			if (tabIndex === '1') {
				// 门店信息
				// window.location.href = '/'
				window.location.href = './index.html'
			} else if (tabIndex === '2') {
				// window.location.reload()
				window.location.href = './map.html'
				// window.location.reload()
				// // 门店地图
				// if (!window.location.href.includes('/map.html')) {
				// 	window.location.href = './pages/map.html'
				// } else {
				// 	window.location.reload()
				// }
			} else if (tabIndex === '3') {
				window.location.href = './my.html'
				// window.location.reload()
				// // 门店地图
				// if (!window.location.href.includes('/my.html')) {
				// 
				// } else {
				// 	window.location.reload()
				// }
			}
		})
	})()
})
