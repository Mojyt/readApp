//兼容性的通过类名获取元元素


	function getEle(classname,context){  //context表示获取的范围 是一个对象，DOM对象
		if(context==undefined){
		context=context||document;
		}
		if(context.getElementsByClassName){
			return context.getElementsByClassName(classname)
		}else{
			var all=context.getElementsByTagName("*");
			var newall=[];
			for(var i=0;i<all.length;i++){
				if(all[i].className==check(all[i],classname)){
					newall.push(all[i])
				}
			}
			return newall;
		}
	}

//判断在一个长字符串当中是否包含一个短字符串
function check(lstr,str){
	var arr=lstr.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==str){
			return true
		}
	}return false
}
//*******************************************************************
//兼容性的获取或者设置元素的内容
//第一个参数 ele 表示要操作的元素
//第二个参数 表示要设置的内容 如果是获取则不用传递
function text(ele,text){
			if(text!=undefined){
				if(document.getElementsByClassName){
					 ele.textContent=text;
				}else{
					 ele.innerText=text;
				}	
			}else{
					if(document.getElementsByClassName){
					return ele.textContent;
				}else{
					return ele.innerText;
					}	
			}
		}

//********************************************************************
//兼容性的获取某个元素的样式
//ele 要获取的演示元素
//attr 要获取的具体的样式
function getStyle(ele,attr){
	if(window.getComputedStyle){
		return window.getComputedStyle(ele,null)[attr]
	}else{
		return	ele.currentStyle[attr];
	}

}

//*******************************************************************
// 动画函数
//obj 要进行动画的对象
//attrobj 属性以及目标值对象
//dur 持续时间
//callback 回调函数 可以不传
	// function animate(obj,attrobj,dur,callback){   //dur表示持续的时间
	// 	var speed={};
	// 	for(var i in attrobj){      //遍历对象attrobj   i表示属性名  attrobj[i]表示属性值
	// 		var old=getStyle(obj,i);
	// 		old=parseInt(old)
	// 		speed[i]=(attrobj[i]-old)*60/dur;
	// 	}
	// 	time=0
	// 	obj.t=setInterval(function(){
	// 		for(var i in attrobj){
	// 		var now=getStyle(obj,i);
	// 		var now=parseFloat(now);
	// 		now+=speed[i];
	// 		obj.style[i]=now+"px";

	// 		}
	// 		time+=60;
	// 		if(time>=dur){
	// 			clearInterval(obj.t)
	// 			//obj.style.background="blue"
	// 			// obj.style.background="pink"
	// 			for(var i in attrobj){
	// 			obj.style[i]=attrobj[i]+"px"
	// 			}
	// 		}
	// 		if(callback){
	// 			callback()
	// 		}
	// 	},60)
	// }

//*******************************************************************
function $(selector,context){    //context表示范围
		//".one"    "#aa"       "div"
		if(typeof(selector)=="string"){
			context=context||document;
			//正则
			selector=selector.replace(/^\s+|\s+$/g,"") //   /^表示开始而位置     $/表示结束的位置       g表示全局，并且查找 
													//	\s表示空格        开始于结束用|链接
			if(selector.charAt(0)=="."){
				return getEle(selector.slice(1),context)
			}
			else if(selector.charAt(0)=="#"){
				return document.getElementById(selector.slice(1))
			}
			else{
				return context.getElementsByTagName(selector)
			}
		}else if(typeof selector=="function"){
			//window.onload=selector;
			addEvent(window,"load",selector)


		}

	}
	// **************************************************************************
	// 2017.2.14    $函数
	// function $(select,ranger){
	// 	if(typeof(selector)=='function'){
	// 	addEvent(window,'load',select);
	// 	}else if(typeof(select)=='string'){
	// 		if(/<[a-zA-Z][a-zA-Z0-9]{0,7}>/.test(select)){
	// 			return document.createElement(select.slice(1,-1));
	// 		}
	// 		//查询
	// 		var reg=/[\.,#]?[a-zA-Z][a-zA-Z0-9]{0,4}[-,_]?[a-zA-Z0-9]{0,7}/g;
	// 		var s=select.match(reg);
	// 		var newArr=[];
	// 		for (var i = 0; i < s.length; i++) {
	// 			if(i==0){
	// 				newArr.push(getElement(s[i],[document]));
	// 			}else{
	// 				newArr.push(getElement(s[i],newArr[i-1]));
	// 			}
	// 		};return(newArr[s.length-1])
	// 	}

	// }
	// function getElement(selector,ranger){
	// 	var first=selector.charAt(0);
	// 	var arr=[];
	// 	if(first=='#'){
	// 		arr.push(document.getElementById(selector.substring(1)));
	// 	}else if(first=="."){
	// 		for (var i = 0; i < ranger.length; i++) {
	// 			var ele=getEle(selector.substring(1),ranger[i]);
	// 			for (var j = 0; j < ele.length; j++) {
	// 				arr.push(ele[j])
	// 			};
	// 		};
	// 	}else{
	// 		for (var i = 0; i < ranger.length; i++) {
	// 			var ele=document.getElementsByTagName(selector.substring(1),ranger[i])
	// 			for (var j = 0; j < ele.length; j++) {
	// 				arr.push(ele[j])
	// 			};
	// 		};
	// 	}
	// 	return arr;
	// }
	//***************************************************************************
	//只获取一个元素的所有元素子节点
		function getChildren(obj){
			var arr=obj.childNodes
			var newarr=[]
			for(i=0;i<arr.length;i++){
				if(arr[i].nodeType==1){
					newarr.push(arr[i])
				}
			}
			return newarr
		}
		//获取第一个子元素
		function getFirst(obj){
			return getChildren(obj)[0]
		}
		//获取最后一个元素
		function getLast(obj){
			var arr=getChildren(obj);
			return arr[arr.length-1]
		}
		//获取下一个节点
		function getNext(obj){
			var next=obj.nextSibling;
			if(next==null){
				return null;
			}
			while(next.nodeType!=1){
				next=next.nextSibling
				if(next==null){
					return null
				}
			}return next
		}
		//获取上一个元素
		function getPrev(obj){
			var prev=obj.previousSibling;
			if(prev==null){
				return null;
			}
			while(prev.nodeType!=1){
				prev=prev.previousSibling;
				if(prev==null){
					return null
				}
			}return prev;
		}

//**************************************************************************************
//兼容的获取当前可视窗口对象
var obj=getWindow
function getWindow(){
	document.documentElement.scrollTop=1;
	if(document.documentElement.scrollTop==1){
		return document.documentElement;
	}else{
		return document.body;
	}

}
//********************************************************************************
//获取某一个元素的文档坐标
function getPosition(obj){
	var left=obj.offsetLeft;
	var top=obj.offsetTop;
	var parent=obj.offsetParent;
	while(parent.nodeName!="BODY"){
		if(getStyle(parent,"position")=="absolute"||getStyle(parent,"position")=="relative"){
			left+=parent.offsetLeft+parseInt(getStyle(parent,"borderLeftWidth"));
			top+=parent.offsetTop+parseInt(getStyle(parent,"borderTopWidth"));
		}
		parent=parent.parentNode;
	}
	return {x:left,y:top}
}

//************************************************************************************
//添加监听事件
function addEvent(obj,event,handler){
	if(obj.addEventListener){
		obj.addEventListener(event,handler,false)
	}else{
		obj.attachEvent("on"+event,handler)
	}
}

function removeEvent(obj,event,handler){
	if(obj.addEventListener){
		obj.removeEventListener(event,handler,false)
	}else{
		obj.detachEvent("on"+event,handler)
	}

}
//************************************************************************************
//滚轮事件函数
//obj 要添加事件的对象
//upfun 向上滚动要触发的回调函数
//downfun 向下滚动 触发的回调函数
function mousewheel(obj,upfun,downfun){
	if(obj.addEventListener){
		obj.addEventListener("mousewheel",scrollfun,false)
		obj.addEventListener("DOMMouseScroll",scrollfun,false)
	}else{
		obj.attachEvent("onmousewheel",scrollfun)
	}
	function  scrollfun(e){
		var ev=e||window.event;
		var dir=ev.detail||ev.wheelDelta;
		if(dir==-3||dir==120){
			upfun.call(obj)
		}else if(dir==3||dir==-120){
			downfun.call(obj)
		}

	}
}
//***************************************************************
//15.hover
//判断某个元素是否包含有另外一个元素
function contains (parent,child) {
	if(parent.contains){
		return parent.contains(child) && parent!=child;
	}else{
		return (parent.compareDocumentPosition(child)===20);
	}
}

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
function checkHover (e,target) {
	if(getEvent(e).type=="mouseover"){
		return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
			!((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
	}else{
		return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
			!((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
	}
}
//鼠标移入移出事件
/*
 obj   要操作的对象
 overfun   鼠标移入需要处理的函数
 outfun     鼠标移除需要处理的函数
 */
function hover (obj,overfun,outfun) {
	if(overfun){
		obj.onmouseover=function  (e) {
			if(checkHover(e,obj)){
				overfun.call(obj,[e]);
			}
		}
	}
	if(outfun){
		obj.onmouseout=function  (e) {
			if(checkHover(e,obj)){
				outfun.call(obj,[e]);
			}
		}
	}
}
function getEvent (e) {
	return e||window.event;
}
// ****************************正则*****************************
 //通过传递参数l左边 r右边 m中间 a全部 实现去除不同位置的东西
function trim(str,mode){
    	mode=mode||"s"
    	if(mode=="s"){
    		return str.replace(/^\s+|\s+$/g,"");
    	}else if(mode=="l"){
    		return str.replace(/^\s+/g,"");
    	}else if(mode=="r"){
    		return str.replace(/\s+$/g,"");
    	}else if(mode=="a"){
    		return str.replace(/\s+/g,"");
    	}else if(mode=="m"){
    		var lefts=/^\s+/g.exec(str);
    		var rights=/\s+$/g.exec(str);
    		str=str.replace(/\s+/g,"");
    		if(lefts){
    			str=lefts[0]+str;
    		}
    		if(rights){
    			str=str+rights[0]
    		}
    		//or   str=(lefts?lefts[0]:"")+str+(rights?rights[0]:"")
    	}
    }
