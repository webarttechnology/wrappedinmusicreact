import axios from "axios";
import * as c from "../api/constant";

// ? REGISTRATION API
export const user_registration = async (data) => {
  try {
    const url = c.SIGNUP;
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const otp_varification = async (data) => {
  try {
    const url = c.SIGNUP + "/otp-verification";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const user_login = async (data) => {
  try {
    const url = c.SIGNUP + "/login";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};
export const user_forgotPass = async (data) => {
  try {
    const url = c.SIGNUP + "/forgotpassword";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const forgotPass_new = async (data) => {
  try {
    const url = c.SIGNUP + "/reset-password";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const resend_otp = async (data) => {
  try {
    const url = c.SIGNUP + "/resent-otp";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};
