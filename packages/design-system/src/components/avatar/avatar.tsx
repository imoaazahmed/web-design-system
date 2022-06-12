import React from 'react';
import { getRandomBg as randomColor, toRem } from '../../utils';
import { useImage } from '../../hooks';
import { Box, BoxProps } from '@chakra-ui/react';

/**
 * Generates a random bg from the list of random
 * colors defined by the design team.
 */
function getRandomBg(name?: string) {
  const colors = ['blue.500', 'orange.300'];
  return randomColor(name || '', colors);
}

const avatarStyle = {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'medium',
    borderRadius: 'full',
  },
  sizes: {
    lg: {
      width: toRem(50),
      height: toRem(50),
      fontSize: 'lg',
    },
    md: {
      width: toRem(30),
      height: toRem(30),
      fontSize: 'sm',
    },
  },
};

/**
 * Gets the initials of a user based on name
 */
function getInitials(name: string) {
  const [firstName, lastName] = name.split(' ');
  if (firstName && lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  } else {
    return firstName.charAt(0);
  }
}

/**
 * GenericAvatar is used to render a generic avatar icon.
 *
 * This is usually the last fallback if the `src` and `name`
 * is not available
 */
const GenericAvatar = (props: BoxProps) => (
  <Box w="56%" h="56%" {...props}>
    <svg fill="#fff" viewBox="0 0 30 31" role="img">
      <path
        d="M14.71 0c5.04 0 9.29 3.076 9.862 7.319.179 1.338.2 2.36.048 3.859l-.195 1.72-.112.94-.071.564c-.162 1.246-.321 2.224-.495 2.959-.568 2.386-1.747 4.857-3.212 5.969l-.096.068-.041.223-.03.169c-.067.407-.116.805-.138 1.171-.04.66.024 1.132.077 1.194.331.385 1.775.904 3.789 1.34.774.169 1.596.32 2.428.453l.894.136 1.116.148a1 1 0 01-.229 1.987l-.404-.05-.768-.105-.278-.041a49.902 49.902 0 01-3.183-.573l-.688-.156c-2.107-.5-3.527-1.06-4.194-1.836-.51-.592-.628-1.458-.556-2.62a13.6 13.6 0 01.162-1.375l.065-.373c.043-.228.083-.415.114-.546a1 1 0 01.417-.6l.11-.064c1.007-.504 2.193-2.853 2.699-4.98.123-.521.243-1.215.366-2.078l.126-.95.294-2.503c.182-1.573.176-2.49.003-3.784C22.164 4.422 18.817 2 14.71 2c-4.108 0-7.454 2.422-7.88 5.584-.159 1.187-.178 2.057-.04 3.405l.19 1.679c.053.447.1.836.146 1.204l.035.271c.154 1.185.304 2.106.457 2.755.487 2.047 1.602 4.297 2.583 4.916l.117.066a1 1 0 01.526.664l.053.237c.038.183.082.415.127.682.078.47.135.934.162 1.375.071 1.162-.047 2.028-.557 2.62-.736.857-2.394 1.453-4.881 1.992-.813.176-1.67.334-2.534.472l-.65.1c-.378.057-.73.106-1.046.147l-.404.05a1 1 0 01-.228-1.987l.375-.046c.228-.03.476-.064.74-.102l.269-.04a47.96 47.96 0 003.054-.548l.534-.121c1.733-.41 2.953-.87 3.255-1.22.053-.062.117-.535.077-1.194a11.655 11.655 0 00-.14-1.171l-.07-.392-.096-.068c-1.407-1.068-2.549-3.387-3.14-5.684l-.072-.287a25.921 25.921 0 01-.397-2.241l-.098-.716a97.8 97.8 0 01-.144-1.174L4.845 11.6c-.2-1.736-.193-2.82.003-4.28C5.418 3.075 9.67 0 14.71 0z"
        fillRule="nonzero"
      />
    </svg>
  </Box>
);

type InitialsAvatarProps = BoxProps & { name?: string };

/**
 * InitialsAvatar is used to render the user's name initials.
 *
 * This is usually the first fallback if the `src` is not passed
 * or failed to load.
 */
function InitialsAvatar(props: InitialsAvatarProps) {
  const { name, ...rest } = props;
  return (
    <Box aria-label={name} {...rest}>
      {name ? getInitials(name) : null}
    </Box>
  );
}

export type AvatarProps = Omit<BoxProps, 'size'> & {
  src?: string;
  name?: string;
  size?: keyof typeof avatarStyle.sizes;
};

const AvatarContext = React.createContext<{
  size: keyof typeof avatarStyle.sizes;
}>({
  size: 'md',
});

const useAvatarContext = () => React.useContext(AvatarContext);

/**
 * Avatar component is used to show a user's profile image or
 * initials.
 *
 * It has support for a fallback avatar in case the image and name
 * is not available.
 */
export const Avatar = (props: AvatarProps) => {
  const { src, name, size = 'md', children, ...rest } = props;
  const status = useImage(src);
  const hasLoaded = status === 'loaded';

  const styles = { ...avatarStyle.baseStyle, ...avatarStyle.sizes[size] };

  const getChildren = () => {
    if (src && hasLoaded) {
      return (
        <Box
          as="img"
          w="100%"
          h="100%"
          rounded="full"
          objectFit="cover"
          {...{ src, alt: name }}
        />
      );
    }

    if (src && !hasLoaded) {
      if (name) {
        return <InitialsAvatar name={name} />;
      } else {
        return <GenericAvatar aria-label={name} />;
      }
    }

    if (!src && name) {
      return <InitialsAvatar name={name} />;
    }

    return <GenericAvatar aria-label={name} />;
  };

  return (
    <Box
      verticalAlign="top"
      bg={getRandomBg(name)}
      {...(styles as BoxProps)}
      {...rest}
    >
      <AvatarContext.Provider value={{ size }}>
        {getChildren()}
        {children}
      </AvatarContext.Provider>
    </Box>
  );
};

const presenceStyle = {
  baseStyle: {
    borderRadius: 'full',
    boxShadow: '0 0 0 3px currentColor',
    color: 'white',
    position: 'absolute',
    bottom: '0',
    insetEnd: '0',
  },
  variants: {
    online: {
      bg: 'green.500',
    },
    offline: {
      bg: 'gray.200',
      border: '2px solid',
      borderColor: 'gray.500',
    },
  },
  sizes: {
    md: { boxSize: 2 },
    lg: { boxSize: 3 },
  },
};

export type AvatarPresenceProps = BoxProps & {
  variant: keyof typeof presenceStyle.variants;
};

/**
 * AvatarPresence component is to use indicate whether
 * a user is online, offline, banned, etc.
 *
 * It should used as a child of the `Avatar` component
 */
export const AvatarPresence = (props: AvatarPresenceProps) => {
  const { variant, ...rest } = props;
  const { size } = useAvatarContext();
  const styleProps = {
    ...presenceStyle.baseStyle,
    ...presenceStyle.variants[variant],
    ...presenceStyle.sizes[size],
  };
  return <Box as="span" {...(styleProps as BoxProps)} {...rest} />;
};

export { AvatarGroup, AvatarBadge } from '@chakra-ui/react';
export type { AvatarBadgeProps, AvatarGroupProps } from '@chakra-ui/react';
