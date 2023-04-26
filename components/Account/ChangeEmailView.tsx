import Link from 'next/link';
import { useState } from 'react';

import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import toast from 'react-hot-toast';

import { validEmailRegex } from '@utils/helpers';

const ChangeEmailView = () => {
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  const [email, setEmail] = useState('');

  console.log(user);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!email) {
        throw 'Please enter a new email. ';
      }

      if (validEmailRegex.test(email)) {
        throw 'New email is in invalid format.';
      }

      const { data, error } = await supabaseClient.auth.updateUser({
        email: email
      });

      if (error) {
        throw error;
      }

      if (data) {
        toast.success('Successfully updated email.');
      }
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <div className="bg-carbon-white rounded-lg basis-2/3 border overflow-hidden border-carbon-bronze mx-2 sm:mx-8 lg:mx-0">
      <div className="p-6 bg-carbon-bronze flex items-center">
        <span className="text-xl text-carbon-gold font-display">
          Change Your Email
        </span>
      </div>
      <div className="flex flex-col p-8 space-y-4">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="relative border border-carbon-bronze">
            <label className="absolute bg-carbon-white -top-3 left-3 w-max ">
              Current Email
            </label>
            <input
              className="border-none bg-carbon-white border-carbon-bronze p-4 w-full placeholder-carbon-bronze"
              type="text"
              placeholder={user?.email}
              disabled
            />
          </div>
          <div className="relative border border-carbon-bronze">
            <label className="absolute bg-carbon-white -top-3 left-3 w-max">
              New Email
            </label>
            <input
              className="border-none bg-carbon-white border-carbon-bronze p-4 w-full placeholder-carbon-bronze"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-end space-x-8">
            <Link href="/account" className="self-center">
              Cancel
            </Link>

            <button
              type="submit"
              className="border py-2 px-6 rounded bg-carbon-bronze text-carbon-gold"
            >
              Change Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeEmailView;
