import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Flex,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { Icon } from '~/shared/ui/icon';

import { Subcategory } from '../../../model/types';
import { submenuTreeStyles as styles } from './index.styles';
import { SubmenuItem } from './submenu-item';

type SubmenuTreeProps = {
    icon: string;
    id: string;
    submenu: Subcategory[];
    title: string;
    url: string;
};

export const SubmenuTree: FC<SubmenuTreeProps> = ({ icon, submenu, title, url }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(url);
    };

    const { pathname } = useLocation();
    const isActive = (url: string) => pathname === `/${url}`;

    return (
        <AccordionItem {...styles.accordionItem}>
            {({ isExpanded }) => (
                <h2>
                    <AccordionButton onClick={handleClick} {...styles.accordionToggleButton}>
                        <Icon icon={icon} variant='big' />
                        <Flex {...styles.textWrapper}>
                            <Text
                                data-test-id={title === 'Веганская кухня' ? 'vegan-cuisine' : ''}
                                noOfLines={1}
                                {...styles.text(isExpanded)}
                            >
                                {title}
                            </Text>
                        </Flex>
                        <AccordionIcon {...styles.accordionIcon} />
                    </AccordionButton>
                    <AccordionPanel {...styles.accordionPanel}>
                        {submenu.map((item) => (
                            <SubmenuItem
                                isActive={isActive(item.url)}
                                key={item.id}
                                title={item.title}
                                url={item.url}
                            />
                        ))}
                    </AccordionPanel>
                </h2>
            )}
        </AccordionItem>
    );
};
