import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks ,readingTime}) => {
  // console.log(bookmarks)
  
 
  return (
    

    <div className="md:w-1/3  bg-gray-200 mt-5 rounded-xl ">
      <div>
        <h1 className='text-3xl font-bold m-4'>Reading Time:{ readingTime}</h1>
      </div>
      <h1 className="text-3xl m-4">Bookmarks:{bookmarks.length}</h1>
      {
        bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
      }
  
    
    </div>
    
  );
  
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number
 }
export default Bookmarks;