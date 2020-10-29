# timer-manager
Timer manager providing clean up facility. Use it in App termination to avoid keeping event loop running.

![Node.js Package](https://github.com/yocdev/timer-manager/workflows/Node.js%20Package/badge.svg)

## Installation

```
$ npm install @yocdev/timer-manager
```

## Usage

```
// Since we'll replace the global timer functions (e.g. setTimeout, setInterval ...) in order to trace them, require the package as early as possible.
require('@yocdev/timer-manager')
```

```
// In your App termination process, clear all still active timers.
const TimerManager = require('@yocdev/timer-manager')
TimerManager.clearAll()
```
