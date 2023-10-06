const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
})




const faqToggleButtons = document.querySelectorAll('.faq-toggle');
        
faqToggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.closest('.bg-white').querySelector('.faq-answer');
        const expandIcon = button.querySelector('.expand-icon');

        if (faqAnswer.classList.contains('hidden')) {
            faqAnswer.classList.remove('hidden');
            expandIcon.classList.remove('rotate-180');
        } else {
            faqAnswer.classList.add('hidden');
            expandIcon.classList.add('rotate-180');
        }
    });
});


const callback = function (entries) {
    entries.forEach((entry) => {
      console.log(entry);
  
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeIn");
      } else {
        entry.target.classList.remove("animate-fadeIn");
      }
    });
  };
  
  const observer = new IntersectionObserver(callback);
  
  const targets = document.querySelectorAll(".js-show-on-scroll");
  targets.forEach(function (target) {
    target.classList.add("opacity-0");
    observer.observe(target);
  });
