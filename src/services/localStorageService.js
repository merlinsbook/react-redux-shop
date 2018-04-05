export const load = (key) => {
  try {
    const serializedData = localStorage.getItem(key);
    if(serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (err) {
    return undefined;
  }
};

export const remove = (key) => {
  localStorage.removeItem(key);
};

export const save = (key, data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (err) {
    console.error('Could not store data to local storage.');
  }
}