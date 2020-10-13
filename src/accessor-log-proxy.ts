import { isPlainObject } from "./isPlainObject";

/**
 * create proxy object for `object`
 * @param object
 */
export const createProxy = <T extends object>(object: T): { proxyObject: T; accessSet: Set<string> } => {
    const accessSet = new Set<string>();
    const log = (keyStack: string[]) => {
        accessSet.add(keyStack.join("."));
    };
    const innerProxy = <T extends object>(object: T, keyStack: string[] = []): T => {
        return new Proxy(object, {
            get(target: T, key: PropertyKey, receiver: any): any {
                const childTarget = Reflect.get(target, key, receiver);
                // Avoid Proxy Error like follows
                // Can not proxy Set, Map, TypedArray ...
                // Just Proxy Object Literal(plain object)
                // TypeError: Method get TypedArray.prototype.length called on incompatible receiver [object Object]
                // https://stackoverflow.com/questions/43927933/why-is-set-incompatible-with-proxy
                const isObjectLiteral = isPlainObject(childTarget);
                const currentKey = String(key);
                const currentKeyStack = keyStack.concat(currentKey);
                log(currentKeyStack);
                if (childTarget !== null && isObjectLiteral) {
                    return innerProxy(childTarget, currentKeyStack);
                }
                return childTarget;
            }
        });
    };
    return {
        proxyObject: innerProxy(object),
        accessSet
    };
};
