import api from "../axios/api";

const getMainNews = async (page) => {
  const response = await api.get(`/api/main/${page}`);
  return response.data;
};

const getKeyword = async () => {
  const response = await api.get(`/api/search`);
  return response.data;
};

const getSearchResults = async (search, page) => {
  const response = await api.get(`/api/search`, { params: { q: search, page } });
  return response.data;
}

export {
  getMainNews,
  getKeyword,
  getSearchResults,
};
