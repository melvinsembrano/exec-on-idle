import ExecOnIdle from './exec-on-idle'
const {test, expect} = global

test('callback should execute only once', () => {
  let exec = new ExecOnIdle()
  let callback = jest.fn()

  jest.useFakeTimers()
  exec.run(callback, 100, 'run1')
  exec.run(callback, 100, 'run1')
  exec.run(callback, 100, 'run1')
  exec.run(callback, 100, 'run1')

  jest.runTimersToTime(100)

  expect(callback.mock.calls.length).toBe(1)
})

test('callback should execute twice', () => {
  let exec = new ExecOnIdle()
  let callback = jest.fn()

  jest.useFakeTimers()
  exec.run(callback, 100, 'run1')
  exec.run(callback, 100, 'run2')
  exec.run(callback, 100, 'run1')
  exec.run(callback, 100, 'run2')

  jest.runTimersToTime(100)

  expect(callback.mock.calls.length).toBe(2)
})

test('callback should execute only once', () => {
  let exec = new ExecOnIdle()
  let callback = jest.fn()

  jest.useFakeTimers()
  exec.run(callback, 100)
  exec.run(callback, 100)
  exec.run(callback, 100)
  exec.run(callback, 100)

  jest.runTimersToTime(100)

  expect(callback.mock.calls.length).toBe(1)
})
