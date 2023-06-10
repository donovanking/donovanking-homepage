import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'



const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={25} mb={6}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={7}>
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
                    <Section>
                        <WorkGridItem id="DuyIsDrawing" title="DuyIsDrawing" thumbnail={'/image/EagleHire.png'}>
                            A personal project that I made for a friend who makes art. 
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works