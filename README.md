underscorer
===========

**underscorer** really is functioner :smile: and chainer :smirk:

What is the meaning of underscorer?
-----------------------------------

first you must understand meaning of *functioner* and *chainer*.

You know action of `er` postfix in english words. for example [worker](http://dictionary.reference.com/browse/worker) is: 
> a person or thing that works

So *functioner* is a function that create function. and *chainer* is a function that prepare chaining.

**underscorer** is functioner for [underscore](http://underscorejs.org/)

Booting
-------

### node

```js
var _r = require('underscorer');
```

### browser

```html
<script src="underscore.js"></script>
<script src="underscorer.js"></script>
```

global `_r` or `underscorer`

### usage
#### functioning
We now [`_.last`](http://underscorejs.org/#last) function return last item of passed array

```js
_.last([3, 4, 1, 5]); // 5
```

So **underscorer** has `_r.laster` (`last` + `er`) function that return function that calc last item of array. because
 underscorer is *functioner*.
 
```js
var fn = _r.laster()
fn([3, 4, 1, 5]); // 5
fn([5, 2, 6, 1]); // 1
```

#### chaining
suppose you want calculate sum of square of values of last item of list.

```js
var l = [{a: 1, b: 4}, {a: 3}, {a: 3, c: 4}];
_.reduce(_.map(_.values(_.last(l)),function (i) {return i * i;}),function(a, b){ return a + b});
```

**underscorer** not only *functioner* but also is *chainer*. It means that you can chain functions.

```js
var fn = _r
    .laster()
    .valueser()
    .maper(function (i) { return i * i; })        // I know, but this is map + er
    .reduceer(function (a, b) { return a + b; });

fn([{a: 1, b: 4}, {a: 3}, {a: 3, c: 4}]);         // 25
fn([{i: 1, j: 8}, {k: 1, l: 2}]);                 // 5
```

You can fork chains

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

#### underscorer as a function

Like as underscore you can pass input first

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

All [function of underscore](http://underscorejs.org/) by `er` postfix. for example: `laster`, `firster`, `sampleer`, `sortByer`