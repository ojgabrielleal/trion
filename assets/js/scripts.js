// Google Tag Manager
(function (w, d, s, l, i) {
	w[l] = w[l] || []; w[l].push({
		'gtm.start':
			new Date().getTime(), event: 'gtm.js'
	}); var f = d.getElementsByTagName(s)[0],
		j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
			'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-556TDW86');

// Atualiza a data na barra de aviso
const date = new Date();
$('.trion-bar-text').text(`Hoje, dia ${date.getDate()} de ${date.toLocaleString('pt-br', { month: 'long' })}, estamos finalizando a entrada de novos membros no copy trade da TRION.`);

// Números aleatórios animados para estatística 
$(function () {
	function randomAbove(min) {
		const max = 300;
		// garante inteiros e produz um número entre min e max (inclusive)
		const minInt = Math.ceil(min);
		const maxInt = Math.floor(max);
		if (minInt > maxInt) return minInt;
		return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
	}

	function updateStatistic() {
		const $strong = $('.trion-statistic-data strong');
		if ($strong.length === 0) return;
		const num = randomAbove(0);
		$strong.text(num.toLocaleString('pt-BR'));
		// usar animate.css: adiciona classes e remove após término da animação
		$strong.addClass('animate__animated animate__pulse animate__faster');
		$strong.one('animationend webkitAnimationEnd', function () {
			$(this).removeClass('animate__animated animate__pulse animate__faster');
		});
	}

	updateStatistic();
	setInterval(updateStatistic, 30000);
});

// Mostrar botão de ação após 4 minutos do vídeo
$(function () {
	const $video = $('.trion-video video');
	const $button = $('.trion-action-button');

	if (!$video.length || !$button.length) return;

	const CTA_TIME = 2 * 60 + 30; // 3:30 = 210s
	let shown = false;

	$video.on('timeupdate', function () {
		if (this.currentTime >= CTA_TIME && !shown) {
			shown = true;
			$button.fadeIn(400); // efeito suave
		}
	});
});
