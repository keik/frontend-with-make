let $ = require('jquery')

$(document).ready(() => {
  $('#restful-form')
    .on('submit', onSubmitForm)
    .on('change', '[name=method]', onChangeMethod)
})

function onSubmitForm(e) {
  e.preventDefault()

  let formEl = e.target,
      uri = formEl.uri.value,
      method = formEl.method.value,
      data = (method === 'post') ? {name: formEl.name.value} : null

  $.ajax({
    url: uri,
    method: method,
    data: data
  }).done((msg) => {
    showMessage(JSON.stringify(msg))
  }).fail((xhr, err) => {
    console.log(err)
  })
}

function onChangeMethod(e) {
  refreshForm(e.target.form)
}

function refreshForm(formEl) {
  let uriInputEl = formEl.uri,
      nameInputEl = formEl.name,
      methodInputEl = formEl.method

  switch (methodInputEl.value) {
  case 'get':
    uriInputEl.value = 'http://localhost:3000/users'
    nameInputEl.disabled = true
    break
  case 'post':
    uriInputEl.value = 'http://localhost:3000/users'
    nameInputEl.disabled = false
    break
  case 'put':
    uriInputEl.value = 'http://localhost:3000/users/<ID>'
    nameInputEl.disabled = false
    break
  case 'delete':
    uriInputEl.value = 'http://localhost:3000/users/<ID>'
    nameInputEl.disabled = true
    break
  default:
  }
}

function showMessage(msg) {
  $('#response-message').text(msg)
}
