import {describe} from "mocha"
import {expect} from "chai"
import * as RustCode from "@banshee.com-nodejs/rust-nom-sample"

describe("Using rust code", () => {
    describe("basic functionality", async () => {
        it("can call a Rust function", async () => {
            expect(RustCode.this_is_a_rust_function()).to.eq("This string is generated in Rust")
        })
    })
})
