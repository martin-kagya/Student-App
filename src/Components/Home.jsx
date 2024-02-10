import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
function Home (){
    const images = [
        {
            image: "/images/books-min.jpg",
            title: "Books",
            description: "Where you can get any course related book or pdf"
        },
        {
            image: "/images/notes-min.jpg",
            title: "Notes",
            description: "You can write your various class notes in this section"
        },
        {
            image: "/images/dictionary-min.jpg",
            title: "Dictionary",
            description: "You can search for any word in the dictionary"
        },
        {
            image: "/images/conversion-min.jpg",
            title: "Conversion",
            description: "You can convert any unit to another unit"
        },
        {
            image: "/images/todo-min.jpg",
            title: "Todo",
            description: "You can create your todo list here"
        },
        {
            image: "/images/youtube-min.jpg",
            title: "Youtube",
            description: "You can watch any course related youtube video here"
        }
    ]
  
    return(
        <>
            <div>
                <p>STUDENT APP</p>
            </div>
            <div className='imageGrid'>
                <a href='https://www.pdfdrive.com'><div className='imageStyle' style={{backgroundImage: `url(${images[0].image})`}}>{images[0].title}</div></a>
                <Link to='/'><div className='imageStyle' style={{backgroundImage: `url(${images[1].image})`}}>{images[1].title}</div></Link>
                <Link to='dictionary'><div className='imageStyle' style={{backgroundImage: `url(${images[2].image})`}}>{images[2].title}</div></Link>
                <Link to='conversion'><div className='imageStyle' style={{backgroundImage: `url(${images[3].image})`}}>{images[3].title}</div></Link>
                <Link to='/'><div className='imageStyle' style={{backgroundImage: `url(${images[4].image})`}}>{images[4].title}</div></Link>
                <a href='https://youtube.com'><div className='imageStyle' style={{backgroundImage: `url(${images[5].image})`}}>{images[5].title}</div></a> 
            </div>
            <i>Work on the backend to enable user sign in and login as well as notes and todo</i>
        </>
    )
}

export default Home;