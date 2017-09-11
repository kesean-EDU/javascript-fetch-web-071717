const token = '5ff007e6ae50838646790a3fa80a28f5f748ba1b'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
