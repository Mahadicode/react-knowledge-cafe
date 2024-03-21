
import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import Blog from './Components/Blog/Blog'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

 

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
    // console.log(bookmarks)
  }
  const handleReadingTime = (time,id) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
    // remove bookmark 
    const reamainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(reamainingBookmarks)
  }

  return (
    <>
   
      <Header></Header>
      <div className='md:flex'>
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleReadingTime ={handleReadingTime }
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
      
      
    </>
  )
}


export default App
