$(function(){function o(){new Swiper(".swiper-container",{autoplay:1e3,autoplayDisableOnInteraction:!1,pagination:".swiper-pagination"})}function n(){function o(o){return o>9?o:"0"+o}setInterval(function(){var n=new Date,i=new Date(2016,8,25),t=(i-n)/1e3,a=o(Math.floor(t/3600)),e=o(Math.floor(t%86400%3600/60)),l=o(Math.floor(t%60));$(".timer").html("<span>距结束 </span> <i>"+a+"</i>:<i>"+e+"</i>:<i>"+l+"</i>")},1e3)}function i(){e=new IScroll("#box",{scrollY:!0,click:!0})}function t(){$.ajax({url:"json/index.json",success:function(o){var n=o.data[l];$.each(n,function(o){var i=$("<li class='l'></li>"),t=$('<a class="btn" goodsid="'+n[o].id+'" href="javascript:;"></a>'),a=$("<div>图片加载中</div>"),l=$("<img class='pic' src='"+n[o].img+"'/>"),c=$("<div class='name'>"+n[o].name+"</div>"),r=$("<div class='price'>"+n[o].price+"</div>");i.append(t),i.append(a),i.append(c),i.append(r),l.on("load",function(){e.refresh(),a.html(l)}),$(".goodlist").append(i)}),a()}})}function a(){$(".goodlist").on("click",".btn",function(){var o=$(this).attr("goodsid");localStorage.setItem("dataid",o),window.location.href="html/detail.html"})}o(),n();var e,l=(new IScroll(".shop",{scrollX:!0}),0);t(),i(),$("#box").on("touchend",function(){e.y<-700?$("#gotop").show():$("#gotop").hide(),e.y>50&&e.refresh(),e.y<e.maxScrollY-50&&(l++,l>=5&&(l=0),t())}),$("#gotop").on("click",function(){$("#box").css("transform","translate(0 , 0)"),$(this).hide(),window.location.reload()}),$(".grzx").click(function(){var o=localStorage.getItem("login");o?window.location.href="html/personcenter.html":window.location.href="html/login.html"})});