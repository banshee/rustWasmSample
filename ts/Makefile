.PHONY: all
all:
	-ts-node src/trivial_typescript.ts
	-ts-node --experimental-specifier-resolution=node src/trivial_typescript.ts
	-ts-node --esm src/trivial_typescript.ts

foo:
	ts-node --esm /home/james/workspace/rustWasmSample/node_modules/mocha/bin/mocha.js --require ts-node/register --extension ts --loader=ts-node/esm  test/test_wasm.ts

bar:
	ts-node --esm test/test_wasm.ts
