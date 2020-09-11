document.querySelectorAll('.action-button').forEach(e => {
  e.addEventListener('mousedown', (e) => {
    e.target.style.transform = 'translate(0px, 2px)';
  })
});

document.querySelectorAll('.action-button').forEach(e => {
  e.addEventListener('mouseup', (e) => {
    e.target.style.transform = 'translate(0px, 0px)';
  })
});

