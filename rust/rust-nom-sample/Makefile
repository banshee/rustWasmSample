# produced by: ls -x pkg_*/* | tr '\n' ' '
output=pkg_nodejs/package.json			 pkg_web/package.json pkg_nodejs/README.md			 pkg_web/README.md pkg_nodejs/rust_nom_sample_bg.wasm	 pkg_web/rust_nom_sample_bg.wasm pkg_nodejs/rust_nom_sample_bg.wasm.d.ts  pkg_web/rust_nom_sample_bg.wasm.d.ts pkg_nodejs/rust_nom_sample.d.ts		 pkg_web/rust_nom_sample.d.ts pkg_nodejs/rust_nom_sample.js		 pkg_web/rust_nom_sample.js

.PHONY: all
all: $(output)

$(output) &: src/lib.rs Makefile Cargo.toml
	cargo build
	for mode in nodejs web; do wasm-pack build -d pkg_$$mode -t $$mode -s banshee.com-$$mode ; done
	touch $(output)
