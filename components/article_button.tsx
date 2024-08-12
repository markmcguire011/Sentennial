import Link from "next/link"
import { Article } from "@/interfaces/article"

type Props = {
    data: Article
}

const colorList = {
        'psychology': '#bccce6',
        'computer-science': '#dfd1e6',
        'history': '#e6d1d6',
        'architecture': '#e6d7d1',
        'politics': '#d1e3e6'
    }

export default function ArticleButton({ data } : Props) {
    return (
        <Link href={`/articles/${data.slug}`} className="flex flex-col w-full items-center">
            <div className="group bg-white flex flex-col justify-between rounded w-full shadow-sm hover:shadow-md border">
                <div className="flex justify-between px-6 pt-6">
                    <h1 className="text-lg group-hover:underline group-hover:decoration-brand-color group-hover:text-brand-color">{data.title}</h1>
                    <svg className="md:flex hidden group-hover:fill-brand-color" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/></svg>
                </div> 
                <div className="flex flex-col px-6 pb-3 md:flex-row justify-between">
                    <h1 className="text-lg text-slate-400">{data.subtitle}</h1>
                    <h1 className="txt-md text-slate-400">{data.date}</h1>
                </div>
                <div className="flex">
                    {data.categories.map((category) => {
                        const name = category.toLowerCase().replace(" ", "-")

                        var color;

                        for (const [attribute, value] of Object.entries(colorList)) {
                            if (attribute === name ){
                                color = value
                            }
                        }

                        return <div key={data.slug + category} style={{backgroundColor: color}} className="h-2 w-full"></div>
                    })}
                </div>
            </div>
        </Link>
    )
}