import config from '@/api/index';

const Logger = {}

Logger.getAll = async function(passphrase) {
  return new Promise((resolve, reject) => {
    console.log(`${config.host}/logger`)
    fetch(`${config.host}/logger`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
      },
      body: JSON.stringify({ passphrase })
    })
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

export default Logger
