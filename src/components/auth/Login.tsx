import React, { useState } from "react";
import { Box, Input, Button, Flex, Text, Alert } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth() || {};
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "") setEmailError("email is required!");
    if (password === "") setPasswordError("Password is required!");
    if (login && email !== "" && password !== "")
      try {
        setError("");
        setLoading(true);
        await login(email, password);
        navigate("/history");
      } catch {
        setError("Failed to log in");
      }

    setLoading(false);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setemail(event.target.value);
    setEmailError("");
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

      <Flex
        h="calc(100% - 108px)"
        align="center"
        direction="column"
        justify="space-around"
      >
        <form
          onSubmit={handleSubmit}
          style={{
            height: "75%",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <Box
            sx={() => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
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
              loading={loading}
            >
              Login
            </Button>
          </Box>
        </form>
        <Text c="#fff" ff="Montserrat">
          Need an acount? <Link to="/register">Sign up</Link>
        </Text>
      </Flex>
    </>
  );
};

export default Login;
