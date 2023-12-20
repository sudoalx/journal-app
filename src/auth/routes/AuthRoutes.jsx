import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn, SignUp } from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />

      <Route path="/*" element={<Navigate to="/auth/signin" />} />
    </Routes>
  );
};
