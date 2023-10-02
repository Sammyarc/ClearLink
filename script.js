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