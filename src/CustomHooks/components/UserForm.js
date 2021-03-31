import React, { useState } from "react";
import useCustomInput from "./useCustomInput";

function UserForm() {

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('')

    const [firstName, bindFirstName, resetFirstName] = useCustomInput('');
    const [lastName, bindLastName, resetLastName] = useCustomInput('');

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName();
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type='text'
                        // value={firstName}
                        // onChange={(e) => setFirstName(e.target.value)} 
                        {...bindFirstName} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type='text'
                        // value={lastName}
                        // onChange={(e) => setLastName(e.target.value)} 
                        {...bindLastName} />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default UserForm