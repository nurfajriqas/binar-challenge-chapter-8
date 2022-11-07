import React from "react";

export default function Dashboard() {

    return (
        <>
        <div className="container">
            <div className="row mt-3">
                <div className="col form-group">
                    <label htmlFor="username">username</label>
                    <input type="text" class="form-control" id="username" placeholder="username" />
                </div>
                <div className="col">
                    <label htmlFor="email">email</label>
                    <input type="text" class="form-control" id="email" placeholder="email" />
                </div>
                <div className="col">
                    <label htmlFor="password">password</label>
                    <input type="password" class="form-control" id="password" placeholder="password" />
                </div>
                <div className="col">
                    <label htmlFor="experience">Experience</label>
                    <input type="text" class="form-control" id="experience" placeholder="5" />
                </div>
                <div className="col">
                    <label htmlFor="level">level</label>
                    <input type="number" class="form-control" id="level" placeholder="1" />
                </div>
                <div>
                    <button type="button" class="btn btn-light form-control"> Search </button>
                </div>
            </div>
        </div>
        </>
    )

}