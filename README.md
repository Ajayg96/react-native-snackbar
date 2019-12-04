# React-Native-Snackbar

<div style="text-align: center">
  <img src="https://badgen.net/badge/node@LTS/>=8.11.1/green">
  <img src="https://badgen.net/badge/npm/>=5.6.0/blue">
  <img src="https://badgen.net/badge/react-native/>=0.57.4/orange">
  <img src="https://badgen.net/badge/code style/standard/yellow">
  <img src="https://badgen.net/badge/release/v1.0/pink">
</div>

A simple and fully customizable cross-platform React Native component that implements a snackbar UI.

## Getting Started

### Prerequisites

`NodeJS >= v8.11.1`
`react-native-cli >= 2.0.1`
`react-native >= 0.57.4`
`npm >= 5.6.0`

## Table of Contents

- [Install](#install)
- [Example](#example)
- [Options](#options)
- [License](#license)

## Install

[npm][]:

```sh
npm install react-native-growl
```

## Example

```js
import React from "react";
import { View, Button } from "react-native";
import Snackbar from "react-native-snackbar";

class SnackbarComponent extends Component {
  state = {
    visible: false
  };

  showSnackbar = () => {
    this.setState({ visible: true }, () => {
      setTimeout(() => {
        this.setState({ visible: false });
      }, 3000);
    });
  };

  hideSnackbar = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFF"
        }}
      >
        <Button title="Show snackbar" onPress={this.showSnackbar} />
        <Snackbar
          position="top"
          actionText="Close"
          message="Snackbar message"
          visible={this.state.visible}
          backgroundColor="#000000"
          messageTextColor="#FFFFFF"
          actionTextColor="#AB2611"
          handleAction={this.hideSnackbar}
        />
      </View>
    );
  }
}
```

## Options

| Property         | Type                      | Description                                                                 |
| ---------------- | ------------------------- | --------------------------------------------------------------------------- |
| visible          | Boolean                   | Boolean to show/hide the snackbar                                           |
| position         | String (enum) top, bottom | Position of the snackbar                                                    |
| message          | String                    | Text message of the snackbar                                                |
| messageTextColor | String                    | Color of the message text                                                   |
| backgroundColor  | String                    | Backgroundcolor of the snackbar                                             |
| handleAction     | Function                  | Callback that is called when the user taps the close button of the snackbar |
| actionText       | String                    | The text of action button                                                   |
| actionTextColor  | String                    | Color of the action text button                                             |

## License

[MIT](LICENSE) © Ajay

##

[npm]: https://www.npmjs.com/
