$(document).ready(function(){
  $("#container").addClass("start");
  $("nav li").click(function(){
    $("#container").css("max=width", "100%");
    var id=$(this).attr("data-rol");
    $("nav li").removeClass("on");
    $(this).addClass("on");
    $(".content").removeClass("prev this next");
    //클릭 시 갖고 있던 클래스 모두 지움
    $("#" + id).addClass("this").prevAll().addClass("prev");
    //클릭한 메뉴와 매칭되는 id에 this클래스 지정, 그 앞 모든 <section>태그는 .prev 클래스를 지정
    $("#" + id).nextAll().addClass("next");
    //클릭한 메뉴와 매칭되는 id 뒤에 오는 <section>태그는 .next 클래스를 지정
  });
  $(".logo_box").click(function(){
    $("nav li").removeClass("on");
    $(".content").removeClass("prev this next");
    $("#container").css("max-width", "1200px");
  });
});
