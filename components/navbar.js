import Logo from './logo'
import NextLink from 'next/link'
import dynamic from 'next/dynamic';
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    useColorModeValue,
    Menu,
    MenuButton,
    IconButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button';

const DynamicLogo = dynamic(() => import('./logo'), { ssr: false });

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Box
                p={2}
                bg={active ? '#D3D3D3' : undefined}
                color={active ? '#202023' : inactiveColor}>
                {children}
            </Box>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    const textColor = useColorModeValue("black", "white")
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}>
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/works" path={path}>
                        <Heading as="h1" fontSize={18} mb={1} mt={1} color={textColor}>
                            Works
                        </Heading>
                    </LinkItem>
                    <LinkItem href="/links" path={path}>
                        <Heading as="h1" fontSize={18} mb={1} mt={1} color={textColor}>
                            Contact Me
                        </Heading>
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            >
                            </MenuButton>
                            <MenuList>
                                <Heading as="h1" fontSize={18} mb={1} mt={1}>
                                    <NextLink href="/" passHref>
                                        <MenuItem>
                                            About
                                        </MenuItem>
                                    </NextLink>
                                    <NextLink href="/works" passHref>
                                        <MenuItem>
                                            Works
                                        </MenuItem>
                                    </NextLink>
                                    <NextLink href="/links" passHref>
                                        <MenuItem>
                                            Contact Me
                                        </MenuItem>
                                    </NextLink>
                                </Heading>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
