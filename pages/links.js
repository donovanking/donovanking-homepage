import {
    IoLogoInstagram,
    IoLogoGithub,
} from 'react-icons/io5'
import { GridItem } from '../components/grid-item'
import { Container, Deading, Box, Heading, useColorModeValue, Link, List, ListItem, Button, Icon, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article.js'
import Section from '../components/section.js'

const Links = () => (
    <Layout title="Links">
        <Container>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/donovanking" target="_blank">
                            <Button variant="ghost" leftIcon={<Icon as={IoLogoGithub} />}>
                                @donovanking_
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.instagram.com/donovanking_/" target="_blank">
                            <Button variant="ghost" leftIcon={<Icon as={IoLogoInstagram} />}>
                                @donovanking_
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/donovan-king-7a820818a/" target="_blank">
                            <Button variant="ghost">
                                LinkedIn
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container>
    </Layout>
)



export default Links