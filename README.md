# accessor-log-proxy

Access Proxy for an Object.

## Feature

- Logging access for object property

## Install

Install with [npm](https://www.npmjs.com/):

    npm install accessor-log-proxy

## Usage

```js
import { createProxy } from "accessor-log-proxy";
const object = {
    a: {
        b: {
            c: 123
        }
    }
};
const { accessSet, proxyObject } = createProxy(object);
// Accecs
proxyObject.a.b.c
// Log
console.log(accessSet); // => Set{ "a", "a.b", "a.b.c" }
```

### Browser

```js
const { createProxy } = await import("https://cdn.skypack.dev/accessor-log-proxy");
const object = {
    a: {
        b: {
            c: 123
        }
    }
};
const { accessSet, proxyObject } = createProxy(object);
// Accecs
console.log(proxyObject.a.b.c);
// Log
console.log(accessSet); // => Set{ "a", "a.b", "a.b.c" }
```

## Options

```ts
export type createProxyOptions = {
    log?: (keyStack: string[], value?: any) => void;
    // include prototype property like "hasOwnProperty"
    // default: true
    includePrototypeProperties?: boolean;
};
```

## Changelog

See [Releases page](https://github.com/azu/accessor-log-proxy/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/accessor-log-proxy/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- azu: [GitHub](https://github.com/azu), [Twitter](https://twitter.com/azu_re)

## License

MIT © azu
