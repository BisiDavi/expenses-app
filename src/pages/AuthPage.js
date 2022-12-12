import React from 'react';
import {Text, View} from 'react-native';

class AuthPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Sign up to save your information</Text>
        <View>
          <Text>Sign up</Text>
        </View>
      </View>
    );
  }
}

export default AuthPage;
