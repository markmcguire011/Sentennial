export default function Category({ name } : { name: string}){
    const colorList = {
        'psychology': '#bccce6',
        'computer-science': '#dfd1e6',
        'history': '#e6d1d6',
        'architecture': '#e6d7d1',
        'politics': '#d1e3e6'
    }

    const color = name.toLowerCase().replace(" ", "-")

    var bg;

    for (const [attribute, value] of Object.entries(colorList)) {
        if (attribute === color ){
            bg = value
        }
    }

    return (
        <h1 style = {{ backgroundColor: bg }}className={`text-l opacity-75 color-brand-dark border-2 rounded-full px-3 py-1`}>{name}</h1>
    )
}