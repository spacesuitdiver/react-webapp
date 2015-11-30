export default function requestMiddleware() {
  return next => action => {
    const { request, type, ...rest } = action;

    if (!request) return next(action);

    const REQUEST = type;
    const SUCCESS = type + '_SUCCESS';
    const FAILURE = type + '_FAILURE';

    next({ ...rest, type: REQUEST });

    return request
      .then(res => {
        next({ ...rest, res, type: SUCCESS });

        return true;
      })
      .catch(error => {
        next({ ...rest, error, type: FAILURE });
        console.log(error);

        return false;
      });
  };
}
