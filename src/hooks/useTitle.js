import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Alex Photography`;
    }, [title])
}

export default useTitle;