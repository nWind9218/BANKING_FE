// main.js
// Accordion logic for plan cards + animation (rewrite)
document.addEventListener('DOMContentLoaded', function () {
  const planCards = document.querySelectorAll('.plan-card');

  // Đóng tất cả card, chỉ mở card thứ 2 mặc định
  planCards.forEach((card, idx) => {
    const detail = card.querySelector('.plan-detail');
    const icon = card.querySelector('.toggle-icon');
    if (idx === 1) {
      detail.classList.add('open');
      icon.textContent = '–';
    } else {
      detail.classList.remove('open');
      icon.textContent = '+';
    }
  });

  planCards.forEach((card) => {
    card.addEventListener('click', function (e) {
      if (e.target.tagName === 'BUTTON') return;
      const detail = card.querySelector('.plan-detail');
      const icon = card.querySelector('.toggle-icon');
      const isOpen = detail.classList.contains('open');
      if (isOpen) {
        // Đóng lại nếu đang mở, thêm animation
        detail.classList.remove('open');
        detail.classList.add('plan-animate-close');
        icon.textContent = '+';
        detail.addEventListener('animationend', function handleClose() {
          detail.classList.remove('plan-animate-close');
          detail.removeEventListener('animationend', handleClose);
        });
      } else {
        // Đóng tất cả card khác
        planCards.forEach((other) => {
          const otherDetail = other.querySelector('.plan-detail');
          const otherIcon = other.querySelector('.toggle-icon');
          if (otherDetail.classList.contains('open')) {
            otherDetail.classList.remove('open');
            otherDetail.classList.add('plan-animate-close');
            otherIcon.textContent = '+';
            otherDetail.addEventListener('animationend', function handleClose() {
              otherDetail.classList.remove('plan-animate-close');
              otherDetail.removeEventListener('animationend', handleClose);
            });
          } else {
            otherDetail.classList.remove('plan-animate-open', 'plan-animate-close');
            otherIcon.textContent = '+';
          }
        });
        // Mở card này, thêm animation
        detail.classList.add('open', 'plan-animate-open');
        icon.textContent = '–';
        detail.addEventListener('animationend', function handleOpen() {
          detail.classList.remove('plan-animate-open');
          detail.removeEventListener('animationend', handleOpen);
        });
      }
    });
  });

  // Scroll to plans when click 'Xem tất cả gói'
  const btnScroll = document.querySelector('a[href="#plans"]');
  if (btnScroll) {
    btnScroll.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('plans').scrollIntoView({ behavior: 'smooth' });
    });
  }
});
