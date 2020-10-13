const class2type = {};
const toString = class2type.toString;
const getProto = Object.getPrototypeOf;
const hasOwn = class2type.hasOwnProperty;
const fnToString = hasOwn.toString;
const ObjectFunctionString = fnToString.call(Object);

/**
 * is plain object, return true
 * if the obj is Map, Set ..., return false
 * @param obj
 */
export function isPlainObject(obj: unknown): obj is {} {
    // Detect obvious negatives
    // Use toString instead of jQuery.type to catch host objects
    if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
    }

    const proto = getProto(obj);

    // Objects with no prototype (e.g., `Object.create( null )`) are plain
    if (!proto) {
        return true;
    }

    // Objects with prototype are plain iff they were constructed by a global Object function
    const Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
    return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
}
