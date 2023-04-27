import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useUser } from '@supabase/auth-helpers-react';

import Landing from '@components/Landing';

export default function LandingPage() {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (user) {
      router.replace('/account');
    }
  }, [user, router]);

  return <Landing />;
}
