import React from 'react';

export default class Repo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { repoName, userName } = this.props.params;
    return (
      <div>
        <h1>Repo Detail</h1>
        <h3>reponame : {repoName}</h3>
        <h3>username : {userName}</h3>
      </div>
    )
  }
}