import React, { useState } from 'react'

export const Signin = () => {
    const[exampleInputEmail1, setEmail1] = useState("");
    const[exampleInputPassword1, setPass1] = useState("");
    const Submit = () => {

    }
    return (
        <div className="container">
            <form onSubmit={Submit} className="col-lg-6 offset-lg-3">
            <h2>Add your profile</h2>
                <div className="mb-3 my-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={exampleInputEmail1} onChange={(e) => setEmail1(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={exampleInputPassword1} onChange={(e) => setPass1(e.target.value)}className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>

        </div>
    )
}
