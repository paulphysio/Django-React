import {useState, useEffect} from 'react'

import React from 'react'

function AppCompo() {
    const [blogs, setBlogs] = useState([])
  const [editBlog, setEditBlog] = useState(null)

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/blogs/', {
      'method':'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': 'Token 0f116034c8972b4caa5143e2abb18016a3187866'
      }
    })
    .then(resp => resp.json())
    .then(resp => setBlogs(resp))
    .catch(error => console.log(error) )

  }, [])
  const editBtn = (blog) =>{
    setEditBlog(blog)
  }
  const updatedInformation = (blog) => {
    const new_blog = blogs.map(myblog => {
      if(myblog.id === blog.id){
        return blog;
      }else {
        return myblog;
      }
    })
    setBlogs(new_blog)
  }
  const insertBlog = () =>{
    
    setEditBlog({
      blogTitle:'',
      blogBody: ''
    })
  }
  const insertedInformation = (blog) =>{
    const new_blogs = [...blogs, blog]
    setBlogs(new_blogs)
  }
  const deleteBtn = (blog)=>{
    const new_blogs = blogs.filter(myblog => {
      if(myblog.id === blog.id){
        return false;
      }
      return true;
    })
    setBlogs(new_blogs)
}
    return (
        <div>
            
        </div>
    )
}

export default AppCompo
