
import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
  const { title,cover,author_img,author,posted_date,reading_time,hashtag} = blog;
  return (
    <div className='m-8'>
      <img className='max-h-80 md:w-full' src={cover} alt="" />
      <div className='flex justify-between items-center'>
        <div className='flex '>
          <img className='h-14 rounded-full w-14 ' src={author_img} />
          <div className='ml-5' >
            <h2 className='font-bold'>{author}</h2>
            <p>{ posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button>bookmark</button>
        </div>
      </div>
      <h2 className='text-4xl font-bold'>{title}</h2>
      <div>
        <span>{hashtag}</span>
      </div>
    </div>
  );
};
 
Blog.propTypes = {
  blog: PropTypes.object.isRequired
}
export default Blog;