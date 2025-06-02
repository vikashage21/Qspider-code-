import React, { useState, useEffect, useRef } from "react";
import Peer from "peerjs";

const VideoCall = () => {
  const [peerId, setPeerId] = useState("");
  const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
  const [call, setCall] = useState(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerInstance = useRef(null);
  const localStreamRef = useRef(null);

  useEffect(() => {
    const peer = new Peer();

    peer.on("open", (id) => {
      console.log("My peer ID:", id);
      setPeerId(id);
    });

    peer.on("call", (incomingCall) => {
      console.log("Receiving call...");
      incomingCall.answer(localStreamRef.current);
      setCall(incomingCall);

      incomingCall.on("stream", (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream;
        remoteVideoRef.current.play().catch((err) => {
          console.warn("Remote video play interrupted:", err);
        });
      });

      incomingCall.on("close", () => {
        console.log("Call ended");
        setCall(null);
        remoteVideoRef.current.srcObject = null;
      });
    });

    peerInstance.current = peer;

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localStreamRef.current = stream;
        localVideoRef.current.srcObject = stream;
        localVideoRef.current.play().catch((err) => {
          console.warn("Local video play interrupted:", err);
        });
      })
      .catch((err) => {
        console.error("Failed to get local stream", err);
        alert("Please allow camera and microphone access.");
      });

    return () => {
      peer.destroy();
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const callPeer = () => {
    if (!remotePeerIdValue) return;
    const outgoingCall = peerInstance.current.call(
      remotePeerIdValue,
      localStreamRef.current
    );

    setCall(outgoingCall);

    outgoingCall.on("stream", (remoteStream) => {
      remoteVideoRef.current.srcObject = remoteStream;
      remoteVideoRef.current.play().catch((err) => {
        console.warn("Remote video play interrupted:", err);
      });
    });

    outgoingCall.on("close", () => {
      console.log("Call ended");
      setCall(null);
      remoteVideoRef.current.srcObject = null;
    });
  };

  const endCall = () => {
    if (call) {
      call.close();
      setCall(null);
      remoteVideoRef.current.srcObject = null;
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Peer ID:</h2>
      <div
        style={{
          backgroundColor: "#eee",
          padding: 10,
          marginBottom: 20,
          userSelect: "all",
          width: "fit-content",
        }}
      >
        {peerId || "Connecting..."}
      </div>

      <input
        type="text"
        placeholder="Enter peer ID to call"
        value={remotePeerIdValue}
        onChange={(e) => setRemotePeerIdValue(e.target.value)}
      />
      <button onClick={callPeer} disabled={!remotePeerIdValue || call}>
        Call
      </button>
      <button onClick={endCall} disabled={!call}>
        End Call
      </button>

      <div style={{ marginTop: 20, display: "flex", gap: 20 }}>
        <div>
          <h3>Local Video</h3>
          <video
            ref={localVideoRef}
            muted
            playsInline
            style={{ width: 300, height: 225, backgroundColor: "black" }}
          />
        </div>
        <div>
          <h3>Remote Video</h3>
          <video
            ref={remoteVideoRef}
            playsInline
            style={{ width: 300, height: 225, backgroundColor: "black" }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
