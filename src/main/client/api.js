import axios from 'axios';

const header = {
  'Content-Type': 'application/json',
};

export const GET = (url, params, headerData) => axios({
  url,
  method: 'GET',
  headers: headerData || header,
  params,
})
  .then((response) => ({
    data: response.data,
    status: response.status,
  }))
  .catch((err) => err);

export const POST = (url, data, headerData) => axios({
  url,
  method: 'POST',
  headers: headerData || header,
  data,
})
  .then((response) => ({
    data: response.data,
    status: response.status,
  }))
  .catch((err) => err);

export const DELETE = (url) => axios({
  url,
  method: 'DELETE',
})
  .then((response) => ({
    data: response.data,
    status: response.status,
  }))
  .catch((err) => err);

export const PUT = (url, params, data, headerData) => axios({
  url,
  method: 'PUT',
  headers: headerData || header,
  data,
  params,
})
  .then((response) => ({
    data: response.data,
    status: response.status,
  }))
  .catch((err) => err);
