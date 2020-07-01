import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import './template.scss'

class Template extends Component {
  config = {
    navigationBarTitleText: 'template'
  }

  render () {
    return (
      <View>
        hello Template
      </View>
    )
  }
}

export default Template
