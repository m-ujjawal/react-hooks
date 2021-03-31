import { useState } from "react";
function useCustomInput(initailValue) {

    const [value, setValue] = useState(initailValue)

    const reset = () => {
        setValue(initailValue);
    }

    const bind = {
        value: value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    return [value, bind, reset]
}
export default useCustomInput