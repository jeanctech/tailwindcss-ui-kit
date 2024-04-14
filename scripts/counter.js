export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
<<<<<<< HEAD
    element.innerHTML = `count is ${counter}`
=======
    element.innerHTML = `Count Is - ${counter}`
>>>>>>> d841e107b1eec7a0c6506c961dded372341ffd0c
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
