import './App.css';
import {useState, useEffect} from 'react'
import BlogList from './components/BlogList';
import Form from './components/Form';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom'

function App() {
  const [blogs, setBlogs] = useState([])
  const [editBlog, setEditBlog] = useState(null)
  const [token, removeToken] = useCookies(['mytoken'])
  let navigate = useNavigate();

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/blogs/', {
      'method':'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Token ${token['mytoken']}`
      }
    })
    .then(resp => resp.json())
    .then(resp => setBlogs(resp))
    .catch(error => console.log(error) )

  }, [token])
  const editBtn = (blog) =>{
    setEditBlog(blog)
  }
  useEffect(() => {
    if(!token['mytoken']){
        navigate('/')
    }
    
}, [token, navigate])
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
const logoutBtn=()=>{
  removeToken(['mytoken'])
}
  return (
    
    <div className="App">
      <div className="row">
        <div className="col">
         <h1>Blog App</h1>
        </div>
        <div className="col">
        <button className="btn btn-primary" onClick = {insertBlog}>Post Blog</button>
        </div>
        <div className="col">
        <button className="btn btn-primary" onClick = {logoutBtn}>Logout</button>
        </div>
      </div>
      
      <BlogList blogs = {blogs} editBtn = {editBtn} deleteBtn = {deleteBtn}/>
      {editBlog && <Form blog = {editBlog} setBlog = {setEditBlog} updatedInformation = {updatedInformation} insertedInformation = {insertedInformation}/>}
    </div>
  );
}

export default App;
