import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
    <NextLink href="/works" passHref>
        <Box cursor="pointer" mt={4}>
            Works
            <span>
                &nbsp;
                <ChevronRightIcon />
                &nbsp;
            </span>
            <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                {children}
            </Heading>
        </Box>
    </NextLink>
);

export const WorkImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)