import React, { useRef, useState, useEffect } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { generateToken, randomId, randomName } from "./utils";

function App() {
  const meeting = useRef("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { token } = await generateToken(randomId(), "1533", randomName());

      setToken(token);
    };
    getData();
  }, []);

  useEffect(() => {
    if (token && meeting.current) {
      const INST = ZegoUIKitPrebuilt.create(token);
      INST.joinRoom({
        container: meeting.current,
        facingMode: "environment",
      });
    }
  }, [token, meeting.current]);

  console.log(meeting.current, "vdsflukjd");
  return <div ref={meeting}></div>;
}

export default App;
