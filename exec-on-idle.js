"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function Runner() {
  this.pid = {};
}

Runner.prototype.exec = function (method, timeout, name) {
  var pidName = name || Math.floor(Math.random() * 16777215).toString(16);
  clearTimeout(this.pid[pidName]);
  this.pid[pidName] = setTimeout(method, timeout);
};

exports.default = Runner;