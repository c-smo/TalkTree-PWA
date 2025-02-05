import { createSignal } from "solid-js";
import { Settings } from "./types/types";

export const [IS_INIT, SET_IS_INIT] = createSignal(false);

export const [NEW_WORDS, SET_NEW_WORDS] = createSignal([] as string[]);

export const [CURRENT_SHEET, SET_CURRENT_SHEET] = createSignal("home");

export const SETTINGS: Settings = {
  rows: 6,
  cols: 3,
  aspect_ratio: "9:18",
  radius: 0.2,
  use_swipe: false,
  emoji_size: 0.7,
  server_ip: "-",
  default_colors: {
    background: "#2c3e50",
    button: "#3498db",
    text: "#FFFFFF",
  },
};
