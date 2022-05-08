import axios from "axios";
import store from "src/store";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { thunks } from "src/store";

/**
 * Setup Axios
 */
const BASE_URL_REMOTE = "";
const BASE_URL_LOCAL = "http://localhost:8000";

axios.defaults.baseURL = BASE_URL_LOCAL;

// Register access token with axios
export const registerAccessToken = (token, history, dispatch) => {
  if (token) {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      toast.error("Your session has expired, please login again", {});
      toast.success("You will be redirect to Login page", { delay: 300 });
      dispatch(thunks.user.userLogout());
      setTimeout(() => {
        history.replace("/login");
        return;
      }, 2000);
      return false;
    }
    axios.defaults.headers["Authorization"] = `Bearer ${token}`;
    return true;
  } else {
    toast.error("Your session has expired, please login again");
    toast.success("You will be redirect to Login page", { delay: 300 });
    dispatch(thunks.user.userLogout());
    setTimeout(() => {
      history.replace("/login");
      return;
    }, 2000);
    return false;
  }
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
  } else if (!res.data.message) {
    return {
      status: res.status,
      message: "Something went wrong",
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
    console.log("Axios error", e);
    if (e.response) {
      return { ...readStatus(e.response), data: null };
    } else if (e.request) {
      return { ...readStatus(e.request), data: null };
    } else {
      return { ...readStatus(e), data: null };
    }
  }
}

const formDataConfig = {
  headers: {
    "content-type": "multipart/form-data",
  },
};

export default {
  user: {
    async login(credentials) {
      return ajaxResolver(axios.post("/api/user/login", credentials), {
        fullBody: true,
      });
    },
    async registerSA(userData) {
      return ajaxResolver(axios.post("/api/user/register-sa", userData));
    },
    async register(userData) {
      return ajaxResolver(axios.post("/api/user/register", userData));
    },
    async updateUser(userId, userData) {
      return ajaxResolver(axios.post(`/api/user/update/${userId}`, userData));
    },
    async updateProfile(userData) {
      return ajaxResolver(axios.post("/api/user/update-profile", userData));
    },
    async updatePassword(passwordData) {
      return ajaxResolver(
        axios.post("/api/user/update-password", passwordData)
      );
    },
    async changePassword(userId, passwordData) {
      return ajaxResolver(
        axios.post(`/api/user/update/${userId}`, passwordData)
      );
    },
    async forgotPassword(username) {
      return ajaxResolver(
        axios.post(`/api/user/forgot-password`, { username })
      );
    },
    async resetPassword(resetData) {
      return ajaxResolver(axios.post(`/api/user/update/${userId}`, resetData));
    },
    async getUserAccounts(accountType) {
      return ajaxResolver(
        axios.get(`/api/user/user-accounts`, { params: { accountType } })
      );
    },

    async getUserAccount(userId) {
      return ajaxResolver(axios.get(`/api/user/user-account/${userId}`));
    },
  },
  meta: {
    async branches() {
      return ajaxResolver(axios.get("/api/meta/branches"));
    },
  },
  issue: {
    async add(issueData) {
      return ajaxResolver(
        axios.post("/api/issue/add", issueData, formDataConfig)
      );
    },
    async update(issueId, issueData) {
      return ajaxResolver(axios.put(`/api/issue/update/${issueId}`, issueData));
    },
    async get(filter) {
      return ajaxResolver(axios.get("/api/issue/get", { params: filter }));
    },
    async getOne(issueId) {
      return ajaxResolver(axios.get(`/api/issue/get/${issueId}`));
    },
  },
  member: {
    async add(memberData) {
      return ajaxResolver(axios.post("/api/member/add", memberData));
    },
    async update(memberId, memberData) {
      return ajaxResolver(
        axios.put(`/api/member/update/${memberId}`, memberData)
      );
    },
    async get(query) {
      return ajaxResolver(axios.get("/api/member/get", { params: query }));
    },
    async find(query) {
      return ajaxResolver(axios.get("/api/member/get", { params: query }));
    },
  },
};
