import React from 'react'
import APIService from '../APIService'
import {useCookies} from 'react-cookie'

function BlogList(props) 
{
    const [token]=useCookies(['mytoken'])

    const editBtn = (blog)=>{
        props.editBtn(blog)
    }
    const deleteBtn = (blog)=>{
        APIService.DeleteBlog(blog.id, token['mytoken'])
        .then(() => props.deleteBtn(blog))
    }
    return (
        <div >
            {
            props.blogs && props.blogs.map(blog=>
                {
                return  <div className = "bloglist" key = {blog.id}>
                            <h3>{blog.blogTitle}</h3>
                            <p>{blog.blogBody}</p>
                            <div className="row">
                                <div className="col-6">
                                    <button className="btn btn-primary" onClick = {() => editBtn(blog)}>Edit</button>
                                    
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-danger" onClick={() => deleteBtn(blog)}>Delete</button>
                                </div>
                            </div>
                        </div>
                }
            )
        }
        </div>
    )
}

export default BlogList
