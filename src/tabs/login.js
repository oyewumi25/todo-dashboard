import React, { Component } from "react";
import { Card, Input, Space} from "antd";
import { DisplayButton } from "../librairy/Button";
import { sessionHandler } from "../functions/sessionStore";
import { openNotification }from "../functions/notification";
import { keyCredential, token } from "../constants/credential";
import { addUserData } from "../store/action";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Helmet from 'react-helmet';
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import  {validatorConnect} from '../functions/validator-connect'



class Login extends Component {
  state = {
    email: "email",
    password: "password",
    alert: false,
    alertText: "Renseignez les champs svp!",
    alertType: "warning",

  };

  closeAlert = () => {
    return this.setState({
      alert: false
    });
  };

  handleConnect = async () => {
    const { email, password } = this.state;

    console.log(1);
    if (!validatorConnect(email, password)) {
      return openNotification ("warning", "email ou mot de passe incorrect")    
    }
    console.log(2);
    await this.props.saveData({
      email: email,
      password: password,
    });
console.log(3);
    await sessionHandler("auth_token", keyCredential, "set");
    this.setState({
      alert: true,
      alertType: "success",
      alertText: "Vous êtes connecté",
    });
  };
  render() {
    const { alert, alertText, alertType } = this.state;

    if (
      sessionHandler("auth_token", null, "get") &&
      sessionHandler("auth_token", null, "get").length !== 0
    ) {
      return <Redirect to="/first" />;
    }
    return (
      <div className="site-card-border-less-wrapper">
         <Helmet bodyAttributes={{style: 'background-color : #FFDEAD'}}/>
      
        <Card
          bordered={true}
          style={{
            width: "20%",
            backgroundColor: " #D2B48C",
            marginLeft: "40%",
            marginTop: "13%",
          }}
        >
          <Space direction="vertical" >
            <Input
              size="large"
              placeholder="email"
              name="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              suffix={<UserOutlined style={{ color: "gray" }} />}
              style={{ width: "110%", marginLeft: "23%" }}
            />
            <Input.Password
              placeholder="password"
              size="large"
              name="password"
              onChange={(e) => this.setState({ password: e.target.value })}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              style={{ width: "110%", marginLeft: "23%" }}
            />

            <DisplayButton
              type="primary"
              disabled={false}
              text={"Connect"}
              onPress={() => this.handleConnect()}
              style={{ width: "110%", height: 45, marginLeft: "23%", paddingTop: "6px",color:"gray" }}
            />
          </Space>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchStoreToProps = (dispatch) => {
  return {
    saveData: (data) => {
      dispatch(addUserData(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchStoreToProps)(Login);






