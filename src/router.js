const staticRoutes = new Map([
  ["/sign-in", "Вход"],
  ["/events", "Мероприятия"],
  ["/events/new", "Новое мероприятие"],
  ["/admins", "Админы"],
  ["/admins/new", "Новый админ"],
])

const eventPath = new URLPattern({
  pathname: "/events/:eventId",
})

const getPageTitle = (pathname) => {
  const staticPageTitle = staticRoutes.get(pathname)

  if (staticPageTitle) {
    return staticPageTitle
  }

  const eventMatch = eventPath.exec({ pathname })

  if (eventMatch) {
    return `Мероприятие ${eventMatch.pathname.groups.eventId}`
  }

  return "Страница не найдена"
}

const renderCurrentRoute = () => {
  const application = document.querySelector("#application")

  application.innerHTML = `<h1>${getPageTitle(location.pathname)}</h1>`
}

export const navigate = (path) => {
  history.pushState({}, "", path)
  renderCurrentRoute()
}

export const startRouter = () => {
  window.addEventListener("popstate", renderCurrentRoute)
  renderCurrentRoute()
}
