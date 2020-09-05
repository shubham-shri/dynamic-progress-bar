let progressRef = document.querySelector('.progress-bar')
for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    progressRef.value = progressRef.value + 10
  }, 1000 * i)
}
