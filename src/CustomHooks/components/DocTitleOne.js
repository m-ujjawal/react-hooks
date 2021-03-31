import React, { useState, useEffect } from "react";
import useDocumentTitle from "./useDocumentTitle";

function DocTitleOne() {

    const [count, setCount] = useState(0);

    //Custom hook
    useDocumentTitle(count);

    // below useEffect code is a duplicate in DocTitleOne and DocTititleTwo
    // so repaced with custom hok
    // useEffect(() => {
    //     document.title = `Count ${count}`
    // }, [count])

    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Count - {count}
            </button>
        </div>
    )
}
export default DocTitleOne