import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    isMount: true // 마운트 된 상태로 시작 // 여기선 왜 constructor가 쓰이지 않을까?
  };

  handleClick() {
    this.setState({ isMount: !this.state.isMount }); // handleClick 함수 실행시 state가 반대로 변경(마운드 -> 언마운트, 언마운트 -> 마운트)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Click to stop counting!</button>
        {this.state.isMount ? <ChildComponent /> : 'Stopped'}
      </div>
    ); // onClick시 handleClick 함수가 실행, 카운팅 시작! 언마운트 상태일 때에는 ChildComponent가 실행되어 마운팅 해체 및 카운팅 리셋됨
  }
}

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0
    }; // 카운트가 0으로 리셋됨
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000); // 마운트가 되면, 1초마다 카운트가 1씩 증가
  }

  componentDidUpdate() {
    if (this.state.count % 10 === 0) {
      console.log("10 seconds!"); // 카운트가 10이 될 때마다 문구가 찍힘
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer); // 언마운트 되면 카운팅이 클리어 됨, 그 순간에 불리는 함수
  }

  render() {
    console.log("render");
    return <div>{this.state.count}</div>;
  } // 카운트가 1씩 될 때마다 render를 부름, 카운팅 숫자 반환
}

// https://codesandbox.io/s/funny-sara-ptp9j?file=/src/App.js