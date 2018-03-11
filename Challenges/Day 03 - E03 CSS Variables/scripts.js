function handleInput() {
  const metric = this.dataset.metric || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + metric);
}

function init() {
  const inputs = document.querySelectorAll('input');
  
  inputs.forEach(input => input.addEventListener('change', handleInput));
  inputs.forEach(input => input.addEventListener('mousemove', handleInput));  
}

window.onload = init();