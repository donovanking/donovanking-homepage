import { Container, Box, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="EagleHire">
            <Container>
                <Title>
                    EagleHire <Badge>2023</Badge>
                </Title>
                <P>
                    A Django project website that effectively allows students to apply and be hired as Teacher's Assistants.
                    It has a totla of 3 user classses: Student, Teacher, and Admin. Depending on the actions of these 3 they will send or receive emails.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://eaglehire.up.railway.app/'>
                            https://eaglehire.up.railway.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python, HTML, CSS</span>
                    </ListItem>
                    <WorkImage src="/image/EagleHire.png" alt="EagleHire" />
                    <Box height ="40px" />
                </List>
            </Container>
        </Layout>
    )
}

export default Work