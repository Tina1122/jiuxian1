function locals(){$(".btn").click(function(){var a=$(this).attr("goodsid");localStorage.setItem("dataid",a)})}$(function(){var a=!0;$(".rig").click(function(){a?$("#nav1").show():$("#nav1").hide(),a=!a})}),$(function(){$.ajax({url:"../json/brand.json",async:!0,success:function(a){var a=a.data1,d="";for(var n in a)d+="<dl>",d+="<dt><a class='btn' goodsid='"+a[n].id+"' href='detail.html'><img src='"+a[n].img+"'/></a></dt>",d+="<dd><p>"+a[n].name+"</p></dd>",d+='<dd class="dd1"><span>'+a[n].price+"</span><em>"+a[n].qu+'</em><a class="gou" href="detail.html">'+a[n].buy+"</a></dd>",d+="</dl>";$(".more").html(d),locals()}})}),$(function(){$.ajax({url:"../json/brand.json",async:!0,success:function(a){var a=a.data2,d="";for(var n in a)d+="<dl>",d+="<dt><a class='btn' goodsid='"+a[n].id+"' href='detail.html'><img src='"+a[n].img+"'/></a></dt>",d+="<dd><p>"+a[n].name+"</p></dd>",d+='<dd class="dd1"><span>'+a[n].price+"</span><em>"+a[n].qu+'</em><a class="gou" href="detail.html">'+a[n].buy+"</a></dd>",d+="</dl>";$(".hotM").html(d),locals()}})}),$(function(){$.ajax({url:"../json/brand.json",async:!0,success:function(a){var a=a.data3,d="";for(var n in a)d+="<dl>",d+="<dt><a class='btn' goodsid='"+a[n].id+"' href='detail.html'><img src='"+a[n].img+"'/></a></dt>",d+="<dd><p>"+a[n].name+"</p></dd>",d+='<dd class="dd1"><span>'+a[n].price+"</span><em>"+a[n].qu+'</em><a class="gou" href="detail.html">'+a[n].buy+"</a></dd>",d+="</dl>";$(".discontM").html(d),locals()}})}),$(function(){$("#footer .he").click(function(){$("html,body").animate({scrollTop:0})}),$(".grzx").click(function(){var a=localStorage.getItem("login");a?window.location.href="personcenter.html":window.location.href="login.html"})});