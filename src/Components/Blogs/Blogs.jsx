
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'



const Blogs = ({handleAddToBookmark,handleReadingTime  }) => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
    .then(data=>setBlogs(data))
  }, [])
  
  // console.log(blogs)
  return (
    <div className="md:w-2/3 m-8">
      <h1 className="text-2xl">Blogs:</h1>
      {
        blogs.map(blog => <Blog handleAddToBookmark={handleAddToBookmark}
          handleReadingTime ={handleReadingTime }
          key={blog.id} blog={blog}></Blog>)
 }
    </div>
  );
};
Blogs.propTypes={
  handleAddToBookmark: PropTypes.func,
  handleReadingTime :PropTypes.func
 }
export default Blogs;