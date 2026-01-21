async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  error.innerText = "";

  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    if (!response.ok) {
      throw new Error("Credenciais inválidas");
    }

    const data = await response.json();

    // salva tokens
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);

    alert("Login realizado com sucesso!");

    // exemplo de chamada protegida
    acessarDashboard();

  } catch (err) {
    error.innerText = err.message;
  }
}

async function acessarDashboard() {
  const token = localStorage.getItem("access_token");

  const response = await fetch("http://localhost:8080/api/dashboard", {
    headers: {
      "Authorization": "Bearer " + token
    }
  });

  const data = await response.json();
  console.log(data);
}