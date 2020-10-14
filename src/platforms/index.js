export default [
  {
    key: 'GITHUB',
    name: 'Github',
    color: 'black',
    icon: '/platforms/github.png',
    go: (state) => {
      window.location.href = 'https://github.com/login/oauth/authorize?client_id=be701ef88116790b5964&state=' + state
    }
  },
  {
    key: 'DINGTALK',
    name: '钉钉',
    color: 'primary',
    icon: '/platforms/dingtalk.png',
    go: (state) => {
      if (navigator.userAgent.includes('DingTalk')) {
        window.location.href = 'https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=dingoaprellztzihaw4y82&response_type=code&scope=snsapi_auth&redirect_uri=https%3A%2F%2Faauth.link%2Freenter.html&state=' + state
      } else {
        window.location.href = window.innerWidth < 900
          ? 'https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=dingoaprellztzihaw4y82&response_type=code&scope=snsapi_login&redirect_uri=https%3A%2F%2Faauth.link%2Freenter.html&state=' + state
          : 'https://oapi.dingtalk.com/connect/qrconnect?appid=dingoaprellztzihaw4y82&response_type=code&scope=snsapi_login&redirect_uri=https%3A%2F%2Faauth.link%2Freenter.html&state=' + state
      }
    }
  }
]
