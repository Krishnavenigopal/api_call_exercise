import React, {useEffect} from 'react'

import axios from 'axios'

export default function Second_page() {

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {console.log("res",res.data); console.log("seond page post", res.data); })
      },[]
      )
    return (
        <div>
            <h1>Second page</h1>
        </div>
    )

}


