import { useToast } from "~/components/ui/toast";

// 定义一个名为 useRequest 的函数，接收 url 和 options 两个参数
export const useRequest = (url: string, options: any) => {
// 获取运行时配置
  const config = useRuntimeConfig();
  // 获取 Nuxt 应用实例
  const nuxtApp = useNuxtApp();
  // 从 useToast 中获取 toast 对象，用于显示提示信息
  const { toast } = useToast();

  // 使用 useFetch 发送请求，并配置各种处理函数和选项
  return useFetch(url, {
    // 设置请求的基础 URL，从运行时配置中获取
    baseURL: config.public.apiBase,
    // 请求拦截处理函数
    onRequest({ options }) {
      // 从本地存储中获取 token
      const token = localStorage.getItem('token');
      // 如果有 token，则在请求头部添加 Authorization 字段
      options.headers = {
        ...options.headers,
        Authorization: token ? `Bearer ${token}` : '',
      };
      // 打印请求的 URL 和头部信息，方便调试
      console.log(`Requesting ${url} with headers ${JSON.stringify(options.headers)}`);
    },
    // 响应成功处理函数
    onResponse({ response }) {
      // 获取响应的状态码和数据
      const { status, _data } = response;
      // 如果响应状态码在 200 到 300 之间（表示成功）
      if (status >= 200 && status < 300) {
        // 但如果数据中的 code 不为 200（表示业务逻辑上的错误）
        if (_data.code !== 200) {
          // 如果在客户端环境
          if (import.meta.client) {
            // 使用 toast 显示错误提示信息
            toast({
              title: '请求出现问题',
              description: _data.message,
              variant: 'destructive',
            });
          } else {
            // 如果不在客户端环境，使用 Nuxt 应用实例进行页面导航到错误页面，并传递错误信息
            nuxtApp.runWithContext(() => {
              navigateTo({ path: '/myError', query: { message: _data.message, code: _data.code } });
            });
          }
        }
      }
      // 打印响应状态码和数据，方便调试
      console.log(`Response status: ${status}, data: ${JSON.stringify(_data)}`);
    },
    // 响应错误处理函数
    onResponseError({ error, response }) {
      // 获取错误信息，如果错误对象中有 message 则使用，否则使用响应数据中的 message
      let message = error?.message;
      message = response._data.message;
      // 如果在客户端环境
      if (import.meta.client) {
        // 使用 toast 显示错误提示信息
        toast({
          title: '请求出现错误',
          description: message,
          variant: 'destructive',
        });
      } else {
        // 如果不在客户端环境，使用 Nuxt 应用实例进行页面导航到错误页面，并传递错误信息
        nuxtApp.runWithContext(() => {
          navigateTo({ path: '/myError', query: { message, code: response._data.code } });
        });
      }
      // 打印错误信息、响应状态码和数据，方便调试
      console.error(`Error: ${message}, response status: ${response.status}, data: ${JSON.stringify(response._data)}`);
    },

    // 扩展传入的 options 参数
    ...options
  });
};
