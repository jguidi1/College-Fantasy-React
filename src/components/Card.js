

export default function Card({content}) {

    return (
        <div className="bg-slate-300 rounded-lg">
            <div className="flex justify-center items-center p-5">
                {content}
            </div>
        </div>
    )
}