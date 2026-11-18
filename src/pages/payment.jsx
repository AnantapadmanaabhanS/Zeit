
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PaymentOption({
  icon,
  name,
  subtitle,
  disabled = false,
  badge,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`payment-option ${selected ? "selected-payment" : ""} ${
        disabled ? "disabled-payment" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="payment-icon">{icon}</span>

      <span className="payment-details">
        <span className="payment-name">{name}</span>
        {subtitle && <small>{subtitle}</small>}
      </span>

      {badge && <span className="new-badge">{badge}</span>}

      {disabled ? (
        <small className="ineligible">Currently Ineligible</small>
      ) : (
        <span className="payment-arrow">
          {selected ? "✓" : "›"}
        </span>
      )}
    </button>
  );
}

function Payment() {
  const navigate = useNavigate();

  const [selectedMethod, setSelectedMethod] = useState("");
  const [showWallets, setShowWallets] = useState(false);
  const [showBanks, setShowBanks] = useState(false);

  const wallets = [
    { name: "PhonePe Wallet", icon: "🟣" },
    { name: "Amazon Pay Balance", icon: "🟡" },
    { name: "Paytm Wallet", icon: "🔵" },
    { name: "Mobikwik Wallet", icon: "🟢" },
  ];

  const banks = [
    { name: "HDFC Bank", icon: "🏦" },
    { name: "ICICI Bank", icon: "🏦" },
    { name: "SBI", icon: "🏦" },
    { name: "Axis Bank", icon: "🏦" },
    { name: "Kotak Bank", icon: "🏦" },
    { name: "Bank of Baroda", icon: "🏦" },
  ];

  const handlePayment = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="payment-page">

      {/* Header */}
      <div className="payment-header">
        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ‹
        </button>

        <div>
          <h2>Payment Options</h2>
          <p>
            Home - 16B, 4V2+RHF, Talwandi, Kota,
            Rajasthan 324005, India
          </p>
        </div>
      </div>

      <div className="payment-content">

        {/* Amount */}
        <div className="payment-amount">
          <strong>To Pay: </strong>
          <span>₹2021</span>
        </div>

        {/* UPI */}
        <section className="payment-section">
          <h4>📱 UPI - Pay by UPI</h4>

          <PaymentOption
            icon="▦"
            name="Pay via QR Code"
            badge="NEW"
            selected={selectedMethod === "UPI"}
            onClick={() => handlePayment("UPI")}
          />
        </section>

        {/* Cards */}
        <section className="payment-section">
          <h4>Credit & Debit Cards</h4>

          <PaymentOption
            icon="＋"
            name="Add New Card"
            subtitle="Visa, Mastercard, Rupay & more"
            selected={selectedMethod === "Card"}
            onClick={() => handlePayment("Card")}
          />
        </section>

        {/* Pay Later */}
        <section className="payment-section">
          <h4>Pay Later</h4>

          <PaymentOption
            icon="▷"
            name="LazyPay"
            disabled={true}
          />
        </section>

        {/* Wallets */}
        <section className="payment-section">
          <h4>Wallets</h4>

          <div className="payment-group">
            {wallets
              .slice(0, showWallets ? wallets.length : 2)
              .map((wallet) => (
                <PaymentOption
                  key={wallet.name}
                  icon={wallet.icon}
                  name={wallet.name}
                  selected={selectedMethod === wallet.name}
                  onClick={() => handlePayment(wallet.name)}
                />
              ))}

            <button
              className="view-more"
              onClick={() => setShowWallets(!showWallets)}
            >
              {showWallets
                ? "⌃  View Less Wallets"
                : "⌄  View More Wallets"}
            </button>
          </div>
        </section>

        {/* Pluxee */}
        <section className="payment-section">
          <h4>Pluxee</h4>

          <PaymentOption
            icon="＋"
            name="Add Pluxee Card"
            selected={selectedMethod === "Pluxee"}
            onClick={() => handlePayment("Pluxee")}
          />
        </section>

        {/* Netbanking */}
        <section className="payment-section">
          <h4>Netbanking</h4>

          <div className="payment-group">

            <div className="bank-grid">
              {banks
                .slice(0, showBanks ? banks.length : 4)
                .map((bank) => (
                  <button
                    type="button"
                    key={bank.name}
                    className={`bank-option ${
                      selectedMethod === bank.name
                        ? "selected-payment"
                        : ""
                    }`}
                    onClick={() => handlePayment(bank.name)}
                  >
                    <span>{bank.icon}</span>
                    <small>{bank.name}</small>
                  </button>
                ))}
            </div>

            <button
              className="view-more"
              onClick={() => setShowBanks(!showBanks)}
            >
              {showBanks
                ? "⌃  View Less Banks"
                : "⌄  View More Banks"}
            </button>

          </div>
        </section>

        {/* Cash on Delivery */}
        <section className="payment-section">
          <h4>Cash on Delivery</h4>

          <PaymentOption
            icon="▣"
            name="Pay by Cash / UPI on delivery"
            subtitle="COD not allowed on order above ₹2000"
            disabled={true}
          />
        </section>

        {/* Selected Method */}
        {selectedMethod && (
          <div className="selected-payment-message">
            Selected: {selectedMethod}
          </div>
        )}

      </div>
    </div>
  );
}

export default Payment;
