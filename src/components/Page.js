import React, { useEffect } from 'react';

function Page(props) {
   useEffect(() => {
      document.title = `${props.title} | FriendsConnect`;
      //make browser scrolls to the top of the screen when we switch to this page
      window.scrollTo(0, 0);
   }, []);

   return <>{props.children}</>;
}

export default Page;
