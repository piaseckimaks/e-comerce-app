import React from 'react';
import Layout from './Layout';
import DataFetch from '../util/DataFetch'

function App() {
  const [toFetch, setToFetch] = React.useState('FOOTBALL WORLD');
  const [fetchResult, setFetchResult] = React.useState([]);

  const handleContent = (contentName) => {
    DataFetch.getProducts(contentName).then(res=>setFetchResult(res));
    setToFetch(contentName);
  }



  return (
    <div>
      <Layout 
        handleContent={handleContent}
        fetchResult={fetchResult}
        mainContent={toFetch}
      />
    </div>
  );
}

export default App;
