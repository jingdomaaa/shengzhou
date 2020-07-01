import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import jump from '@utils/jump'
import classNames from 'classnames'
import './index.scss'

const MENU_LIST = [{
  key: 'myVote',
  text: '我的投票',
  img: require('./assets/myVote.png')
}, {
  key: 'joinVote',
  text: '参与投票',
  img: require('./assets/joinVote.png')
}, {
  key: 'myTopic',
  text: '我的话题',
  img: require('./assets/myTopic.png')
}, {
  key: 'joinTopic',
  text: '参与话题',
  img: require('./assets/joinTopic.png')
}, {
  key: 'myMsg',
  text: '我的留言',
  img: require('./assets/myMsg.png')
}, {
  key: 'sendMsg',
  text: '发送留言',
  img: require('./assets/sendMsg.png')
}, {
  key: 'upload',
  text: '上传头像',
  img: require('./assets/upload.png')
}, {
  key: 'password',
  text: '修改密码',
  img: require('./assets/password.png')
}, {
  key: 'logout',
  text: '注销',
  img: require('./assets/logout.png'),
  url: '/pages/login/login',
},{
  key: 'personStatistic',
  text: '个人统计',
  img: require('./assets/personStatistic.png'),
  url: '/pages/statistic/person'
},{
  key: 'teamStatistic',
  text: '班组统计',
  img: require('./assets/teamStatistic.png'),
  url: '/pages/statistic/team'
},{
  key: 'questionnaireSurvey',
  text: '问卷调查',
  img: require('./assets/joinVote.png'),
  url: '/pages/statistic/questionnaire'
}]
const COUNT_LINE = 3

export default class Menu extends Component {
  handleClick = (menu) => {
    // NOTE 时间关系，此处只实现帮助中心，用于演示多端 webview
    if (menu.key === 'logout'||
    menu.key === 'personStatistic'||
    menu.key === 'teamStatistic'||
    menu.key === 'questionnaireSurvey'
    ) {
      // jump({ url: menu.url, title: menu.text })
      Taro.navigateTo({ url: menu.url})
    } else {
      Taro.showToast({
        title: '目前只实现了几个功能~',
        icon: 'none'
      })
    }
  }

  render () {
    return (
      <View className='user-menu'>
        {MENU_LIST.map((menu, index) => {
          // NOTE 不用伪元素选择器，需自行计算
          const nth = (index + 1) % COUNT_LINE === 0
          const lastLine = parseInt(index / COUNT_LINE) === parseInt(MENU_LIST.length / COUNT_LINE)
          return (
            <View
              key={menu.key}
              className={classNames(
                'user-menu__item',
                nth && 'user-menu__item--nth',
                lastLine && 'user-menu__item--last',
              )}
              onClick={this.handleClick.bind(this, menu)}
            >
              <Image className='user-menu__item-img' src={menu.img} />
              <Text className='user-menu__item-txt'>{menu.text}</Text>
            </View>
          )
        })}
      </View>
    )
  }
}
