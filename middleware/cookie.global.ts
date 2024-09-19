export default defineNuxtRouteMiddleware((to, from) => {
  console.log('This is a middleware for route');
  const cookie = useCookie('test');
  console.log(cookie.value);


})
