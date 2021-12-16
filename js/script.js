$('.menuBtn').click(function () {
  $('.navbar .menu').toggleClass("active");
  $('.menuBtn i').toggleClass("active");
});

$("#_video").mouseenter(function () {
  $(this).addClass('hover-state');
}).mouseleave(function () {
  $(this).removeClass('hover-state');
});

$("#_video._click-to-play").click(function () {
  player = new YT.Player('_player', {
      width: '100%',
      height: '700px',
      videoId: '21YUSUNXuzs',
      playerVars: {
          'autoplay': 1
      },
      events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
      }
  });
});

$(function() {
  $('.closebtn').click(function() {
    player.pauseVideo();
  });
});

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
      player.destroy();
      $('#_video').css({
          "background-color": "#000"
      });
  }
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


$(document).ready(function() {
  $(window).scroll(function() {
      if (this.scrollY > 550) {
          $('.navbar').addClass("sticky");         
      } else {
          $('.navbar').removeClass("sticky");                 
      }
    
      if (this.scrollY > 1400) {
          $('.scroll-up-btn').addClass("showbtn");
      } else {
          $('.scroll-up-btn').removeClass("showbtn");
      }
    
      if (this.scrollY > 1600) {
          $('.home').addClass("hidden1");
      } else {
          $('.home').removeClass("hidden1");
      }

      if (this.scrollY > 1700) {
        $('.home').addClass("pos");
    } else {
        $('.home').removeClass("pos");
    }
    
      if (this.scrollY > 400) {
          $('.homez-in').addClass("z-in");
          $('.fa-angle-double-down').removeClass("fa-angle-double-down");
          $('.corte p').removeClass("scroll");
      } else {
          $('.homez-in').removeClass("z-in");
          $('.corte i').addClass("fa fa-angle-double-down");
          $('.corte p').addClass("scroll");
         
      }
    
      if (this.scrollY > 1000) {
          $('.homez-in').addClass("pos");
    } else {
          $('.homez-in').removeClass("pos");
    } 
  });


});

$('.scroll-up-btn').click(function () {
  $('html').animate({ scrollTop: 0 });
});


var text = document.querySelector("#overlay");
window.addEventListener("scroll", function() {
  var value = window.scrollY;
  text.style.backgroundSize = 400 + value * 100 + "px";
});


function toggleTheme() {
    const btnToggleTheme = document.querySelector('.theme-toggle');
    const iconTheme = document.querySelector('.fa-sun');
  
    function handleClick() {
      document.documentElement.classList.toggle('darkMode');
      if (iconTheme.classList[1] === 'fa-moon') {
        iconTheme.classList.remove('fa-moon');
        iconTheme.classList.add('fa-sun');
      } else {
        iconTheme.classList.remove('fa-sun');
        iconTheme.classList.add('fa-moon');
      }
    }
  
    btnToggleTheme.addEventListener('click', handleClick);
  }
 
  toggleTheme();


   //typing animation script
   var typed = new Typed(".typing", {
    strings: ["Student", "Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

 
 // toggle menu/navbar script
 


const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  reset: true
});

ScrollReveal().reveal('.headline')
ScrollReveal().reveal('.bodyline', { delay: 200 });
ScrollReveal().reveal('.tagline', { delay: 400 });
ScrollReveal().reveal('.punchline', { delay: 500 });
ScrollReveal().reveal('.lastline', { delay: 600 });






const left = document.querySelector('.left');
const right = document.querySelector('.right');

const slider = document.querySelector('.slider');

const indicatorParent = document.querySelector('.control ul'); 
const indicators = document.querySelectorAll('.control li');
index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.control .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translateX(' + (i) * -25 + '%)';  
    index = i;
    
  });
});

left.addEventListener('click', function() {
  index = (index > 0) ? index -1 : 0;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -25 + '%)';
});

right.addEventListener('click', function() {
  index = (index < 4 - 1) ? index+1 : 3;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -25 + '%)';
});



//Filter section

const filterBtnsContainer = document.querySelector(".portfolio-filter");
let portfolioItems;
filterBtnsContainer.addEventListener("click", (e) => {
  if(e.target.classList.contains("portfolio-filter-btn") && 
  !e.target.classList.contains("active")){
    filterBtnsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    filterItems(e.target);
  }
})


function filterItems(filterBtn){
 const selectedCategory = filterBtn.getAttribute("data-filter");
 document.querySelectorAll(".portfolio-item").forEach((item) =>{
    const category = item.getAttribute("data-category").split(",");
   if (category.indexOf(selectedCategory) !== -1 || selectedCategory === "all"){
     item.classList.add("show");
   }
   else{
    item.classList.remove("show");
   }
 });
   portfolioItems = document.querySelectorAll(".portfolio-item.show");
}


//active category
filterItems(document.querySelector(".portfolio-filter-btn.active"));



/*-------------Portfolio item detaillls popup ---------- */
let portfolioItemIndex;
document.addEventListener("click", (e) => {
  if(e.target.closest(".portfolio-item")){
   const currentItem = e.target.closest(".portfolio-item");
   portfolioItemIndex = Array.from(portfolioItems).indexOf(currentItem);
   console.log(portfolioItemIndex);
   togglePopup();
   portfolioItemDetails();
   updateNextPrevItem();
  }
});

function togglePopup(){
  document.querySelector(".portfolio-popup").classList.toggle("open");
  // toggleBodyScrolling();
}

document.querySelector(".pp-close-btn").addEventListener("click", togglePopup);

function portfolioItemDetails(){
  document.querySelector(".pp-thumbnail img").src =
  portfolioItems[portfolioItemIndex].querySelector("img").src;

   document.querySelector(".pp-header h3").innerHTML =
   portfolioItems[portfolioItemIndex].querySelector(".portfolio-title").innerHTML;

  document.querySelector(".pp-body").innerHTML =
  portfolioItems[portfolioItemIndex].querySelector(".portfolio-details").innerHTML;

  document.querySelector(".pp-counter").innerHTML = `${portfolioItemIndex+1} of ${portfolioItems.length}
  ( <span title="category">${document.querySelector(".portfolio-filter-btn.active").
innerHTML}</span>)`;
}

function updateNextPrevItem(){
  if(portfolioItemIndex !== 0){
    document.querySelector(".pp-footer-left").classList.remove("hidden");
    document.querySelector(".pp-footer-left h3").innerHTML = 
    portfolioItems[portfolioItemIndex-1].querySelector("h3").innerHTML;

    document.querySelector(".pp-footer-left img").src = 
    portfolioItems[portfolioItemIndex-1].querySelector("img").src;
}
  else{
    document.querySelector(".pp-footer-left").classList.add("hidden");
  }

  if(portfolioItemIndex !== portfolioItems.length -1){
    document.querySelector(".pp-footer-right").classList.remove("hidden");
    document.querySelector(".pp-footer-right h3").innerHTML = 
    portfolioItems[portfolioItemIndex+1].querySelector("h3").innerHTML;

    document.querySelector(".pp-footer-right img").src = 
    portfolioItems[portfolioItemIndex+1].querySelector("img").src;
  }
  else{
  document.querySelector(".pp-footer-right").classList.add("hidden");
  }
}

document.querySelector(".pp-prev-btn").addEventListener("click", () =>{
 changePortfolioItem("prev");
});
document.querySelector(".pp-next-btn").addEventListener("click", () =>{
  changePortfolioItem("next");
});

function changePortfolioItem(direction){
  if(direction == "prev"){
    portfolioItemIndex--;
  }
  else{
    portfolioItemIndex++;
  }
  document.querySelector(".pp-overlay").classList.add(direction);
  setTimeout(() =>{
    document.querySelector(".pp-inner").scrollTo(0,0);
    portfolioItemDetails();
    updateNextPrevItem();
  },400);
  setTimeout(() =>{
    document.querySelector(".pp-overlay").classList.remove(direction);
  },1000);
  

}

console.log("%c Brayan Andrade Portfolio ","color: #ff00c8; font-size: 1.8rem");



console.log('%c ', 'padding:200px 150px; font-size: 0; background:url("https://64.media.tumblr.com/e2f866088c2d40f462e9d7007d7b6aa6/tumblr_npynjklT3F1u8qul0o1_500.gifv") no-repeat; background-size: cover;')

// var res = `
// ⣿⣿⣷⡁⢆⠈⠕⢕⢂⢕⢂⢕⢂⢔⢂⢕⢄⠂⣂⠂⠆⢂⢕⢂⢕⢂⢕⢂⢕⢂
// ⣿⣿⣿⡷⠊⡢⡹⣦⡑⢂⢕⢂⢕⢂⢕⢂⠕⠔⠌⠝⠛⠶⠶⢶⣦⣄⢂⢕⢂⢕
// ⣿⣿⠏⣠⣾⣦⡐⢌⢿⣷⣦⣅⡑⠕⠡⠐⢿⠿⣛⠟⠛⠛⠛⠛⠡⢷⡈⢂⢕⢂
// ⠟⣡⣾⣿⣿⣿⣿⣦⣑⠝⢿⣿⣿⣿⣿⣿⡵⢁⣤⣶⣶⣿⢿⢿⢿⡟⢻⣤⢑⢂
// ⣾⣿⣿⡿⢟⣛⣻⣿⣿⣿⣦⣬⣙⣻⣿⣿⣷⣿⣿⢟⢝⢕⢕⢕⢕⢽⣿⣿⣷⣔
// ⣿⣿⠵⠚⠉⢀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⢕⢕⢕⢕⢕⢕⣽⣿⣿⣿⣿
// ⢷⣂⣠⣴⣾⡿⡿⡻⡻⣿⣿⣴⣿⣿⣿⣿⣿⣿⣷⣵⣵⣵⣷⣿⣿⣿⣿⣿⣿⡿
// ⢌⠻⣿⡿⡫⡪⡪⡪⡪⣺⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃
// ⠣⡁⠹⡪⡪⡪⡪⣪⣾⣿⣿⣿⣿⠋⠐⢉⢍⢄⢌⠻⣿⣿⣿⣿⣿⣿⣿⣿⠏⠈
// ⡣⡘⢄⠙⣾⣾⣾⣿⣿⣿⣿⣿⣿⡀⢐⢕⢕⢕⢕⢕⡘⣿⣿⣿⣿⣿⣿⠏⠠⠈
// ⠌⢊⢂⢣⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢐⢕⢕⢕⢕⢕⢅⣿⣿⣿⣿⡿⢋⢜⠠⠈
// ⠄⠁⠕⢝⡢⠈⠻⣿⣿⣿⣿⣿⣿⣿⣷⣕⣑⣑⣑⣵⣿⣿⣿⡿⢋⢔⢕⣿⠠⠈
// ⠨⡂⡀⢑⢕⡅⠂⠄⠉⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⢔⢕⢕⣿⣿⠠⠈
// ⠄⠪⣂⠁⢕⠆⠄⠂⠄⠁⡀⠂⡀⠄⢈⠉⢍⢛⢛⢛⢋⢔⢕⢕⢕⣽⣿⣿⠠⠈ 
                                                       
// `
// console.log(res)


// $(document).ready(function(){
//   $(".button").click(function(){
//       var name = $(this).attr('data-filter');
//       if(name == "all"){
//           $(".shot-thumbnail").show('2000');
//       }else{
//           $(".shot-thumbnail").not("."+name).hide('2000');
//           $(".shot-thumbnail").filter("."+name).show('2000');
//       }
//   })

//   $(".navigation a").click(function(){
//       $(this).addClass("active").siblings().removeClass("active");
//   })
// })







// $('.loop').owlCarousel({
//   center: true,
//   items:2,
//   loop:true,
//   margin:10,
//   responsive:{
//       600:{
//           items:4
//       }
//   }
// });
// $('.nonloop').owlCarousel({
//   center: true,
//   items:2,
//   loop:false,
//   margin:10,
//   responsive:{
//       600:{
//           items:4
//       }
//   }
// });

// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
// });


// new Glider(document.querySelector(".glider"),{
//   animationDuration: 600,
//   animationTimingFunc: 'linear',
//   perView: 1,
//   peek: 300,
//   focusAt: 0,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   dots: '#dots',
//   draggable: true,
//   arrows: {
//       prev: '.glider-prev',
//       next: '.glider-next'
//   }
// });








// const filterItem = document.querySelector(".items");
// const filterImg = document.querySelectorAll(".gallery .image");
 
// window.onload = ()=>{ //after window loaded
//   filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
//     if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
//       filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
//       selectedItem.target.classList.add("active"); //add that active class on user selected item
//       let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
//       filterImg.forEach((image) => {
//         let filterImges = image.getAttribute("data-name"); //getting image data-name value
//         //if user selected item data-name value is equal to images data-name value
//         //or user selected item data-name value is equal to "all"
//         if((filterImges == filterName) || (filterName == "all")){
//           image.classList.remove("hide"); //first remove the hide class from the image
//           image.classList.add("show"); //add show class in image
//         }else{
//           image.classList.add("hide"); //add hide class in image
//           image.classList.remove("show"); //remove show class from the image
//         }
//       });
//     }
//   }
//   for (let i = 0; i < filterImg.length; i++) {
//     filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
//   }
// }
 
// //fullscreen image preview function
// //selecting all required elements
// const previewBox = document.querySelector(".preview-box"),
// categoryName = previewBox.querySelector(".title p"),
// previewImg = previewBox.querySelector("img"),
// closeIcon = previewBox.querySelector(".icon"),
// shadow = document.querySelector(".shadow");
 
// function preview(element){
//   //once user click on any image then remove the scroll bar of the body, so user cant scroll up or down
//   document.querySelector("body").style.overflow = "hidden";
//   let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
//   let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
//   previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
//   categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
//   previewBox.classList.add("show"); //show the preview image box
//   shadow.classList.add("show"); //show the light grey background
//   closeIcon.onclick = ()=>{ //if user click on close icon of preview box
//     previewBox.classList.remove("show"); //hide the preview box
//     shadow.classList.remove("show"); //hide the light grey background
//     document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
//   }
// }



