import { defineComponent } from "vue";
import { version } from "@gdvibes/form";

export default defineComponent({
  setup() {
    console.log("the gdvibes form version is", version);

    return () => <div>the gdvibes form version is {version}</div>;
  },
});
