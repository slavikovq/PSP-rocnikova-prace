export const registerUser = async (formData) => {
  const req = await fetch("http://localhost:3000/user/register", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formData),
  });
  const data = await req.json();
  if (req.status === 201) {
    localStorage.setItem("token", data.token);
  }

  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
    token: data.token,
  };
};

export const loginUser = async (formData) => {
  const req = await fetch("http://localhost:3000/user/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formData),
  });
  const data = await req.json();
  if (req.status === 200) {
    localStorage.setItem("token", data.token);
  }

  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
    token: data.token,
  };
};

export const getUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const req = await fetch("http://localhost:3000/user/", {
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
    token: data.token,
  };
};

export const getUserByEmail = async (email) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const req = await fetch(`http://localhost:3000/user/${email}`, {
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

export const editUser = async (id, formData) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const req = await fetch(`http://localhost:3000/user/${id}`, {
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
    token: data.token,
  };
};

export const verifyUserPassword = async (password) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }

  const req = await fetch("http://localhost:3000/user/verify", {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ password: password }),
  });
  const data = await req.json();

  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};

export const deleteUser = async (id) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const req = await fetch(`http://localhost:3000/user/${id}`, {
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
