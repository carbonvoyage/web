import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useUser } from '@supabase/auth-helpers-react';

export default function TransactionPage() {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    } else {
      router.replace('/');
    }
  }, [user, router]);
}
