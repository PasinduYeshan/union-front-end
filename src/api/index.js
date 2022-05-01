import axios from "axios";
import store from "src/store";
import jwtDecode from "jwt-decode";
import {toast} from "react-toastify";
import {useHistory} from 'react-router-dom';

/**
 * Setup Axios
 */
const BASE_URL_REMOTE = "";
const BASE_URL_LOCAL = "http://localhost:8000";

axios.defaults.baseURL = BASE_URL_LOCAL;

// Register access token with axios
export const registerAccessToken = (token, history) => {
    if (token) {
        const {exp} = jwtDecode(token);
        if (Date.now() >= exp * 1000) {
            toast.error("Your session has expired, please login again", {});
            toast.success("You will be redirect to Login page", {delay: 300});
            localStorage.removeItem("upto-access-token");
            localStorage.removeItem("upto-refresh-token");
            setTimeout(() => {history.replace('/login'); return;}, 2000);
            return false;
        }
        axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        return true;
    } else {
        toast.error("Your session has expired, please login again");
        toast.success("You will be redirect to Login page", {delay: 300});
        localStorage.removeItem("upto-access-token");
        localStorage.removeItem("upto-refresh-token");
        setTimeout(() => {history.replace('/login'); return;}, 2000);
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
            return {...readStatus(res), data: res.data};
        else return {...readStatus(res), data: res.data.data};
    } catch (e) {
        const res = e.response;
        console.log("this is error", e);
        return {...readStatus(res), data: null};
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
            return ajaxResolver(axios.post("/api/user/register", userData), {
                //   fullBody: true,
            });
        },
        async updateUser(userId, userData) {
            return ajaxResolver(axios.post(`/api/user/update/${userId}`, userData), {
                //   fullBody: true,
            });
        },
        async updateProfile(userData) {
            return ajaxResolver(axios.post("/api/user/update-profile", userData), {
                //   fullBody: true,
            });
        },
        async updatePassword(passwordData) {
            return ajaxResolver(
                axios.post("/api/user/update-password", passwordData),
                {
                    //   fullBody: true,
                }
            );
        },
        async changePassword(userId, passwordData) {
            return ajaxResolver(
                axios.post(`/api/user/update/${userId}`, passwordData),
                {
                    //   fullBody: true,
                }
            );
        },
        async forgotPassword(username) {
            return ajaxResolver(
                axios.post(`/api/user/forgot-password`, {username}),
                {
                    //   fullBody: true,
                }
            );
        },
        async resetPassword(resetData) {
            return ajaxResolver(
                axios.post(`/api/user/update/${userId}`, resetData),
                {
                    //   fullBody: true,
                }
            );
        },
        async getUserAccounts(accountType) {
            return ajaxResolver(
                axios.get(`/api/user/user-accounts`, {params: {accountType}}),
                {
                    //   fullBody: true,
                }
            );
        },

        async getUserAccount(userId) {
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
