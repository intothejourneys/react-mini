import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    isOpen: false // 모달창이 닫혀있는 상태로 시작
  };

  handleClick() {
    this.setState({ isOpen: true }); // 클릭시 모달창이 열리고
  }

  handleClose() {
    this.setState({ isOpen: false }); // 닫을시 모달창이 닫힌다
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick.bind(this)}>Open Modal</button>
        <Modal
          isOpen={this.state.isOpen}
          handleClose={this.handleClose.bind(this)}
        >
          This is Modal!
        </Modal>
      </div>
    ); // onClick(Open Modal 버튼 클릭)할 시 handleClick 함수가 실행, isOpen과 handleClose가 대기 활성화 된다.
}

class Modal extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.isOpen ? "modal modal-mask open" : "modal modal-mask close"
        } // 모달창이 열려있을 때는 mask 효과가 활성화, 모달창이 닫혀있을 때는 mask 효과가 비 활성화
      >
        <div className="modal-contents">
          <div>{this.props.children}</div>
          {/* mask 효과는 모달 창의 자식 */}
          <div>
            <button onClick={this.props.handleClose}>ok</button>
            {/* 모달창 닫기 버튼 */}
          </div>
        </div>
      </div>
    );
  }
}

// https://codesandbox.io/s/intelligent-gates-g9yon