import React from 'react';
import './ResultForm.css';

const ResultForm = (props) => {
    let finalAmount = props.finalAmount != null ? props.finalAmount : 0;
    let formattedFinalAmount = parseFloat(finalAmount).toFixed(2);
    return (
        <div className="resultFormatting">Amount for client: £{formattedFinalAmount}</div>
    );
};

export default ResultForm;