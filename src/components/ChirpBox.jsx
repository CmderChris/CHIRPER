import React from "react";

const ChirpBox = () => {
    return (
        <>

        <div className="row justify-content-around mt-1">
            <div className="card mt-3 shadow">
                <div className="card-body text-center">
                    <input type="text" className="form-control" placeholder="Type your chirp!"/>
                    <a href="#" className="btn btn-primary mt-3">Add Chirp</a>
                </div>
            </div>
        </div>

        </>
                )
}

export default ChirpBox;