output=pkg_bundler/package.json pkg_bundler/README.md pkg_bundler/rust_nom_sample_bg.js pkg_bundler/rust_nom_sample_bg.wasm pkg_bundler/rust_nom_sample_bg.wasm.d.ts pkg_bundler/rust_nom_sample.d.ts pkg_bundler/rust_nom_sample.js 

$(output) &: src/lib.rs
	echo $(output)
	wasm-pack build -d pkg_bundler -t bundler
	touch $@
