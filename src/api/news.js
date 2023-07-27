import api from "../axios/api";

const getMainNews = async (page) => {
  const response = await api.get(`/api/main`, {
    params: { page },
  });
  return response.data;
};

const getNews = async (id) => {
  const response = await api.get(`/api/main/${id}`);
  return response.data;
};

const getKeyword = async () => {
  const response = await api.get(`/keyword`);
  return response.data;
};

const getSearchResults = async (search, page) => {
  const response = await api.get(`/search`, {
    params: { q: search, page },
  });
  return response.data;
};

const getCategoryResults = async (category, page) => {
  const response = await api.get(`/api/tag`, {
    params: { category, page },
  });
  return response.data;
};

const getLikes = async (page) => {
  const response = await api.get(`/api/likes`, {
    params: { page },
  });
  return response.data;
};

const getReads = async (page) => {
  const response = await api.get(`/api/reads`, {
    params: { page },
  });
  return response.data;
};

export {
  getMainNews,
  getKeyword,
  getSearchResults,
  getLikes,
  getReads,
  getCategoryResults,
  getNews,
};
