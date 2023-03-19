const general = () => {
  const sections = document.querySelectorAll('.sections')

  sections.forEach((section) => {
    if (window.innerWidth < 900) {
      section.style.height = `${(window.innerHeight * 80) / 100}px`
    } else {
      section.style.height = `${(window.innerHeight * 90) / 100}px`
    }
  })

  const handleResize = () => {
    sections.forEach((section) => {
      if (window.innerWidth < 900) {
        section.style.height = `${(window.innerHeight * 80) / 100}px`
      } else {
        section.style.height = `${(window.innerHeight * 90) / 100}px`
      }
    })
  }

  window.onresize = handleResize
}

general()
