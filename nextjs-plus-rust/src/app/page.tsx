'use client';

import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from './page.module.css'
import * as RustCode from "@banshee.com-web/rust-nom-sample"
import rust_init from "@banshee.com-web/rust-nom-sample"

const inter = Inter({subsets: ['latin']})

export default function Home() {
    function clickMe() {
        rust_init("/_next/static/media/rust_nom_sample_bg.8b23850b.wasm").then(() => {
            console.log("Clicked, invoking Rust: ", RustCode.this_is_a_rust_function())
        })
    }

    return (
        <main className={styles.main}>
            Hello world
            <a onClick={clickMe}>Click me and look at the console</a>
        </main>
    )
}
