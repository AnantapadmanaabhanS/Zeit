
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [step, setStep] = useState(1);

    // Step 1: Send OTP
    const handleSendOtp = (e) => {
        e.preventDefault();

        if (!/^\d{10}$/.test(phone)) {
            setError("Please enter a valid 10-digit phone number.");
            return;
        }

        setError("");
        setStep(2);
    };

    // Step 2: Verify OTP
    const handleVerifyOtp = (e) => {
        e.preventDefault();

        if (!/^\d{6}$/.test(otp)) {
            setError("Please enter a valid 6-digit OTP.");
            return;
        }

        setError("");
        setStep(3);
    };

    // Step 3: Reset Password
    const handleResetPassword = (e) => {
        e.preventDefault();

        if (newPassword.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setError("");
        setStep(4);
    };

    return (
        <div className="page">
            <div className="forgot-password-container">

                <h1>Zeit</h1>
                <h2>Forgot Password</h2>

                {step === 1 && (
                    <form onSubmit={handleSendOtp}>
                        <p>Enter your registered phone number:</p>

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phone}
                            maxLength={10}
                            onChange={(e) =>
                                setPhone(e.target.value.replace(/\D/g, ""))
                            }
                        />

                        <button type="submit">Send OTP</button>
                    </form>
                )}

                {step === 2 && (
                    <form onSubmit={handleVerifyOtp}>
                        <p>Enter the OTP sent to your phone:</p>

                        <input
                            type="text"
                            placeholder="6-digit OTP"
                            value={otp}
                            maxLength={6}
                            onChange={(e) =>
                                setOtp(e.target.value.replace(/\D/g, ""))
                            }
                        />

                        <button type="submit">Verify OTP</button>
                    </form>
                )}

                {step === 3 && (
                    <form onSubmit={handleResetPassword}>
                        <p>Enter your new password:</p>

                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />

                        <p>Confirm your new password:</p>

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <button type="submit">Reset Password</button>
                    </form>
                )}

                {step === 4 && (
                    <div>
                        <h3>Password reset successful!</h3>
                        <Link to="/">Back to Login</Link>
                    </div>
                )}

                {error && <p className="error">{error}</p>}

                {step !== 4 && (
                    <p>
                        <Link to="/">Back to Login</Link>
                    </p>
                )}

            </div>
        </div>
    );
}

export default ForgotPassword;
