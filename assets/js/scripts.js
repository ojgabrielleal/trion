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

// Vturber Smart Player
var s = document.createElement("script"); s.src = "https://scripts.converteai.net/df781ff3-69a4-4131-9ca0-6d76c44e355e/players/694ad4017fac75e58d22ecfd/v4/player.js", s.async = !0, document.head.appendChild(s);

// Mostrar botão de ação após 7:45 do vídeo
$(function () {
	const CTA_TIME = (7 * 60) + 45; // 7:45
	let shown = false;

	// Cria o botão dinamicamente (mas não insere ainda)
	const $button = $('<a>', {
		href: 'https://t.me/+3_qJRBpgsb85NGVh',
		target: '_blank',
		class: 'trion-action-button animate__animated animate__pulse animate__infinite',
		text: 'Fazer adesão	'
	}).hide();

	// Aguarda o player vturb carregar
	const checkPlayer = setInterval(function () {
		if (window.smartplayer && window.smartplayer.instances) {
			const player = window.smartplayer.instances[0];

			if (player) {
				clearInterval(checkPlayer);

				// Insere o botão logo abaixo do vídeo
				$('.trion-video').after($button);

				// Monitora o tempo do vídeo
				player.on('timeupdate', function (currentTime) {
					if (currentTime >= CTA_TIME && !shown) {
						shown = true;
						$button.fadeIn(400);
					}
				});
			}
		}
	}, 100);
});

// Pixel ID
window.pixelId = "694af1a59cc59c94e3bf5cfc";
var a = document.createElement("script");
a.setAttribute("async", "");
a.setAttribute("defer", "");
a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
document.head.appendChild(a);