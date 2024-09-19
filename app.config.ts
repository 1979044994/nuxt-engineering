// 定义配置文件的接口，方便类型提示和代码的可读性
interface AppConfig {
  [key: string]: any; // 添加索引签名
  apiBaseUrl: string; // 后端 API 的基础 URL
  defaultPageSize: number; // 默认的每页数据条数
  themeColors: {
    primary: string; // 主要主题颜色
    secondary: string; // 次要主题颜色
  };
}

// 导出配置对象
export default defineAppConfig<AppConfig>({
  apiBaseUrl: 'https://your-api-url.com', // 设置后端 API 的基础 URL
  defaultPageSize: 10, // 设置默认每页数据条数为 10
  appName: 'My Awesome App',
  themeMode: 'light',
  defaultPageTitle: 'Welcome to My App',
  themeColors: {
    primary: '#4CAF50', // 设置主要主题颜色为绿色
    secondary: '#2196F3', // 设置次要主题颜色为蓝色
  },
});
