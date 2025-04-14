import type { AvatarProps, GridItemProps, GridProps, TextProps } from '@chakra-ui/react';

type UserCardStyleProps = {
    avatar: AvatarProps;
    avatarBox: GridItemProps;
    container: GridProps;
    fullName: TextProps;
    nameBox: GridItemProps;
    username: TextProps;
    usernameBox: GridItemProps;
};

export const userCardStyles: UserCardStyleProps = {
    avatar: {
        boxSize: { base: 8, xl: 12 },
    },
    avatarBox: {
        area: 'avatar',
    },
    container: {
        alignItems: 'center',
        columnGap: { base: 2, xl: 3 },
        templateAreas: `"avatar fullName"
                      "avatar username"`,
    },
    fullName: {
        color: 'black',
        fontSize: { base: 'md', xl: 'lg' },
        fontWeight: 'medium',
        lineHeight: { base: '6', xl: '7' },
    },
    nameBox: {
        area: 'fullName',
        minW: 0,
    },
    username: {
        color: 'blackAlpha.700',
        fontSize: { base: 'xs', xl: 'sm' },
        fontWeight: 'normal',
        lineHeight: { base: '4', xl: '5' },
    },
    usernameBox: {
        area: 'username',
        minW: 0,
    },
};
