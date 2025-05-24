import {
    IconButton,
    Input as ChakraInput,
    InputGroup as ChakraInputGroup,
    InputProps,
    InputRightElement as ChakraInputRightElement,
} from '@chakra-ui/react';
import { FC, forwardRef, useState } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { EyeOffIcon, EyeOnIcon } from '~/shared/ui/icons';

import { authInputStyles as styles } from './index.styles';

export const AuthInput: FC<InputProps> = forwardRef<HTMLInputElement, AuthInputProps>(
    ({ type, ...props }, ref) => {
        const isPassword = type === 'password';
        const [show, setShow] = useState(false);

        const showPassword = () => setShow(true);
        const hidePassword = () => setShow(false);

        return (
            <ChakraInputGroup>
                <ChakraInput
                    ref={ref}
                    type={isPassword && show ? 'text' : type}
                    {...styles.input}
                    {...props}
                />
                {isPassword && (
                    <ChakraInputRightElement {...styles.inputRightElement}>
                        <IconButton
                            aria-label={show ? 'Скрыть пароль' : 'Показать пароль'}
                            data-test-id={DATA_TEST_ATTRIBUTES.PASSWORD_VISIBILITY_BUTTON}
                            icon={
                                show ? (
                                    <EyeOffIcon {...styles.icon} />
                                ) : (
                                    <EyeOnIcon {...styles.icon} />
                                )
                            }
                            onMouseDown={showPassword}
                            onMouseLeave={hidePassword}
                            onMouseUp={hidePassword}
                            onTouchEnd={hidePassword}
                            onTouchStart={showPassword}
                            {...styles.iconButton}
                        />
                    </ChakraInputRightElement>
                )}
            </ChakraInputGroup>
        );
    },
);
