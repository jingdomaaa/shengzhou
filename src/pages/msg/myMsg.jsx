import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import './myMsg.scss'
import { AtList, AtListItem } from "taro-ui"

export default class MyMsg extends Component {
  config = {
    navigationBarTitleText: '我的消息'
  }

  render () {
    return (
      <View>
        <AtList>
          <AtListItem
                      title='新的消息(普通消息)'
                      note='所长 2019-07-22'
                      extraText='详细信息'
                      arrow='right'
                      iconInfo={{
                        size: 25,
                        color: '#78A4FA',
                        value: 'message',
                      }}
                    />
                    <AtListItem
                    title='新的消息(阅后即焚)'
                    note='所长 2019-07-22'
                    extraText='详细信息'
                    arrow='right'
                      iconInfo={{
                        size: 25,
                        color: '#FF4949',
                        value: 'lightning-bolt',
                      }}
                    />
                            <AtListItem
                    title='新的消息(阅后即焚)'
                    note='所长 2019-07-22'
                    extraText='详细信息'
                    arrow='right'
                      iconInfo={{
                        size: 25,
                        color: '#FF4949',
                        value: 'lightning-bolt',
                      }}
                    />
                                        <AtListItem
                    title='新的消息(阅后即焚)'
                    note='所长 2019-07-22'
                    extraText='详细信息'
                    arrow='right'
                      iconInfo={{
                        size: 25,
                        color: '#FF4949',
                        value: 'lightning-bolt',
                      }}
                    />
                                        <AtListItem
                    title='新的消息(阅后即焚)'
                    note='所长 2019-07-22'
                    extraText='详细信息'
                    arrow='right'
                      iconInfo={{
                        size: 25,
                        color: '#FF4949',
                        value: 'lightning-bolt',
                      }}
                    />
        
        </AtList>
                 
      </View>
    )
  }
}