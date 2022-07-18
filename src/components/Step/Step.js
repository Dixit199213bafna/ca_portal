import React, { useMemo, useState } from 'react';
import './Step.css';

const Step = ({
    steps,
    current,
    component,
    showButtons = false,
    activeColor,
    finishedColor = 'tomato',
    uncompletedColor = 'grey',
  }) => {
    const [stepIndex, setStepIndex] = useState(current);
  
    const handlePrev = () => {
      setStepIndex(stepIndex - 1);
    };
  
    const handleNext = () => {
      setStepIndex(stepIndex + 1);
    };
  
    const handleClick = (index) => {
      setStepIndex(index);
    };
  
    const { showPrev, showNext } = useMemo(
      () => ({
        showPrev: stepIndex - 1 > 0,
        showNext: stepIndex < steps.length,
      }),
      [stepIndex]
    );
  
    return (
        <React.Fragment>
            <div style={{ display: 'flex', gap: 10 }}>
            {steps?.map((step, index) => {
                debugger;
                const isCompleted = index < stepIndex;
                const hasError = step?.hasError;
                debugger;
                return (
                <div style={{ flex: 1 }} key={index} onClick={() => handleClick(index + 1)}>
                    <div
                    style={{
                        height: 10,
                        width: '100%',
                        backgroundColor: isCompleted
                        ? finishedColor
                        : uncompletedColor,
                    }}
                    />
                    {index < stepIndex && (
                        <React.Fragment>
                            <div>{step?.title}</div>
                            {index+1 === stepIndex && step?.component && <div className='steps-component'>{step?.component}</div>}
                        </React.Fragment>
                    )}
                </div>
                );
            })}
            </div>
            {showButtons && (
            <div className='buttons'>
                {showPrev ? <button onClick={handlePrev}>Prev</button> : <span></span>}
                {showNext && <button onClick={handleNext}>Next</button>}
                {stepIndex === steps.length && <button>Submit</button> } 
            </div>
            
            )}
        </React.Fragment>
    );
  };

  export default Step;