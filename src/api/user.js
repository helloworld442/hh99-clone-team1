import api from "../axios/api";

const userSignUp = async (newUser) => {
  await api.post(`/api/user/signup`, newUser);
};

const userLogin = async (loginUser) => {
  const response = await api.post(`/api/user/signin`, loginUser);
  return response.data;
};

const getForgotPwd = async (email) => {
  const response = await api.get(`/api/pwd/forgot/${email}`);
  return response.data;
};

const getNewPwd = async (secretemail) => {
  const response = await api.get(`api/pwd/newPassword/${secretemail}`);
  return response.data;
};

const getAuthToken = async ()=> {
  const response = await api.get(`/api/user/token`);
  return response.data;
};

const updateUser = async (sendData) => {
  await api.patch(`/api/user/${sendData.email}/nickname`, {
    nickname: sendData.nickname,
  });
};

const deleteUser = async (userEmail) => {
  await api.delete(`/api/user/${userEmail}`);
};

export {
  userSignUp,
  userLogin,
  getForgotPwd,
  getNewPwd,
  getAuthToken,
  updateUser,
  deleteUser,
};
