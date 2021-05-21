import Layout from '../../components/layout'
import Card from '../../components/card'
import Row from '../../components/row'
import Col from '../../components/col'
import Section from '../../components/section'
import { getAllLocations } from '../../lib/api'
import Card2 from '../../components/card2'


export async function getStaticProps() {

    const locations = await getAllLocations()

    return {
        props: {locations}
    }
}


export default function Locations({locations}) {

    return (
        <Layout>
            <h1>Locations</h1>
            <p>These are the locations</p>
            {locations.edges.map((edge, index) => {
                const { node } = edge;
                return <Card2 node={node} key={index}/>
            })}
            
        </Layout>
    )
}