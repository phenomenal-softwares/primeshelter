import AuthLayout from "../../components/Auth/AuthLayout";
import AuthForm from "../../components/Auth/AuthForm";

const SignInPage = () => {
  return (
    <AuthLayout>
      <AuthForm type="signin" />
    </AuthLayout>
  );
};

export default SignInPage;
