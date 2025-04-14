import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Flex,
    Link,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router';

import { InnerNavigationMenu, OuterNavigationMenu } from '~/shared/model';

import { NavigationInnerItem } from '../navigation-inner-menu';
import { navigationOuterItemStyles as styles } from './index.styles';

interface OuterNavigationItemProps extends OuterNavigationMenu {}

export const NavigationOuterItem: FC<OuterNavigationItemProps> = ({
    dataTestId,
    icon: Icon,
    menu,
    name,
    url,
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(url);
    };

    return (
        <AccordionItem {...styles.accordionItem}>
            {({ isExpanded }) => (
                <h2>
                    <AccordionButton {...styles.accordionToggleButton}>
                        <Icon {...styles.iconWrapper} />

                        <Flex {...styles.linkWrapper}>
                            <Link
                                data-test-id={dataTestId}
                                onClick={handleClick}
                                {...styles.link(isExpanded)}
                            >
                                {name}
                            </Link>
                        </Flex>

                        <AccordionIcon {...styles.accordionIcon} />
                    </AccordionButton>

                    <AccordionPanel {...styles.accordionPanel}>
                        {menu.map((item: InnerNavigationMenu) => (
                            <NavigationInnerItem key={item.id} {...item} />
                        ))}
                    </AccordionPanel>
                </h2>
            )}
        </AccordionItem>
    );
};
