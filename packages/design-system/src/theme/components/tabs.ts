const variants: Record<string, any> = {
  unstyled: {
    tabList: {
      borderBottom: '1px',
      borderColor: 'gray.100',
    },
    tab: {
      paddingX: 'sm',
      paddingY: 'sm',
      fontWeight: 'medium',
      marginEnd: 'lg',
      borderBottom: '3px solid',
      borderColor: 'transparent',
      marginBottom: '-1px',
      _selected: {
        borderColor: 'blue.600',
      },
      _focus: {
        color: 'blue.600',
      },
      _hover: {
        color: 'blue.600',
      },
      _disabled: {
        color: 'gray.100',
      },
    },
  },
  enclosed: {
    tabList: {
      borderBottomWidth: '1px',
      borderColor: 'gray.200',
    },
    tab: {
      bg: 'gray.100',
      marginEnd: '2xs',
      borderBottomColor: 'gray.200',
      fontSize: '12px',
      color: 'gray.800',
      fontWeight: 'bold',
      pt: 'sm',
      _selected: {
        bg: 'white',
        borderColor: 'gray.200',
        borderBottomColor: 'transparent',
        color: 'blue.700',
      },
      _focus: {
        outline: 'none',
      },
      _hover: {
        color: 'blue.700',
      },
    },
  },
};

const tabs = {
  variants,
};

export default tabs;
