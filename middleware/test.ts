export default defineNuxtRouteMiddleware((to) => {

  if (to.path === '/details') {
    console.log('test middleware')
  } else {
    return navigateTo('/more')
  }
})
