import jwtDecode from "jwt-decode";

import api, { registerAccessToken } from "../../api";
import { setUserData, setToken } from "./index";

const userThunk = {
  userLogin(credentials) {
    return async (dispatch) => {
      const [res, data] = await api.user.login(credentials);
      if (res.status === 200) {
        dispatch(setUserData(data.data.userData));
        dispatch(setToken(data.token));
      }
      return res;
    };
  },
};

export default userThunk;
