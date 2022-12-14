import React from 'react';


const Success = ({ invites }) => {
    return (
        <div className='success' >
            <div className="success__img">
                <img src="data:image/png;base64,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" alt="" />
            </div>
            <h3 className="success__title">??????????????!</h3>
            <p className="success__text">???????? {invites.length} ?????????????????????????? ???????????????????? ??????????????????????</p>
            <button onClick={()=> window.location.reload()} className="success__btn">??????????</button>
        </div>
    );
}

export default Success;
