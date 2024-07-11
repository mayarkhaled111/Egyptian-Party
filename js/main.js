/// <reference types='../@types/jquery' />

$(".open").on("click", function () {
  $(".sideBar").animate({ width: "250px", paddingInline: "30px" }, 500);
});

$("aside .icon i").on("click", function () {
  $(".sideBar").animate({ width: "0", paddingInline: "0" }, 500);
});

$("#details h3").on("click", function (e) {
  $(e.target).siblings("p").not($(e.target).next()).slideUp(500);
  $(e.target).next().slideToggle(500);
});

$(document).ready(function () {
  const targetDate = new Date("2024-10-25").getTime();
  const countDown = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $(".days").html(days + "D");
    $(".hours").html(hours + "h");
    $(".min").html(minutes + "m");
    $(".sec").html(seconds + "s");

    if (distance < 0) {
      clearInterval(countDown);
      $("#countdown").html("EXPIRED");
    }
  }, 1000);
});

const text = $(".form textarea");

text.on("input", function (e) {
  const num = text.attr("maxlength") - this.value.length;
  $(".form p span").text(num);
});

$("aside a").on("click", function (e) {
  let aHref = e.target.getAttribute("href");
  let sectionOffset = $(aHref).offset().top;
  $("body,html").animate({ scrollTop: sectionOffset }, 500);
});

$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var sectionOffset = $("#form").offset().top;
  let top = sectionOffset + 50

  if (scrollTop >= sectionOffset) {
    $('.upIcon').css('top', top)
    $('.upIcon').css('opacity','1')
  } else{
    $('.upIcon').css('opacity','0')
  }
});

$('.upIcon').on('click',function(){
  $(window).scrollTop(0)
})