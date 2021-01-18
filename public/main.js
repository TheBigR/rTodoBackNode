window.onload = function () {
  const update = document.getElementById('update-button')

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
}
