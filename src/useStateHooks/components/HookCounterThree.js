import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({ firstName: '', lastName: '' });

    return (
        <div>
            <form>

                {//useState hook setter function doesn't merge state automatically, 
                //we have to do it manually by using spread operator
                //The output of below commented input tag is the value of firstName 
                //will lost i.e empty when we start typing lastName and vice-versa
                //which means useState cannot merge, update and story the state value automatically

                /* <input type="text" value={name.firstName}
                    onChange={e => setName({ firstName: e.target.value })} />
                <input type="text" value={name.lastName}
                    onChange={e => setName({ firstName: e.target.value })} /> */}

                {/*Here we use spread operator to copy every propery of name object first 
                then overwrite/update the firstName and lastName in corresponding input tag*/}
                <input type="text" value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })} />
                <input type="text" value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })} />
                <h2>Your first name is - {name.firstName}</h2>
                <h2>Your last name is - {name.lastName}</h2>
            </form>

        </div>
    )
}

export default HookCounterThree