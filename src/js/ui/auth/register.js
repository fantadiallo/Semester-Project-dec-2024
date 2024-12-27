import NoroffAPI from "../../api/auth/index";

const api = new NoroffAPI();

export async function onRegister(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const user = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const result = await api.auth.register(user);
    console.log("Registration successful", result);
    window.location.href = "/auth/login/";
  } catch (error) {
    console.error("Error during registration:", error);
    alert("Registration failed. Please try again.");
  }
}


  