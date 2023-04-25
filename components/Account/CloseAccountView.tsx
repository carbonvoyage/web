import { useRouter } from 'next/router';
import { useState } from 'react';

import { useSupabaseClient } from '@supabase/auth-helpers-react';
import toast from 'react-hot-toast';

import { useUser } from '@context/useUser';

const CloseAccountView = () => {
  const { userDetails } = useUser();
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const [checked, setChecked] = useState(false);

  const handleDelete = async () => {
    try {
      const { data, error } = await supabaseClient.rpc('delete_user');
      if (error) {
        throw error;
      }
      if (data) {
        toast.success(
          'Successfully deleted your account. Redirecting to home page...'
        );
        setTimeout(() => {
          router.push('/');
        }, 5000);
      }
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <div className="bg-carbon-white rounded-lg basis-2/3 border overflow-hidden border-carbon-bronze sm:mx-8 lg:mx-0">
      <div className="p-6 bg-carbon-bronze flex items-center">
        <span className="text-xl text-carbon-gold font-display">
          Close Your Account
        </span>
      </div>
      <div className="flex flex-col p-8 space-y-4">
        <div className="space-y-4 mb-2">
          <h1 className="font-display text-xl">
            Please read the following information carefully.
          </h1>
          <p>
            Closing your account will result in all data stored by
            carbonvoyage.com to be deleted!
          </p>
          <p>
            Please be sure that you have kept your financial transactions on
            record before deleting your account.
          </p>
        </div>
        <div>
          <input
            type="checkbox"
            id="deletion-verification"
            className="mr-2 w-min"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="deletion-verification" className="">
            I have read the following and wish to delete my account.
          </label>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!checked}
            onClick={() => handleDelete()}
            className="border py-2 px-6 rounded bg-carbon-bronze text-carbon-gold disabled:opacity-25"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloseAccountView;
