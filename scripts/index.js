document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
  anchor.addEventListener('click', (event)=>{
    event.preventDefault();

    const target = document.querySelector(anchor.getAttribute('href'));

    if (target) {
      const offset = 100; 
      const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: targetTop - offset,
        behavior: 'smooth'
      });
    }
  });
});