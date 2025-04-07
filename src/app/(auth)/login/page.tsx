import {redirect} from 'next/navigation';
import getCurrentUser from '@/actions/get-current-user';
import { LoginForm } from '@/components/forms/login-form';

const LoginPage = async () => {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    redirect("/")
  }

  return (
    <>
      <LoginForm/>
    </>
  )
}

export default LoginPage