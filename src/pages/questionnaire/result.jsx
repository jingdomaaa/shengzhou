import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Textarea, Button } from '@tarojs/components'
import Dialog from './dialog'
import { AtButton } from 'taro-ui'
import './result.scss'

class Result extends Component {
  config = {
    navigationBarTitleText: '结果'
  }
  toPage() {                                    //跳转问卷页面
    Taro.navigateTo({url: '/pages/statistic/questionnaire'})
  }
  btnCancel(){
    this.props.onCloseResult&&this.props.onCloseResult()
  }

  render () {
    return (
      <Dialog>
        <View className='questionnaire-result'>
          <View className='result-body'>
            <View className='btn-group'>
              <AtButton onClick={this.btnCancel.bind(this)} className='btn-ok'>确认</AtButton>
              <AtButton onClick={this.toPage} className='btn-back'>返回问卷中心</AtButton>
            </View>
          </View>
        </View>
      </Dialog>
    )
  }
}

export default Result
