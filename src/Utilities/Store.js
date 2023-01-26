import { configureStore } from "@reduxjs/toolkit";
import Utilities from "./Utilities";

export default configureStore({
  reducer: {
    product: Utilities,
  },
});
