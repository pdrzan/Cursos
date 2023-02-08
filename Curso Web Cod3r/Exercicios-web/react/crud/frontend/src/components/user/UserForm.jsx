import React from 'react'
export default props => 
    <div className="form">
    <div className="row">
        <div className="col-12 col-md-6">
            <div className="form-group">
                <label>{props.label1}</label>
                <input type="text" className="form-control" name={props.name1} value={props.value1} onChange={props.onChange1} placeholder={props.placeholder1} /> 
            </div>
        </div>
        <div className="col-12 col-md-6">
            <div className="form-group">
                <label>{props.label2}</label>
                <input type="text" className="form-control" name={props.name2} value={props.value2} onChange={props.onChange2} placeholder={props.placeholder2} />
            </div>
        </div>
    </div>
    <hr />
    <div className="row">
        <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={props.onClick1}>
                {props.buttonText1}
            </button>
            <button className="btn btn-secondary ml-2" onClick={props.onClick2}>
                {props.buttonText2}
            </button>
        </div>
    </div>
    </div>