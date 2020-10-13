var t = {},
    r = t.toString,
    n = Object.getPrototypeOf,
    e = t.hasOwnProperty,
    c = e.toString,
    o = c.call(Object);
exports.createProxy = function (t) {
    var u = new Set();
    return {
        proxyObject: (function t(a, i) {
            return (
                void 0 === i && (i = []),
                new Proxy(a, {
                    get: function (a, f, l) {
                        var g = Reflect.get(a, f, l),
                            j = (function (t) {
                                if (!t || "[object Object]" !== r.call(t)) return !1;
                                var u = n(t);
                                if (!u) return !0;
                                var a = e.call(u, "constructor") && u.constructor;
                                return "function" == typeof a && c.call(a) === o;
                            })(g),
                            s = String(f),
                            v = i.concat(s);
                        return (
                            (function (t) {
                                u.add(t.join("."));
                            })(v),
                            null !== g && j ? t(g, v) : g
                        );
                    }
                })
            );
        })(t),
        accessSet: u
    };
};
//# sourceMappingURL=accessor-log-proxy.js.map
