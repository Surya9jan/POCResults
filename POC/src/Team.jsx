import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "./actions/team";

const Team = ({ getUsers, isAuthenticated, users }) => {
  const [formData, setFormData] = useState({
    error: null,
    isLoaded: false,
    items: [],
  });

  const { error, isLoaded, items } = formData;
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     items: []
  //   };
  // }

  useEffect(() => {
    getUsers();
    // var url = "https://jsonplaceholder.typicode.com/users";
    // fetch(url)
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       setFormData({
    //         isLoaded: true,
    //         items: result,
    //       });
    //       // this.setState({
    //       //   isLoaded: true,
    //       //   items: result
    //       // });
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       setFormData({
    //         isLoaded: true,
    //         error,
    //       });
    //       // this.setState({
    //       //   isLoaded: true,
    //       //   error
    //       // });
    //     }
  }, []);

  // componentDidMount() {
  //   var url = "https://jsonplaceholder.typicode.com/users";
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  // }

  if (!isAuthenticated) {
    return <div>Error: Please try again later</div>;
  } else if (isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h2>Meet the Team </h2>
        <div className="ui divider"></div>

        {users.map((item) => (
          <h3 key={item.id}>
            {item.id}. {item.name}
          </h3>
        ))}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.team.isAuthenticated,
  users: state.team.users,
  loading: state.team.loading,
});

export default connect(mapStateToProps, { getUsers })(Team);
