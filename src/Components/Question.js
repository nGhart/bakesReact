import React, { useState } from 'react'

function Question({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false)
    return (
        <>
            <div className='questionHeader itemNprice'>
                <h4>{question}</h4>
                <button className='questionButton' onClick={() => setShowAnswer(!showAnswer)} >
                    {showAnswer ? "-" : "+"}
                </button>
            </div>
            {showAnswer && <p className='answer'>{answer}</p>}
        </>
    )
}

export default Question