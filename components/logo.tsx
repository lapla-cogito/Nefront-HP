import { Link } from 'react-scroll';
import NefrontIcon from '@/icons/nefront';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import { isRootPage } from '@/navbar';

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    > svg {
        transition: 200ms ease;
    }
`;

const Logo = () => {
    if (isRootPage() === true) {
        return (
            <Link
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                style={{ cursor: 'pointer' }}
            >
                <LogoBox>
                    <NefrontIcon />
                </LogoBox>
            </Link>
        );
    } else {
        return (
            <NextLink href={`https://nefront.com`} style={{ cursor: 'pointer' }}>
                <LogoBox>
                    <NefrontIcon />
                </LogoBox>
            </NextLink>
        );
    }
};

export default Logo;
