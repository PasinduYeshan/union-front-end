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
      return ajaxResolver(axios.put(`/api/user/update/${userId}`, userData));
    },
    async updateProfile(userData) {
      return ajaxResolver(axios.put("/api/user/update-profile", userData));
    },
    async updatePassword(passwordData) {
      return ajaxResolver(
        axios.put("/api/user/update-password", passwordData)
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
    async getUserProfile() {
      return ajaxResolver(axios.get(`/api/user/user-profile`));
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
    async getByUserId(userId) {
      return ajaxResolver(axios.get(`/api/member/get/${userId}`));
    },
    async get(query) {
      return ajaxResolver(axios.get("/api/member/find-nic", { params: query }));
    },
    async find(query) {
      return ajaxResolver(axios.get("/api/member/find", { params: query }));
    },
  },
  event: {
    async add(eventData) {
      return ajaxResolver(axios.post("/api/event/add", eventData));
    },
    async update(eventId, eventData) {
      return ajaxResolver(axios.put(`/api/event/update/${eventId}`, eventData));
    },
    async getByEventId(eventId) {
      return ajaxResolver(axios.get(`/api/event/get/${eventId}`));
    },
    async delete(eventId) {
      return ajaxResolver(axios.delete(`/api/event/delete/${eventId}`));
    },
    async get(query) {
      return ajaxResolver(axios.get("/api/event/get", { params: query }));
    },
  },
  leader: {
    async add(leaderData) {
      return ajaxResolver(axios.post("/api/web/add-leader", leaderData));
    },
    async update(leaderId, leaderData) {
      return ajaxResolver(axios.put(`/api/web/update-leader/${leaderId}`, leaderData));
    },
    async delete(leaderId) {
      return ajaxResolver(axios.delete(`/api/web/delete-leader/${leaderId}`));
    },
    async get(query) {
      return ajaxResolver(axios.get("/api/web/get-leaders", { params: query }));
    },
  },
  branchSecretary: {
    async add(branchSecData) {
      return ajaxResolver(axios.post("/api/web/add-branch-secretary", branchSecData));
    },
    async update(branchSecId, branchSecData) {
      return ajaxResolver(axios.put(`/api/web/update-branch-secretary/${branchSecId}`, branchSecData));
    },
    async delete(branchSecId) {
      return ajaxResolver(axios.delete(`/api/web/delete-branch-secretary/${branchSecId}`));
    },
    async get(query) {
      return ajaxResolver(axios.get("/api/web/get-branch-secretaries", { params: query }));
    },
  },
  committeeMember: {
    async add(committeeMemberData) {
      return ajaxResolver(axios.post("/api/web/add-committee-member", committeeMemberData));
    },
    async update(committeeMemberId, committeeMemberData) {
      return ajaxResolver(axios.put(`/api/web/update-committee-member/${committeeMemberId}`, committeeMemberData));
    },
    async delete(committeeMemberId) {
      return ajaxResolver(axios.delete(`/api/web/delete-committee-member/${committeeMemberId}`));
    },
    async get(query) {
      return ajaxResolver(axios.get("/api/web/get-committee-members", { params: query }));
    },
  },
  announcement: {
    async add(announcementData) {
      return ajaxResolver(axios.post("/api/web/add-announcement", announcementData));
    },
    async update(announcementId, announcementData) {
      return ajaxResolver(axios.put(`/api/web/update-announcement/${announcementId}`, announcementData));
    },
    async delete(announcementId) {
      return ajaxResolver(axios.delete(`/api/web/delete-announcement/${announcementId}`));
    },
    async get(query) {
      return ajaxResolver(axios.get("/api/web/get-announcements", { params: query }));
    },
  },
};
