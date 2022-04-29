import React, { useContext, useState } from 'react'
import orgContext from "../context/Context"

const addChild = () => {
    const context = useContext(orgContext);
    const { addchild } = context;

    const [achild, setAchild] = useState({ name: "", gender: "", age: "" })

    const handleClick = (e) => {
        e.preventDefault();
        let token = localStorage.getItem("token")
        addchild(achild.name, achild.gender, achild.age, token);
        setAchild({ name: "", gender: "", age: "" })
    }

    const onChange = (e) => {
        setAchild({ ...achild, [e.target.name]: e.target.value })
    }
    return (
        <div className="container my-3">
            <h2>Add a child</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" value={achild.name} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <input type="text" className="form-control" id="gender" name="gender" value={achild.gender} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" className="form-control" id="age" name="age" value={achild.age} onChange={onChange} minLength={5} required />
                </div>

                <button disabled={achild.name.length === 0 || achild.gender.length === 0 || achild.age.length === 0} type="submit" className="btn btn-primary" onClick={handleClick}>Add child</button>
            </form>
        </div>
    )
}

export default addChild;   