(function (root, factory) {
    /* global define */
    if (typeof define === 'function' && define.amd) {
        define("underscorer", ['underscore'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('underscore'));
    } else {
        /* global _*/
        root._r = root.underscorer = factory(_);
    }
})(this, function (_) {
    var ArrayProto = Array.prototype;

    function erfy(fn, memory) {
        fn.memory = memory;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(fn, extenderProto);
            return fn;
        }
        if (({}).__proto__ !== undefined) {
            fn.__proto__ = extenderProto;
            return fn;
        }
        _.each(protoKeys, function (k) {
            fn[k] = proto[k];
        });
        return fn;
    }

    function erProto(underscore) {
        var proto = {};
        _.keys(underscore).forEach(function (name) {
            if (!_.isFunction(underscore[name])) {
                return;
            }
            proto[name + 'er'] = function () {
                var ifn = this;
                var args = _.toArray(arguments);
                args.unshift(null);
                var ofn = function (i) {
                    if (ifn.memory) {
                        args[0] = ifn(i);
                    } else {
                        args[0] = i;
                    }
                    return underscore[name].apply(underscore, args);
                };
                erfy(ofn, true);
                return ofn;
            };
        });


        _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
            proto[name + 'er'] = function () {
                var ifn = this;
                var args = _.toArray(arguments);
                var ofn = function (i) {
                    var obj = null;
                    if (ifn.memory) {
                        obj = ifn(i);
                    } else {
                        obj = i;
                    }
                    ArrayProto[name].apply(obj, args);
                    return obj;
                };
                erfy(ofn, true);
                return ofn;
            };

        });
        _.each(['concat', 'join', 'slice'], function (name) {
            proto[name + 'er'] = function () {
                var ifn = this;
                var args = _.toArray(arguments);
                var ofn = function (i) {
                    var obj = null;
                    if (ifn.memory) {
                        obj = ifn(i);
                    } else {
                        obj = i;
                    }
                    return ArrayProto[name].apply(obj, args);
                };
                erfy(ofn, true);
                return ofn;
            };
        });

        return proto;
    }

    var proto = erProto(_);
    var protoKeys = _.keys(proto);
    var extenderProto = {};
    _.extend(extenderProto, proto, Function.prototype);

    var _r = function (l) {
        var ofn = function () {
            return l;
        };
        erfy(ofn, true);
        return ofn;
    };
    erfy(_r, false);
    _r.VERSION = '1.0.4';
    return _r;
});
