import Link from 'next/link';
import Image from 'next/image';
import { auth, signOut } from '@/auth';

import LoginButton from './LoginButton';

const Navbar = async () => {
    const session = await auth(); // Fetch server-side session data

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans text-black">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={200} height={70} />
                </Link>

                <div className="flex items-center gap-5">
                    {/* Render session-based UI */}
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create Startup</span>
                            </Link>

                       <form action={async () => {
                       "use server";
                                await signOut();
                    }}>
                                <button type='submit'>
                                <span>Log Out</span>
                            </button>
                                </form>

                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        /* Separate server-side login logic into a separate component */


                        <LoginButton />
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
