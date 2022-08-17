import React, {useState, useEffect} from 'react'
import APIService from '../APIService';
import {useCookies} from 'react-cookie' 
function Form(props) {
    const [blogTitle, setBlogTitle]=useState('')
    const [blogBody, setBlogBody]=useState('')
    const blogUser = props.blog.blogUser

    const [token]=useCookies(['mytoken'])

     useEffect(() => {
        setBlogTitle(props.blog.blogTitle)
        setBlogBody(props.blog.blogBody)
    }, [props.blog])
    const updateBlog = () => {
        APIService.UpdateBlog(props.blog.id, {blogUser, blogTitle, blogBody}, token['mytoken'])
        .then(resp => props.updatedInformation(resp))
        .then(props.setBlog(null))
    }
    const cancel = () => {
        props.setBlog(null)
    }
    const insertBlog = () => {
        const blogUser = 1
        APIService.InsertBlog({blogUser, blogTitle, blogBody}, token['mytoken'])
        .then(resp => props.insertedInformation(resp))
        .then(props.setBlog(null))
    }
   

    return (
        <div>
            {props.blog ? (
                <div className = "mb-3">
                    <label htmlFor = "title" className = "form-label">Title</label>
                    <input type = "text" className = "form-control" id="title" value = {blogTitle} onChange={e => setBlogTitle(e.target.value)} placeholder = "Enter your title"/>
                    <label htmlFor = "title" className = "form-label">Body</label>
                    <textarea className="form-control" id="body" value = {blogBody} onChange={e => setBlogBody(e.target.value)} placeholder = "Enter your Body"></textarea>
                    {props.blog.id && <button className="btn btn-success" onClick={updateBlog}>Edit</button>}{!props.blog.id && <button className="btn btn-success" onClick={insertBlog}>Post</button>}
                    <button className="btn btn-danger" onClick={cancel}>cancel</button>
                </div>
            ) : null}
        </div>
    )
}

export default Form
