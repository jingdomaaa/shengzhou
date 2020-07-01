import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtRate, AtSlider, AtCard, AtRadio, AtButton } from 'taro-ui'
import './triedFeeling.scss'

export default class TriedFeeling extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      options1: [
        { label: '从不', value: 'option1' },
        { label: '极少一年几次或更少', value: 'option2' },
        { label: '偶尔一个月一次或者更少', value: 'option3' },
        { label: '经常一个月几次', value: 'option4' },
        { label: '频繁每星期一次', value: 'option5' },
        { label: '非常频繁一星期几次', value: 'option6' },
        { label: '每天', value: 'option7' },
      ],
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: '',
      value12: '',
      value13: '',
      value14: '',
      value15: '',
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
  handleChange7 (value) {
    this.setState({
      value7: value,
    })
  }
  handleChange8 (value) {
    this.setState({
      value8: value,
    })
  }
  handleChange9 (value) {
    this.setState({
      value9: value,
    })
  }
  handleChange10 (value) {
    this.setState({
      value10: value,
    })
  }
  handleChange11 (value) {
    this.setState({
      value11: value,
    })
  }
  handleChange12 (value) {
    this.setState({
      value12: value,
    })
  }
  handleChange13 (value) {
    this.setState({
      value13: value,
    })
  }
  handleChange14 (value) {
    this.setState({
      value14: value,
    })
  }
  handleChange15 (value) {
    this.setState({
      value15: value,
    })
  }
  toPage() {
    Taro.navigateTo({url: '/pages/statistic/questionnaire'})
  }
  config = {
    navigationBarTitleText: '职业倦怠感问卷表'
  }

  render () {
    return (
      <View >
        <AtCard
          title='1.工作让我感觉身心俱惫'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value1}
            onClick={this.handleChange1.bind(this)}
          />
        </AtCard>
        <AtCard
          title='2.下班的时候我感觉精疲力竭'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value2}
            onClick={this.handleChange2.bind(this)}
          />
        </AtCard>
        <AtCard
          title='3.早晨起床不得不去面对一天的工作时，我感觉非常累'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value3}
            onClick={this.handleChange3.bind(this)}
          />
        </AtCard>
        <AtCard
          title='4.整天工作对我来说确实压力很大'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value4}
            onClick={this.handleChange4.bind(this)}
          />
        </AtCard>
        <AtCard
          title='5.工作让我有快要崩溃的感觉'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value5}
            onClick={this.handleChange5.bind(this)}
          />
        </AtCard>
        <AtCard
          title='6.自从开始干这份工作，我对工作越来越不感兴趣'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value6}
            onClick={this.handleChange6.bind(this)}
          />
        </AtCard>
        <AtCard
          title='7.我对工作不像以前那样热心了'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value7}
            onClick={this.handleChange7.bind(this)}
          />
        </AtCard>
        <AtCard
          title='8.我怀疑自己所做工作的意义'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value8}
            onClick={this.handleChange8.bind(this)}
          />
        </AtCard>
        <AtCard
          title='9.我对自己所做工作是否有贡献越来越不关心'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value9}
            onClick={this.handleChange9.bind(this)}
          />
        </AtCard>
        <AtCard
          title='10.我能有效地解决工作中出现的问题'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value10}
            onClick={this.handleChange10.bind(this)}
          />
        </AtCard>
        <AtCard
          title='11.我觉得我在为公司作有用的贡献'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value11}
            onClick={this.handleChange11.bind(this)}
          />
        </AtCard>
        <AtCard
          title='12.在我看来，我擅长于自己的工作'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value12}
            onClick={this.handleChange12.bind(this)}
          />
        </AtCard>
        <AtCard
          title='13.当完成工作上的一些事情时，我感到非常高兴'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value13}
            onClick={this.handleChange13.bind(this)}
          />
        </AtCard>
        <AtCard
          title='14.我完成了很多有价值的工作'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value14}
            onClick={this.handleChange14.bind(this)}
          />
        </AtCard>
        <AtCard
          title='15.我自信自己能有效地完成各项工作'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value15}
            onClick={this.handleChange15.bind(this)}
          />
        </AtCard>
        <AtButton onClick={this.toPage}>提交</AtButton>
      </View>
    )
  }
}