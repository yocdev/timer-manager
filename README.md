# timer-manager
Timer manager providing clean up facility. Use it in App termination to avoid keeping event loop active.

![Node.js Package](https://github.com/yocdev/timer-manager/workflows/Node.js%20Package/badge.svg)

## Installation

```
$ npm install @yocdev/timer-manager
```

## Usage

```javascript
// Since we'll replace the global timer functions (e.g. setTimeout, setInterval ...) 
// in order to trace them, require the package as early as possible.
require('@yocdev/timer-manager')
```

```javascript
// In your codes, just use the timer functions as before.
setTimeout(...)
setInterval(...)
clearTimeout(...)
clearInterval(...)
```

```javascript
// In your App termination process, clear all still active timers
// to avoid keeping event loop active.
const TimerManager = require('@yocdev/timer-manager')
TimerManager.clearAll()
```

```javascript
// If you wanna access the original timer functions, use TimerManager.original.
// Note: These timer functions are not managed by TimerManager,
// `TimerManager.clearAll()` can't clear them.
// You have to clear them yourself.
TimerManager.original.setTimeout(...)
TimerManager.original.setInterval(...)
TimerManager.original.clearTimeout(...)
TimerManager.original.clearInterval(...)
```
