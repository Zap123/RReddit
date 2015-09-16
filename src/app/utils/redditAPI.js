import request from 'superagent'

export default class redditAPI {

  static getHome() {
    return new Promise((resolve, reject) => {
      request.get('https://www.reddit.com/.json').end((err, res) => {
        resolve({data: res.body.data.children})
      })
    })
  }
}
