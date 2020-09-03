import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    isDarkMode: false // 화이트 모드인 상태로 시작
  };

  handleDarkModeChange(e) {
    this.setState({
      isDarkMode: e.target.checked // 체크 박스를 클릭할 시 handleDarkModeChange 함수가 실행되며, 체크 여부에 따라 isDarkMode의 true(다크 모드), false(화이트 모드) 여부가 결정 된다.
    });
  }

  render() {
    return (
      <>
        <div>{this.state.isDarkMode ? "Dark" : "White"} mode.</div>
        {/* 다크 모드인지 화이트 모드인지에 따른 안내 문구 */}
        <Setting
          onCheck={this.handleDarkModeChange.bind(this)}
          isDarkMode={this.state.isDarkMode}
        ></Setting>
        <Player isDarkMode={this.state.isDarkMode} />
      </>
    ); // onCheck할 시 handleDarkModeChange 함수가 실행, isDarkMode는 다크 모드 여부의 상태를 나타냄 - 이는 세팅과 플레이어에 모두 적용됨.
  }
}

class Setting extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          {" "}
          Now you are in {this.props.isDarkMode ? "Dark" : "White"} mode.
          {/* 다크 모드인지 화이트 모드인지에 따른 안내 문구  */}
        </div>
        <input type="checkbox" onChange={this.props.onCheck} />
        Dark mode.
        {/* 박스의 체크 여부에 따라 다크 모드인지 화이트 모드인지가 결정됨. 문구들도 결절됨. App에서 받아온 props*/}
      </div>
    );
  }
}

function Player({ isDarkMode }) {
  return <div>{isDarkMode ? "Dark mode" : "White mode"} player. </div>;
} /* 다크 모드인지 화이트 모드인지에 따른 안내 문구  */

// https://codesandbox.io/s/admiring-rain-p8lqh?file=/src/App.js