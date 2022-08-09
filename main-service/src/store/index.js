import { initGlobalState } from 'qiankun'
import Vue from 'vue'

// 父应用的初始state
// Vue.observable 让initialState变成可响应：https://cn.vuejs.org/v2/api/#Vue-observable。
const initialState = Vue.observable({
  ignore: "master",
  user: {
    name: 'zhangsan',
    author: 'laixiansheng',
    developer: 'vue2.x'
  }
})

const actions = initGlobalState(initialState)

actions.onGlobalStateChange((newState) => {
  for (const key in newState) {
    initialState[key] = newState[key]
  }
})

// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key) => {
  // 有key，表示取globalState下的某个子级对象
  // 无key，表示取全部

  return key ? initialState[key] : initialState
}

export default actions
