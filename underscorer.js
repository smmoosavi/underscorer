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
    function erfy(ifn, memory) {
        _.keys(_).forEach(function (k) {
            if (!_.isFunction(_[k])) {
                return;
            }
            ifn[k + 'er'] = function () {
                var args = _.toArray(arguments);
                args.unshift(null);
                var ofn;
                ofn = function (i) {
                    if (memory) {
                        args[0] = ifn(i);
                    } else {
                        args[0] = i;
                    }
                    return _[k].apply(_, args);
                };
                erfy(ofn, true);
                return ofn;
            };
        });
        return ifn;
    }

    var _r = function (l) {
        var ofn = function () {
            return l;
        };
        erfy(ofn, true);
        return ofn;
    };
    _r = erfy(_r, false);
    _r.VERSION = '1.0.1';
    return _r;
});