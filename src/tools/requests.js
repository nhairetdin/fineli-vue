export default {
  login(user) {
    return {
      url: 'https://ravintoinfo.xyz/user/session',
      config: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      },
    }
  },
}
