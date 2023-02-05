import { Box, Input, Button, Alert } from "@mantine/core";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cPasswordError, setCPasswordError] = useState("");
  const [error, setError] = useState("");
  const [loaging, setLoading] = useState(false);
  const { signup } = useAuth() || {};

  console.log(email, password, cPassword);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "") setEmailError("Username is required!");
    if (password === "") setPasswordError("Password is required!");
    if (cPassword === "") setCPasswordError("Confirmation is required!");
    if (password && cPassword && password !== cPassword)
      return setError("Passwords do not match!");
    if (
      emailError !== "" &&
      passwordError !== "" &&
      cPasswordError !== "" &&
      signup
    )
      try {
        setError("");
        setLoading(true);
        await signup(email, password);
      } catch {
        setError("Failed to sign up!");
      }
    setLoading(false);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleCPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCPassword(event.target.value);
    setCPasswordError("");
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  return (
    <>
      {error !== "" && (
        <Alert
          title="Oops!"
          color="red"
          withCloseButton
          pos="absolute"
          bottom={5}
          right={5}
          w="300"
          h="60"
          onClose={() => setError("")}
        >
          {error}
        </Alert>
      )}
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
              type="email"
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
          <Input.Wrapper
            label="Password Confirmation"
            required
            labelProps={{ c: "#fff" }}
            error={cPasswordError}
          >
            <Input
              variant="filled"
              value={cPassword}
              onChange={handleCPasswordChange}
              radius="md"
              size="md"
              w={{ base: 240, sm: 400, lg: 600 }}
              type="password"
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
            loading={loaging}
          >
            Sign Up
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Register;
