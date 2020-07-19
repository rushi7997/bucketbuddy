import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import BucketViewer from './components/modules/BucketViewer';
import NavMenu from './components/modules/NavMenu';
import ConnectToS3Bucket from './components/pages/ConnectToS3Bucket';

function App() {
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path="/" component={ConnectToS3Bucket} />
        <Route exact path="/bucket-viewer" component={BucketViewer} />
      </Switch>
    </Router>
  );
}

export default App;
