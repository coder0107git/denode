# `deno_shim`
Deno shim for Node.js. Uses [`@deno/shim-deno`](https://www.npmjs.com/package/@deno/shim-deno)
under the hood.

## Installation
```shell
pnpm add github:coder0107git/deno_shim @deno/shim-deno
```

**NOTE:** Make sure to pin `@deno/shim-deno` so you don't experience 
random breaking changes.

## Usage
```js
import "deno_shim"; 
```
