import Link from "next/link"

export default function ArticleButton({slug, title, subtitle, date} : { slug: string, title: string, subtitle: string, date: string}) {
    return (
        <Link href={`/articles/${slug}`} className="flex flex-col w-full items-center">
            <div className="group bg-white flex flex-col justify-between rounded w-full shadow-sm hover:shadow-md p-6 border">
                <div className="flex justify-between">
                    <h1 className="text-lg group-hover:underline group-hover:decoration-brand-color group-hover:text-brand-color">{title}</h1>
                    <svg className="md:flex hidden group-hover:fill-brand-color" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/></svg>
                </div> 
                <div className="flex flex-col md:flex-row justify-between">
                    <h1 className="text-lg text-slate-400">{subtitle}</h1>
                    <h1 className="txt-md text-slate-400">{date}</h1>
                </div>
            </div>
        </Link>
    )
}