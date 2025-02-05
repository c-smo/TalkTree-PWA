import { backend_init } from "../_backend_/_backend_init_";
import { frontend_init } from "../_frontend_/_frontend_init_";
import { SET_IS_INIT } from "../globals";
import { paths_init } from "../utils/paths";
import validate_all from "./validation";

export const main_init = async () => {
  await paths_init();
  await validate_all();
  await backend_init();
  await frontend_init();
  SET_IS_INIT(true);
};
