function pulsar(e) { // Captar pulsaciones de teclas.
	var evento = e || window.event;
	var tecla = evento.keyCode;
	if(tecla==37) {
		changeScreen(dir='left');
		return false;
	}
	if(tecla==39) {
		changeScreen(dir='right');
		return false;
	}
	alert('pulsa');
}

function offsetElement(obj,side) { // Devuelve la posición exacta de un objeto.
	switch(side) {
		case 'top':
			posicion = obj.position().top;
			break;
		case 'left':
			posicion = obj.position().left;
			break;
		case 'right':
			posicion = obj.position().right;
			break;
		case 'bottom':
			posicion = obj.position().bottom;
			break;
	}
	return posicion;
}

function windowRezise() { // Se activa cuando cambiamos el tamaño del navedador.
    W = $(window).width();
    H = $(window).height();
    num = $('#currentScreen').val();

    $('.body, .container').width(W).height(H);
	$('.screen'+num).css({'top':parseInt((H/2)-($('.screen'+num).height()/2),10),'left':parseInt((W/2)-($('.screen'+num).width()/2),10)});
	$('.header').css({'left':parseInt((W/2)-($('.header').width()/2),10)});
    $('.arrow').css({'top':parseInt((H/2)-($('.arrow').height()/2),10)});
	$('.logo').css({'left':parseInt((W/2)-($('.logo').width()/2),10)});
}

var usados = new Array();

function randNum(min,max) { // Número aleatorio entre 2 rangos.
	var aleatorio = Math.floor(Math.random()*(max-(min-1))) + min;
	return aleatorio;
}
function randNoRepeat(min,max) { // Número aleatorio NO REPETIDO entre 2 rangos.
	while (repe !== false) {
		var aleatorio = Math.floor(Math.random()*(max-min+1))+min;
		var repe = repetido(aleatorio);
	}
	usados.push(aleatorio);
	return aleatorio;
}
function repetido(num) {
	var repe = false;
	for (i=0; i<usados.length; i++) {
		if (num == usados[i]) {
			repe = true;
		}
	}
	return repe;
}

function toggleIMG(pantalla,objeto,eleme,clase)  {
	switch(clase) {
		case 1:
			color = 'blue';
			break;
		case 2:
			color = 'white';
			break;
		case 3:
			color = 'yellow';
			break;
		case 4:
			color = 'green';
			break;
		case 5:
			color = 'orange';
			break;
		case 6:
			color = 'purple';
			break;
		case 7:
			color = 'red';
			break;
	}
	$('.'+objeto+':nth-child('+eleme+') img').attr('src','img/'+pantalla+'/'+objeto+'_'+color+'.png');
}

function arrows() { // Muestra las flechas de control.
    $('.arrow').fadeIn('slow');
	setTimeout(function() { $('.arrow').fadeOut('slow'); }, 3000);
}

function changeScreen(dir,pantalla) { // Cambio entre pantallas.
	newCurrentScreen = 0;
    currentScreen = parseInt($('#currentScreen').val(),10);
	prevScreen = parseInt(currentScreen-1,10);
	nextScreen = parseInt(currentScreen+1,10);
	minLimit = '1';
	maxLimit = '5';

	$('.screen'+currentScreen).fadeOut();
	$('.arrow').fadeIn();

	if(dir!='none') {
		if(dir=='left') {
			$('.screen'+prevScreen).fadeIn();
			newCurrentScreen = prevScreen;
		}
		if(dir=='right') {
			$('.screen'+nextScreen).fadeIn();
			newCurrentScreen = nextScreen;
		}
	} else {
		$('.screen'+pantalla).fadeIn();
		newCurrentScreen = pantalla;
	}
	
	switch(newCurrentScreen) {
		case 1:
			screen1();
			break;
		case 2:
			screen2();
			break;
		case 3:
			screen3();
			break;
		case 4:
			screen4();
			break;
		case 5:
			screen5();
			break;
		case 6:
			screen6();
			break;
		case 7:
			screen7();
			break;
		case 8:
			screen8();
			break;
		case 9:
			screen9();
			break;
		case 10:
			screen10();
			break;
		case 11:
			screen11();
			break;
		case 12:
			screen12();
			break;
	}
	
	$('#currentScreen').val(newCurrentScreen);
	windowRezise();
}

function screen1() // Animación Pantalla 1
{
	$('.toLeft').hide();

	$('.man').each(function(index) {
		var obj = $(this);
		var side = 'left';
		var left = offsetElement(obj,side);
		obj.attr('data-left', left);
	});

	if ($('.logo').css('font-family') == 'Arial') {
		$('.clean').height(20);
	} else {
		$('.clean').height(60);
	}
	$('.btext1').css({'left':'-280%','opacity':'1'});
	$('.btext2').css({'top':'1000px','opacity':'1'});
	$('.textos img').css({'opacity':'0'});
	$('.mans').css({'borderLeft':'4px solid transparent'});
	$('.man').css({'left':'200%','opacity':'1'});

	setTimeout(function() {
		$('.man').each(function(index) {
			var obj = $(this);
			var trueLeft = obj.data('left');
			time = parseInt((index+'000')/5,10);
			obj.delay(time).animate({left:trueLeft}, 'slow', 'easeOutExpo');
		});
		colors = setInterval(function() {
			toggleIMG('screen1', 'man', randNum(1,21), randNum(1,5));
		}, 1);
	}, 1500);
	setTimeout(function() {
		$('.btext1').animate({left:0}, 'slow', 'easeOutExpo');
		$('.btext2').delay(1000).animate({top:0}, 'slow', 'easeOutExpo');
		$('.textos img').delay(1500).animate({opacity:1}, 'slow', 'easeOutExpo');
		$('.mans').delay(2000).css({'borderLeft':'4px solid #d6d6d6'});
	}, 2500);
	setTimeout(function() {
		clearInterval(colors);
		$('.he img').attr('src','img/screen1/man_gradient.png');
		$('.man:not(".he") img').attr('src','img/screen1/man_white.png');
		setTimeout(function() {
			$('.he img').attr('src','img/screen1/man_orange.png');
		}, 1000);
	}, 7000);
}

function screen2() // Animación Pantalla 2
{
	$('.tG').each(function(index) {
		var obj = $(this);
		var side = 'top';
		var top = offsetElement(obj,side);
		obj.attr('data-top', top);
	});
	$('.tO').each(function(index) {
		var obj = $(this);
		var side = 'left';
		var left = offsetElement(obj,side);
		obj.attr('data-left', left);
	});
	$('.tUp').each(function(index) {
		var obj = $(this);
		var side = 'top';
		var top = offsetElement(obj,side);
		obj.attr('data-top', top);
	});
	$('.tUp1').each(function(index) {
		var obj = $(this);
		var side = 'top';
		var top = offsetElement(obj,side);
		obj.attr('data-top', top);
	});
	$('.tDown').each(function(index) {
		var obj = $(this);
		var side = 'top';
		var top = offsetElement(obj,side);
		obj.attr('data-top', top);
	});
	$('.tDown1').each(function(index) {
		var obj = $(this);
		var side = 'top';
		var top = offsetElement(obj,side);
		obj.attr('data-top', top);
	});
	$('.tLeft').each(function(index) {
		var obj = $(this);
		var side = 'left';
		var left = offsetElement(obj,side);
		obj.attr('data-left', left);
	});
	$('.tRight').each(function(index) {
		var obj = $(this);
		var side = 'left';
		var left = offsetElement(obj,side);
		obj.attr('data-left', left);
	});

	$('.body').css({'background-color': '#0a4ca6'});
	$('.clean').height(80);

	$('.final img').hide();
	$('.parrafoHide').hide();
	$('.tG, .tUp, .tUp1').css({'top':'-250%','opacity':'1'});
	$('.tO, .tLeft').css({'left':'-250%','opacity':'1'});
	$('.tDown, .tDown1').css({'top':'250%','opacity':'1'});
	$('.tRight').css({'left':'250%','opacity':'1'});
	$('.tZoomIn').css({'transform':'scale(0)','-o-transform':'scale(0)','-ms-transform':'scale(0)','-moz-transform':'scale(0)','-webkit-transform':'scale(0)'});
	$('.tZoomOut').css({'opacity':'0','transform':'scale(8)','-o-transform':'scale(8)','-ms-transform':'scale(8)','-moz-transform':'scale(8)','-webkit-transform':'scale(8)'});
	
	setTimeout(function() {
		$('.tG').each(function(index) {
			var obj = $(this);
			var trueTop = parseInt(obj.data('top')+60 ,10);
			time = parseInt((index+'000')/1,10);
			obj.delay(time).animate({top:trueTop}, 1000, 'easeOutExpo');
		});
		$('.tUp1').each(function(index) {
			var obj = $(this);
			var trueTop = parseInt(obj.data('top')+0 ,10);
			time = parseInt((index+'000')/1,10);
			obj.delay(time).animate({top:trueTop}, 1000, 'easeOutExpo');
		});
		$('.tDown1').each(function(index) {
			var obj = $(this);
			var trueTop = parseInt(obj.data('top')+0 ,10);
			time = parseInt((index+'000')/1,10);
			obj.delay(time).animate({top:trueTop}, 1000, 'easeOutExpo');
		});
		$('.tRight').each(function(index) {
			var obj = $(this);
			var trueLeft = obj.data('left');
			time = parseInt((index+'000')/1,10);
			obj.delay(time).animate({left:trueLeft}, 1200, 'easeOutExpo');
		});
	}, 1000);
	setTimeout(function() {
		$('.tO').each(function(index) {
			var obj = $(this);
			var trueLeft = obj.data('left');
			time = parseInt((index+'000')/1,10);
			obj.delay(time).animate({left:trueLeft}, 1200, 'easeOutExpo');
		});
		$('.tZoomIn').each(function(index) {
			time = parseInt((index+'000')/2,10);
			$(this).delay(time).transition({scale:1,'opacity':'1'}, 1500, 'ease');
		});
		$('.tZoomOut').each(function(index) {
			time = parseInt((index+'000')/2,10);
			$(this).delay(time).transition({scale:1,'opacity':'1'}, 1500, 'ease');
		});
		$('.tRot').transition({'rotate':'450deg','opacity':'1'}, 500, 'ease');
	}, 1500);
	setTimeout(function() {
		$('.tUp').each(function(index) {
			var obj = $(this);
			var trueTop = parseInt(obj.data('top')+35 ,10);
			time = parseInt((index+'000')/1,10);
			obj.delay(time).animate({top:trueTop}, 1000, 'easeOutExpo');
		});
		$('.tDown').each(function(index) {
			var obj = $(this);
			var trueTop = parseInt(obj.data('top')+30 ,10);
			time = parseInt((index+'000')/1,10);
			obj.delay(time).animate({top:trueTop}, 1000, 'easeOutExpo');
		});
		$('.tLeft').each(function(index) {
			var obj = $(this);
			var trueLeft = obj.data('left');
			time = parseInt((index+'000')/1,10);
			obj.delay(time).animate({left:trueLeft}, 1200, 'easeOutExpo');
		});
	}, 2000);
	setTimeout(function() {
		$('.final img').delay(2000).fadeIn();
		$('.parrafo').delay(1000).css({'opacity':'1'}).fadeIn('slow').scrambledWriter();
		$('.parrafo').delay(4000).fadeOut('fast');
		$('.parrafoHide').delay(5000).css({'opacity':'1'}).fadeIn();
	}, 7000);
}

function screen3() // Animación Pantalla 3
{
	$('.body').css({'background-color': '#57a51b'});

	$('.clean').height(125);

	$('.imgLeft').css({'left':'-500%','opacity':'1'});
	$('.imgRight').css({'right':'-500%','opacity':'1'});
	$('.medium span img').css({'top':'400%','opacity':'0'});
	$('.medium div').css({'border-color':'transparent'});

	$('.step1').fadeIn('slow').css({'top':parseInt((H/2)-($('.step1').height()/2),10),'left':parseInt((W/2)-($('.step1').width()/2),10)});
	$('.parrafo2').typewriter().delay(2000).css({'opacity':'1'});
	
	setTimeout(function() {
		$('.imgLeft').each(function(index) {
			var obj = $(this);
			var trueLeft = 0;
			time = parseInt((index+'000')/1,10);
			obj.delay(time).animate({left:trueLeft}, 2000, 'easeOutCirc');
		});
		$('.imgRight').each(function(index) {
			var obj = $(this);
			var trueRight = 0;
			time = parseInt((index+'000')/1,10);
			obj.delay(time).animate({right:trueRight}, 2000, 'easeOutCirc');
		});
	}, 2000);
	setTimeout(function() {
		$('.medium div').delay(3000).css({'border-color':'green'});
		$('.medium span img').delay(2000).each(function() {
			$(this).animate({top:0,opacity:1}, 2000, 'easeOutExpo');
		});
	}, 4000);
	setTimeout(function() {
		$('.parrafo2').css({'opacity':'0'});
		$('.parrafoHide2').css({'opacity':'1'}).show();
	}, 8000);
}

function screen4() // Animación Pantalla 4
{
	$('.prod1').each(function(index) {
		var obj = $(this);
		var top = obj.css('top');
		obj.attr('data-top', top);
	});

	$('.body').css({'background-color': '#57a51b'});

	$('.clean').height(125);

	$('.caja, .parrafoHide2').css({'opacity':'0'});
	$('.ptxt1').css({'left':'-300%'});
	$('.ptxt2').css({'left':'300%'});
	$('.ptxt3').css({'top':'1500px'});
	$('.ptxt4').css({'opacity':'0'});
	$('.prods1').css({'opacity':'0'});
	$('.prod1').css({'top':'-200%'});
	$('.shadow1').css({'opacity':'0'});

	$('.step2').fadeIn('slow').css({'top':parseInt((H/2)-($('.step2').height()/2),10),'left':parseInt((W/2)-($('.step2').width()/2),10)});
	// windowRezise();
	setTimeout(function() {
		$('.prods1').animate({opacity:1}, 'slow', 'easeOutExpo');
	}, 1000);
	setTimeout(function() {
		$('.prod1').each(function(index) {
			var obj = $(this);
			var trueTop = obj.data('top');
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({top:trueTop}, 1500, 'easeOutBounce');
		});
		$('.ptxt1').delay(1000).animate({left:0}, 'slow', 'easeOutExpo');
		$('.ptxt2').delay(2000).animate({left:0}, 'slow', 'easeOutExpo');
		$('.ptxt3').delay(3000).animate({top:0}, 'slow', 'easeOutExpo');
		$('.ptxt4').delay(4000).animate({opacity:1}, 'slow', 'easeOutExpo');
	}, 2000);
	setTimeout(function() {
		$('.shadow1').animate({opacity:0.8}, 1000, 'linear');
	}, 5000);
}

function screen5() // Animación Pantalla 5
{
	$('.prod2').each(function(index) {
		var obj = $(this);
		var top = obj.css('top');
		obj.attr('data-top', top);
	});

	$('.body').css({'background-color': '#57a51b'});

	$('.clean').height(125);

	$('.caja, .parrafoHide2').css({'opacity':'0'});
	$('.ptxt5').css({'left':'-300%'});
	$('.ptxt6').css({'left':'300%'});
	$('.ptxt7').css({'top':'1500px'});
	$('.ptxt8').css({'opacity':'0'});
	$('.prods2').css({'opacity':'0'});
	$('.prod2').css({'top':'-200%'});
	$('.shadow2').css({'opacity':'0'});

	$('.step3').fadeIn('slow').css({'top':parseInt((H/2)-($('.step3').height()/2),10),'left':parseInt((W/2)-($('.step3').width()/2),10)});
	// windowRezise();
	setTimeout(function() {
		$('.prods2').animate({opacity:1}, 'slow', 'easeOutExpo');
	}, 1000);
	setTimeout(function() {
		$('.prod2').each(function(index) {
			var obj = $(this);
			var trueTop = obj.data('top');
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({top:trueTop}, 1500, 'easeOutBounce');
		});
		$('.ptxt5').delay(1000).animate({left:0}, 'slow', 'easeOutExpo');
		$('.ptxt6').delay(2000).animate({left:0}, 'slow', 'easeOutExpo');
		$('.ptxt7').delay(3000).animate({top:0}, 'slow', 'easeOutExpo');
		$('.ptxt8').delay(4000).animate({opacity:1}, 'slow', 'easeOutExpo');
	}, 2000);
	setTimeout(function() {
		$('.shadow2').animate({opacity:0.8}, 1000, 'linear');
	}, 5000);
	setTimeout(function() {
		$('.caja').animate({opacity:1}, 'slow', 'easeOutExpo');
	}, 4000);
}

function screen6() // Animación Pantalla 6
{
	var horas = 10, minutos = 20, segundos = 14, milisegundos = 0;

	function timer() {
		++segundos;
		if (segundos > 59) { segundos = 0; ++minutos; }
		if (minutos > 59) { minutos = 0; ++horas; }
		if (horas > 59) { horas = 0; }
		cad = "";
		if (horas < 10) cad += "0";
		cad = cad + horas;
		cad += ":";
		if (minutos < 10) cad += "0";
		cad = cad + minutos;
		cad += ":";
		if (segundos < 10) cad += "0";
		cad = cad + segundos;
		$('.timer').val(cad);
	}
	countdown = setInterval(function() {
		timer();
	}, 1000);

	function timer1() {
		++milisegundos;
		if (milisegundos == 99) { milisegundos = 0; }
		cad = "";
		if (milisegundos < 10) cad += "0";
		cad = cad + milisegundos;
		cad = ":" + cad;
		$('.timer1').val(cad);
	}
	countdown1 = setInterval(function() {
		timer1();
	}, 10);

	$('.body').css({'background-color': '#57a51b'});

	$('.clean').height(100);
	$('.tx1Hide, .tx2Hide').hide();
	$('.tx1, .tx2, .cuadro2').css({'opacity':'0'});
	$('.cuadro1').css({'display':'block','opacity':'0','transform':'scale(0.1)','-o-transform':'scale(0.1)','-ms-transform':'scale(0.1)','-moz-transform':'scale(0.1)','-webkit-transform':'scale(0.1)'});
	
	setTimeout(function() {
		$('.cuadro1').transition({scale:1,'opacity':'1'}, 2000, 'ease');
	}, 1000);
	setTimeout(function() {
		$('.tx1').textillate({ in: { effect: 'fadeInLeftBig' } });
	}, 2000);
	setTimeout(function() {
		$('.tx1').css({'opacity':'1'});
	}, 3000);
	setTimeout(function() {
		$('.tx2').textillate({ in: { effect: 'fadeInRightBig' } });
	}, 4000);
	setTimeout(function() {
		$('.tx2, .cuadro2').css({'opacity':'1'});
	}, 5000);
	setTimeout(function() {
		$('.cuadro1').fadeOut('slow');
	}, 14000);
}

function screen7() // Animación Pantalla 7
{
	clearInterval(countdown, countdown1);

	$('.pieza').each(function(index) {
		var obj = $(this);
		var top = offsetElement(obj,'top');
		var left = offsetElement(obj,'left');
		obj.attr({'data-top':top,'data-left':left});
	});

	realWidth = $('.figura').css('max-width');
	realHeight = $('.figura').css('max-height');

	$('.clean').height(120);
	$('.body').css({'background-color': '#d7d7d7'});
	$('.figura').css({'width':realWidth,'height':realHeight});
	$('.parlamentos p').css({'opacity':'0'});
	$('.parlamentoFinal small:nth-child(1)').css({'top':'1500px'});
	$('.parlamentoFinal small:nth-child(2)').css({'left':'1500px'});
	$('.parlamentoFinal small:nth-child(3)').css({'top':'-1500px'});
	$('.parlamentoFinal small:nth-child(4)').css({'left':'-1500px'});
	$('.full, .promo, .humana').css({'opacity':'0'});
	$('.promo, .humana').css({'transform':'scale(0)','-o-transform':'scale(0)','-ms-transform':'scale(0)','-moz-transform':'scale(0)','-webkit-transform':'scale(0)'});
	$('.pieza, .piezas').css({'display':'block','opacity':'0'});

	setTimeout(function() {
		var top1 = parseInt($('.figura').height()+($('.figura').height()/2),10);
		$('.pieza').css({'top':top1}).addClass('float');
		$('.parlamento').textillate({ in: { effect: 'fadeInDown' } });
		$('.parlamentoFinal small:nth-child(1)').animate({top:0}, 2000, 'easeInOutExpo');
		$('.parlamentoFinal small:nth-child(2)').delay(2000).animate({left:0}, 2000, 'easeInOutExpo');
		$('.parlamentoFinal small:nth-child(3)').delay(3500).animate({top:0}, 2000, 'easeInOutExpo');
		$('.parlamentoFinal small:nth-child(4)').delay(5000).animate({left:0}, 2000, 'easeInOutExpo');
	}, 100);
	setTimeout(function() {
		$('.parlamentos p').css({'opacity':'1'});
	}, 1000);
	setTimeout(function() {
		$('.pieza').each(function(index) {
			obj = $(this);
			time = parseInt((index+'00')/2,10);
			obj.animate({opacity:1}, 1500, 'linear');
		});
	}, 3000);
	setTimeout(function() {
		var top2 = parseInt($('.figura').height()+($('.figura').height()/6),10);
		$('.pieza').each(function(index) {
			time = parseInt((index+'00')/2,10);
			$(this).delay(time).animate({top:top2}, 1000, 'easeOutExpo');
		});
	}, 7000);
	setTimeout(function() {
		$('.pieza').each(function(index) {
			var trueTop = $(this).data('top');
			var trueLeft = $(this).data('left');
			time = parseInt((index+'00')/2,10);
			$(this).delay(time).animate({top:trueTop,left:trueLeft}, 1000, 'easeInExpo');
		});
	}, 8000);
	setTimeout(function() {
		$('.piezas').animate({opacity:1}, 2000, 'linear');
		$('.pieza').fadeOut(2000);
	}, 11000);
	setTimeout(function() {
		$('.armado').animate({opacity:1}, 2000, 'linear');
		$('.piezas').fadeOut(2000);
		$('.figura').animate({width:70,height:75}, 2000, 'linear');
	}, 13000);
	setTimeout(function() {
		newT = $(window).height();
		newTop = parseInt((newT/2)-($('.screen7').height()/2),10);
		$('.screen7').animate({top:newTop}, 1000, 'easeOutBounce');
		$('.promo, .humana').transition({opacity:1,scale:1}, 1000, 'ease');
	}, 15000);
}

function screen8() // Animación Pantalla 8
{
	video1.volume = 0;
	video2.volume = 0;
	video3.volume = 0;

	$('.clean').height(70);
	$('.megaContent').css({'opacity':'0'});
	$('.doll').css({'opacity':'0','transform':'scale(10)','-o-transform':'scale(10)','-ms-transform':'scale(10)','-moz-transform':'scale(10)','-webkit-transform':'scale(10)'});
	$('.doll img').each(function() {
		$(this).attr('src','img/screen6/doll_orange.png');
	});
	$('.letras1').show();
	$('.letras1 .p1').css({'opacity':'0'});
	$('.letras1 .p2').css({'opacity':'0','left':'1000px'});
	$('.letras1 .p3').css({'opacity':'0','transform':'scale(0.1)','-o-transform':'scale(0.1)','-ms-transform':'scale(0.1)','-moz-transform':'scale(0.1)','-webkit-transform':'scale(0.1)'});
	$('.letras1 .p4').css({'opacity':'0','top':'1000px'});

	setTimeout(function() {
		$('.megaContent').animate({opacity:1}, 1000, 'easeOutCirc');
	}, 1000);
	setTimeout(function() {
		$('.letras1 .p1').textillate({ in: { effect: 'rotateInDownRight' } });
	}, 1000);
	setTimeout(function() {
		$('.letras1 .p1').css({'opacity':'1'});
	}, 1500);
	setTimeout(function() {
		$('.doll').each(function(index) {
			time = parseInt((randNoRepeat(1,36))+'00',10);
			$(this).delay(time).transition({scale:1,'opacity':'1'}, 2000, 'ease');
		});
	}, 3000);
	setTimeout(function() {
		colors = setInterval(function() {
			toggleIMG('screen6', 'doll', randNum(1,18), randNum(4,7));
		}, 1);
	}, 8500);
	setTimeout(function() {
		$('.letras1 .p2').animate({left:0,opacity:1}, 2000, 'easeOutCirc');
	}, 9000);
	setTimeout(function() {
		$('.letras1 .p3').transition({scale:1,'opacity':'1'}, 2000, 'ease');
	}, 10500);
	setTimeout(function() {
		$('.letras1 .p4').animate({top:0,opacity:1}, 2000, 'easeOutCirc');
	}, 12000);
	setTimeout(function() {
		clearInterval(colors);
	}, 16000);
}

function screen9() // Animación Pantalla 9
{
	$('.clean').height(90);
	$('.body').css({'background-color': '#0a4ca6'});

	f1W = $('.flecha1').width();
	f1H = $('.flecha1').height();
	f2W = $('.flecha2').width();
	f2H = $('.flecha2').height();
	f3W = $('.flecha3').width();
	f3H = $('.flecha3').height();

	video1.load();
	video2.load();
	video3.load();
	video.volume = 0;
	video1.volume = 1;
	video2.volume = 1;
	video3.volume = 1;

	$('.video').hide();
	$('.flecha').width(0).height(0);
	$('.pantalla p').show();
	$('.monitor, .pantalla').css({'opacity':'0'});
	$('.pantalla p:nth-child(1)').css({'left':'-1000px'}).transition({skewX:'-30deg'});
	$('.pantalla p:nth-child(2)').css({'top':'1000px'});
	$('.monitor1').css({'left':parseInt(($('.contPantalla').width()/2)-($('.monitor1').width()/2),10)});

	setTimeout(function() {
		$('.monitor1, .pantalla1').animate({opacity:1}, 1500, 'linear', function() {
			$('.pantalla1 p:nth-child(1)').transition({left:0}, 1000, 'snap', function() {
				$('.pantalla1 p:nth-child(1)').transition({skewX:'0deg'}, 200, 'linear');
			});
		});
	}, 500);
	setTimeout(function() {
		$('.pantalla1 p:nth-child(2)').animate({top:0}, 1000, 'easeOutExpo');
	}, 2000);
	setTimeout(function() {
		$('.flecha2').css({'opacity':'1'}).height(10);
		$('.flecha2').animate({width:f2W}, 500, 'linear', function() {
			$('.flecha2').animate({height:f2H}, 500, 'linear');
		});
	}, 6000); // 3000
	setTimeout(function() {
		$('.monitor2, .pantalla2').animate({opacity:1}, 1500, 'linear', function() {
			$('.pantalla2 p:nth-child(1)').transition({left:0}, 1000, 'snap', function() {
				$('.pantalla2 p:nth-child(1)').transition({skewX:'0deg'}, 200, 'linear');
			});
		});
	}, 7000);
	setTimeout(function() {
		$('.pantalla2 p:nth-child(2)').animate({top:0}, 1000, 'easeOutExpo');
	}, 8500);
	setTimeout(function() {
		$('.flecha3').css({'opacity':'1'}).height(f3H);
		$('.flecha3').animate({width:f3W}, 500, 'linear');
	}, 12500); // 6500
	setTimeout(function() {
		$('.monitor3, .pantalla3').animate({opacity:1}, 1500, 'linear', function() {
			$('.pantalla3 p:nth-child(1)').transition({left:0}, 1000, 'snap', function() {
				$('.pantalla3 p:nth-child(1)').transition({skewX:'0deg'}, 200, 'linear');
			});
		});
	}, 13500);
	setTimeout(function() {
		$('.pantalla3 p:nth-child(2)').animate({top:0}, 1000, 'easeOutExpo');
	}, 15000);
	setTimeout(function() {
		$('.flecha1').css({'opacity':'1'}).width(20);
		$('.flecha1').animate({height:f1H}, 500, 'linear', function() {
			$('.flecha1').animate({width:f1W}, 500, 'linear');
		});
	}, 19000);

	setTimeout(function() {
		$('.pantalla1 p').hide();
		$('.pantalla1 .video').fadeIn();
		// var video = document.getElementById('v1');
		video1.play();
	}, 25000);
	setTimeout(function() {
		$('.pantalla2 p').hide();
		$('.pantalla2 .video').fadeIn();
		// var video = document.getElementById('v2');
		video2.play();
	}, 27500);
	setTimeout(function() {
		$('.pantalla3 p').hide();
		$('.pantalla3 .video').fadeIn();
		// var video = document.getElementById('v3');
		video3.play();
	}, 30000);
}

function screen10() // Animación Pantalla 10
{
	video.load();
	video.volume = 1;
	video1.volume = 0;
	video2.volume = 0;
	video3.volume = 0;

	$('.tips').each(function(index) {
		$(this).width(0);
	});

	anchoSlide = $('.slide').width();
	altoSlide = $('.slide').height();

	$('.line').width(0);
	$('.clean').height(100);
	$('.body').css({'background-color': '#0a4ca6'});

	$('.slide').show();
	$('.videox').hide();
	$('.ps1').css({'opacity':'0'});
	$('.ps2').css({'opacity':'0'});
	$('.show').css({'overflow':'visible'});
	$('.screenx, .colors, .icons, .slide').css({'opacity':'0'});
	$('.screenx').css({'top':'1000px'});
	$('.colors').transition({scale:0.1});
	$('.icons').transition({scale:1.9});

	setTimeout(function() {
		$('.ps1').animate({opacity:1}, 3000, 'easeOutCirc');
	}, 1000);
	setTimeout(function() {
		$('.screenx').animate({opacity:1, top:0}, 2000, 'easeOutCirc');
	}, 4000);
	setTimeout(function() {
		$('.colors').transition({opacity:1,scale:1}, 1000, 'ease');
	}, 6000);
	setTimeout(function() {
		$('.icons').transition({opacity:1,scale:1}, 1000, 'ease');
	}, 7000);
	setTimeout(function() {
		$('.show').css({'overflow':'hidden'});
		$('.slide').animate({opacity:1}, 2000, 'easeOutCirc');
	}, 8000);
	setTimeout(function() {
		$('.slide').rcarousel({
			width: anchoSlide,
			height: altoSlide,
			visible: 1,
			step: 1,
			speed: 500,
			auto: { enabled: true, direction: 'next', interval: 1000 }
		});
	}, 9000);
	setTimeout(function() {
		$('.ps2').animate({opacity:1}, 2000, 'easeOutCirc');
	}, 11000);
	setTimeout(function() {
		$('.slide').hide();
		$('.videox').fadeIn('fast', function() {
			video.play();
		});
	}, 15000);
}

function screen11() // Animación Pantalla 11
{
	video.volume = 0;

	function move() {
		for(var i=0; i < 7; i++) {
			$('.brain img').animate({top:-70},100,'linear');
			$('.brain img').animate({top:0},100,'linear');
		}
    }
    function cartel() {
		$('.humano img').animate({top:15}, 700, 'easeInOutSine');
		$('.humano img').animate({top:0}, 700, 'easeInOutSine', cartel);
    }

    arrTop = $('.arrowx').css('top');
    pt1Top = $('.pt1').css('top');
    pt2Left = $('.pt2').css('left');
    ideasW = $('.ideas').width();

	$('.clean').height(90);
	$('.body').css({'background-color': '#57a51b'});
	$('.brain img').css({'transform':'scale(0)','-o-transform':'scale(0)','-ms-transform':'scale(0)','-moz-transform':'scale(0)','-webkit-transform':'scale(0)'});
	$('.humano img').css({'opacity':'0','top':'1000px'});
	$('.arrowx').css({'opacity':'0','top':'-1000px'});
	$('.pt1').css({'opacity':'0'});
	$('.pt1').transition({left:1000,rotate:'1800deg'});
	$('.pt2').css({'opacity':'0','left':'-1000px'});
	$('.pt2 b').css({'opacity':'0'});
	$('.ideas').width(0);

	
	setTimeout(function() {
		$('.brain img').delay(1000).transition({scale:1}, 2000, 'ease');
		$('.pt1').transition({opacity:1,top:90,left:-120,rotate:'-70deg'}, 3000, 'snap', function() {
			$('.pt1').transition({top:pt1Top,left:0,rotate:'0deg'}, 1000, 'ease');
		});
	}, 1500);
	setTimeout(function() {
		move();
		$('.ideas').delay(400).animate({width:ideasW}, 1800, 'linear', function() {
			$('.brain img').animate({top:-15},100,'linear');
		});
	}, 4000);
	setTimeout(function() {
		$('.pt2').animate({opacity:1,left:pt2Left}, 2000, 'easeOutExpo', function() {
			$('.pt2 b').animate({opacity:1}, 2000, 'easeOutExpo');
		});
		$('.arrowx').delay(3000).animate({opacity:1,top:arrTop}, 2000, 'easeOutExpo');
	}, 5000);
	setTimeout(function() {
		$('.humano img').animate({opacity:1,top:0}, 2000, 'easeOutExpo');
	}, 8000);
	setTimeout(function() {
		cartel();
	}, 9000);
}

function screen12() // Animación Pantalla 12
{
	$('.toRight').hide();

	function cutOn() {
		// $('.tijera img:nth-child(1)').css({'background':'url(img/screen10/tijera.png)'});
		$('.tijera img:nth-child(1)').show();
		$('.tijera img:nth-child(2)').hide();
		setTimeout(function() {
			cutOff();
		}, 100);
    }
    function cutOff() {
		// $('.tijera img:nth-child(1)').css({'background':'url(img/screen10/tijera2.png)'});
		$('.tijera img:nth-child(1)').hide();
		$('.tijera img:nth-child(2)').show();
		setTimeout(function() {
			cutOn();
		}, 100);
    }

	$('.clean').height(120);
	$('.body').css({'background-color': '#ef8a38'});

	papW = $('.papel').css('max-width');
	papH = $('.papel').css('max-height');
	mpapW = $('.papel').css('min-width');
	mpapH = $('.papel').css('min-height');
	realPapW = $('.papel').css('max-width');
	realPapH = $('.papel').css('max-height');

	ancho = $('.papel').css('font-size');
	anchoDolls = ancho.substring(0, ancho.length-2);

	$('.url').hide();
	$('.orange').hide();
	$('.silueta').show();
	$('.orange').css({'top':'0'});
	$('.papel').css({'width':realPapW,'height':realPapH});
	$('.orange div').transition({rotateX:'0deg',top:0,left:0});
	$('.orange div p').css({'opacity':'0'});
	$('.silueta').css({'opacity':'0'});
	$('.silueta').attr({'src':'img/screen10/silueta_13.png'});
	$('.tijera img:nth-child(1)').show();
	$('.tijera img:nth-child(2)').hide();

	$('.orange1 div:nth-child(1) img').attr({'src':'img/screen10/siluetaOrange.png'});
	$('.orange1 div:nth-child(2) img').attr({'src':'img/screen10/siluetaOrange.png'});
	$('.orange1 div:nth-child(3) img').attr({'src':'img/screen10/siluetaOrange.png'});
	$('.orange1 div:nth-child(4) img').attr({'src':'img/screen10/siluetaOrange.png'});
	$('.orange1 div:nth-child(5) img').attr({'src':'img/screen10/siluetaOrange.png'});
	$('.orange1 div:nth-child(6) img').attr({'src':'img/screen10/siluetaOrange.png'});
	$('.orange1 div:nth-child(7) img').attr({'src':'img/screen10/siluetaOrange.png'});
	$('.orange2 div:nth-child(1) img').attr({'src':'img/screen10/siluetaOrange.png'});
	$('.orange2 div:nth-child(2) img').attr({'src':'img/screen10/siluetaOrange.png'});
	$('.orange2 div:nth-child(3) img').attr({'src':'img/screen10/siluetaOrange.png'});
	$('.orange2 div:nth-child(4) img').attr({'src':'img/screen10/siluetaOrange.png'});
	$('.orange2 div:nth-child(5) img').attr({'src':'img/screen10/siluetaOrange.png'});
	$('.orange2 div:nth-child(6) img').attr({'src':'img/screen10/siluetaOrange.png'});
	$('.orange2 div:nth-child(7) img').attr({'src':'img/screen10/siluetaOrange.png'});

	alto1 = parseInt(($('.escenario').height()/2)-($('.papel').height()/2),10);
	$('.papel').css({top:alto1,width:papW,height:papH});

	var tijera = $('.tijera');
	var oTop = offsetElement(tijera,'top');
	var oLeft = offsetElement(tijera,'left');
	tijera.attr({'data-top':oTop,'data-left':oLeft}).css({'opacity':'0','top':oTop,'left':oLeft}).transition({rotate:'0deg'});

	setTimeout(function() {
		tijera.css({'top':'1000px','left':'-300px'});
	}, 100);
	setTimeout(function() {
		$('.silueta').animate({'opacity':'1'}, 1000, 'linear');
	}, 500);
	setTimeout(function() {
		avanza = 150;
		gira = 150;
		tijera.css({'opacity':'1'}).animate({top:oTop,left:oLeft}, 1000, 'easeOutExpo', function() {
			cutOn();
			tijera.animate({top:123,left:98}, avanza, 'linear', function() {
				$('.silueta').attr({'src':'img/screen10/silueta_0.png'});
				tijera.transition({rotate:'-130deg'}, gira, 'linear', function() {
					tijera.animate({top:155,left:2}, avanza, 'linear', function() {
						$('.silueta').attr({'src':'img/screen10/silueta_1.png'});
						tijera.transition({rotate:'-39deg'}, gira, 'linear', function() {
							tijera.animate({top:106,left:-13}, avanza, 'linear', function() {
								$('.silueta').attr({'src':'img/screen10/silueta_2.png'});
								tijera.transition({rotate:'44deg'}, gira, 'linear', function() {
									tijera.animate({top:65,left:95}, avanza, 'linear', function() {
										$('.silueta').attr({'src':'img/screen10/silueta_3.png'});
										tijera.transition({rotate:'-20deg'}, gira, 'linear', function() {
											tijera.animate({top:-10,left:95}, avanza, 'linear', function() {
												$('.silueta').attr({'src':'img/screen10/silueta_4.png'});
												tijera.transition({rotate:'42deg'}, gira, 'linear', function() {
													tijera.animate({top:-40,left:140}, avanza, 'linear', function() {
														tijera.transition({rotate:'90deg'}, gira, 'linear', function() {
															tijera.animate({top:-10,left:195}, avanza, 'linear', function() {
																$('.silueta').attr({'src':'img/screen10/silueta_5.png'});
																tijera.transition({rotate:'160deg'}, gira, 'linear', function() {
																	tijera.animate({top:69,left:195}, avanza, 'linear', function() {
																		tijera.transition({rotate:'90deg'}, gira, 'linear', function() {
																			tijera.animate({top:107,left:303}, avanza, 'linear', function() {
																				$('.silueta').attr({'src':'img/screen10/silueta_6.png'});
																				tijera.transition({rotate:'178deg'}, gira, 'linear', function() {
																					tijera.animate({top:152,left:283}, avanza, 'linear', function() {
																						$('.silueta').attr({'src':'img/screen10/silueta_7.png'});
																						tijera.transition({rotate:'270deg'}, gira, 'linear', function() {
																							tijera.animate({top:115,left:180}, avanza, 'linear', function() {
																								$('.silueta').attr({'src':'img/screen10/silueta_8.png'});
																								tijera.transition({rotate:'140deg'}, gira, 'linear', function() {
																									tijera.animate({top:306,left:236}, avanza, 'linear', function() {
																										$('.silueta').attr({'src':'img/screen10/silueta_9.png'});
																										tijera.transition({rotate:'230deg'}, gira, 'linear', function() {
																											tijera.animate({top:317,left:175}, avanza, 'linear', function() {
																												$('.silueta').attr({'src':'img/screen10/silueta_10.png'});
																												tijera.transition({rotate:'320deg'}, gira, 'linear', function() {
																													tijera.animate({top:180,left:140}, avanza, 'linear', function() {
																														$('.silueta').attr({'src':'img/screen10/silueta_11.png'});
																														tijera.transition({rotate:'178deg'}, gira, 'linear', function() {
																															tijera.animate({top:321,left:90}, avanza, 'linear', function() {
																																$('.silueta').attr({'src':'img/screen10/silueta_12.png'});
																																tijera.transition({rotate:'270deg'}, gira, 'linear', function() {
																																	tijera.animate({top:306,left:32}, avanza, 'linear', function() {
																																		$('.silueta').attr({'src':'img/screen10/silueta.png'});
																																		tijera.transition({rotate:'270deg'}, gira, 'linear', function() {
																																			$('.orange').fadeIn('slow');
																																			$('.silueta').fadeOut();
																																			$('.body').css({'background-color':'#57a51b'});
																																			tijera.animate({top:0,left:-1000}, 500, 'easeInExpo');
																																		});
																																	});
																																});
																															});
																														});
																													});	
																												});
																											});
																										});
																									});	
																								});
																							});
																						});
																					});
																				});
																			});
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	}, 1000);
	setTimeout(function() {
		$('.papel').animate({top:0,width:mpapW,height:mpapH}, 1000, 'easeOutExpo');
	}, 7500);
	setTimeout(function() {
		alto1 = mpapH.substring(0, mpapH.length-2);
		alto2 = $('.orange div img').height();
		topXX = parseInt(alto1-alto2,10);
		$('.orange1').animate({top:0}, 1000, 'easeOutExpo');
		$('.orange2').animate({top:topXX}, 1000, 'easeOutExpo');
	}, 8000);
	setTimeout(function() {
		$('.orange div:nth-child(1), .orange div:nth-child(2), .orange div:nth-child(3)').animate({left:-anchoDolls}, 1000, 'easeOutExpo');
		$('.orange div:nth-child(5), .orange div:nth-child(6), .orange div:nth-child(7)').animate({left:anchoDolls}, 1000, 'easeOutExpo');
	}, 9000);
	setTimeout(function() {
		$('.orange div:nth-child(1), .orange div:nth-child(2)').animate({left:-anchoDolls*2}, 1000, 'easeOutExpo');
		$('.orange div:nth-child(6), .orange div:nth-child(7)').animate({left:anchoDolls*2}, 1000, 'easeOutExpo');
	}, 10000);
	setTimeout(function() {
		$('.orange div:nth-child(1)').animate({left:-anchoDolls*3}, 1000, 'easeOutExpo');
		$('.orange div:nth-child(7)').animate({left:anchoDolls*3}, 1000, 'easeOutExpo');
	}, 11000);
	setTimeout(function() {
		$('.orange div').transition({rotateX:'360deg'}, 500, 'ease');
	}, 12700);
	setTimeout(function() {
		$('.orange1 div:nth-child(1) img').attr({'src':'img/screen10/doll_ve.png'});
		$('.orange1 div:nth-child(2) img').attr({'src':'img/screen10/doll_co.png'});
		$('.orange1 div:nth-child(3) img').attr({'src':'img/screen10/doll_pe.png'});
		$('.orange1 div:nth-child(4) img').attr({'src':'img/screen10/doll_ec.png'});
		$('.orange1 div:nth-child(5) img').attr({'src':'img/screen10/doll_bo.png'});
		$('.orange1 div:nth-child(6) img').attr({'src':'img/screen10/doll_ch.png'});
		$('.orange1 div:nth-child(7) img').attr({'src':'img/screen10/doll_ar.png'});
		$('.orange2 div:nth-child(1) img').attr({'src':'img/screen10/doll_mx.png'});
		$('.orange2 div:nth-child(2) img').attr({'src':'img/screen10/doll_pa.png'});
		$('.orange2 div:nth-child(3) img').attr({'src':'img/screen10/doll_cr.png'});
		$('.orange2 div:nth-child(4) img').attr({'src':'img/screen10/doll_gu.png'});
		$('.orange2 div:nth-child(5) img').attr({'src':'img/screen10/doll_ho.png'});
		$('.orange2 div:nth-child(6) img').attr({'src':'img/screen10/doll_ni.png'});
		$('.orange2 div:nth-child(7) img').attr({'src':'img/screen10/doll_pr.png'});
	}, 13000);
	setTimeout(function() {
		$('.orange div p').animate({'opacity':'1'}, 1000, 'linear');
	}, 14000);
	setTimeout(function() {
		$('.url').fadeIn();
	}, 15000);
}