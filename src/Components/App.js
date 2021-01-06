import React from 'react';
import Layout from './Layout';
import DataFetch from '../util/DataFetch'

function App() {
  const [mainContent, setMainContent] = React.useState('FOOTBALL WORLD');
  const [fetchResult, setFetchResult] = React.useState([]);

  const handleContent = (contentName) => 
  {
    DataFetch.getProducts(contentName).then(res=>setFetchResult(res));
    setMainContent(contentName);
  }
  
  const contentWithoutFetch = (contentName) =>
  {
    setMainContent(contentName);
  }


  return (
    <div>
      <Layout 
        handleContent={handleContent}
        fetchResult={fetchResult}
        mainContent={mainContent}
        contentWithoutFetch={contentWithoutFetch}
      />
    </div>
  );
}

export default App;
