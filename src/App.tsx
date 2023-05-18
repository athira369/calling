import AgoraUIKit from "agora-react-uikit";
//import "./App.css";
import { useState } from "react";
//import AddUser from "./Users/AddUser";
//import AgoraRTC from "agora-rtc-sdk";
import { create } from "domain";

function App() {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: "f163539b214a4703a66de9211d497cb6",
    channel: "main",
    token:
      "007eJxTYPDNqOW32nZh1dZKw3ammxMOMlzyi2/5bSwXOGtywQvDyZUKDGmGZsamxpZJRoYmiSbmBsaJZmYpqZZGhoYpJpbmyUlmgWUpKQ2BjAyftCNZGBkgEMRnYchNzMxjYAAA8oId6Q==",
  };

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  return videoCall ? (
    <div style={{ display: "flex", width: "40vw", height: "50vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h4 onClick={() => setVideoCall(true)}>
      <button>JOIN</button>
    </h4>
  );
}
export default App;
