import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const RefundPolicy = () => {
    return (
        <PolicyLayout title="Refund & Cancellation Policy">
            <section>
                <h2 className="text-xl font-bold text-white mb-4">1. No-Refund Policy</h2>
                <p>At Half Found, all purchases of virtual items (coins, top-ups, etc.) are final. We operate on a strict <strong>no-refund policy</strong> for all digital products and services once they have been consumed or added to your account.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-white mb-4">2. Digital Goods</h2>
                <p>Since our services are digital and provided instantly upon purchase, they are non-tangible and non-returnable.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-white mb-4">3. Cancellation</h2>
                <p>You may stop using our services at any time. However, any remaining balance in your wallet will not be refunded upon account deletion or inactivation.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-white mb-4">4. Exceptions</h2>
                <p>In the rare event of a technical error where a payment was processed but items were not delivered, please contact us within 48 hours for manual resolution.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-white mb-4">5. Contact</h2>
                <p>For payment-related inquiries: halffoundunicorn@gmail.com</p>
            </section>
        </PolicyLayout>
    );
};

export default RefundPolicy;
