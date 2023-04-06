import { useAppSelector } from '../helpers/hooks/hook';
// import { Routes, Route } from 'react-router-dom';
import Register from '../components/Register';
import SignIn from '../components/SignIn';

export const Auth = () => {
  const isRegistered = useAppSelector(state => state.auth.isRegister);
  return (
    // <Routes>
    //   {!isRegistered ? (
    //     <Route path="/signup" element={<Register />} />
    //   ) : (
    //     <Route path="/login" element={<SignIn password={''} username={''} />} />
    //   )}
    // </Routes>
    <div>
      {!isRegistered ? <Register /> : <SignIn password={''} username={''} />}
    </div>
  );
};
