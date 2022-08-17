

export default class APIService {
    static UpdateBlog(blog_id, body, token) {
        return fetch(`http://127.0.0.1:8000/api/blogs/${blog_id}/`,{
            'method':'PUT',
            headers:{
            'Content-Type':'application/json',
            'Authorization': `Token ${token}`},
            body: JSON.stringify(body)
            }).then(resp => resp.json())
            .catch(error => console.log(error))
      }
      static InsertBlog(body, token) {
        return fetch(`http://127.0.0.1:8000/api/blogs/`,{
            'method':'POST',
            headers:{
            'Content-Type':'application/json',
            'Authorization':`Token ${token}`},
            body: JSON.stringify(body)
            }).then(resp => resp.json())
      }
      static DeleteBlog(blog_id, token) {
        return fetch(`http://127.0.0.1:8000/api/blogs/${blog_id}/`,{
            'method':'DELETE',
            headers:{
            'Content-Type':'application/json',
            'Authorization': `Token ${token}`},
            
            })

      }
      static LoginUser(body) {
        return fetch(`http://127.0.0.1:8000/auth/`,{
            'method':'POST',
            headers:{
            'Content-Type':'application/json',
          },
            body: JSON.stringify(body)
            }).then(resp => resp.json())
      }

      static RegisterUser(body) {
        return fetch(`http://127.0.0.1:8000/api/users/`,{
            'method':'POST',
            headers:{
            'Content-Type':'application/json',
          },
            body: JSON.stringify(body)
            }).then(resp => resp.json())
      }
        }
    