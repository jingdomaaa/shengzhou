import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtRate, AtSlider, AtCard, AtRadio, AtButton } from 'taro-ui'
import './satisfaction.scss'

export default class Satisfaction extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      options1: [
        { label: '非常不同意', value: 'option1' },
        { label: '不同意', value: 'option2' },
        { label: '不确定或一般', value: 'option3' },
        { label: '满意', value: 'option4' },
        { label: '非常满意', value: 'option5' },
      ],
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
    }
  }
  handleChange1 (value) {
    this.setState({
      value1: value,
    })
  }
  handleChange2 (value) {
    this.setState({
      value2: value,
    })
  }
  handleChange3 (value) {
    this.setState({
      value3: value,
    })
  }
  handleChange4 (value) {
    this.setState({
      value4: value,
    })
  }
  handleChange5 (value) {
    this.setState({
      value5: value,
    })
  }
  handleChange6 (value) {
    this.setState({
      value6: value,
    })
  }
  toPage() {
    Taro.navigateTo({url: '/pages/statistic/questionnaire'})
  }
  config = {
    navigationBarTitleText: '满意度问卷调查表'
  }

  render () {
    return (
      <View >
        <AtCard
          title='1.我的工作有意义'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value1}
            onClick={this.handleChange1.bind(this)}
          />
        </AtCard>
        <AtCard
          title='2.我对我的上级满意'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value2}
            onClick={this.handleChange2.bind(this)}
          />
        </AtCard>
        <AtCard
          title='3.我对我的同事（平级）满意'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value3}
            onClick={this.handleChange3.bind(this)}
          />
        </AtCard>
        <AtCard
          title='4.我对工作收入满意'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value4}
            onClick={this.handleChange4.bind(this)}
          />
        </AtCard>
        <AtCard
          title='5.我有工作晋升机会'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value5}
            onClick={this.handleChange5.bind(this)}
          />
        </AtCard>
        <AtCard
          title='6.综合而言，我对我现在的工作情况满意'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value6}
            onClick={this.handleChange6.bind(this)}
          />
        </AtCard>
        <AtButton onClick={this.toPage}>提交</AtButton>
      </View>
    )
  }
}
