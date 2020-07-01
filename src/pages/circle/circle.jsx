import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { AtRate, AtSlider, AtRadio, AtCard, AtButton } from 'taro-ui'
import Result from '../questionnaire/result'
import './circle.scss'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      showResultModel: false,                    //结果浮层显示flag
      options1: [                                //选项
        { label: '从未发生', value: 'option1' },
        { label: '偶尔发生', value: 'option2' },
        { label: '经常发生', value: 'option3' }
      ],
      value1: '',                                //题目选项的状态
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
    }
  }
  handleChange1 (value) {                        //点击时改变选择状态
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
  addResult() {                                 //显示结果浮层
    this.setState({
      showResultModel: true
    })
  }
  closeResult(){
    this.setState({
      showResultModel: false
    })
  }

  config = {
    navigationBarTitleText: '工作压力测试表'
  }

  render () {
    return (
      <View >
        <AtCard                                 //taro卡片组件,使格式规范,问题紧凑
          title='1.觉得最近手上工作太多，无法应付' //问题的题目
        >
          <AtRadio                              //taro单选
            options={this.state.options1}
            value={this.state.value1}
            onClick={this.handleChange1.bind(this)}
          />
        </AtCard>
        <AtCard
          title='2.最近遇到挫败时很容易发脾气'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value2}
            onClick={this.handleChange2.bind(this)}
          />
        </AtCard>
        <AtCard
          title='3.担心别人对自己工作表现的评价'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value3}
            onClick={this.handleChange3.bind(this)}
          />
        </AtCard>
        <AtCard
          title='4.最近常年犯头痛/胃痛/背痛的毛病'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value4}
            onClick={this.handleChange4.bind(this)}
          />
        </AtCard>
        <AtCard
          title='5.上床后思前想后，难以入睡'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value5}
            onClick={this.handleChange5.bind(this)}
          />
        </AtCard>
        <AtCard
          title='6.当空闲时轻松一下也会觉得内疚'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value6}
            onClick={this.handleChange6.bind(this)}
          />
        </AtCard>
        {this.showResultModel?<Result onCloseResult={this.closeResult.bind(this)}/>:null}
        <AtButton onClick={this.addResult.bind(this)}>提交</AtButton>
      </View>
    )
  }
}
