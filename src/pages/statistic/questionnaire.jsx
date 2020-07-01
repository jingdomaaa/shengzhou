import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import './questionnaire.scss'
import { AtButton } from 'taro-ui'

class Questionnaire extends Component {

  config = {
    navigationBarTitleText: 'questionnaire'
  }

  toPage1() {
    if (Taro.getEnv() == Taro.ENV_TYPE.WEB) {
      Taro.navigateTo({
        url: '/pages/circle/circle',
      })
    } else {
      Taro.switchTab({
        url: '/pages/circle/circle',
      })
    }
  }

  toPage2() {
    Taro.navigateTo({url: '/pages/questionnaire/satisfaction'})
  }

  toPage3() {
    Taro.navigateTo({url: '/pages/questionnaire/triedFeeling'})
  }

  toPage4() {
    if (Taro.getEnv() == Taro.ENV_TYPE.WEB) {
      Taro.navigateTo({
        url: '/pages/user/user',
      })
    } else {
      Taro.switchTab({
        url: '/pages/user/user',
      })
    }
  }

  toPage5() {
    Taro.navigateTo({url: '/pages/questionnaire/careerAnchor'})
  }

  render () {
    return (
      <View>
        <AtButton onClick={this.toPage1}>工作压力测试表</AtButton>
        <AtButton onClick={this.toPage2}>员工满意度调查表</AtButton>
        <AtButton onClick={this.toPage3}>职业倦怠感问卷表</AtButton>
        <AtButton onClick={this.toPage5}>职业锚测试表</AtButton>
        <AtButton onClick={this.toPage4}>返回个人中心</AtButton>
      </View>
    )
  }
}

export default Questionnaire
