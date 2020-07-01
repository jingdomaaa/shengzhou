import Taro, { Component } from '@tarojs/taro'
import Index from './pages/home/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/login/login',
      'pages/home/home',
      'pages/circle/circle',
      'pages/user/user',
      'pages/question/question',
      'pages/msg/myMsg',
      'pages/statistic/person',
      'pages/statistic/team',
      'pages/statistic/questionnaire',
      'pages/questionnaire/satisfaction',
      'pages/questionnaire/triedFeeling',
      'pages/questionnaire/careerAnchor',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '嵊州供电所',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        pagePath: "pages/home/home",
        iconPath: "./assets/tab-bar/home.png",
        selectedIconPath: "./assets/tab-bar/home-active.png",
        text: "首页"
      }, {
        pagePath: "pages/circle/circle",
        iconPath: "./assets/tab-bar/circle.png",
        selectedIconPath: "./assets/tab-bar/circle-active.png",
        text: "心情墙"
      }, {
        pagePath: 'pages/msg/myMsg',
        iconPath: "./assets/tab-bar/message.png",
        selectedIconPath: "./assets/tab-bar/message-active.png",
        text: "悄悄话"
      }, {
        pagePath: "pages/user/user",
        iconPath: "./assets/tab-bar/user.png",
        selectedIconPath: "./assets/tab-bar/user-active.png",
        text: "我的"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
