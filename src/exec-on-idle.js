// @flow
function ExecOnIdle() {
  this.pid = {};
}

ExecOnIdle.prototype.run = function(method: (args: ?any) => ?any, timeout: number, name: ?string): void {
  let pidName = name || Math.floor(Math.random() * 16777215).toString(16)
  clearTimeout(this.pid[pidName])
  this.pid[pidName] = setTimeout(method, timeout)
}

export default ExecOnIdle
