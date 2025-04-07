import {redirect} from 'next/navigation';
import getCurrentUser from '@/actions/get-current-user';
import { RegisterForm } from '@/components/forms/register-form'

const RegisterPage = async () => {
  const currentUser = await getCurrentUser();


  if (currentUser) {
    redirect("/login")
  }

  return (
    <>
      <RegisterForm/>
    </>
  )
}

export default RegisterPage