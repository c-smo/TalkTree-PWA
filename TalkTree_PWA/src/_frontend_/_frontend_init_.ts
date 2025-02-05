import { invoke } from "@tauri-apps/api/core";
import { err } from "../plugins/terminal/commands/logs";

export const frontend_init = async (): Promise<void> => {
  try {
    const element = document.getElementById("show_ip")!;
    const ip = await invoke("get_device_ip");
    element.innerHTML = `IP: ${ip}`;
  } catch (e) {
    err(e);
  }
};
