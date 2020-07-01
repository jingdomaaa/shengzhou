import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { Loading } from '@components'
import { connect } from '@tarojs/redux'
// import * as actions from '@actions/home'
import { dispatchCartNum } from '@actions/cart'
import { getWindowHeight } from '@utils/style'
import Banner from './banner'
import Policy from './policy'
import Pin from './pin'
import Operation from './operation'
import Manufactory from './manufactory'
import FlashSale from './flash-sale'
import Popular from './popular'
import Category from './category'
import Recommend from './recommend'
import Todo from './todo'
import searchIcon from './assets/search.png'
import './home.scss'
import { AtNoticebar } from 'taro-ui'



const RECOMMEND_SIZE = 20

// @connect(state => state.home, { ...actions, dispatchCartNum })
class Home extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    loaded: false,
    loading: false,
    lastItemId: 0,
    hasMore: true
  }


  handleLoadMoreClick(){
    Taro.navigateTo({
      url:`/pages/msg/myMsg`
    })
  }

  render () {
    // if (!this.state.loaded) {
    //   return <Loading />
    // }

    // const { homeInfo, searchCount, recommend, pin } = this.props

    let homeInfo = {}
    homeInfo.focus = [{
      img:'http://img2.zjolcdn.com/pic/0/12/24/16/12241670_262052.jpg',
      rank:0
    },
    {
      img:'http://img2.zjolcdn.com/pic/0/12/24/16/12241670_262052.jpg',
      rank:1
    }]



    return (
      <View className='home'>
        <AtNoticebar single showMore onGotoMore={this.handleLoadMoreClick.bind(this)}>
          您有5条新的消息（4条普通消息,1条阅后即焚）
        </AtNoticebar>
        <ScrollView
          scrollY
          className='home__wrap'
          onScrollToLower={this.loadRecommend}
          style={{ height: getWindowHeight() }}
        >
          <Banner list={homeInfo.focus} />
          <Todo></Todo>
          <Todo></Todo>
          <Todo></Todo>
          <Todo></Todo>
          <Todo></Todo>
          <Todo></Todo>
          <Todo></Todo>
          <Todo></Todo>
        </ScrollView>
        
      </View>
    )
  }
}

export default Home
