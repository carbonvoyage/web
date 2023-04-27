import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';

type View = 'sign_in' | 'sign_up' | 'forgotten_password' | undefined;

const Context = createContext<
  [
    boolean,
    Dispatch<SetStateAction<boolean>>,
    View,
    Dispatch<SetStateAction<View>>
  ]
>([false, () => {}, 'sign_in', () => {}]);

type Props = {
  children: ReactNode;
};

export function AuthModalProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<View>('sign_in');

  return (
    <Context.Provider value={[isOpen, setIsOpen, view, setView]}>
      {children}
    </Context.Provider>
  );
}

export function useAuthModal() {
  return useContext(Context);
}
