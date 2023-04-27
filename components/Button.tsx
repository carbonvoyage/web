import { FunctionComponent, ReactNode } from 'react';

import { motion } from 'framer-motion';

type Props = {
  variant?: 'primary' | 'alt' | 'light' | 'icon';
  size?: 'none' | 'minimal' | 'small' | 'medium' | 'large';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button: FunctionComponent<Props> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className,
  onClick,
  ...props
}) => {
  let buttonSize = 'py-2 px-4';
  switch (size) {
    case 'none':
      buttonSize = 'p-0';
      break;
    case 'minimal':
      buttonSize = 'rounded-md p-1';
    case 'small':
      buttonSize = 'rounded-xl py-1 px-3';
      break;
    case 'medium':
      buttonSize = 'rounded-xl py-2 px-4';
      break;
    case 'large':
      buttonSize = 'rounded-2xl py-3 px-6';
      break;
  }

  let buttonVariant = 'bg-carbon-bronze text-carbon-gold';
  switch (variant) {
    case 'primary':
      buttonVariant = 'bg-carbon-bronze text-carbon-gold';
      break;
    case 'alt':
      buttonVariant = 'bg-carbon-gold text-carbon-bronze';
      break;
    case 'light':
      buttonVariant = 'bg-white border border-carbon-light';
      break;
    case 'icon':
      buttonVariant = 'text-carbon-bronze';
      break;
  }

  return (
    <motion.button
      onClick={onClick}
      type="button"
      // TODO Fix undefined className
      className={`${className} ${buttonVariant} ${buttonSize}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
