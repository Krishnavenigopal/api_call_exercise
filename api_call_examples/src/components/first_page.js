import React, { useEffect,  useState} from 'react'

import axios from 'axios'
import {Link} from 'react-router-dom'

export default function First_page() {

    // const list = useRef('')
    const list =[];
  
    const [arraylistitems ,setArrayListitems] =  useState("")
    const [search, setSearch] = useState("")
    const arrayList = arraylistitems && arraylistitems.map( (item) => {
      return  <li>
        {/* <a href='https://www.google.com/'>{item.title}</a> */}
        <Link to="/second_page">{item.title}</Link>
        </li>
    }
    );
  
    const handleChange = (e) => {
      setSearch(e.target.value)
      if(e.target.value === " ") {
        setArrayListitems(arraylistitems);
        return;
      }
  
      const filteredValues = arraylistitems.filter(item => item.title.toLowerCase().match(search.toLowerCase()));
      setArrayListitems(filteredValues);
      return;
    }
  
    useEffect( () => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {console.log("res",res.data); setArrayListitems(res.data); console.log('arraylistitems: ', arraylistitems)})
    },[]
    )
  
    return (
      <div>
        <h1> List of posts</h1>
        <input placeholder='Search' onChange={handleChange} value={search} />
        <ui>{arrayList} 
          
        </ui>
      </div>
    );
  }


