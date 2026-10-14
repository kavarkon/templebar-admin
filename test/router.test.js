import { expect, test } from "vitest"
import { page } from "vitest/browser"
import { startRouter } from "../src/router.js"

const openRoute = (path) => {
  document.body.innerHTML = '<main id="application"></main>'
  history.replaceState({}, "", path)
  startRouter()
}

test.each([
  ["/sign-in", "Вход"],
  ["/events", "Мероприятия"],
  ["/events/new", "Новое мероприятие"],
  ["/admins", "Админы"],
  ["/admins/new", "Новый админ"],
])("renders %s", async (path, pageTitle) => {
  openRoute(path)

  await expect.element(page.getByRole("heading", { name: pageTitle })).toBeVisible()
})

test("renders an event route with its id", async () => {
  openRoute("/events/42")

  await expect.element(page.getByRole("heading", { name: "Мероприятие 42" })).toBeVisible()
})

test("renders not found for an unknown route", async () => {
  openRoute("/missing")

  await expect.element(page.getByRole("heading", { name: "Страница не найдена" })).toBeVisible()
})
