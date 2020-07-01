import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { AtRate, AtSlider, AtRadio, AtCard, AtButton } from 'taro-ui'
import Result from '../questionnaire/result'
import './careerAnchor.scss'

export default class CareerAnchor extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      showResultModel: false,                    //显示问题浮层
      options1: [                                //选项
        { label: '完全不符合我的日常想法', value: 'option1' },
        { label: '偶尔这么想', value: 'option2' },
        { label: '有时这么想', value: 'option3' },
        { label: '经常这么想', value: 'option4' },
        { label: '总是这么想', value: 'option5' },
        { label: '完全符合我的日常想法', value: 'option6' },
      ],
      value1: '',                                //题目选项的状态
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
      value16: '',
      value17: '',
      value18: '',
      value19: '',
      value20: '',
      value21: '',
      value22: '',
      value23: '',
      value24: '',
      value25: '',
      value26: '',
      value27: '',
      value28: '',
      value29: '',
      value30: '',
      value31: '',
      value32: '',
      value33: '',
      value34: '',
      value35: '',
      value36: '',
      value37: '',
      value38: '',
      value39: '',
      value40: '',
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
  handleChange16 (value) {
    this.setState({
      value16: value,
    })
  }
  handleChange17 (value) {
    this.setState({
      value17: value,
    })
  }
  handleChange18 (value) {
    this.setState({
      value18: value,
    })
  }
  handleChange19 (value) {
    this.setState({
      value19: value,
    })
  }
  handleChange20 (value) {
    this.setState({
      value20: value,
    })
  }
  handleChange21 (value) {
    this.setState({
      value21: value,
    })
  }
  handleChange22 (value) {
    this.setState({
      value22: value,
    })
  }
  handleChange23 (value) {
    this.setState({
      value23: value,
    })
  }
  handleChange24 (value) {
    this.setState({
      value24: value,
    })
  }
  handleChange25 (value) {
    this.setState({
      value25: value,
    })
  }
  handleChange26 (value) {
    this.setState({
      value26: value,
    })
  }
  handleChange27 (value) {
    this.setState({
      value27: value,
    })
  }
  handleChange28 (value) {
    this.setState({
      value28: value,
    })
  }
  handleChange29 (value) {
    this.setState({
      value29: value,
    })
  }
  handleChange30 (value) {
    this.setState({
      value30: value,
    })
  }
  handleChange31 (value) {
    this.setState({
      value31: value,
    })
  }
  handleChange32 (value) {
    this.setState({
      value32: value,
    })
  }
  handleChange33 (value) {
    this.setState({
      value33: value,
    })
  }
  handleChange34 (value) {
    this.setState({
      value34: value,
    })
  }
  handleChange35 (value) {
    this.setState({
      value35: value,
    })
  }
  handleChange36 (value) {
    this.setState({
      value36: value,
    })
  }
  handleChange37 (value) {
    this.setState({
      value37: value,
    })
  }
  handleChange38 (value) {
    this.setState({
      value38: value,
    })
  }
  handleChange39 (value) {
    this.setState({
      value39: value,
    })
  }
  handleChange40 (value) {
    this.setState({
      value40: value,
    })
  }
  toPage() {                                    //跳转页面
    Taro.navigateTo({url: '/pages/statistic/questionnaire'})
  }
  addQuestion(){
    this.setState({
      showResultModel: true
    })
  }

  config = {
    navigationBarTitleText: '职业锚测试表'
  }

  render () {
    return (
      <View >
        <AtCard                                 //taro卡片组件，使格式规范，问题紧凑
          title='1.我希望做我擅长的工作，这样我的内行建议可以不断被采纳。'   //问题的题目
        >
          <AtRadio                              //taro单选
            options={this.state.options1}
            value={this.state.value1}
            onClick={this.handleChange1.bind(this)}
          />
        </AtCard>
        <AtCard
          title='2.当我整合并管理其他人的工作时，我非常有成就感。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value2}
            onClick={this.handleChange2.bind(this)}
          />
        </AtCard>
        <AtCard
          title='3.我希望我的工作能让我用自己的方式，按自己的计划去开展。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value3}
            onClick={this.handleChange3.bind(this)}
          />
        </AtCard>
        <AtCard
          title='4.对我而言，安定与稳定比自由和自主更重要。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value4}
            onClick={this.handleChange4.bind(this)}
          />
        </AtCard>
        <AtCard
          title='5.我一直在寻找可以让我创立自己事业（公司）的创意（点子）。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value5}
            onClick={this.handleChange5.bind(this)}
          />
        </AtCard>
        <AtCard
          title='6.我认为只有对社会做出真正贡献的职业才算是成功的职业。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value6}
            onClick={this.handleChange6.bind(this)}
          />
        </AtCard>
        <AtCard
          title='7.在工作中，我希望去解决那些有挑战性的问题，并且胜出。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value7}
            onClick={this.handleChange7.bind(this)}
          />
        </AtCard>
        <AtCard
          title='8.我宁愿离开公司，也不愿从事需要个人和家庭做出一定牺牲的工作。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value8}
            onClick={this.handleChange8.bind(this)}
          />
        </AtCard>
        <AtCard
          title='9.将我的技术和专业水平发展到一个更具有竞争力的层次是成功职业的必要条件。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value9}
            onClick={this.handleChange9.bind(this)}
          />
        </AtCard>
        <AtCard
          title='10.我希望能够管理一个大的公司（组织），我的决策将会影响许多人。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value10}
            onClick={this.handleChange10.bind(this)}
          />
        </AtCard>
        <AtCard
          title='11.如果职业允许自由地决定自己的工作内容、计划、过程时，我会非常满意。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value11}
            onClick={this.handleChange11.bind(this)}
          />
        </AtCard>
        <AtCard
          title='12.如果工作的结果使我丧失了自己在组织中的安全稳定感，我宁愿离开这个工作岗位。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value12}
            onClick={this.handleChange12.bind(this)}
          />
        </AtCard>
        <AtCard
          title='13.对我而言，创办自己的公司比在其他的公司中争取一个高的管理位置更有意义。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value13}
            onClick={this.handleChange13.bind(this)}
          />
        </AtCard>
        <AtCard
          title='14.我的职业满足来自于我可以用自己的才能去为他人提供服务。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value14}
            onClick={this.handleChange14.bind(this)}
          />
        </AtCard>
        <AtCard
          title='15.我认为职业的成就感来自于克服自己面临的非常有挑战性的困难。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value15}
            onClick={this.handleChange15.bind(this)}
          />
        </AtCard>
        <AtCard
          title='16.我希望我的职业能够兼顾个人、家庭和工作的需要。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value16}
            onClick={this.handleChange16.bind(this)}
          />
        </AtCard>
        <AtCard
          title='17.对我而言，在我喜欢的专业领域内做资深专家比总经理更具有吸引力。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value17}
            onClick={this.handleChange17.bind(this)}
          />
        </AtCard>
        <AtCard
          title='18.只有在我成为公司的总经理后，我才认为我的职业人生是成功的。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value18}
            onClick={this.handleChange18.bind(this)}
          />
        </AtCard>
        <AtCard
          title='19.成功的职业应该允许我有完全的自主与自由。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value19}
            onClick={this.handleChange19.bind(this)}
          />
        </AtCard>
        <AtCard
          title='20.我愿意在能给我安全感、稳定感的公司中工作。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value20}
            onClick={this.handleChange20.bind(this)}
          />
        </AtCard>
        <AtCard
          title='21.当通过自己的努力或想法完成工作时，我的工作成就感最强。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value21}
            onClick={this.handleChange21.bind(this)}
          />
        </AtCard>
        <AtCard
          title='22.对我而言，利用自己的才能使这个世界变得更适合生活或居住，比争取一个高的管理职位更重要。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value22}
            onClick={this.handleChange22.bind(this)}
          />
        </AtCard>
        <AtCard
          title='23.我解决了看上去不可能解决的问题，或者在必输无疑的竞赛中胜出，我会非常有成就感。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value23}
            onClick={this.handleChange23.bind(this)}
          />
        </AtCard>
        <AtCard
          title='24.我认为只有很好地平衡个人、家庭、职业三者的关系，生活才能算是成功的。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value24}
            onClick={this.handleChange24.bind(this)}
          />
        </AtCard>
        <AtCard
          title='25.我宁愿离开公司，也不愿频繁接受那些不属于我专业领域的工作。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value25}
            onClick={this.handleChange25.bind(this)}
          />
        </AtCard>
        <AtCard
          title='26.对我而言，做一个全面管理者比在我喜欢的专业领域内做资深专家更有吸引力。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value26}
            onClick={this.handleChange26.bind(this)}
          />
        </AtCard>
        <AtCard
          title='27.对我而言，用我自己的方式不受约束地完成工作，比安全、稳定更加重要。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value27}
            onClick={this.handleChange27.bind(this)}
          />
        </AtCard>
        <AtCard
          title='28.只有当我的收入和工作有保障时，我才会对工作感到满意。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value28}
            onClick={this.handleChange28.bind(this)}
          />
        </AtCard>
        <AtCard
          title='29.在我的职业生涯中，如果我能成功地创造或实现完全属于自己的产品或点子，我会感到非常成功。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value29}
            onClick={this.handleChange29.bind(this)}
          />
        </AtCard>
        <AtCard
          title='30.我希望从事对人类和社会真正有贡献的工作。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value30}
            onClick={this.handleChange30.bind(this)}
          />
        </AtCard>
        <AtCard
          title='31.我希望工作中有很多的机会，可以不断挑战我解决问题的能力（或竞争力）。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value31}
            onClick={this.handleChange31.bind(this)}
          />
        </AtCard>
        <AtCard
          title='32.能很好地平衡个人生活与工作，比达到一个高的管理职位更重要。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value32}
            onClick={this.handleChange32.bind(this)}
          />
        </AtCard>
        <AtCard
          title='33.如果在工作中能经常用到我特别的技巧和才能，我会感到特别满意。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value33}
            onClick={this.handleChange33.bind(this)}
          />
        </AtCard>
        <AtCard
          title='34.我宁愿离开公司，也不愿意接受让我离开全面管理的工作。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value34}
            onClick={this.handleChange34.bind(this)}
          />
        </AtCard>
        <AtCard
          title='35.我宁愿离开公司，也不愿意接受约束我自由和自主控制权的工作。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value35}
            onClick={this.handleChange35.bind(this)}
          />
        </AtCard>
        <AtCard
          title='36.我希望有一份让我有安全感和稳定感的工作。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value36}
            onClick={this.handleChange36.bind(this)}
          />
        </AtCard>
        <AtCard
          title='37.我梦想着创建属于自己的事业。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value37}
            onClick={this.handleChange37.bind(this)}
          />
        </AtCard>
        <AtCard
          title='38.如果工作限制了我为他人提供帮助或服务，我宁愿离开公司。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value38}
            onClick={this.handleChange38.bind(this)}
          />
        </AtCard>
        <AtCard
          title='39.去解决那些几乎无法解决的难题，比获得一个高的管理职位更有意义。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value39}
            onClick={this.handleChange39.bind(this)}
          />
        </AtCard>
        <AtCard
          title='40.我一直在寻找一份能最小化个人和家庭之间冲突的工作。'
        >
          <AtRadio
            options={this.state.options1}
            value={this.state.value40}
            onClick={this.handleChange40.bind(this)}
          />
        </AtCard>
        <AtButton onClick={this.toPage}>提交</AtButton>
        {showResultModel?<Result />:null}                        {/**自定义结果界面 */}
      </View>
    )
  }
}
