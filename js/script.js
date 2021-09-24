// evet pada saat link di klik

$('.page-scroll').on('click', function(e){
	
	
	// ambil isi href
	let tujuan = $(this).attr('href');
	//tangkap element
	let elementTujuan = $(tujuan);

	$('html, body').animate({
		scrollTop: elementTujuan.offset().top - 50
	}, 1250, 'swing');

	e.preventDefault();


});

//parallex
//about
$(window).on('load',function(){
	$('.pKiri').addClass('pMuncul'); //buat aktifin yang kiri
	$('.pKanan').addClass('pMuncul'); //buat aktifin yang kanan
});


//


$(window).scroll(function () {
	//jumbotron
	//buat liat pixel saat di scroll
	var wScroll = $(this) .scrollTop();

	//buat effect parallex di foto profile
	$('.jumbotron img').css({
		'transform':'translate(0, '+wScroll/4+'%) '
	});
	//effect di judul atau h1 nya
	$('.jumbotron h1').css({
		'transform':'translate(0, '+wScroll/2+'%) '
	});
	//effect di p (paragraf) nya
	$('.jumbotron p').css({
		'transform':'translate(0, '+wScroll/1.2+'%) '
	});

	//portfolio
	//buat atur jarak munculnya
	if(wScroll > $('.portfolio').offset().top - 250){

		//buat atur munculnya satu satu
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300*(i+1)); //buat atur waktunya
		});

	};


});