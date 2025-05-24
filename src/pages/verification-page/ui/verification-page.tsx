import { FC, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

import { VERIFICATION } from '~/entities/auth';
import { ROUTES } from '~/shared/routes';

const VerificationPage: FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const emailVerifiedParam = searchParams.get('emailVerified');
        const isVerified = emailVerifiedParam === 'true';
        sessionStorage.setItem(VERIFICATION, JSON.stringify(isVerified));
        navigate(isVerified ? ROUTES.AUTH_SIGN_IN : ROUTES.AUTH_SIGN_UP);
    }, [searchParams, navigate]);

    return null;
};

export default VerificationPage;
