import { createContext } from 'react';

const UserContext = createContext({
    isAuth: false,
    setIsAuth: () => {}
});
export default UserContext;
