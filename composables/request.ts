export const useRequest = (url, options) => {
  const config = useRuntimeConfig();
  return useFetch(url, {
    baseURL: config.public.apiBase,
    onRequest({ options }) {

    },
    onResponse({ response }) {

    },

    ...options
  })
}
