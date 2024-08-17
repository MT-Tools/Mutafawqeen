let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '65px' , 
    duration: 2600 , 
    delay: 450 , 
    reset:true 
});

sr.reveal('.hero-text',{delay:200,origin:'right'});
sr.reveal('.hero-img',{delay:450,origin:'top'});
sr.reveal('.about-me-p',{delay:100,origin:'top'});
sr.reveal('.title',{delay:100,origin:'top'});
sr.reveal('.top-7-ques-p1',{delay:100,origin:'right'});
sr.reveal('.top-7-ques-p2',{delay:100,origin:'right'});
sr.reveal('.top-7-ques-p3',{delay:100,origin:'right'});
sr.reveal('.top-7-ques-p4',{delay:100,origin:'right'});
sr.reveal('.top-7-ques-p5',{delay:100,origin:'right'});
sr.reveal('.top-7-ques-p6',{delay:100,origin:'right'});
sr.reveal('.top-7-ques-p7',{delay:100,origin:'right'});
sr.reveal('.cards',{delay:100,origin:'top'});
sr.reveal('.card',{delay:100,origin:'right'});
sr.reveal('.imgery',{delay:100,origin:'top'});
sr.reveal('.img-troph',{delay:100,origin:'top'});
sr.reveal('url(lux.gif)',{delay:100,origin:'top'});
sr.reveal('.card-m',{delay:100,origin:'right'});


$(".card").click(function(){
    $(".card").removeClass("active");
    $(this).addClass("active");
});


/* تغير المود 
$(".toggle").click(function() {
    $(this).find("i").toggleClass("ri-toggle-fill ri-toggle-line");
  });
/* تغير الالوان حسب شرط المود 

  $(".toggle").click(function() {
    $("*").css("background", "white");
  });
  $(".toggle").click(function() {
    $("*").css("color", "black");
  });*/
