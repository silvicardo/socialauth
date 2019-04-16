import React, {useState, useEffect} from 'react';

//functional component using hooks
const FacebookFeed = ({picture}) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    window.FB.api('/me/feed', (response) => {
      if(response && !response.error){

        //Log posts, and pass to state last 5
        console.log('feed response ' , response.data);
        setPosts(response.data.splice(0, 5));

      }
    })

  }, [])//just at first load



    let profilePicStyle = {maxWidth: '150px', borderRadius: '100%'};

    return (
      <div>
      <h1>Read your latest posts</h1>
        <ul>
          {posts.map((post, index) =>
            (<li key={index}><img src={picture} style={profilePicStyle} alt="noPic" />{post.message}</li>))}
        </ul>
      </div>
    );

}

export default FacebookFeed;
