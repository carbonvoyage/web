import Link from 'next/link';
import { useState } from 'react';

import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useUser } from 'context/useUser';
import toast from 'react-hot-toast';

const ChangeName = () => {
  const { userDetails } = useUser();
  const supabaseClient = useSupabaseClient();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!firstName.trim()) {
        throw 'New First Name cannot be empty or all spaces.';
      }

      if (!lastName.trim()) {
        throw 'New Last Name cannot be empty or all spaces.';
      }

      const updates = {
        first_name: firstName,
        last_name: lastName
      };
      const { data, error } = await supabaseClient
        .from('users')
        .update(updates)
        .eq('id', userDetails?.id);
      if (error) {
        throw error;
      }
      if (data) {
        toast.success('Name successfully changed.');
      }
    } catch (error: any) {
      // do something with toast here...
      toast.error(error);
    }
  };

  return (
    <div className="bg-carbon-white rounded-lg basis-2/3 border overflow-hidden border-carbon-bronze sm:mx-8 lg:mx-0">
      <div className="p-6 bg-carbon-bronze flex items-center">
        <span className="text-xl text-carbon-gold font-display">
          Change Your Name
        </span>
      </div>
      <div className="flex flex-col p-8 space-y-8">
        <h1 className="font-semibold">
          Modifying your account name will only affect what is shown on this
          website.
        </h1>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="relative border border-carbon-bronze">
            <label className="absolute bg-carbon-white -top-3 left-3 w-max ">
              First Name
            </label>
            <input
              className="border-none bg-carbon-white border-carbon-bronze p-4 w-full placeholder-carbon-bronze"
              type="text"
              placeholder={`${userDetails?.first_name}`}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="relative border border-carbon-bronze">
            <label className="absolute bg-carbon-white -top-3 left-3 w-max">
              Last Name
            </label>
            <input
              className="border-none bg-carbon-white border-carbon-bronze p-4 w-full placeholder-carbon-bronze"
              type="text"
              placeholder={`${userDetails?.last_name}`}
              onChange={(e) => setLastName(e.target.value)}
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeName;
