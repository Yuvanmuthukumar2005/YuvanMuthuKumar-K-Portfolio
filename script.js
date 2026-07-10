// Typing effect
  const roles = ["Java Developer","Spring Boot Engineer","React Developer","Full Stack Builder","Frontend Developer","Backend Developer"];
  const typingEl = document.getElementById('typing');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ri = 0, ci = 0, deleting = false;
  function typeLoop(){
    if(!typingEl) return;
    const word = roles[ri];
    if(!deleting){
      ci++;
      typingEl.textContent = word.slice(0, ci);
      if(ci === word.length){ deleting = true; setTimeout(typeLoop, 1200); return; }
    } else {
      ci--;
      typingEl.textContent = word.slice(0, ci);
      if(ci === 0){ deleting = false; ri = (ri+1) % roles.length; }
    }
    setTimeout(typeLoop, deleting ? 45 : 90);
  }
  if(reduceMotion){ typingEl.textContent = roles[0]; } else { typeLoop(); }

  function scrollToContact(){
    document.getElementById('contact').scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth'});
  }

  // Route rail progress + active stop
  const rail = document.getElementById('routeRail');
  const fill = document.getElementById('routeFill');
  const marker = document.getElementById('routeMarker');
  const stops = rail ? Array.from(rail.querySelectorAll('.stop')) : [];
  const stopSections = ['about','skills','education','internship','projects','contact'];

  function updateRail(){
    if(!rail) return;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(1, Math.max(0, window.scrollY / docHeight));
    const railHeight = rail.offsetHeight;
    fill.style.height = (progress * railHeight) + 'px';
    marker.style.top = (progress * railHeight - 6) + 'px';

    let activeIndex = 0;
    stopSections.forEach((id, i) => {
      const el = document.getElementById(id);
      if(el && el.getBoundingClientRect().top < window.innerHeight * 0.5){
        activeIndex = i;
      }
    });
    stops.forEach((s, i) => s.classList.toggle('active', i <= activeIndex));
  }
  window.addEventListener('scroll', updateRail, {passive:true});
  window.addEventListener('resize', updateRail);
  updateRail();
