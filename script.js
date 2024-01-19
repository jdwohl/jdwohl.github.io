const baseUrl = window.location.origin;

$('#aboutme-sections li').click(function (e) {
	window.location.href = `${baseUrl}#${e.target.dataset.section}`;
});

$('.course-highlights > li > ul > li > p').click(function (e) {
	if ($(this).siblings().css('display') === 'none') {
		$(this)
			.siblings()
			.slideDown(() => {
				$(this).siblings().css('display', 'flex');
			});
		$(this).children('span').remove();
		$(this).append('<span> ▼</span>');
	} else {
		$(this)
			.siblings()
			.slideUp(() => {});
		$(this).children('span').remove();
		$(this).append('<span> ▶</span>');
	}
});

$('a.course-link').click(function (e) {
	console.log(e.target.dataset.courseid);
	open_coursebox(e.target.dataset.courseid);
});

open_coursebox = function (courseid) {
	console.log(courseid + 'selected');
	switch (courseid) {
		case '102':
			$('#cs-beginner').slideDown(() => {
				$('#cs-beginner').css('display', 'flex');
			});
			$('#cs-beginner').siblings().children('span').remove();
			$('#cs-beginner').siblings().append('<span> ▼</span>');
			window.location.href = `${baseUrl}#cs102-description}`;
			break;
		case '224':
			$('#cs-intermediate').slideDown(() => {
				$('#cs-intermediate').css('display', 'flex');
			});
			$('#cs-intermediate').siblings().children('span').remove();
			$('#cs-intermediate').siblings().append('<span> ▼</span>');
			window.location.href = `${baseUrl}#cs224-description}`;
			break;
		case '314':
			$('#cs-advanced').slideDown(() => {
				$('#cs-advanced').css('display', 'flex');
			});
			$('#cs-advanced').siblings().children('span').remove();
			$('#cs-advanced').siblings().append('<span> ▼</span>');
			window.location.href = `${baseUrl}#cs314-description}`;
			break;
	}
};
