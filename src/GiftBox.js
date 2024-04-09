import React from 'react';
import './App.css';
import giftImage from './images/eidmubarak.jpg';


const GiftBox = ({ onClick }) => {
    return (
        <div className="container ">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center -mt-20 pb-10 text-white text-2xl font-bold my-1">Click the box!</h3>
                </div>
                <div className="col-12 -mt-5 d-flex justify-content-center">
                    <div className="box">
                        <div className="box-body">
                            `<img className="img" src={giftImage} alt='eid mubarak' />`
                            <div className="box-lid">

                                <div className="box-bowtie"></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftBox;
