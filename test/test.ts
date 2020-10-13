import assert from "assert";
import { createProxy } from "../src/accessor-log-proxy";

describe("accessor-log-proxy", function () {
    it("return set and proxy", () => {
        const object = {
            a: {
                b: {
                    c: 123
                }
            }
        };
        const { accessSet, proxyObject } = createProxy(object);
        console.log(proxyObject.a.b.c);
        assert.deepStrictEqual(accessSet, new Set(["a", "a.b", "a.b.c"]));
    });
});
