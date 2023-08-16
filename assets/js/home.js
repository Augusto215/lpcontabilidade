$(document).ready(function(){
    $('#phoneNumber').mask('(00) 00000-0000');
  });



$('#float-button').click(function() {
    $('#formModal').modal('show');
  });
  
  document.querySelectorAll('.contrate-a').forEach(function(el) {
    el.setAttribute('href', 'https://api.whatsapp.com/send?phone=554791165955&text=Ol%C3%A1!%20Eu%20queria%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Senem%20Contabildade.');
});

  document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    
    var whatsappUrl = "https://wa.me/554791165955?text=" + encodeURIComponent("Nome" + ': ' + name + ': ' + "Mensagem" + ': ' + message);
    
    // Feche o modal e abra o WhatsApp depois de um pequeno atraso
    $('#formModal').modal('hide');
    setTimeout(function() { window.location.href = whatsappUrl; }, 500);
  });


  window.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona todos os links com hashtags
    var anchorlinks = document.querySelectorAll('a[href^="#"]')

    for (let item of anchorlinks) { // loop over them
      item.addEventListener('click', (e) => {
          let hashval = item.getAttribute('href')
          let target = document.querySelector(hashval)
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          })
          history.pushState(null, null, hashval)
          e.preventDefault()
      })
    }
  });


  window.addEventListener('DOMContentLoaded', (event) => {
    var anchorlinks = document.querySelectorAll('a[href^="#"]')

    for (let item of anchorlinks) {
      item.addEventListener('click', (e) => {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        let targetPosition = target.offsetTop
        let navbarHeight = 120 // substitua isso pela altura da sua barra de navegação
        window.scroll({
          top: targetPosition - navbarHeight,
          behavior: 'smooth'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
      })
    }
  });

  var typed = new Typed('#element', {
    strings: ['SE CONCENTRAR NO SEU NEGÓCIO!', 'TER MAIS TEMPO LIVRE!',
  ' ALCANÇAR SEUS OBJETIVOS!'],
    typeSpeed: 50,
    loop:true,
  });

  document.querySelector('#element').style.color = 'rgb(0, 162, 255)';