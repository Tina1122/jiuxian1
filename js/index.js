$(function(){function n(){new Swiper(".swiper-container",{autoplay:1e3,autoplayDisableOnInteraction:!1,pagination:".swiper-pagination"})}function o(){function n(n){return n>9?n:"0"+n}setInterval(function(){var o=(new Date).getHours(),t=(new Date).getMinutes(),i=(new Date).getSeconds(),e=60*o*60*1e3+60*t*1e3+1e3*i,a=864e5,l=(a-e)/1e3,c=n(Math.floor(l/3600)),r=n(Math.floor(l%86400%3600/60)),s=n(Math.floor(l%60));$(".timer").html("<span>距结束：</span> <i>"+c+"</i>:<i>"+r+"</i>:<i>"+s+"</i>")},1e3)}function t(){a=new IScroll("#box",{scrollY:!0,click:!0})}function i(){$.ajax({url:"json/index.json",success:function(n){var o=n.data[l];$.each(o,function(n){var t=$("<li class='l'></li>"),i=$('<a class="btn" goodsid="'+o[n].id+'" href="javascript:;"></a>'),e=$("<div>图片加载中</div>"),l=$("<img class='pic' src='"+o[n].img+"'/>"),c=$("<div class='name'>"+o[n].name+"</div>"),r=$("<div class='price'>"+o[n].price+"</div>");t.append(i),t.append(e),t.append(c),t.append(r),l.on("load",function(){a.refresh(),e.html(l)}),$(".goodlist").append(t)}),e()}})}function e(){$(".goodlist").on("click",".btn",function(){var n=$(this).attr("goodsid");localStorage.setItem("dataid",n),window.location.href="html/detail.html"})}n(),o();var a,l=(new IScroll(".shop",{scrollX:!0}),0);i(),t(),$("#box").on("touchend",function(){a.y<-700?$("#gotop").show():$("#gotop").hide(),a.y>50&&a.refresh(),a.y<a.maxScrollY-50&&(l++,l>=5&&(l=0),i())}),$("#gotop").on("click",function(){$("#box").css("transform","translate(0 , 0)"),$(this).hide(),window.location.reload()}),$(".grzx").click(function(){var n=localStorage.getItem("login");n?window.location.href="html/personcenter.html":window.location.href="html/login.html"})});