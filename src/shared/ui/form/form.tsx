import { Box, BoxProps } from '@chakra-ui/react';
import { FC, FormEvent } from 'react';

export const Form: FC<BoxProps> = ({ children, ...props }) => (
    <Box as='form' onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()} {...props}>
        {children}
    </Box>
);
