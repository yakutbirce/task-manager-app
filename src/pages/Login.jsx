import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import bcrypt from "bcryptjs";
import { UserContext } from "../components/UserContext";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:3001/users");
      const user = response.data.find((user) => user.email === formData.email);

      if (user && bcrypt.compareSync(formData.password, user.password)) {
        setUser({ username: user.username, email: user.email });
        toast.success("Giriş başarılı!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error("Geçersiz e-posta veya şifre.");
      }
    } catch (error) {
      toast.error("Giriş başarısız. Tekrar deneyin.");
    }
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
