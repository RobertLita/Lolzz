import { Box, Input, Button } from "@mantine/core";
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === "") setUsernameError("Username is required!");
    if (password === "") setPasswordError("Password is required!");
    if (email === "") setEmailError("Email is required!");
    // if (username !== "" && password !== "")
    // register
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    setUsernameError("");
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        height: "calc(100% - 108px)",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
      }}
    >
      <Box
        sx={() => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
        })}
        h="50%"
      >
        <Input.Wrapper
          label="Email"
          required
          labelProps={{ c: "#fff" }}
          error={emailError}
        >
          <Input
            variant="filled"
            value={email}
            onChange={handleEmailChange}
            radius="md"
            size="md"
            w={{ base: 240, sm: 400, lg: 600 }}
          />
        </Input.Wrapper>
        <Input.Wrapper
          label="Username"
          required
          labelProps={{ c: "#fff" }}
          error={usernameError}
        >
          <Input
            variant="filled"
            value={username}
            onChange={handleUsernameChange}
            radius="md"
            size="md"
            w={{ base: 240, sm: 400, lg: 600 }}
          />
        </Input.Wrapper>
        <Input.Wrapper
          label="Password"
          required
          labelProps={{ c: "#fff" }}
          error={passwordError}
        >
          <Input
            variant="filled"
            value={password}
            onChange={handlePasswordChange}
            type="password"
            radius="md"
            size="md"
            w={{ base: 240, sm: 400, lg: 600 }}
          />
        </Input.Wrapper>
      </Box>
      <Box
        sx={() => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
        mt={40}
      >
        <Button
          variant="gradient"
          gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
          w={{ base: 100, sm: 150 }}
          h={{ base: 40, sm: 50 }}
          fz={{ base: 15, sm: 18 }}
          ff="Montserrat"
          type="submit"
        >
          Register
        </Button>
      </Box>
    </form>
  );
};

export default Register;
