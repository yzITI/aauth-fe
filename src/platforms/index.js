export default [
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
  },
  {
    key: 'QQ',
    name: 'QQ',
    color: '#B71C1C',
    icon: '/platforms/qq.png',
    go: (state) => {
      window.location.href = 'https://graph.qq.com/oauth2.0/authorize?client_id=101907335&response_type=code&redirect_uri=https%3A%2F%2Faauth.link%2Freenter.html&state=' + state
    }
  },
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
    key: 'XYZSAS',
    name: '学生事务系统',
    color: 'black',
    icon: '/platforms/XYZSAS.png',
    go: (state) => {
      window.location.href = 'http://sas.yzzx.org/#/login?c=AAUTH&state=' + state
    }
  },
  {
    key: 'FACEBOOK',
    name: 'Facebook',
    color: '#1877f2',
    icon: '/platforms/facebook.png',
    go: (state) => {
      window.location.href = 'https://www.facebook.com/v9.0/dialog/oauth?client_id=919042828841874&redirect_uri=https%3A%2F%2Faauth.link%2Freenter.html&state=' + state
    }
  }
]
