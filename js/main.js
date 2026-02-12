// Light interactive behavior: smooth scroll and simple reveal animation
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        const target=document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    })
  })
  // simple reveal
  const reveals = document.querySelectorAll('.card');
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('revealed') })
  },{threshold:0.12})
  reveals.forEach(r=>io.observe(r))
})
