import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { HomeTitle, Tag } from '@components'
import { AtIcon } from 'taro-ui'
import './index.scss'

export default class Popular extends Component {
  static defaultProps = {
    data: {}
  }

  render () {
    // const { data: { title, itemList = [] } } = this.props

    return (
      <View>
        <View className='at-row at-row__justify--center' style="margin:20px">
            <View className='at-col at-col-2'>
                <View className='at-col at-col__offset-2'>
                    <Text className="day">8</Text>
                </View>
                <View className='at-col at-col__offset-1'> 
                    <Text className="month">1月</Text>
                </View>
            </View>
            <View className='at-col at-col-1' style='background-color:#545454;max-width:1px;'>

            </View>
            <View className='at-col at-col-7 at-col__offset-1 at-col--wrap'>
                <View className="desc">ABCDEFGHIJKLMNOPQRSTUV</View>
                <View className='at-row'>
                    <AtIcon value='calendar' size='15' color='orange'></AtIcon>
                    <View className="name">李莉</View>
                </View>
                
            </View>
        </View>
      </View>
    )
  }
}
