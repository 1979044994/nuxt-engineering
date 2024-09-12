export default defineNuxtPlugin({
  name: 'enhanced-error-handling-plugin',
  enforce: 'pre',
  hooks: {
    'vue:error'(error, instance, info) {
      // 打印 Vue 错误信息
      console.error(`Vue Error: ${error.message}`);
      // 打印发生错误的组件实例信息
      console.error(`Component Instance:`, instance);
      // 打印错误详细信息
      console.error(`Error Info:`, info);

      async function sendErrorToServer({ error, instance, info }) {
        try {
          // 使用 $fetch 向服务器的 /error-logging-endpoint 发送 POST 请求，携带错误信息、组件名称和详细信息
          await $fetch('/error-logging-endpoint', {
            method: 'POST',
            body: { error: error.message, component: instance.$options.name || 'Unknown Component', info }
          });
          // 打印成功发送错误信息到服务器的日志
          console.log('Error sent to server successfully.');
        } catch (fetchError) {
          // 打印发送错误信息到服务器时出现的错误
          console.error('Error sending error to server:', fetchError);
        }
      }

      sendErrorToServer({ error, instance, info });

      function showNetworkErrorNotification() {
        // 显示网络错误通知，这里使用了 alert，实际应用中可使用更友好的通知方式
        alert('网络出现问题，请检查你的网络连接。');
      }

      console.log(error.message, 'message');

      if (error.message.includes('Network Error')) {
        // 如果错误信息包含“Network Error”，则显示网络错误通知
        showNetworkErrorNotification();
      }
    },
  },
});
