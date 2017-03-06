$(document).ready(function() {
	// 显示或隐藏登陆
    $("#user_box").click(function(event){
    	   $("#login_content").toggle();
    	   $("#user_box").toggleClass('user_box_active');
    	   	event.stopPropagation();
    });
    // 点击页面其他部位，隐藏登陆、子菜单
    $(document).click(function(){
    	   $("#login_content").hide();
    	   $("#user_box").removeClass('user_box_active');
    	   $("#nav_list > li > ul").hide();
    	   $("#nav_list > li > .nav_down").hide();
    	   $("#nav_list > li > .nav_up").show();

    });
    //阻止（点击登陆页，触发隐藏）
    $("#login_content").click(function(event){
           event.stopPropagation();
    });
    
    // 搜索框显示或隐藏
    $("#search_icon").click(function(){
       $("#h_search").slideToggle();
    });
    //菜单收缩
    $("#menu").click(function(event) {
    	$("#nav_list").slideToggle();
    });
    // 子菜单收缩
    $("#nav_list > li").click(function(event) {
    	// 先把没收的收掉
    	$("#nav_list > li ul").not($(this).children('ul')).hide();
        $("#nav_list > li").not($(this)).children('.nav_down').hide();
        $("#nav_list > li").not($(this)).children('.nav_up').show();
        // 再设置
    	$(this).children('ul').slideToggle();
    	$(this).find(".nav_down").toggle();
    	$(this).children(".nav_up").toggle();
    	event.stopPropagation();
    });
        // 由于footer里的列表在手机端时有点击事件，pad和pc没有事件，是直接显示的；
        // 于是将ul里的span标签的display属性分别设为block（移动端）和inline-block（pad及pc端），
        // 进行区别；用来判断设备
        // 如果是移动端则绑定事件
   if($("#footerlist > li > span").css("display")=="block"){
        $("#footerlist > li > span").click(function(event) {
        	$(this).next("ul").toggle();
        });
   };
        // 店长推荐切换

        $("#titl li").eq(0).click(function(){
        	 $("#titl li").eq(0).addClass("active");
        	 $("#titl li").eq(1).removeClass("active");
             $("#rec_goods li").eq(0).show();
             $("#rec_goods li").eq(1).hide();
        })  ; 
        $("#titl li").eq(1).click(function(){
        	 $("#titl li").eq(1).addClass("active");
        	 $("#titl li").eq(0).removeClass("active");
             $("#rec_goods li").eq(1).show();
             $("#rec_goods li").eq(0).hide();
        })  ; 
         //导航定位
         $(document).scroll(function(event) {
         	 console.log($("#nav").offset().top);
         	 console.log($(document).scrollTop());
         	 if($(document).scrollTop()>=($("#header").offset().top)+$("#header").outerHeight()){
                  $("#nav").css({"position":"fixed","top":0,"z-index":1000});
         	 }else{
         	 	 $("#nav").css({"position":"relative","top":0,"z-index":1});
         	 }
         });
        
      
















});