
// API link navbar for all page
document.addEventListener('DOMContentLoaded', function() {
  let navbarPath = 'navbar.html'; // เส้นทางสำหรับไฟล์ navbar

  // ตรวจสอบว่าไฟล์ปัจจุบันอยู่ในโฟลเดอร์ไหน
  if (location.pathname.includes('/view_rent/benz')) {
      navbarPath = '/navbar.html'; 
  } else if (location.pathname.includes('/view_rent/audi')) {
      navbarPath = '/navbar.html'; 
  } else if (location.pathname.includes('/view_rent/bmw')) {
    navbarPath = '/navbar.html'; 
}   else if (location.pathname.includes('/view_rent/jaguar')) {
  navbarPath = '/navbar.html'; 
}   else if (location.pathname.includes('/view_rent/land_pover')) {
  navbarPath = '/navbar.html'; 
}   else if (location.pathname.includes('/view_rent/mini')) {
  navbarPath = '/navbar.html'; 
}   else if (location.pathname.includes('/view_rent/peugeot')) {
  navbarPath = '/navbar.html'; 
}   else if (location.pathname.includes('/view_rent/porsche')) {
  navbarPath = '/navbar.html'; 
}   else if (location.pathname.includes('/view_rent/tesla')) {
  navbarPath = '/navbar.html'; 
}   else if (location.pathname.includes('/view_rent/Volkswagen')) {
  navbarPath = '/navbar.html'; 
}   else if (location.pathname.includes('/view_rent/volvo')) {
  navbarPath = '/navbar.html'; 
}   

  fetch(navbarPath)
      .then(response => response.text())
      .then(data => {
          document.getElementById('navbar').innerHTML = data;
      })
      .catch(error => console.error('Error loading navbar:', error));
});



// burger bar
function myFunction() {
    var x = document.getElementById("burger");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }


  // silde show product card
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("show");
    let dots = document.getElementsByClassName("silde");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex"; 
    
  }

