`npm run build` will:
- compile the Rust crate to js/wasm with `wasm-pack build`
- copy the results to this folder manually (`pkg/`)
- bundle the node project for the web with `webpack`
- copy the css manually (due to `webpack` version incompatibility)

After that, use `npm run deploy` to push just the static
web content to the `gh-pages` branch.

See `package.json` for details.
