 
var canvas = null;
var img = null;
var ctx = null;
var clientW = null;
var clientH = null;
var clearWidth = null;
var clearHeight = null;
var my_gradient;
var sources={}

/*starvar clearWidth=canvas.width;
var clearHeight=canvas.height; 
 *loading模块
 *实现图片的预加载，并显示进度条
 *参数：图片数组对象，加载完成的回调函数*/


function loadImages(sources,callback){   
    var loadedImages = 0;    
    var numImages = 0;  
    var images = {} ;
    
    ctx.font='24em';
    ctx.lineWidth=2;
     
    // get num of sources    
    for (var src in sources) {    
        numImages++;    
    }    
    for (var src in sources) {    
        images[src] = new Image();
        //当一张图片加载完成时执行    
        images[src].onload = function(){ 
            //重绘一个进度条
            var ratt = parseInt((loadedImages/numImages)*100); 
            ctx.clearRect(0,0,clearWidth,clearHeight); 
            
			
           	ctx.font="30px Verdana";
            ctx.fillText(ratt+'%',clearWidth/2-30,clearHeight/2); 
            ctx.save();
            ctx.strokeStyle='#f4f4f4';
            //绘制一条直线
            ctx.beginPath();
            ctx.moveTo(clearWidth/2-200,clearHeight/2+10);
            ctx.lineTo(clearWidth/2+200,clearHeight/2+10);
            ctx.stroke();
            
            //从新绘制一条直线 每加载一张图片 增加一点长度
           	ctx.beginPath();
            ctx.restore();
            ctx.moveTo(clearWidth/2-200,clearHeight/2+10);
            ctx.lineTo(clearWidth/2+loadedImages/numImages*190+10,clearHeight/2+10);  
            ctx.stroke();
            //当所有图片加载完成时，执行回调函数callback
            if (++loadedImages >= numImages) {    
                callback();    
            }    
        };  
        //把sources中的图片信息导入images数组  
       images[src].src = sources[src];    
    }    
}    
//定义预加载图片数组对象，执行loading模块
function onloading(){   
	clientW = document.body.clientWidth;
	clientH = document.body.clientHeight;
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");	
	canvas.width=clientW;
    canvas.height=clientH;
	clearWidth=canvas.width;
    clearHeight=canvas.height;  
    
    //渐变背景
    my_gradient=ctx.createLinearGradient(0,0,0,clearHeight);
	my_gradient.addColorStop(0,"#a46793");
	my_gradient.addColorStop(1,"#9a4b46");
 
    //加载所有照片 
    sources = {    
        machine1: "img/machine49.png",    
        machine2: "img/machine50.png", 
        machine3: "img/machine51.png",    
        machine4: "img/machine52.png",  
        machine5: "img/machine53.png",    
        machine6: "img/machine54.png",  
        machine7: "img/machine55.png",    
        machine8: "img/machine56.png",  
        machine9: "img/machine57.png",    
        machine10: "img/machine58.png",
        machine11: "img/machine59.png",    
        machine12: "img/machine60.png", 
        machine13: "img/machine61.png",    
        machine14: "img/machine62.png",  
        machine15: "img/machine63.png",    
        machine16: "img/machine64.png",  
        machine17: "img/machine65.png",    
        machine18: "img/machine66.png",  
        machine19: "img/machine67.png",    
        machine20: "img/machine68.png",
        machine21: "img/machine69.png",
        machine22: "img/machine70.png", 
        
    };    
    //执行图片预加载，加载完成后执行main
    loadImages(sources,main);    
};   

function main(){ 
	ctx.clearRect(0,0,clearWidth,clearHeight)//清空画布 定义一个矩形 
    ctx.fillStyle=my_gradient;
	ctx.fillRect(0,0,clearWidth,clearHeight); 
	canvas.style.display='none';
	$('.main').animate({'opacity':'1'});
 	//onload();
	console.log('ok');
	 
}
/*end*/