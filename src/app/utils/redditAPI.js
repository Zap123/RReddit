import request from 'superagent'

export default class redditAPI {

  static getHome() {
      return new Promise((resolve, reject) => {
          request.get('https://www.reddit.com/.json').end((err, res) => {
              if (err)
                  reject(err)
              else
                  resolve({data: res.body.data.children})
              })
          })
      }
}
