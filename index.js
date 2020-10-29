const originalSetTimeout = setTimeout
const originalClearTimeout = clearTimeout
const originalSetInterval = setInterval
const originalClearInterval = clearInterval

const timeoutTimerSet = new Set()
const intervalTimerSet = new Set()

setTimeout = (callback, delay, ...args) => {
  let timer
  const callbackWrapper = (...args) => {
    timeoutTimerSet.delete(timer)
    callback(...args)
  }
  timer = originalSetTimeout(callbackWrapper, delay, ...args)
  timeoutTimerSet.add(timer)
  return timer
}

clearTimeout = (timer) => {
  timeoutTimerSet.delete(timer)
  originalClearTimeout(timer)
}

setInterval = (callback, delay, ...args) => {
  const timer = originalSetInterval(callback, delay, ...args)
  intervalTimerSet.add(timer)
  return timer
}

clearInterval = (timer) => {
  intervalTimerSet.delete(timer)
  originalClearInterval(timer)
}


const TimerManager = {
  clearAll() {
    for (const timer of timeoutTimerSet) {
      if (timer) {
        originalClearTimeout(timer)
      }
    }

    for (const timer of intervalTimerSet) {
      if (timer) {
        originalClearInterval(timer)
      }
    }
  }
}


module.exports = TimerManager
