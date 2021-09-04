import React, { useState } from 'react'

const Form = () => {

    const [username, SetUsername] = useState('')

    const onChangeHandle = ({ target: { value } }) => {
        SetUsername(value)
    }

    return (
        <div style={{ marginTop: 50, marginBottom: 10 }}>

            <form >
                <label>Your Name</label>
                <input type='text' onChange={onChangeHandle} name='username' />
            </form>
        </div>
    )
}


export default Form

