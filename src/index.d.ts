import { Deno as _Deno } from "@deno/shim-deno";

declare global {
    const Deno = _Deno;
}
