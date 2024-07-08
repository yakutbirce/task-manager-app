import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        const user = response.data.find(
          (user) =>
            user.email === formData.email && user.password === formData.password
        );
        if (user) {
          toast.success("Giriş başarılı!");
          navigate("/");
        } else {
          toast.error("Geçersiz e-posta veya şifre.");
        }
      })
      .catch((error) => {
        toast.error("Giriş başarısız. Tekrar deneyin.");
      });
  };

  return (
    <div className="auth-container">
      <h2>Oturum Aç</h2>
      <form onSubmit={handleSubmit}>
        <label>
          E-posta:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Şifre:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Giriş Yap</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
