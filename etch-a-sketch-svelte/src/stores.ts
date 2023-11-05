import { writable } from "svelte/store";

export const penColour = writable("black");
export const dimensions = writable(25);
export const currSquares = writable(Math.pow(25, 2));
export const useEraser = writable(false);
export const useShading = writable(false);