// скрытие пароля
function passwordShow() {
  const passwordBtn = document.querySelector('.registration__password')
  const passwordInput = document.querySelector('.registration__input-password')

  passwordBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (passwordInput.type === "password") {
      passwordInput.type = "text"
      passwordBtn.classList.add('view')
    } else {
      passwordInput.type = "password"
      passwordBtn.classList.remove('view')
    }
  })
}

passwordShow()