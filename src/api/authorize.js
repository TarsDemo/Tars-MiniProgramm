import wepy from 'wepy'

const authorize = async () => {
    console.log('from authorize.js')
    const settings = await wepy.getSetting()
    if (!settings.authSetting['scope.userInfo']) {
      // 没有授权
      return false
    }
    else {
      return true
    }
}

export default authorize