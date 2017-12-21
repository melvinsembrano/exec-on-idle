// @flow

function Runner() {
  this.pid = {}

  function exec(method, timeout, name) {
    let pidName = name || Math.floor(Math.random()*16777215).toString(16)
    clearTimeout(this.pid[pidName])
    this.pid[pidName] = setTimeout(method, timeout)
  }
}

export default Runner
