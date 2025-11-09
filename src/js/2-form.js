let formData = {
  email: "",
  message: ""
}

const form = document.querySelector('.feedback-form')
const STORAGE_KEY = 'feedback-form-state'

window.addEventListener('DOMContentLoaded', loadData)
form.addEventListener('input', saveData)
form.addEventListener('submit', sendForm)

function loadData() {
  const data = localStorage.getItem(STORAGE_KEY)
  if (data) {
    const parsed = JSON.parse(data)
    formData = parsed
    form.elements.email.value = parsed.email || ''
    form.elements.message.value = parsed.message || ''
  }
}

function saveData(e) {
  const name = e.target.name
  const value = e.target.value
  formData[name] = value
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function sendForm(e) {
  e.preventDefault()
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields')
  } else {
    console.log(formData)
    localStorage.removeItem(STORAGE_KEY)
    form.reset()
    formData = { email: '', message: '' }
  }
}