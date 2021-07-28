const mouseEvent = (e) => {
  const shouldShowExitIntent =
    !e.toElement && !e.relatedTarget && e.clientY < 10

  if (shouldShowExitIntent) {
    document.removeEventListener('mouseout', mouseEvent)

    document.querySelector('.exit-intent-popup').classList.add('visible')

    document.querySelector('.exit-intent-popup').addEventListener('click', exit)
  }
}

setTimeout(() => {
  document.addEventListener('mouseout', mouseEvent)
}, 1000)

const exit = (e) => {
  const shouldExit =
    [...e.target.classList].includes('exit-intent-popup') ||
    [...e.target.classList].includes('close')

  if (shouldExit) {
    document.querySelector('.exit-intent-popup').classList.remove('visible')
  }
}
