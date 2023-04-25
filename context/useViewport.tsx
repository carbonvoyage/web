import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

const Context = createContext({
  height: 0,
  width: 0
});

type Props = {
  children: ReactNode;
};

export function ViewportProvider({ children }: Props) {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <Context.Provider value={{ width, height }}>{children}</Context.Provider>
  );
}

export function useViewport() {
  return useContext(Context);
}
