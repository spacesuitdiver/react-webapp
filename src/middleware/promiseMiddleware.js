export default function promiseMiddleware() {
  return next => action => {
    const { promise, type, transition, ...rest } = action;

    if (!promise) return next(action);

    const REQUEST = type;
    const SUCCESS = type + '_SUCCESS';
    const FAILURE = type + '_FAILURE';

    next({ ...rest, type: REQUEST });

    return promise
      .then(res => {
        next({ ...rest, res, nextPath: transition, type: SUCCESS });

        return true;
      })
      .catch(error => {
        next({ ...rest, error, type: FAILURE });
        console.log(error);

        return false;
      });
  };
}
