var t = {},
    r = t.toString,
    n = Object.getPrototypeOf,
    e = t.hasOwnProperty,
    c = e.toString,
    o = c.call(Object),
    u = function (t) {
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
                                v = String(f),
                                O = i.concat(v);
                            return (
                                (function (t) {
                                    u.add(t.join("."));
                                })(O),
                                null !== g && j ? t(g, O) : g
                            );
                        }
                    })
                );
            })(t),
            accessSet: u
        };
    };
export { u as createProxy };
//# sourceMappingURL=accessor-log-proxy.module.js.map
