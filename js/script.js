const dlg = document.getElementById('contactDialog');
const openBtn = document.getElementById('openDialog');
const closeBtn = document.getElementById('closeDialog');
const form = document.getElementById('contactForm');

let lastActive = null;
openBtn.addEventListener('click', ()=>{
    lastActive = document.activeElement;
    dlg.showModal();
    dlg.querySelector('input, select, textarea, button')?.focus();
});

closeBtn.addEventListener('click', () => dlg.close('cancel'));

dlg.addEventListener('close', () => {
    lastactive?.focus();
});

const phone = document.getElementById('phoneInput');
IMask(
  document.getElementById('phoneInput'),
  {
    mask: '+{7} (000) 000-00-00'
  }
)


