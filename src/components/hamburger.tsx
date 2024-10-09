import React, { useState } from "react";
import { FaWallet, FaCopy, FaSignOutAlt } from "react-icons/fa";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletMultiButton,
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";

const HamburgerMenu: React.FC = () => {
  const { publicKey, disconnect } = useWallet();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCopyAddress = () => {
    if (publicKey) {
      navigator.clipboard.writeText(publicKey.toBase58());
      alert("Wallet address copied to clipboard");
    }
  };

  const handleDisconnectWallet = async () => {
    try {
      await disconnect();
      alert("Wallet disconnected");
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  return (
    <WalletModalProvider>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center w-10 h-10 rounded-full  text-white hover:bg-purple-600 focus:outline-none"
          aria-label="Toggle Wallet Menu"
          style={{
            background: "linear-gradient(to right, #a15e9e, #9a6aa2)",
          }}
        >
          <FaWallet className="w-6 h-6" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white z-10">
            {publicKey ? (
              <div className="p-4">
                <p className="text-sm text-gray-700 mb-4">
                  {publicKey.toBase58().slice(0, 6)}...
                  {publicKey.toBase58().slice(-4)}
                </p>

                <button
                  onClick={handleCopyAddress}
                  className="flex items-center w-full py-2 px-3 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <FaCopy className="mr-2" /> Copy Address
                </button>

                <WalletMultiButton className="flex items-center w-full py-2 px-3 mt-2 rounded-md text-blue-500 hover:bg-blue-100" />

                <button
                  onClick={handleDisconnectWallet}
                  className="flex items-center w-full py-2 px-3 mt-2 rounded-md text-red-500 hover:bg-red-100"
                >
                  <FaSignOutAlt className="mr-2" /> Disconnect Wallet
                </button>
              </div>
            ) : (
              <div className="p-4">
                <WalletMultiButton />
              </div>
            )}
          </div>
        )}
      </div>
    </WalletModalProvider>
  );
};

export default HamburgerMenu;
