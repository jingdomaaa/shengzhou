import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { ButtonItem, InputItem } from '../../components'
import './login.scss'

import LOGO from '@assets/logo/logo.jpg'

class Login extends Component {
  config = {
    navigationBarTitleText: '登录'
  }


  componentDidMount() {
    Taro.showToast({
      title: '注意，此小程序为原型程序，不具备真实功能',
      icon: 'none',
      duration: 5000
    })
  }

  handleLogin = () => {
    Taro.reLaunch({
        url: `/pages/home/home`
      })
  }

  render () {
    return (
      <View className='user-login-email'>
        <View className='user-login-email__logo'>
          <Image src={LOGO} className='user-login-email__logo-img' />
        </View>
        <View className='user-login-email__wrap'>
          <InputItem
            placeholder='工号'
          />
          <InputItem
            password
            placeholder='密码'
          />
        </View>
        <View className='user-login-email__btn'>
          <ButtonItem
            text='登录'
            onClick={this.handleLogin}
            compStyle={{
              background: 'rgba(0, 104, 101, 0.4)',
              borderRadius: Taro.pxTransform(4)
            }}
            textStyle={{
              color: 'rgba(255, 255, 255, 0.4)'}
            }   
          />
        </View>
      </View>
    )
  }
}

export default Login
