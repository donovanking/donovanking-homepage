import Link from 'next/link'
import Image from 'next/image'
import { Center, FlexBox, Box, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'


const LogoBox = styled.span`
    font-weight: bold; 
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`;

const Logo = () => {
    const footPrintImg = `/image/footprint.png${useColorModeValue('', '-dark')}.png`

    return (
        <Link href="/" passHref>
            <Box>
                <LogoBox>
                    <Image src='/image/DK.png' width={30} height={30} alt="logo" />
                    <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c'
                    fontWeight="bold"
                    ml={3}
                    >
                    Donovan King
                    </Text>
                </LogoBox>
            </Box>
        </Link>
    );
};







export default Logo

