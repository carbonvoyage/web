import Link from 'next/link';
import { useState } from 'react';

import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useUser } from 'context/useUser';
import toast from 'react-hot-toast';

import { validPasswordRegex } from '@utils/helpers';

import { PasswordEye } from '@assets/icons';

const ChangePasswordView = () => {
  const { userDetails } = useUser();
  const supabaseClient = useSupabaseClient();
  const [passwordState, setPasswordState] = useState({
    password: '',
    hidden: true,
    confirmPassword: ''
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { password, confirmPassword } = passwordState;
      if (!password) {
        throw 'Please provide a password. ';
      }
      if (!confirmPassword) {
        throw 'Please confirm your password.';
      }
      if (
        validPasswordRegex.test(password) &&
        validPasswordRegex.test(confirmPassword)
      ) {
        throw 'Password does not meet criteria.';
      }
      if (password !== confirmPassword) {
        const { data, error } = await supabaseClient.auth.updateUser({
          password: password
        });
        if (error) {
          throw error;
        }
        if (data) {
          toast.success('Password successfully changed!');
        }
      } else {
        throw "Passwords don't match";
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
          Change Your Password
        </span>
      </div>
      <div className="flex flex-col p-8 space-y-4">
        <h1 className="font-semibold">
          Changing your password will require you to re-login on the extension
          and other devices.
        </h1>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <span>
            Your new password must be at least 8 characters long and contain at
            least one uppercase letter, one lowercase letter, and one number.
          </span>
          <div className="relative border border-carbon-bronze">
            <label className="absolute bg-carbon-white -top-3 left-3 w-max ">
              New Password
            </label>
            <input
              className="border-none bg-carbon-white border-carbon-bronze p-4 w-full placeholder-carbon-bronze"
              type={passwordState.hidden ? 'password' : 'text'}
              placeholder={`${userDetails?.first_name}`}
              onChange={(e) =>
                setPasswordState({
                  ...passwordState,
                  password: e.target.value
                })
              }
            />
            <PasswordEye
              width="25px"
              height="25px"
              hidden={passwordState.hidden}
              onClick={() =>
                setPasswordState((prevState) => ({
                  ...passwordState,
                  hidden: !prevState.hidden
                }))
              }
              className="fill-carbon-bronze absolute right-4 bottom-4"
            />
          </div>
          <div className="relative border border-carbon-bronze">
            <label className="absolute bg-carbon-white -top-3 left-3 w-max">
              Confirm Password
            </label>
            <input
              className="border-none bg-carbon-white border-carbon-bronze p-4 w-full placeholder-carbon-bronze"
              type="text"
              placeholder={`${userDetails?.last_name}`}
              onChange={(e) =>
                setPasswordState({
                  ...passwordState,
                  confirmPassword: e.target.value
                })
              }
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
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordView;
