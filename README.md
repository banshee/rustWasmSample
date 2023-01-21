# Rust + Wasm: Rust running in three different environments

This is a quick example of how to use Rust in three different environments:

1. Native code on the host (for Rust tests that execute quickly) 
1. Wasm code running in Node.js on the host
1. Wasm code running in the browser

There's a YouTube video talking through this.

## Setup

I started with the tutorials at: 

https://rustwasm.github.io/docs/wasm-pack/tutorials/hybrid-applications-with-webpack/getting-started.html  

https://rustwasm.github.io/book/game-of-life/hello-world.html

wasm-pack is a rust tool to generate wasm: https://rustwasm.github.io/wasm-pack/book/

## Rust sample code

The initial Rust project was generated with:
 
    npm init rust-webpack rust/rust-nom-sample