$(function () {
  var scrollButton = $("#scroll-top");
  $(window).scroll(function () {
    console.log($("a").eq(0).offset().top);
    console.log($(window).scrollTop());
    $(this).scrollTop() >= 400 ? scrollButton.show() : scrollButton.hide();
  });
  scrollButton.click(function () {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      600
    );
  });
});

console.log('Worked')
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
