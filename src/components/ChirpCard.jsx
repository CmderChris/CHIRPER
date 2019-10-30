import React from "react";

const ChirpCard = props => {
    return(
        <section className="row justify-content-center my-2 mt-5">
            <article className="col-md-7">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <h4 className="card-title">{props.chirp}</h4>
                    </div>
                </div>
            </article>
        </section>
    );
}





export default ChirpCard;