import { Avatar } from '@chakra-ui/react';
import { FC } from 'react';

import { CommonTab } from './common-tab/common-tab';

interface ProfileTabProps {
    avatar: string;
    fullName: string;
}

export const ProfileTab: FC<ProfileTabProps> = ({ avatar, fullName }) => (
    <CommonTab text='Профиль'>
        <Avatar src={avatar} name={fullName} boxSize={10} />
    </CommonTab>
);
