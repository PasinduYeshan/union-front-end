import { setBranches } from "./index.js";
import api from "../../api";

const metaThunk = {
  getBranches() {
    return async (dispatch) => {
      const res = await api.meta.branches();
      if (res.status === 200) {
        dispatch(setBranches(res.data));
      }
    };
  },
}

export default metaThunk;