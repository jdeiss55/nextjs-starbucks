import Layout from "../../components/layout";
import { getMenuTypesAndMenuItems } from '../../lib/api'
import Card from '../../components/card'
import Row from '../../components/row'
import Col from '../../components/col'
import Section from '../../components/section'

export async function getStaticProps() {

    const menuTypes = await getMenuTypesAndMenuItems()

    return {
        props: { menuTypes } 
    }
}

export default function Menu ({menuTypes}) {
    return (
        <Layout>
            <h1>Menu</h1>
            <p>This is the menu intro.</p>
            {menuTypes.edges.map(edge => {
                const { name, items } = edge.node;
                return <Section title={name}>
                    <Row justifyContentCenter>
                        {items.edges.map((edge, index) => {
                            const {node} = edge;
                            return <Col sm={6} md={4} lg={3} key={index}>
                                <Card node={node}  />
                            </Col>
                        })}
                    </Row>
                </Section>
            })}
        </Layout>
    )
}


