document.body.onload = function() {
	setTimeout(function(){
		var preloader = document.getElementById('preloader')
		var body = document.getElementById('body')
		if( !preloader.classList.contains('done')) {
			preloader.classList.add('done')
			body.style.overflow = 'auto';
		}
	});
}