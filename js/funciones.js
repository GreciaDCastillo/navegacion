document.addEventListener("DOMContentLoaded", function(){
//EMPIEZA ACÀ
  let glide =  new Glide(".glide",{
    type: "carousel",
    perView: 4,
    gap:10,
    autoplay:30000,
    hoverpause:true
  });

glide.mount();
   


});