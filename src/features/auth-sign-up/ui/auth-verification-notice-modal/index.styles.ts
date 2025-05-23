import { BoxProps } from '@chakra-ui/react';

export type AuthVerificationNoticeStyleProps = {
    footerText: BoxProps;
};
export const authVerificationNoticeStyles: AuthVerificationNoticeStyleProps = {
    footerText: {
        display: { base: 'block', xl: 'inline' },
    },
};
