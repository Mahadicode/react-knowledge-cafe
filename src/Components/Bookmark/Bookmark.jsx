import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
  const { title } = bookmark;
  return (
    <div className=' bg-gray-200'>
      <h1 className='bg-slate-400 p-4 m-4 rounded-xl'>{ title}</h1>
    </div>
  );
};
Bookmark.propTypes = {
   bookmark:PropTypes.object.isRequired
 }

export default Bookmark;