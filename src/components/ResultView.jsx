import React from 'react'
import PropTypes from 'prop-types'

const ResultView = ({history, output}) => {

    // now we are going to change the text color to red if there will be any error

    let ColorStyle = {
        color: output === 'Error' ? '#f11' : '#0d213f'
    };
  return (
    <div style={ColorStyle} className="result">
        <div className='history'>{history}</div>
        <div className='output'>{output}</div>
    </div>
  )
}

ResultView.propTypes = {
    history: PropTypes.string,
    output: PropTypes.string
}

export default ResultView