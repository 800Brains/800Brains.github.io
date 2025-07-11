import React from 'react';
import {Link} from 'react-router-dom';

const Cta = () => {
    return (
        <>
            <div className="cta-area bg-1 pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="cta-wrapper text-center">
                                <h2>Get a Professional Services, <span>Call us Now. <Link to="/">(+234) 80-2276-7228 & (+234) 70-4647-4965</Link></span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cta;