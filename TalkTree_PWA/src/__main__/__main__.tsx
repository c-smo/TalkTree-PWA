import { onMount } from "solid-js";
import "../style.css";
import { main_init } from "./_init_";

function App() {
  onMount(async () => {
    main_init();
  });
  return (
    <div>
      <h1 id="show_ip"></h1>
    </div>
  );
}

export default App;
