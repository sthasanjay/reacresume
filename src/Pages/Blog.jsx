import React from 'react';
import BlogData from '../Component/Blog/BlogData';
import Title from '../Component/About/Title';
const Blog = () => {
  return (<>
  <div className = "b-title">
    <Title title ={'Blog'} span = {'Blog'}/>
    </div>
    <div className = "blogPage">
   
      {
        BlogData.map((value)=>{
          return <div className = "blog" key = "value.id">
            <div className = "blog-content">
              <img src = {value.img} alt = ""/>
              <a href = {value.link} className = "blog-link">{value.title}</a>
              <div className = "date">
                <p></p>
              </div>
            </div>
          </div>
        })
      }
    </div>
    </>
  )
  ;
}

export default Blog;
