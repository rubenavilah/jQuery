$(document).ready(function(){
  var dom_ul = $("ul");
  var dom_lis = $("ul li");
  console.log(dom_ul);
  console.log(dom_lis);
  dom_ul.attr("class","list-ordered");
  dom_ul.attr({
    "class": "list-ordered",
    "id":"little-list",
  });
  console.log(dom_lis.length);
  console.log(dom_lis[0]);
  $(dom_lis[0]).html("<button>Boton por Defecto</button>");
  var first_button = $("ul li:first-child button");
  first_button.text("Mi primer Boton");
  first_button.width("500");
  dom_lis.each(function(index, element){
    console.log(element);
  });
  var new_li_button = first_button.parent().clone();
  dom_ul.append(new_li_button);
  console.log(new_li_button.siblings());
  console.log(new_li_button.nextAll());
  console.log(new_li_button.prevAll());
  console.log(new_li_button.next());
  console.log(new_li_button.find("button"));
  console.log(new_li_button.find("button").parents());
  first_button.on("mouseover mouseleave", function(){
    first_button.parent().siblings().toggle(500);
  });
  var google_link = $("a");
  google_link.on("click", function(eventObject){
    eventObject.preventDefault();
    eventObject.stopPropagation();
    google_link.hide(500);
    google_link.show(500);
    google_link.slideUp(20000).delay(2000);
    google_link.slideDown(2000);
  });
  dom_ul.addClass("little-list");
  dom_ul.removeClass("little-list");
});
