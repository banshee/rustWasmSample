import {describe} from "mocha"
import {expect} from "chai"
import * as RustCode from "@banshee.com-nodejs/rust-nom-sample"
import * as Xr from "./import_me"

describe("Using rust code", () => {
    describe("basic functionality", async () => {
        it("should call a function", async () => {
            expect(RustCode.this_is_a_rust_function()).to.eq("This string is generated in Rust")
        })
    })
})
