import * as RustCode from "@banshee.com-nodejs/rust-nom-sample"

export function do_rust_thing(): string {
    return RustCode.this_is_a_rust_function()
}