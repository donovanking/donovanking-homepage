import NextLink from 'next/link'
import { Container, Box, Heading, useColorModeValue, Link, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article.js'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import Image from 'next/image'
import { BioSection, BioYear } from '../components/bio.js'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m an undergraduate student at Boston College!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Donovan King
                        </Heading>
                        <p> Digital Craftsman (Developer / Designer)</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Box
                            boxSize="100px"
                            borderWidth="2px"
                            borderRadius="full"
                            overflow="hidden"
                            display="inline-block"
                            borderColor='whiteAlpha.800'
                            borderStyle="solid"
                        >
                            <Image
                                width={100}
                                height={100}
                                src="/image/selfie.jpeg"
                                alt="Profile Image"
                            />
                        </Box>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Description
                    </Heading>
                    <Paragraph>An intellectual dynamo with an uncommon blend of computer science and philosophy, their educational pursuits have yielded a unique perspective on problem-solving and critical thinking. Majoring in Computer Science, they boast proficiency in Python, Java, JS, C, HTML, CSS, and Django. However, their true prowess is demonstrated by their capacity for quick learning and fast adaptation to new concepts and technologies, an attribute underpinned by their philosophical grounding. With an aptitude for deconstructing complex problems and reassembling them into tangible, logical components, they channel their analytical talents to innovate solutions with efficiency and precision. This confluence of technological competence and philosophical sagacity could provide great value to private equity and finance sectors. In a landscape where rapid technological evolution intersects with intricate financial dynamics, their hybrid skill set is a potent toolset for navigating, comprehending, and even shaping, the landscape of tomorrow's financial markets. I am currently working on a business called D&DWeb
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title" >
                        History
                    </Heading>
                    <BioSection>
                        <BioYear>2002</BioYear>
                        Born in New Mexico, United States.
                    </BioSection>
                    <BioSection>
                        <BioYear>2024</BioYear>
                        Completed the Bachelor&apos;s of Arts in the Morrisey College of Arts School at Boston College.
                    </BioSection>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page