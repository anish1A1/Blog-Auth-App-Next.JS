
// Client-side LoginButton component

import {  signIn } from '@/auth';

const LoginButton = () => {
    return (
        <form action={async () => {
            "use server";
            await signIn("github");
            }}
        >

<button type='submit'>
            Login
        </button>
        </form>
       
    );
};
export default LoginButton;