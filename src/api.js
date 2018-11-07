// TODO
// This is a simple RESTful prototyping API, the real-world version can more closely match the specified API
// for development it was simpler to use json-server

const API_HOST = 'http://localhost:3001';
const DEFAULT_OPTIONS = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const createIdea = async () => {
  const response = await fetch(
    `${API_HOST}/ideas`,
    { ...DEFAULT_OPTIONS, method: 'POST' }
  );

  return await response.json();
};

const updateIdea = async (id, payload) => {
  const response = await fetch(
    `${API_HOST}/ideas/${id}`,
    { ...DEFAULT_OPTIONS, method: 'PATCH', body: JSON.stringify(payload) }
  );

  return await response.json();
};

const deleteIdea = async id => {
  const response = await fetch(
    `${API_HOST}/ideas/${id}`,
    { ...DEFAULT_OPTIONS, method: 'DELETE' }
  );

  return await response.json();
};

const getAllIdeas = async () => {
  const response = await fetch(`${API_HOST}/ideas`);

  return await response.json();
};

export { createIdea, updateIdea, deleteIdea, getAllIdeas };
