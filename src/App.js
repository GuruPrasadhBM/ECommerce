import React from 'react';
import Layout from './components/Layout/Layout';
import ProfileBuilder from './containers/ProfileBuilder';

function App() {
  return (
    <div>
      <Layout>
        <ProfileBuilder />
      </Layout>
    </div>
  );
}

export default App;
