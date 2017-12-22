'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function ExecOnIdle() {
  this.pid = {};
}

ExecOnIdle.prototype.run = function (method, timeout, name) {
  var pidName = name || '_global';
  clearTimeout(this.pid[pidName]);
  this.pid[pidName] = setTimeout(method, timeout);
};

exports.default = ExecOnIdle;