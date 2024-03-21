
import PropTypes from 'prop-types';
import { IoBookmarkOutline } from "react-icons/io5";
const Blog = ({ blog, handleAddToBookmark,handleReadingTime }) => {
  
  const { id,title,cover,author_img,author,posted_date,reading_time,hashtag} = blog;
  return (
    <div className='mt-2'>
      <img className='max-h-80 w-full rounded-md' src={cover} alt="" />
      <div className='flex justify-between items-center m-5'>
        <div className='flex '>
          <img className='h-14 rounded-full w-14 ' src={author_img} />
          <div className='ml-5' >
            <h2 className='font-bold'>{author}</h2>
            <p>{ posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button onClick={()=>handleAddToBookmark(blog) } className='ml-2'><IoBookmarkOutline className='text-red-600'></IoBookmarkOutline></button>
        </div>
      </div>
      <h2 className='text-4xl font-bold mb-5'>{title}</h2>
      <div>
        <span>{hashtag}</span>
      </div>
      <button onClick={()=>handleReadingTime(reading_time,id) } className='text-blue-500 underline font-bold my-4'>Mark As Read</button>
    </div>
  );
};
 
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
 handleReadingTime: PropTypes.func
}
export default Blog;