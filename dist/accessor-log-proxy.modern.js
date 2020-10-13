const t = {},
    c = t.toString,
    n = Object.getPrototypeOf,
    e = t.hasOwnProperty,
    o = e.toString,
    r = o.call(Object),
    l = (t) => {
        const l = new Set(),
            s = (t, u = []) =>
                new Proxy(t, {
                    get(t, a, i) {
                        const f = Reflect.get(t, a, i),
                            g = (function (t) {
                                if (!t || "[object Object]" !== c.call(t)) return !1;
                                const l = n(t);
                                if (!l) return !0;
                                const s = e.call(l, "constructor") && l.constructor;
                                return "function" == typeof s && o.call(s) === r;
                            })(f),
                            j = String(a),
                            O = u.concat(j);
                        return (
                            ((t) => {
                                l.add(t.join("."));
                            })(O),
                            null !== f && g ? s(f, O) : f
                        );
                    }
                });
        return { proxyObject: s(t), accessSet: l };
    };
export { l as createProxy };
//# sourceMappingURL=accessor-log-proxy.modern.js.map
