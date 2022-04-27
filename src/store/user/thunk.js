import jwtDecode from "jwt-decode";
import api, { registerAccessToken } from "../../api";
import { setUserData, setTokens } from "./index";

const userThunk = {
  userLogin(credentials) {
    return async (dispatch) => {
      const res = await api.user.login(credentials);
      if (res.status === 200) {
        dispatch(setUserData(res.data.data));
        dispatch(setTokens(res.data.token));
      }
      return res;
    };
  },
  
  checkToken() {
    return async (dispatch) => {
      const accessToken = localStorage.getItem("upto-access-token");
      console.log(accessToken);
      if (!accessToken) return;
      const payload = jwtDecode(accessToken);
      if (!payload) return;
      if (payload["iat"]) delete payload["iat"];
      dispatch(setUserData(payload));
      const refreshToken = localStorage.getItem("upto-refresh-token");
      if (!refreshToken) {
        refreshToken = "";
      }
      dispatch(
        setTokens({
          access: accessToken,
          refresh: refreshToken,
        })
      );
    };
  },
};

export default userThunk;
