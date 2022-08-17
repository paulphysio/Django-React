import React from 'react'

function DeleteBlog() {
    const deleteBtn = (blog)=>{
        APIService.DeleteBlog(blog.id)
        .then(() => props.deleteBtn(blog))
    }
    return (
        <div>
            <h2>Are you sure </h2>
            <button className="btn btn-danger">yes</button>
            <button className="btn btn-secondary" onClick={() => deleteBtn(blog)} deleteBtn = {deleteBtn}>cancel</button>
        
        </div>
    )
}

export default DeleteBlog
