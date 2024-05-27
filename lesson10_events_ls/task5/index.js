function checkAge() {
  let age = document.getElementById('ageInput').value
  if (age < 18) {
    alert('Not allowed!')
  } else {
    alert('Welcome!')
  }
}
