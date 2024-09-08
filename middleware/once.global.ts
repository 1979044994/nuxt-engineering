export default defineNuxtRouteMiddleware((to, from) => {
  console.log(1111);

  // // 假设存储 token 的地方
  // const token = useCookie('token');
  // const userRole = useCookie('userRole');

  // // 白名单路由，不需要 token 即可访问
  // const whiteList = ['/login', '/register'];

  // if (whiteList.includes(to.path)) {
  //   // 如果是白名单路由，直接放行
  //   return;
  // }

  // if (!token.value) {
  //   // 没有 token，重定向到登录页面
  //   return navigateTo('/login');
  // }

  // if (userRole.value === 'admin') {
  //   // 管理员权限，可以访问特定的管理页面
  //   if (to.path.startsWith('/admin')) {
  //     return;
  //   } else {
  //     // 非管理页面，重定向到管理员首页
  //     return navigateTo('/admin/dashboard');
  //   }
  // } else if (userRole.value === 'user') {
  //   // 普通用户权限，不能访问管理页面
  //   if (!to.path.startsWith('/admin')) {
  //     return;
  //   } else {
  //     // 尝试访问管理页面，重定向到用户首页
  //     return navigateTo('/user/dashboard');
  //   }
  // }
});
