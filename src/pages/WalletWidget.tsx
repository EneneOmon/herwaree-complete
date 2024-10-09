import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ConnectWalletButton: React.FC = () => {
  const { publicKey } = useWallet();
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (publicKey) {
      // Wallet is connected, show the confirmation modal
      setShowConfirmation(true);
    }
  }, [publicKey]);

  const handleConfirm = () => {
    // User confirmed, navigate to the next page
    navigate("/herwaree/introduce");
  };

  const handleCancel = () => {
    // User canceled, hide the confirmation modal
    setShowConfirmation(false);
  };

  return (
    <div>
      <WalletMultiButton />

      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">
              Confirm Wallet Connection
            </h2>
            <p className="text-gray-700 mb-6">
              You have successfully connected your wallet. Would you like to
              proceed to the next page?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Confirm
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectWalletButton;
