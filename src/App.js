import React, { Component } from 'react';
import Layout from './components/layout';
import { AddTodoForm } from './components/form';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <AddTodoForm />
        </Layout>
      </div>
    );
  }
}

export default App;
