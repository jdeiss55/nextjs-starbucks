import Layout from '../../components/layout'
import Card from '../../components/card'
import Row from '../../components/row'
import Col from '../../components/col'
import Section from '../../components/section'
import { getAllPeople } from '../../lib/api'
import Card3 from '../../components/card3'

export async function getStaticProps() {
    
    const people = await getAllPeople()

    return {
        props: {people}
    }
}

export default function People ({people}) {
    return (
        <Layout>
            <h1>People</h1>
            <p>These are the people</p>
            {people.edges.map((edge, index) => {
                const { node } = edge;
                return <Card3 node = {node} key={index} />
            })}
        </Layout>
    )
}