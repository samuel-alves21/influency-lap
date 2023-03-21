const general = () => {
  const sections = document.querySelectorAll('.sections')

  const defineSectionHeight = () => {
    sections.forEach((section) => {
      if (window.innerWidth < 900) {
        if (
          section.classList.contains('section04') ||
          section.classList.contains('section05')
        ) {
          section.style.height = `${(window.innerHeight * 50) / 100}px`
        } else {
          section.style.height = `${(window.innerHeight * 80) / 100}px`
        }
      } else {
        if (
          section.classList.contains('section04') ||
          section.classList.contains('section05')
        ) {
          section.style.height = `${(window.innerHeight * 60) / 100}px`
        } else {
          section.style.height = `${(window.innerHeight * 90) / 100}px`
        }
      }
    })
  }
  defineSectionHeight()
  window.onresize = defineSectionHeight
}

general()
