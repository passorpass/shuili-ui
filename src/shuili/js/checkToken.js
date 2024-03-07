// 在你的工具类或者工具函数文件中添加一个检查 token 并跳转登录页面的函数
function checkTokenAndRedirect() {
  var token = localStorage.getItem('token');
  if (!token) {
    // 未登录，跳转到登录页面
    window.location.href = '/'; // 这里的 '/login' 是你登录页面的路径，请根据实际情况修改
    return false; // 返回 false 表示未登录
  }
  return true; // 返回 true 表示已登录
}
