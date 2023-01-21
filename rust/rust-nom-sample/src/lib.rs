use wasm_bindgen::prelude::*;
use web_sys::console;


#[wasm_bindgen]
pub fn this_is_a_rust_function() -> String {
    let result: String = "This string is generated in Rust".into();
    dbg!(result)
}


// This is like the `main` function, except for JavaScript.
#[wasm_bindgen(start)]
pub fn main_js() -> Result<(), JsValue> {
    // This provides better error messages in debug mode.
    // It's disabled in release mode so it doesn't bloat up the file size.
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();


    // Your code goes here!
    console::log_1(&JsValue::from_str("Hello world! - from lib.rs, main_js, marked with #[wasm_bindgen(start)]"));

    Ok(())
}

#[cfg(test)]
mod tests {
    use crate::this_is_a_rust_function;

    #[test]
    fn test_this_is_a_rust_function() {
        let s = this_is_a_rust_function();
        assert_eq!("This string is generated in Rust", dbg!(s));
    }
}
