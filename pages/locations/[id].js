import Layout from '../../components/layout'
import { getAllLocationSlugs, getLocationBySlug } from '../../lib/api'
import Image from 'next/image'
import Link from 'next/link'
import Row from '../../components/row'
import Col from '../../components/col'

export async function getStaticPaths() {
    
    const allSlugs = await getAllLocationSlugs()

    const paths = allSlugs.edges.map(edge => {
        const { slug } = edge.node
        return {
            params: {
                id: slug
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps ({params}) {
    
    const locationItemData = await getLocationBySlug(params.id)

    return {
        props : {
            locationItemData
        }
    }
}

export default function LocationItem({locationItemData}) {

    const {title, featuredImage, content } = locationItemData;
    const {sourceUrl, mediaDetails, altText } = featuredImage.node;
    const {width, height} = mediaDetails;
    return (
        <Layout>
            <Row>
                <Col>
                    <Link href="/locations">
                        <a>
                            Back to locations
                        </a>
                    </Link>
                </Col>
            </Row>
            <Image 
            src={sourceUrl}
            width={width}
            height={height}
            alt={altText}
            />
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </Layout>
    )
}