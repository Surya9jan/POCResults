import React from "react";
import myImage from "./images/wireframe/amit.jpg";
import "./Dashboard.css";
import { Placeholder } from "semantic-ui-react";

const Dashboard = () => {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       fields: {
  //         heading: ''
  //       },
  //       title:'Amit Kumar'
  //     }

  //     this.onSubmit = this.onSubmit.bind(this);
  //     this.handleChange = this.handleChange.bind(this);
  //   }

  //   onSubmit() {
  //     alert('Your selection saved!');
  //   }

  //   handleChange(e) {
  //     let fields = this.state.fields;
  //     fields[e.target.name] = e.target.value;
  //     this.setState({
  //       fields
  //     });
  //     this.state.title = this.state.fields.heading;
  // }

  return (
    <div>
      <div>
        <div className="header">
          {/* <div className="d3">
              <div><img src={myImage} className="imagesize ui circular image" /></div>
            </div> */}
          <div className="d4">
            {" "}
            <div>
              {" "}
              <h3>Welcome Surya</h3>
            </div>
            <div>
              <h5>Last Login : DD-Month-YYYY</h5>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="ui divider"></div>
        <div className="account-balance"><h3>Account Balance: &#x20B9;7500</h3></div>
        <table className="ui celled fixed single line table">
          <thead className="">
            <tr className="">
              <th className="">Date</th>
              <th className="">Description</th>
              <th className="">Amount</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="">
              <td className="">02-May-2019</td>
              <td className="">Room Rent</td>
              <td className="">4000</td>
            </tr>
            <tr className="">
              <td className="">05-May-2019</td>
              <td className="">Weekend Party</td>
              <td className="">2000</td>
            </tr>
          </tbody>
        </table>

        <div className="ui divider"></div>

        <div className="main">
          <div className="d1">
            <div><h3>Subscribe to Alerts</h3></div><br />

            <div className="ui checkbox">
              <input type="checkbox" /><label>SMS Alerts</label></div><br />
            <div className="ui checkbox">
              <input type="checkbox" /><label>Marketting Newsletter</label>
            </div><br />
            <div className="ui checkbox">
              <input type="checkbox" /><label>Flyers</label>
            </div><br /><br />
            <button className="ui primary button" onClick={this.onSubmit}>Submit</button>
          </div>
          <div className="d2">
            <div><h3>Two Way Data Binding</h3></div>

            <div className="ui focus input input-design"><input type="text" placeholder="Enter Value for two way binding" name="heading" value={this.state.fields.heading} onChange={this.handleChange} /></div>
          </div>
        </div> */}
    </div>
  );
};

export default Dashboard;
