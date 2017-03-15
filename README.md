# jsClipdoll
## [demo](http://htmlpreview.github.io/?https://github.com/dscsmily/jsClipdoll/blob/master/demo.html)

## 技术点


canvas 图片预加载

js动画 


闪关灯


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


