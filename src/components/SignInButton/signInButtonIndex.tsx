import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, useSession, signOut } from 'next-auth/client';

import styles from './signInButtonStyles.module.scss';

export function SignInButton() {
  const [session] = useSession();

  console.log('session', session);

  return session ? (
    <button
      type='button'
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <FaGithub color={'#04d361'} />
      {session.user.name}
      <FiX className={styles.closeIcon} color='#737388' />
    </button>
  ) : (
    <button
      type='button'
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color={'#eba417'} />
      Sign in with Github
    </button>
  );
}
