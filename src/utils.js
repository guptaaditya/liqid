const storage = window.localStorage;
export function loadState() {
  const state = storage.getItem('survey');
  if(!state) return false;
  return JSON.parse(state);
}

export function saveState(state) {
  storage.setItem('survey', JSON.stringify(state));
}