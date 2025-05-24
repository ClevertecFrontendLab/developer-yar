import { Flex, PinInput, PinInputField } from '@chakra-ui/react';
import { FC } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';

import { authOtpCodeInputStyles as styles } from './index.styles';

type AuthOtpCodeInputProps = {
    isInvalid: boolean;
    onChange: (value: string) => void;
    value: string;
};

export const AuthOtpCodeInput: FC<AuthOtpCodeInputProps> = ({ isInvalid, onChange, value }) => (
    <Flex {...styles.container}>
        <PinInput type='number' value={value} onChange={onChange}>
            {Array.from({ length: 6 }).map((_, index) => (
                <PinInputField
                    key={index}
                    {...styles.authPinInput(isInvalid)}
                    data-test-id={`${DATA_TEST_ATTRIBUTES.OTP_CODE_VERIFICATION_INPUT}-${index + 1}`}
                />
            ))}
        </PinInput>
    </Flex>
);
