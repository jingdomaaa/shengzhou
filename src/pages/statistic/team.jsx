import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import './team.scss'

class Template extends Component {
  config = {
    navigationBarTitleText: 'template'
  }

  render () {
    return (
      <View>
        hello team
      </View>
    )
  }
}

export default Template
