import Layout from '../../components/layout'
import { getAllPeopleSlugs, getPeopleBySlug } from '../../lib/api'
import Image from 'next/image'
import Link from 'next/link'
import Row from '../../components/row'
import Col from '../../components/col'

export async function getStaticPaths() {
    
    const allSlugs = await getAllPeopleSlugs()

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
    
    const peopleItemData = await getPeopleBySlug(params.id)

    return {
        props : {
            peopleItemData
        }
    }
}

export default function PeopleItem({peopleItemData}) {

    const {title, featuredImage, content } = peopleItemData;
    const {sourceUrl, mediaDetails, altText } = featuredImage.node;
    const {width, height} = mediaDetails;
    return (
        <Layout>
            <Row>
                <Col>
                    <Link href="/people">
                        <a>
                            Back to people
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