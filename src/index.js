import { Deno } from "@deno/shim-deno";

globalThis.Deno = Deno;

export {
    Deno as default,
    Deno,
};
