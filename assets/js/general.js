(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

function openLinkOnNewTab(url) {
  window.open(url, '_blank');
}

function sendWhatsAppMessage() {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  if (!name || !message) return;

  const content = `Olá, me chamo ${name}.\n${message}`;

  this.openLinkOnNewTab(`https://wa.me/5512997445842?text=${encodeURIComponent(content)}`);
}