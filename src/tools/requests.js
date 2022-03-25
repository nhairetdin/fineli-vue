const token = () => JSON.parse(window.localStorage.getItem('user'))?.token

const getConfig = {
  get(path, auth) {
    const headers = {}

    if (auth) {
      headers.authorization = 'bearer ' + token()
    }

    const options = {
      method: 'GET',
      headers: headers,
    }

    return {
      url: 'https://ravintoinfo.xyz' + path,
      options: options,
    }
  },
  post(path, payload, auth) {
    const headers = {
      'Content-Type': 'application/json',
    }

    if (auth) {
      headers.authorization = 'bearer ' + token()
    }

    const options = {
      method: 'POST',
      headers: headers,
    }

    if (payload) {
      options.body = JSON.stringify(payload)
    }

    return {
      url: 'https://ravintoinfo.xyz' + path,
      options: options,
    }
  },
}

const execRequest = async (config) => {
  try {
    const response = await fetch(config.url, config.options)
    const data = await response.json()

    return {
      data: data,
      status: response.status,
      ok: response.ok,
    }
  } catch (error) {
    console.log(error)
    return error
  }
}

export default {
  async login(payload) {
    const config = getConfig.post('/user/session', payload)
    return await execRequest(config)
  },
  async loadUserdata() {
    const config = getConfig.post('/user/profile', null, token())
    return await execRequest(config)
  },
  async fetchComponentData() {
    const config = getConfig.get('/basedata/components')
    return await execRequest(config)
  },
  async fetchFoodData() {
    const config = getConfig.get('/basedata/food')
    return await execRequest(config)
  },
}
