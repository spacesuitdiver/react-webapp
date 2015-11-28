export default function persistMiddleware() {
  return next => action => {
    const { persist,...rest } = action;

    if (!persist) return next(action);

    const itemName = Object.keys(persist)[0]
    localStorage.setItem(persist, JSON.stringify(persist[itemName]));

    return next(action);

  };
}
