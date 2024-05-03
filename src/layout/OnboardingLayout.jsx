import { Navigate, Outlet } from "react-router-dom";
import { isloggedIn } from "../App";

const OnboardingLayout = ({ children }) => {
  return <>{children}</>;
};

const OnboardingLayoutRoute = () => {
  return !isloggedIn ? (
    <OnboardingLayout>
      <Outlet />
    </OnboardingLayout>
  ) : (
    <Navigate to="/" />
  );
};

export default OnboardingLayoutRoute;
