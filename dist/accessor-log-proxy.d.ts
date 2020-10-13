/**
 * create proxy object for `object`
 * @param object
 */
export declare const createProxy: <T extends object>(
    object: T
) => {
    proxyObject: T;
    accessSet: Set<string>;
};
