import { useSelector } from "react-redux"

export function ActionButton({ children }) {
    let { loading } = useSelector(store => store.user)
    return (
        <button className="w-full py-2 rounded-xl bg-[#4338CA] text-white font-roboto text-lg hover:opacity-90 text-center flex flex-row justify-center items-center ">
            {loading ? <div className="text-white flex flex-row gap-4"><span className="animate-spin"><Spinner /> </span> Processing...</div> :
                children
            }
        </button>
    )
}