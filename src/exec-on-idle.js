// @flow
function ExecOnIdle() {
  this.pid = {};
}

ExecOnIdle.prototype.run = function(method: (args: ?any) => ?any, timeout: number, name: ?string): void {
  let pidName = name || '_global'
  clearTimeout(this.pid[pidName])
  this.pid[pidName] = setTimeout(method, timeout)
}

export default ExecOnIdle
