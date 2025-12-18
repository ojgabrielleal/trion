const date = new Date();
$('.trion-bar-text').text(`Hoje, dia ${date.getDate()} de ${date.toLocaleString('pt-br', { month: 'long' })}, estamos finalizando a entrada de novos membros no copy trade da TRION.`);


// stastisc 
$(function() {
	function randomAbove(min) {
		return Math.floor(Math.random() * 9500) + (min + 1);
	}

	function updateStatistic() {
		const $strong = $('.trion-statistic-data strong');
		if ($strong.length === 0) return;
		const num = randomAbove(500);
		$strong.text(num.toLocaleString('pt-BR'));
		// usar animate.css: adiciona classes e remove após término da animação
		$strong.addClass('animate__animated animate__pulse animate__faster');
		$strong.one('animationend webkitAnimationEnd', function() {
			$(this).removeClass('animate__animated animate__pulse animate__faster');
		});
	}

	updateStatistic();
	setInterval(updateStatistic, 30000);
});
