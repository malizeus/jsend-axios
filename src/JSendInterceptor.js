import JSendError from './JSendError';

function JSendInterceptor(response) {
  const { data, ...jsend } = response.data;
  Object.assign(response, { data, jsend });
  if (jsend.status !== 'error' && jsend.status !== 'fail') return response;
  throw new JSendError(`Request failed with jsend status: ${jsend.status}`, response);
}

export default JSendInterceptor;
