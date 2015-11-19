export default function nextPathMiddleware() {
  return next => action => {
  	const { history, nextPath, ...rest } = action;

  	if (nextPath) history.replaceState(null, nextPath);
  	next({ ...rest });

  }
}
