import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../../utils/supabaseClient';

const Login = () => {
  return (
    <>
      <h2 className='mb-4'>Login to MoneyG.ro</h2>
      <Auth supabaseClient={supabase} view='sign_in' providers={['google']} />
    </>
  );
};

export default Login;
