import React from 'react';
import Reader from '../Reader';
import publications from '../publications.json';
import '../styles.css';

const App = () => {
  return <Reader items={publications} />;
};

export default App;
