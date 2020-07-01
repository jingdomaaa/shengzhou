import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Textarea  } from '@tarojs/components'
import './dialog.scss'

class Dialog extends Component {
  config = {
    navigationBarTitleText: 'dialog'
  }

  render () {
    return (
      <View className='dialog'>
        {this.props.children}
      </View>
    )
  }
}

export default Dialog
