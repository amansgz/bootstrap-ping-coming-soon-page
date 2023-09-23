const emailInput = document.getElementById('email');
const btnSubmit = document.getElementById('btn-submit');

const errorMessage = document.querySelector('.message-error');

btnSubmit.addEventListener('click', e => {
  e.preventDefault();

  const emailValue = emailInput.value;
  const validation = validate_email(emailValue);

  
  if(emailValue == '') {
    emailInput.classList.add('input-email-error');
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Whoops! It looks like you forgot to add your email';
  }

  if (!validation) {
    emailInput.classList.add('input-email-error');
    errorMessage.style.opacity = '1';
    errorMessage.textContent = 'Please provide a valid email address';
    btnSubmit.style.backgroundColor = 'hsl(223, 87%, 75%)';
  }
  if(validation) {
    emailInput.value = '';
    emailInput.classList.remove('input-email-error');
    errorMessage.style.opacity = '0';
    btnSubmit.style.backgroundColor = 'hsl(223, 87%, 63%)';
  }
})

function validate_email(email) {
    const regex =  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (email.match(regex)) {
      return true;
    }else {
      return false;
    }
}