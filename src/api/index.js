import axios from "axios";
import store from "src/store";

/**
 * Setup Axios
 */
const BASE_URL_REMOTE = "";
const BASE_URL_LOCAL = "http://localhost:8000";

axios.defaults.baseURL = BASE_URL_LOCAL;

// Register access token with axios
export const registerAccessToken = (token) => {
  axios.defaults.headers["Authorization"] = `Bearer ${token}`;
};

/**
 * Convert Axios Response into
 *      status: http status code
 *      message: message from backend api
 * @param res
 */
function readStatus(res) {
  if (!res || !res.status) {
    return {
      status: 408,
      message: "Check your internet connection",
    };
  }
  return {
    status: res.status,
    message: res.data.message,
  };
}

/**
 * Resolve Axios Response
 * @param axiosRes
 * @param options
 */
async function ajaxResolver(axiosRes, options = null) {
  try {
    const res = await axiosRes;
    if (options && options.fullBody)
      return { ...readStatus(res), data: res.data };
    else return { ...readStatus(res), data: res.data.data };
  } catch (e) {
    const res = e.response;
    console.log("this is error", e);
    return { ...readStatus(res), data: null };
  }
}

export default {
  user: {
    async login(credentials) {
      return ajaxResolver(axios.post("/api/user/login", credentials), {
        fullBody: true,
      });
    },
    async registerSA(userData) {
      return ajaxResolver(axios.post("/api/user/register-sa", userData), {
        //   fullBody: true,
      });
    },
    async register(userData) {
      registerAccessToken(store.getState().auth.accessToken);
      return ajaxResolver(axios.post("/api/user/register", userData), {
        //   fullBody: true,
      });
    },
    async updateUser(userId, userData) {
      registerAccessToken(store.getState().auth.accessToken);
      return ajaxResolver(axios.post(`/api/user/update/${userId}`, userData), {
        //   fullBody: true,
      });
    },
    async updateProfile(userData) {
      registerAccessToken(store.getState().auth.accessToken);
      return ajaxResolver(axios.post("/api/user/update-profile", userData), {
        //   fullBody: true,
      });
    },
    async updatePassword(passwordData) {
      registerAccessToken(store.getState().auth.accessToken);
      return ajaxResolver(
        axios.post("/api/user/update-password", passwordData),
        {
          //   fullBody: true,
        }
      );
    },
    async changePassword(userId, passwordData) {
      registerAccessToken(store.getState().auth.accessToken);
      return ajaxResolver(
        axios.post(`/api/user/update/${userId}`, passwordData),
        {
          //   fullBody: true,
        }
      );
    },
    async forgotPassword(username) {
      return ajaxResolver(
        axios.post(`/api/user/update/${userId}`, { username }),
        {
          //   fullBody: true,
        }
      );
    },
    async resetPassword(username) {
      return ajaxResolver(
        axios.post(`/api/user/update/${userId}`, { username }),
        {
          //   fullBody: true,
        }
      );
    },
    async getUserAccounts(accountType) {
      registerAccessToken(store.getState().auth.accessToken);
      return ajaxResolver(
        axios.get(`/api/user/user-accounts`, { params: { accountType } }),
        {
          //   fullBody: true,
        }
      );
    },

    async getUserAccount(userId) {
      registerAccessToken(store.getState().auth.accessToken);
      return ajaxResolver(axios.get(`/api/user/user-account/${userId}`), {
        //   fullBody: true,
      });
    },
  },
  meta: {
    async branches() {
      return ajaxResolver(axios.get("/api/meta/branches"), {
        // fullBody: true,
      });
    },
  },
};
