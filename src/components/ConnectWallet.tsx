import React, { useState } from "react";
import { useFrame } from "frames.js";

const ConnectWallet = () => {
  const [connected, setConnected] = useState<boolean>(false);
  const { connect, address } = useFrame();

  const handleConnect = async () => {
    try {
      await connect();
      setConnected(true);
    } catch (error) {
      console.error("Error connecting wallet:", error);
