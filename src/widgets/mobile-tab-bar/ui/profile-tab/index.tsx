import { Avatar } from '@chakra-ui/react';
import { FC } from 'react';

import { CommonTab } from '../common-tab';

type ProfileTabProps = {
    avatar: string;
    fullName: string;
};

export const ProfileTab: FC<ProfileTabProps> = ({ avatar, fullName }) => (
    <CommonTab text='Профиль'>
        <Avatar boxSize={10} name={fullName} src={avatar} />
    </CommonTab>
);
