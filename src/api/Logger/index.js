import config from '@/api/index';

const Logger = {}

Logger.getAll = async function(phrase) {
  return new Promise((resolve, reject) => {
    fetch(`${config.host}/logger`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
      },
      body: { phrase }
    })
      .then(async res => {
        if (res.ok) {
          resolve(await res.json())
        } else {
          reject(false)
        }
      })
      .catch(err => reject(err))
  })
}

export default Logger
