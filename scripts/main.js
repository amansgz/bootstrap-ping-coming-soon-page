const formInput = document.getElementById('formInput');
const btnSubmit = document.getElementById('button-addon2');

const errorMessage = document.querySelector('.message-error');

btnSubmit.addEventListener('click', e => {
  e.preventDefault();

  const emailValue = formInput.value;
  const validation = validate_email(emailValue);

  if (!validation || formInput.value == '') {
    formInput.classList.add('input-email-error');
    errorMessage.style.display = 'block';
    btnSubmit.style.backgroundColor = 'hsl(223, 87%, 75%)';
  }
  if(validation) {
    formInput.value = '';
    formInput.classList.remove('input-email-error');
    errorMessage.style.display = 'none';
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