import { Tab as ChakraTab, TabProps as ChakraTabProps } from '@chakra-ui/react';
import { FC } from 'react';

import { tabStyles } from './index.styles';
import { TabVariant } from './index.types';

type TabProps = ChakraTabProps & {
    variant?: TabVariant;
};

export const Tab: FC<TabProps> = ({ children, variant = 'recipe', ...props }) => {
    const style = tabStyles[variant];

    return (
        <ChakraTab {...style} {...props}>
            {children}
        </ChakraTab>
    );
};
