!function($,window,undefined){window.Modernizr=function(a,b,c){function v(a){i.cssText=a}function x(a,b){return typeof a===b}var j,q,u,d="2.6.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,l=({}.toString,{}),o=[],p=o.slice,r=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))for(;d--;)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},s=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return r("@media "+b+" { #"+g+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},t={}.hasOwnProperty;u=x(t,"undefined")||x(t.call,"undefined")?function(a,b){return b in a&&x(a.constructor.prototype[b],"undefined")}:function(a,b){return t.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if("function"!=typeof c)throw new TypeError;var d=p.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(p.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(p.call(arguments)))};return e});for(var A in l)u(l,A)&&(q=A.toLowerCase(),e[q]=l[A](),o.push((e[q]?"":"no-")+q));return e.addTest=function(a,b){if("object"==typeof a)for(var d in a)u(a,d)&&e.addTest(d,a[d]);else{if(a=a.toLowerCase(),e[a]!==c)return e;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},v(""),h=j=null,e._version=d,e.mq=s,e.testStyles=r,e}(this,this.document);var mq=Modernizr.mq("only all");$.fn.apDrillDownMenu=function(options){var opts=$.extend({},$.fn.apDrillDownMenu.defaults,options);opts.showSpeed=parseInt(opts.showSpeed);var maxHeight=parseInt(opts.height),css={current:"ap-ddmenu-current",icon:"ap-ddmenu-link-icon",menuTop:"ap-ddmenu-top",menuWrapper:"ap-ddmenu",scroll:"ap-ddmenu-scroll"};if(!mq){{$(this).parents().eq(0)}$(window).on("load resize",function(){$(window).width()>opts.maxWindowWidth?($("html").removeClass(opts.ieMobileClass),$(opts.toggleSwitch).hide()):($("html").addClass(opts.ieMobileClass),$(opts.toggleSwitch).show())})}return css.menuTopTest="."+css.menuTop,this.each(function(){if("ul"==this.tagName.toLowerCase()){var ancestor,menu=$(this),p=menu.parent(),container=menu.parent();$(opts.toggleSwitch).on("click touchstart",function(e){e.preventDefault(),fixWidths(),mq?p.stop().slideToggle({duration:opts.toggleSpeed}):p.toggle(),checkHeight($("."+css.current))});var checkHeight=function(el){$(window).width()<opts.maxWindowWidth&&(maxHeight>0?parseInt(el.css("height"))>maxHeight&&el.addClass(css.scroll).css("height",maxHeight):container.css("height",el.outerHeight()+$(opts.headerSelector).outerHeight()))},setup=menu.data("apDrillDownMenuSetup");if("yes"!=setup){menu.data("apDrillDownMenuSetup","yes"),menu.addClass(css.menuTop).addClass(css.current),menu.wrap('<div class="'+css.menuWrapper+'"></div>'),container=menu.parent(),container.css({width:opts.width,height:opts.height}),ancestor=container.parent(),$(opts.headerSelector).length||container.prepend('<div class="'+opts.headerSelector.split(".")[1]+'"></div>');var ddmenuHeader=$(opts.headerSelector),currentTextHolder=!1;opts.currentText&&($(opts.currentTextSelector).length||ddmenuHeader.prepend('<div class="'+opts.currentTextSelector.split(".")[1]+'"></div>'),currentTextHolder=$(opts.currentTextSelector)),opts.backLink===!0&&opts.backLinkSelector!==undefined&&$(opts.backLinkSelector).length>0||ddmenuHeader.prepend('<a href="#" class="'+opts.backLinkSelector.split(".")[1]+'">'+opts.backLinkText+"</a>");var backLink=$(opts.backLinkSelector);backLink.hide(),backLink.click(function(e){if(e.preventDefault(),!menu.is(":animated")){var prevLeftVal=($(this),parseFloat(menu.css("left"))+container.width());menu.animate({left:prevLeftVal},opts.showSpeed,function(){var current=$("ul."+css.current,menu);current.hide();var currentParent=current.parents("ul:first");reset(current),setCurrent(currentParent),currentTextHolder!==!1&&currentParent.is(css.menuTopTest)===!1&&currentTextHolder.text(getCurrentText(currentParent.prev())),checkHeight($("."+css.current))})}});var reset=function(el){el.removeClass(css.scroll).removeClass(css.current)},setCurrent=function(el){var isTop=el.is(css.menuTopTest);isTop||el.css("left",container.width()),el.show().addClass(css.current),checkHeight(el),backLink!==!1&&(isTop?backLink.hide():backLink.show()),currentTextHolder!==!1&&(isTop?currentTextHolder.hide():currentTextHolder.show())},fixWidths=(function(){var timer=0;return function(callback,ms){clearTimeout(timer),timer=setTimeout(callback,ms)}}(),function(){var current=$("."+css.current,menu),numParents=current.parentsUntil("."+css.menuWrapper,"ul").length,width=$(window).width();numParents>0&&(menu.css("left",numParents*width*-1),current.parentsUntil("."+css.menuTop,"ul").css("left",width),current.css("left",width))}),getCurrentText=function(el){return el.clone().children().remove().end().text()};window.addEventListener?(window.addEventListener("resize",fixWidths,!1),window.addEventListener("orientationchange",fixWidths,!1)):window.attachEvent("onresize",fixWidths),checkHeight(menu),menu.find("a").each(function(){var link=$(this);if(link.siblings("ul").length>0){if(opts.prependCurrentOnChild){var clone=link.clone(!0),li=$('<li class="'+opts.cloneClass+'"></li>');li.append(clone),link.siblings("ul").prepend(li),"function"==typeof opts.prependCurrentOnChildCallback&&opts.prependCurrentOnChildCallback.apply(clone)}link.append('<span class="'+css.icon+'">'+opts.parentIconText+"</span>"),link.click(function(e){if($(window).width()<=opts.maxWindowWidth){e.preventDefault();var nextList=$(this).siblings("ul"),parentList=link.parents("ul:first"),isFirstLevel=parentList.is(css.menuTopTest),parentLeft=isFirstLevel?0:parseFloat(menu.css("left")),containerWidth=parseFloat(container.width()),nextLeft=Math.round(parentLeft-containerWidth);reset(parentList),setCurrent(nextList),menu.animate({left:nextLeft},opts.showSpeed),currentTextHolder!==!1&&currentTextHolder.text(getCurrentText(link))}})}}),$(window).on("resize",function(){showOrHide(),fixWidths()})}else checkHeight($("ul."+css.current,container));var showOrHide=function(){$(window).width()>opts.maxWindowWidth?(container.attr("style",""),$(css.menuTopTest).find("ul").attr("style",""),!$("."+css.current).hasClass(css.menuTop)&&$("."+css.current).parent().hasClass(css.menuWrapper)&&$("."+css.current).hide().parent().closest(".sub-menu").hide(),ancestor.attr("style","")):(container.css("height",$("."+css.current).css("height")),ancestor.hasClass("expanded")&&ancestor.show(),$("."+css.current).show().parent().closest(".sub-menu").show(),checkHeight($("."+css.current,container)))}}})},$.fn.apDrillDownMenu.defaults={maxWindowWidth:875,ieMobileClass:"mobile",width:"100%",height:"auto",showSpeed:200,backLink:!0,backLinkText:"Back",backLinkSelector:".ap-ddmenu-back",headerSelector:".ap-ddmenu-header",currentText:!0,currentTextSelector:".ap-ddmenu-current-text",cloneClass:"clone",prependCurrentOnChild:!0,prependCurrentOnChildCallback:function(){},parentIconText:"",toggleSwitch:".ap-ddmenu-toggle",toggleSpeed:200}}(jQuery,window);