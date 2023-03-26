const general = () => {
  const sections = document.querySelectorAll('.sections')

  window.onscroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = 'block'
    } else {
      scrollToTopBtn.style.display = 'none'
    }
  }

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })

  const defineSectionHeight = () => {
    sections.forEach((section) => {
      if (window.innerWidth < 900) {
        if (
          section.classList.contains('section04') ||
          section.classList.contains('section05')
        ) {
          section.style.height = `${(window.innerHeight * 80) / 100}px`
        } else {
          section.style.height = `${window.innerHeight}px`
        }
      } else {
        if (
          section.classList.contains('section04') ||
          section.classList.contains('section05')
        ) {
          section.style.height = `${(window.innerHeight * 80) / 100}px`
        } else {
          section.style.height = `${window.innerHeight}px`
        }
      }
    })
  }
  defineSectionHeight()
  window.onresize = defineSectionHeight
}

general()
