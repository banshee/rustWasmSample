output=pkg_bundler/package.json pkg_bundler/README.md pkg_bundler/rust_nom_sample_bg.js pkg_bundler/rust_nom_sample_bg.wasm pkg_bundler/rust_nom_sample_bg.wasm.d.ts pkg_bundler/rust_nom_sample.d.ts pkg_bundler/rust_nom_sample.js pkg_nodejs/package.json  pkg_nodejs/rust_nom_sample_bg.wasm	  pkg_nodejs/rust_nom_sample.d.ts pkg_nodejs/README.md	 pkg_nodejs/rust_nom_sample_bg.wasm.d.ts  pkg_nodejs/rust_nom_sample.js 

.PHONY: all
all: $(output)

$(output) &: src/lib.rs Makefile
	for mode in bundler nodejs ; do wasm-pack build -d pkg_$$mode -t $$mode -s banshee.com-$$mode ; done
	touch $(output)
