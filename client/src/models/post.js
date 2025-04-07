export const getAllPosts = async () => {
  const req = await fetch("http://localhost:3000/post", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    method: "GET",
  });

  const data = await req.json();
  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};

export const getAllUserPosts = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const req = await fetch("http://localhost:3000/post/user-post", {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },

    method: "GET",
  });

  const data = await req.json();
  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};

export const getPostById = async (id) => {
  const req = await fetch(`http://localhost:3000/post/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    method: "GET",
  });

  const data = await req.json();
  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};

export const createPost = async (formData) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const req = await fetch("http://localhost:3000/post", {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formData),
  });

  const data = await req.json();

  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};

export const updatePost = async (id, formData) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const req = await fetch(`http://localhost:3000/post/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(formData),
  });

  const data = await req.json();

  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};

export const deletePost = async (id) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const req = await fetch(`http://localhost:3000/post/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });

  const data = await req.json();

  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};

export const likePost = async (id, userId) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }

  const req = await fetch(`http://localhost:3000/post/${id}/like`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify({userId})
  });

  const data = await req.json();

  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
} 

export const dislikePost = async (id, userId) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }

  const req = await fetch(`http://localhost:3000/post/${id}/dislike`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify({userId})
  });

  const data = await req.json();

  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
} 

export const getAllLikedPosts = async (id) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const req = await fetch(`http://localhost:3000/post/${id}/liked-posts`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },

    method: "GET",
  });

  const data = await req.json();
  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};
