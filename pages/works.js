import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item.js'
import Section from '../components/section.js'
import Layout from '../components/layouts/article.js'



const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={25} mb={6} mt={3}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 1]} gap={7}>
                    <Section>
                        <WorkGridItem id="DDWeb" title="DDWeb" thumbnail={'/image/D&DWeb.png'}>
                            A website launching and maintenance service.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="EagleHire" title="EagleHire" thumbnail={'/image/EagleHire.png'}>
                            Software Engineering group project.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works