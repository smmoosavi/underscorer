Underscorer
===========
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/smmoosavi/underscorer?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![npm version][npm:version]][npm]
[![bower version][bower:version]][github]
[![Dependencies][dependencies]][david-dm]
[![Downloads][npm:download]][npm]


**Underscorer** is a functioner :smile: and chainer :smirk: for underscore

What is the meaning of underscorer?
-----------------------------------

First you must understand the meaning of *functioner* and *chainer*.

As you know, the `er` suffix in English can be used to describe the subject who performs a task, e.g. employer for the person who employs.
Similarly, the *functioner* is the one who creates a function and *chainer* chains them together like functional languages.

**Underscorer** is a functioner and chainer for [underscore](http://underscorejs.org/)

## Install

```
$ npm install underscorer
```

## Benchmarks

You can see [Benchmarks](http://smmoosavi.github.io/underscorer/benchmarks/)

## Usage

### Node.js

```js
var _r = require('underscorer');
```

### Browser

```html
<script src="underscore.js"></script>
<script src="underscorer.js"></script>
```

### Functioning
In underscore, the [`_.last`](http://underscorejs.org/#last) function returns the last item of passed array

```js
_.last([3, 4, 1, 5]); // 5
```

**Underscorer** replaces it by `_r.laster` (`last` + `er`) function. It creates a function which whenever called, returns
the last item of array. Because underscorer is a *functioner*.
 
```js
var fn = _r.laster()
fn([3, 4, 1, 5]); // 5
fn([5, 2, 6, 1]); // 1
```

### Chaining
Suppose that you want to calculate the sum of squares of values which are stored in the last item of another list.

```js
var l = [{a: 1, b: 4}, {a: 3}, {a: 3, c: 4}];
_.reduce(_.map(_.values(_.last(l)),function (i) {return i * i;}),function(a, b){ return a + b});
```

The **underscorer** isn't just a simple *functioner* but also a *chainer*. That is, you can chain functions together.

```js
var fn = _r
    .laster()
    .valueser()
    .maper(function (i) { return i * i; })        // maper!? I know :D
                                                  // ... but this is map + er
    .reduceer(function (a, b) { return a + b; }); 

fn([{a: 1, b: 4}, {a: 3}, {a: 3, c: 4}]);         // 25
fn([{i: 1, j: 8}, {k: 1, l: 2}]);                 // 5
```

Obtained functions can be reused anywhere. Call them multiple times or use them within other chains.

```js
var fnBase = _r
    .laster()
    .valueser();
    
var fnPow2 = fnBase.maper(function (i) {
    return i * i;
});

var fnPow3 = fnBase.maper(function (i) {
    return i * i * i;
});

fnBase([{i: 1, j: 2}, {k: 5}, {k: 3, l: 2}]); // [ 3, 2 ]
fnPow2([{i: 1, j: 2}, {k: 5}, {k: 3, l: 2}]); // [ 9, 4 ]
fnPow3([{i: 1, j: 2}, {k: 5}, {k: 3, l: 2}]); // [ 27, 8 ]
```

### Underscorer as a function

Underscore support object-oriented style of coding too. It allows passing the list/object/iteratee as an underscore
object and so saves passing it to the `last`, `values`, etc. in the functional style. 
Similarly, the underscorer gets the list argument using `_r` function.

```
// underscore
_([1, 2, 3]).last(); // 3

// underscorer
_r([1, 2, 3]).laster(); // function
_r([1, 2, 3]).laster()(); // 3
// chaining
_r([[2, 4], [4, 5], [5, 6]])
    .laster()
    .maper(function(i){return i * i})();          // [ 25, 36 ]
// forking chains
var fn = _r([[2, 4], [4, 5], [5, 6]]).laster();   // function
fn.maper(function(i){return i * i})();            // [ 25, 36 ]
fn.maper(function(i){return i * i * i})();        // [ 125, 216 ]
```
API
---

All [functions of underscore](http://underscorejs.org/) + `er` suffix :)

For example: `laster`, `firster`, `sampleer`, and `sortByer`. And Functions that supported 
in underscore chain: `poper`, `pusher`, `reverseer`, `shifter`, `sorter`, `spliceer`, `unshifter`, `concater`, `joiner`
, and `sliceer`.

**Note**: underscore `extend`, `default`, `pop`, `push`, `reverse`, `shift`, `sort`, `splice`, `unshift` functions
  are mutable. Similarly underscorer.
  
```js
var x = [1, 2, 3];
var y = _r(x).pusher(4)(); // mutable
x               // [1, 2, 3, 4]
x === y         // true
```

[npm]: https://www.npmjs.org/package/underscorer "npm"
[github]: https://github.com/smmoosavi/underscorer "github"
[npm:version]: http://img.shields.io/npm/v/underscorer.svg "version"
[bower:version]: http://img.shields.io/bower/v/underscorer.svg "version"
[npm:download]: http://img.shields.io/npm/dm/underscorer.svg "Download"
[dependencies]: https://david-dm.org/smmoosavi/underscorer.png "Dependencies"
[david-dm]: https://david-dm.org/smmoosavi/underscorer "Dependencies"
