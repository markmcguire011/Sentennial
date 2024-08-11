import { getAllArticles, getArticleBySlug } from '@/lib/api'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export default async function Article({ params }: Params) {
    const article = getArticleBySlug(params.slug)

    if (!article) {
        return notFound()
    }

    return (
        <div>
            <h1>{article.title}</h1>
            <small>{article.date}</small>
            <div dangerouslySetInnerHTML={{ __html: article.content}} />
        </div>
    )
}

type Params = {
    params: {
        slug: string
    }
}

export function generateMetadata({ params }: Params): Metadata {
    const article = getArticleBySlug(params.slug)

    if (!article) {
        return notFound()
    }

    const title = `${article.title} | Sentennial`

    return {
        title,
        openGraph: {
            title
        }
    }
}

export async function generateStaticParams() {
    const articles = getAllArticles()

    return articles.map((article) => ({
        slug: article.slug
    }))
}