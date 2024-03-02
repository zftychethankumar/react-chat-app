import React from 'react';

function Input(){
return(
    <div className='form-group'>
 <div className='row'>
    <div className='col-md-10 col-lg-10 col-sm-10'>
        <input type="search" naame="" id="" className='form-control' />
    </div>
    <div className='col-md-1 col-lg-1 col-sm-2'>
        <label htmlFor="file" className='btn btn-warning'>
            <i className='bi bi-upload'></i>
        </label>
        <input type="file" name='file' id='file' hidden/>
    </div>
<div className='col-md-1 col-lg-1 col-sm-12'>
    <button className="btn btn-success"><i className="bi bi-send"></i></button>
</div>
 </div>
    </div>
)
}
export default Input