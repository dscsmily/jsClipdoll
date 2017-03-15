var line_s;
var clientW = null;
var clientH = null;
var light_lW = null;
var n;
var m;
var t;
var timespan;//倒计时
var tcount = 21;//倒计时图片数秒
var paw;//定义爪子
var d_topH;//获取娃娃框 高度
var paw_line;//定义爪子长度
var paw_handl;//定义左边单支爪子
var paw_handr;//定义右边单支爪子
var intA;//定义爪子的高度 
var goresult;//定义抽取结果
var dropp;
var butgo;
var toy;//定义娃娃区域
var pop_bg;//定义弹窗
var pop;//定义弹窗

function onload(){
	clientW = document.body.clientWidth;
	clientH = document.body.clientHeight;
	line_s = $('.light_l span');//获取左边灯光 span
	line_y = $('.light_r span');//获取右边灯光span
	light_l = $('.light_l');
	timespan = $('.time span');//倒计时数字
	paw = $('.paw');
	paw_line = $('.paw_line')
	d_topH = parseInt($('.d_top').height());//娃娃框高度
	paw_handl = $('.paw_handl');//获取右支爪子
	paw_handr = $('.paw_handr');//获取左支爪子
	intA = parseInt(paw_handl.width());
	goresult = $('.goresult');
	light_lW = parseInt($('.light_l').width());  
	paw.height(d_topH*0.82);
	paw_line.css({height:d_topH*0.07});//初始化爪子高度
	butgo = $('.doll_but_go');
	dropp =$('.dropgif p');  
	toy = $('.toy');
	pop_bg = $('.pop_bg');
	pop = $('.pop');
	light();
	timego();
}

//灯css样式
function light(){
	line_s.width(light_lW);
	line_s.height(light_lW);
	line_y.width(light_lW);
	line_y.height(light_lW); 
	lightgo();  
	addtoy();
}

function lightgo(){//两边闪烁的灯光
	var l_top = [
		{'onetop':'0'},
		{'onetop':light_lW},
		{'onetop':light_lW*2},
		{'onetop':light_lW*3},
		{'onetop':light_lW*4},
		{'onetop':light_lW*5},
		{'onetop':light_lW*5},
		{'onetop':light_lW*6},
		{'onetop':light_lW*7},
	]
		//n++;
		///m++;
		//if(n>8)n=0;if(m>8)m=0;
		
		//n=8
		n = parseInt(8*Math.random());
		m = parseInt(8*Math.random());
		 
		var light_ltop = parseInt(l_top[n].onetop);
		var light_rtop = parseInt(l_top[m].onetop);
		
		line_s.css({top:light_ltop+'px','background-position':"-"+4+"px -"+light_ltop+"px"});
		
		line_y.css({top:light_rtop+'px','background-position':"-"+4+"px -"+light_rtop+"px"});
		
		setTimeout(lightgo,300);
		
		//console.log(m); 
	}



function timego(){//倒计时
	$('.time').fadeIn();
	tcount++
	if(tcount>24){
		$('.time').css({'display':'none'});
		gobut();
		machine();
		return false;
	}
	timespan.children().remove();
	timespan.append("<img src='img/machine"+ tcount +".png'/>"); 
	timespan.children().animate({'width':'20%'});
	setTimeout(timego,1000);
	//console.log(timespan);
}

function machine(){
	
	paw.animate({left:'50%'},1000,function(){
		paw.animate({top:'10%',width:'10%'},1000,function(){
			paw_line.animate({height:d_topH*0.4},1000,function(){
				paw_handl.addClass('paw_handl_go');
				paw_handr.addClass('paw_handr_go');
				setTimeout(goresultac,1000);
			});
			
		});
		
		//console.log(d_topH);
		
	});
	
}

function goresultac(){
	var intB = parseInt(paw_handl.width());
	goresult.append("<img src='img/machine26.png' />");
	goresult.css({top:-intB});
	goresult.fadeIn(function(){
		paw_line.animate({height:d_topH*0.07},1000,function(){
			paw.animate({top:'5%',width:'20%'},1000,function(){
				paw.animate({left:'18%'},1000,function(){
					paw_handl.removeClass('paw_handl_go');
					paw_handr.removeClass('paw_handr_go');
					goresult.animate({top:d_topH},1000,dropan);
					setTimeout(dropan,500);
					//dropan();
				});
				
			});
			goresult.css({top:-intB});
			goresult.animate({top:-intA},1000);
		}); 
		
	});
	//console.log(goresult.children('img'))//paw_handl.width()
	
}

function dropan(){
	dropp.animate({top:0},function(){
		popan();
	});
}
function dropanint(){
	dropp.css({top:'-200px'});
}
function gobut(){
	butgo.animate({top:'5px'},200,function(){
		butgo.css({top:'0px'})
	});
}

function addtoy(){
	var y = toy.height();
	var x = toy.width();
	console.log(y);
	for(var i=27;i<47;i++){
		var toyx =Math.random()*(x*0.7-x*0.35)+x*0.35;
		var toyy =Math.random()*y*0.2;
		//var 
		 if(i>30) toy_box.css({'z-index':'9'});
		var toy_box = $("<img style='left:"+toyx+"px;bottom:"+toyy+"px;' src='img/machine" + i +".png'/>");
		toy_box.appendTo(toy);
	}
	for(var i=37;i<45;i++){
		var toylx =Math.random()*(x*0.5-x*0.1)+x*0.1;
		var toyly =Math.random()*(y*0.3-y*0.25)+y*0.25;
		//var 
		 
		var toy_box = $("<img style='left:"+toylx+"px;bottom:"+toyly+"px;' src='img/machine" + i +".png'/>");
		toy_box.appendTo(toy);
	}
}


function popan(){
	pop.fadeIn(function(){
		pop_bg.animate({top:'50%'});
	}) 
}
function popanint(){//重置弹窗
	pop_bg.css({top:'-600px'});
	pop.fadeOut() 
}