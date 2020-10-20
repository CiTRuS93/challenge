# Bigpanda Challenge
## Table of Contents
* [Prerequisites](#prerequisites)
* [Usage](#usage)
* [Improvement](#improvement)

### Prerequisites
* nodeJs

### Usage
```
node index.js
```
Example:
```sh
\challenge\src>curl 127.0.0.1:8080/events/countByEventType
{"baz":5,"foo":6,"bar":10}
\challenge\src>curl 127.0.0.1:8080/events/countWords       
{"amet":3,"lorem":7,"ipsum":7,"dolor":8,"sit":7}

```

### Improvement
1.  Using concurrent and united data structure
2.  More generic solution
3.  Removing variable so the code will be more functional



