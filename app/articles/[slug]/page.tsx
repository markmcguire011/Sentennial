export default function Articles() {
    return (
        <div className="flex flex-col px-[calc(12vw)] py-[calc(4vh)]">
            <div className="flex flex-col gap-2 pb-12">
                <h1 className="text-6xl font-bold opacity-75 color-brand-dark">The Hanging Gardens of Babylon</h1>
                <h1 className="text-4xl font-semibold opacity-50 color-brand-dark">and why I love Milan</h1>
            </div>
            <div className="flex">
                <div className="bg-slate-200 h-[5px] w-4/5 rounded"></div>
            </div>
            <div className="flex gap-6 items-center p-2">
                <h1 className="text-l opacity-50 color-brand-dark">August 3rd, 2024</h1>
                <h1 className="text-l bg-[#e6d1d6] opacity-75 color-brand-dark border-2 rounded-full px-3 py-1">History</h1>
            </div>
        </div>
    )
}