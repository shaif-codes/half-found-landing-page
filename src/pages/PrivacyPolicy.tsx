import PolicyLayout from '../components/PolicyLayout';

const PrivacyPolicy = () => {
    return (
        <PolicyLayout title="Privacy Policy">
            <section>
                <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
                <p>At Half Found, we prioritize your privacy. This policy explains how we collect (or don't), use, and protect your information when you use our anonymous chatting platform.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-white mb-4">2. Anonymity First</h2>
                <p>Our core mission is to provide an anonymous space. We do not require you to provide your real name, phone number, or address to participate in friendly conversations.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-white mb-4">3. Data Collection</h2>
                <p>We collect minimal data required for technical operation, such as device identifiers and app usage statistics to improve performance and safety. Chat logs are encrypted and treated with the highest security.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-white mb-4">4. Third-Party Services</h2>
                <p>We use third-party services for payments (Stripe/Google Play) which have their own privacy policies. We do not store your credit card information on our servers.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-white mb-4">5. Contact Us</h2>
                <p>If you have any questions, reach out to us at halffoundunicorn@gmail.com.</p>
            </section>
        </PolicyLayout>
    );
};

export default PrivacyPolicy;
