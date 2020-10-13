!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(exports)
        : "function" == typeof define && define.amd
        ? define(["exports"], e)
        : e(((t = t || self).accessorLogProxy = {}));
})(this, function (t) {
    var e = {},
        n = e.toString,
        o = Object.getPrototypeOf,
        r = e.hasOwnProperty,
        c = r.toString,
        f = c.call(Object);
    t.createProxy = function (t) {
        var e = new Set();
        return {
            proxyObject: (function t(i, u) {
                return (
                    void 0 === u && (u = []),
                    new Proxy(i, {
                        get: function (i, a, l) {
                            var s = Reflect.get(i, a, l),
                                d = (function (t) {
                                    if (!t || "[object Object]" !== n.call(t)) return !1;
                                    var e = o(t);
                                    if (!e) return !0;
                                    var i = r.call(e, "constructor") && e.constructor;
                                    return "function" == typeof i && c.call(i) === f;
                                })(s),
                                p = String(a),
                                y = u.concat(p);
                            return (
                                (function (t) {
                                    e.add(t.join("."));
                                })(y),
                                null !== s && d ? t(s, y) : s
                            );
                        }
                    })
                );
            })(t),
            accessSet: e
        };
    };
});
//# sourceMappingURL=accessor-log-proxy.umd.js.map
