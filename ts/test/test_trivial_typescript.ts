import {IAmExported} from "./import_me"

function do_some_typescript(): string {
    return "typescript!"
}

console.log(`calling typescript: ${do_some_typescript()}`)