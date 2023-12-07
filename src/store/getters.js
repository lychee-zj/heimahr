const getters = {
  sidebar: state => state.app.sidebar, // 取app模块属性
  device: state => state.app.device, // 取app模块属性
  token: state => state.user.token, // 取user模块属性
  avatar: state => state.user.avatar,
  name: state => state.user.name
}
// getters建立对于模块中属性的便捷访问的功能
export default getters
