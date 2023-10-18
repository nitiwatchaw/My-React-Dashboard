import React from 'react'
import './Section-2.css'
const Section2 = () => {
    return (
        <div className='section-2'>
            <form >
                <div className="account">
                    <h5>Edit your account information</h5>
                    <div className="form-container">
                        <input type="text" placeholder='First Name' name='firstname' />
                        <input type="text" placeholder='Last Name' name='lastname' />
                        <input type="text" placeholder='Job Title' name='jobtitle' />
                        <input type="text" placeholder='Location ' name='location' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='About you / Bio'></textarea>
                    </div>
                </div>
                <div className="profession">
                    <h5>Profession Info</h5>
                    <div className="form-container">
                        <input type="text" placeholder='First Name' name='firstname' />
                        <input type="text" placeholder='Last Name' name='lastname' />
                        <input type="text" placeholder='Job Title' name='jobtitle' />
                        <input type="text" placeholder='Location ' name='location' />
                    </div>
                </div>
                <button>Update</button>
            </form>

        </div>
    )
}

export default Section2