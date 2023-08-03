import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `Task Management App | ${title}`
    }, [title])
}

export default useTitle;