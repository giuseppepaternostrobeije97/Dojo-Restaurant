"use client";

// -- REACT
import { ChangeEvent, FC, useState } from "react";
// -- NEXT
import { useRouter } from "next/navigation";
// -- STYLE
import "./login.scss";
// -- COMPONENTS
import { InputText } from "@/app/ui/components/Input/Index";
import { Button } from "@/app/ui/components/Button";
// -- SERVICES
import { AUTH } from "@/app/api/login/route";

const Login: FC = () => {
  const [username, setUsername] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await AUTH(username,password);
    // if (username === "admin" && password === "password") {
    //   localStorage.setItem("auth", "true");
    //   router.push("/dashboard");
    // } else {
    //   alert("Credenziali non valide");
    // }
  };
  return (
    <div id="login" className="vh-100">
      <div className="head">
        <h1>LOGIN</h1>
      </div>
      <div className="loginContainer">
        <form onSubmit={handleLogin}>
          <InputText
            name="username"
            placeholder="Your username here"
            type="text"
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
          <InputText
            name="password"
            placeholder="Insert password"
            type="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <div>
            <Button type="submit" labelBtn="LOGIN" />
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
