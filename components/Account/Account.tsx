import AccountCard from './AccountCard';
import Navigator from './Navigator';

const Account = () => {
  return (
    <section className="mx-auto flex w-full max-w-2xl lg:max-w-6xl gap-x-8 my-8">
      <Navigator />
      <AccountCard />
    </section>
  );
};

export default Account;
