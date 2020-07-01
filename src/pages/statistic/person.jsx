import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { AtTag, AtAvatar, AtDivider, AtList, AtListItem } from 'taro-ui'
import MoveChart from '../../components/MoveChart'
import LineChart from '../../components/LineChart'
import './person.scss'

class Template extends Component {
  config = {
    navigationBarTitleText: 'person'
  }

  componentDidMount() {
    const chartData1 = {
      dimensions: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      measures: [{
        data: [10, 52, 200, 334, 390, 330, 220, 334, 390, 330, 220, 10, 52, 200,]
      }]
    }
    const chartData2 = {
      dimensions: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      measures: [{
        data: [10, 520, 20, 33, 390, 83, 62, 33, 99, 33, 22, 100, 520, 200,]
      }]
    }
    this.moveChart.refresh(chartData1);
    this.lineChart.refresh(chartData2);
  }
  refMoveChart = (node) => this.moveChart = node

  refLineChart = (node) => this.lineChart = node

  render () {
    return (
      <View>
        <View style='height:56px' className='at-row'>
          <AtAvatar text='凹凸实验室' size='large'></AtAvatar>
          <View className='at-row at-row--wrap at-row__justify--center'>
            <View className='at-col at-col-6'>姓名</View>
            <View className='at-col at-col-6'>工号</View>
            <View className='at-col at-col-6'>年龄</View>
            <View className='at-col at-col-6'>班组</View>
          </View>
        </View>
        <AtDivider content='' lineColor='#006569'/>
        <View className='at-row'>
          <View className='at-col at-col-4'>
            <AtTag>标签</AtTag>
            <AtTag>标签</AtTag>
            <AtTag>标签</AtTag>
            <AtTag>标签</AtTag>
            <AtTag>标签</AtTag>
            <AtTag>标签</AtTag>
            <AtTag>标签</AtTag>
          </View>
        </View>
        <View className='at-row'>
          <View className='at-col at-col-8'>
            <AtTag>标签</AtTag>
            <AtTag>标签</AtTag>
            <AtTag>标签</AtTag>
            <AtTag>标签</AtTag>
            <AtTag>标签</AtTag>
            <AtTag>标签</AtTag>
          </View>
        </View>
        <AtDivider content='' lineColor='#006569'/>
          <View className='container'>
          <View className="move-chart">
            <MoveChart ref={this.refMoveChart} />
          </View>
          <AtDivider content='' lineColor='#006569'/>
          <View className="move-chart">
            <LineChart ref={this.refLineChart} />
          </View>
        </View>
      </View>
    )
  }
}

export default Template
