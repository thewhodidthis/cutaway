## about

Provides HTML mirroring of browser console logs. Intrusively somewhat `console.log()` is redeclared in order to echo the original output inside of a `<pre>` tag added at the very top of the `document.body` containing the script carrying out the logging. Ties in nicely with [tapeless](https://github.com/thewhodidthis/tapeless) and [kpow](https://npm.im/kpow) for client side TAP reporting.

## setup

Download from GitHub directly if using a package manager:

```sh
# Add to package.json
npm install cutaway
```

Source from an import map:

```json
{
  "imports": {
    "cutaway": "https://thewhodidthis.github.io/cutaway/main.js"
  }
}
```

## usage

Include for side effects only. For example,

```js
// Just an iife
import "https://esm.sh/cutaway@3.0.0"

// Say hi in HTML
console.log("coucou")
```

## see also

- [tapeless](https://github.com/thewhodidthis/tapeless)
- [kpow](https://github.com/thewhodidthis/kpow)
