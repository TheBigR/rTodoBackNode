window.onload = function () {
  const update = document.getElementById('update-button')
  const reUpdate = document.getElementById('reUpdate-button')
  const addSample = document.getElementById('add-button')
  const deleteSample = document.getElementById('delete-button')

  update.addEventListener('click', (_) => {
    fetch('/tasks', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Belle The First',
        task: 'prove this shit works',
      }),
    })
  })

  reUpdate.addEventListener('click', (_) => {
    fetch('/tasks', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Belle The First',
        task: 'prove this shit still works',
      }),
    })
  })
}
