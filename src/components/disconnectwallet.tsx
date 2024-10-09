// src/components/DisconnectWalletButton.tsx

import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";

const DisconnectWalletButton: React.FC = () => {
  const { disconnect, connected } = useWallet();

  const handleDisconnect = async () => {
    if (connected) {
      await disconnect();
      console.log("Wallet disconnected");
    } else {
      console.log("No wallet connected");
    }
  };

  return (
    <button
      className="absolute top-4 right-4 bg-gray-200 text-sm text-gray-800 py-2 px-4 rounded-lg z-20"
      onClick={handleDisconnect}
    >
      Disconnect Wallet
    </button>
  );
};

export default DisconnectWalletButton;
