$(document).ready(function(){
	$(".menu-top1").css({height:$(window).height()-40});
	$(".menu-top2").css({height:$(window).height()-40});
	$(".menu-top3").css({height:$(window).height()-40});
	$(".menu-top4").css({height:$(window).height()-40});
	$(".menu-top5").css({height:$(window).height()-40});
	$(".first-button").on({
		"mouseenter":function(){
			$(this).css({opacity:1});
			$(".second-button").css({opacity:0.5});
			$(".third-button").css({opacity:0.5});
			$(".fourth-button").css({opacity:0.5});
			$(".fifth-button").css({opacity:0.5});
		},
		"mouseleave":function(){
			if($(this).offset().top===0){
				$(this).css({opacity:0.5});
			}
		},
		"blur":function(){
			if($(this).offset().top===0){
				$(this).css({opacity:0.5});
			}
		},
		"click":function(){
			$(".menu-top2").hide();
			$(".menu-top3").hide();
			$(".menu-top4").hide();
			$(".menu-top5").hide();
			$(".menu-top1").css({marginLeft:0});
			$(".menu-top1").slideToggle(500);
			$(".solid-bar").toggle();
			$(".second-button").toggle(500);
			$(".third-button").toggle(600);
			$(".fourth-button").toggle(700);
			$(".fifth-button").toggle(800);
			if($(this).text()==="↓ Pull Down"){
				$(this).text("↑ Push Up");
			}else{
				$(this).text("↓ Pull Down");
			}
		}
	})
	$(".second-button").on({
		"mouseenter":function(){
			$(this).css({opacity:1});
			$(".first-button").css({opacity:0.5});
			$(".third-button").css({opacity:0.5});
			$(".fourth-button").css({opacity:0.5});
			$(".fifth-button").css({opacity:0.5});
		},
		"click":function(){
			$(".menu-top1").css({marginLeft:-$(window).width()});
			$(".menu-top2").css({marginTop:-$(window).height()+40});
			$(".menu-top2").show();
			$(".menu-top3").hide();
			$(".menu-top4").hide();
			$(".menu-top5").hide();
			$(".first-button").css({opacity:0.5});
		}
	})
	$(".third-button").on({
		"mouseenter":function(){
			$(".second-button").css({opacity:0.5});
			$(".first-button").css({opacity:0.5});
			$(this).css({opacity:1});
			$(".fourth-button").css({opacity:0.5});
			$(".fifth-button").css({opacity:0.5});
		},
		"click":function(){
			$(".menu-top1").css({marginLeft:-$(window).width()});
			$(".menu-top3").css({marginTop:-$(window).height()+40});
			$(".menu-top2").hide();
			$(".menu-top3").show();
			$(".menu-top4").hide();
			$(".menu-top5").hide();
		}
	})
	$(".fourth-button").on({
		"mouseenter":function(){
			$(this).css({opacity:1});
			$(".first-button").css({opacity:0.5});
			$(".third-button").css({opacity:0.5});
			$(".second-button").css({opacity:0.5});
			$(".fifth-button").css({opacity:0.5});
		},
		"click":function(){
			$(".menu-top1").css({marginLeft:-$(window).width()});
			$(".menu-top4").css({marginTop:-$(window).height()+40});
			$(".menu-top2").hide();
			$(".menu-top3").hide();
			$(".menu-top4").show();
			$(".menu-top5").hide();
		} 
	})
	$(".fifth-button").on({
		"mouseenter":function(){
			$(this).css({opacity:1});
			$(".first-button").css({opacity:0.5});
			$(".third-button").css({opacity:0.5});
			$(".second-button").css({opacity:0.5});
			$(".fourth-button").css({opacity:0.5});
		},
		"click":function(){
			$(".menu-top1").css({marginLeft:-$(window).width()});
			$(".menu-top5").css({marginTop:-$(window).height()+40});
			$(".menu-top2").hide();
			$(".menu-top3").hide();
			$(".menu-top4").hide();
			$(".menu-top5").show();
		}
	})
	changeTime();
	function changeTime(){
			var a = new Date().toLocaleString()
			$(".solid-bar span:eq(0)").text(a);
			setTimeout(changeTime,1000);
	}
//Top bar content
	if($(this).width()<1200){
			$(".code-list li:gt(10)").hide();
			$(".code-list li:eq(10)").text("more");
	}else{
			$(".code-list li:gt(10)").show();
			$(".code-list li:eq(10)").text("Go");
	}
	$(window).resize(function(){
		if($(this).width()<1200){
			$(".code-list li:gt(10)").hide();
			$(".code-list li:eq(10)").text("more");
		}else{
			$(".code-list li:gt(10)").show();
			$(".code-list li:eq(10)").text("Go");
		}
	})
//retangle-menu
var canvas = document.getElementById("retangle-menu");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0,15);
ctx.lineTo(60,15);
ctx.moveTo(0,30);
ctx.lineTo(60,30);
ctx.moveTo(0,45);
ctx.lineTo(60,45);
ctx.lineWidth = 10;
ctx.strokeStyle = "#000000";
ctx.closePath();
ctx.stroke();
	$("#retangle-menu").click(function(){
		if(ctx.strokeStyle==="#000000"){
			ctx.clearRect(0,0,60,60);
			ctx.beginPath();
			ctx.moveTo(0,0);
			ctx.lineTo(60,60);
			ctx.moveTo(60,0);
			ctx.lineTo(0,60);
			ctx.strokeStyle = "#fed03d";
			ctx.closePath();
			ctx.stroke();
		}else{
			ctx.clearRect(0,0,60,60);
			ctx.beginPath();
			ctx.moveTo(0,15);
			ctx.lineTo(60,15);
			ctx.moveTo(0,30);
			ctx.lineTo(60,30);
			ctx.moveTo(0,45);
			ctx.lineTo(60,45);
			ctx.lineWidth = 10;
			ctx.strokeStyle = "#000000";
			ctx.closePath();
			ctx.stroke();
		}
	})
})