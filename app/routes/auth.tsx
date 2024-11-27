import AuthForm from '~/components/auth/AuthForm';
import authStyles from '~/styles/auth.css';

const Auth = () => {
  return <AuthForm />;
};
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: authStyles
    }
  ];
}
export default Auth;
