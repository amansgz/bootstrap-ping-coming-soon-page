const formInput = document.getElementById('formInput');
const btnSubmit = document.getElementById('button-addon2');

const errorMessage = document.querySelector('.message-error');

btnSubmit.addEventListener('click', e => {
  e.preventDefault();

  const emailValue = formInput.value;
  const validation = validate_email(emailValue);

  
  if(emailValue == '') {
    formInput.classList.add('input-email-error');
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Whoops! It looks like you forgot to add your email';
  }

  if (!validation) {
    formInput.classList.add('input-email-error');
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Please provide a valid email address';
    btnSubmit.style.backgroundColor = 'hsl(223, 87%, 75%)';
  }
  if(validation) {
    formInput.value = '';
    formInput.classList.remove('input-email-error');
    errorMessage.style.display = 'none';
    btnSubmit.style.backgroundColor = 'hsl(223, 87%, 63%)';
  }
})

function validate_email(email) {/* 
    const regex =  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/; */
    
    if (email.match(regex)) {
      return true;
    }else {
      return false;
    }
}