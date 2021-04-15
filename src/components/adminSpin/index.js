import adminSpin from './adminSpin'

// 添加组件install挂在方法
adminSpin.install = Vue => Vue.component(adminSpin.name, adminSpin)

export default adminSpin
