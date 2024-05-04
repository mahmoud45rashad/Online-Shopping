let accordionBtn = document.querySelectorAll('.sidebar-menu-category-btn');
let accordion = document.querySelectorAll('.sidebar-menu-category-ul');
let plus = document.querySelectorAll('.fa-plus');
let minus = document.querySelectorAll('.fa-minus');
let right = document.querySelectorAll('.right');
let bottom = document.querySelectorAll('.bottom');

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', function () {
      const clickedBtn = this.nextElementSibling.classList.contains('active');

      for (let j = 0; j < accordion.length; j++) {
          if (clickedBtn) break;

          if (minus[j] && plus[j] && bottom[j] && right[j]) {
              minus[j].style.display = "none";
              plus[j].style.display = "block";
              bottom[j].style.display = "none";
              right[j].style.display = "block";
          }
      }

      this.nextElementSibling.classList.toggle('active');
      this.classList.toggle('active');

      // Get the minimum length among the arrays
      const minLen = Math.min(accordionBtn.length, minus.length, plus.length, bottom.length, right.length);
      
      // Update styles based on the minimum length
      for (let i = 0; i < minLen; i++) {
          if (accordion[i].classList.contains('active')) {
              minus[i].style.display = "block";
              plus[i].style.display = "none";
              bottom[i].style.display = "block";
              right[i].style.display = "none";
          } else {
              minus[i].style.display = "none";
              plus[i].style.display = "block";
              bottom[i].style.display = "none";
              right[i].style.display = "block";
          }
      }
  });
}



const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.style.display = "none"; // تحديث خاصية العرض لأيقونة الناقص

});

