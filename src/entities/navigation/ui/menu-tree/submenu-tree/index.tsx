import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Flex,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router';

import { CategoryIcon } from '~/shared/ui/category-icon';

import { Menu, Submenu } from '../../../model/types';
import { submenuTreeStyles as styles } from './index.styles';
import { SubmenuItem } from './submenu-item';

type SubmenuTreeProps = Menu;

export const SubmenuTree: FC<SubmenuTreeProps> = ({ title, url, submenu }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(url);
    };

    return (
        <AccordionItem {...styles.accordionItem}>
            {({ isExpanded }) => (
                <h2>
                    <AccordionButton onClick={handleClick} {...styles.accordionToggleButton}>
                        <CategoryIcon boxSize={6} category={url.split('/')[1]} />
                        <Flex {...styles.textWrapper}>
                            <Text
                                data-test-id={`${title === 'Веганская кухня' ? 'vegan-cuisine' : url}`}
                                {...styles.text(isExpanded)}
                            >
                                {title}
                            </Text>
                        </Flex>
                        <AccordionIcon {...styles.accordionIcon} />
                    </AccordionButton>
                    <AccordionPanel {...styles.accordionPanel}>
                        {submenu.map((submenu: Submenu) => (
                            <SubmenuItem key={submenu.id} {...submenu} />
                        ))}
                    </AccordionPanel>
                </h2>
            )}
        </AccordionItem>
    );
};
