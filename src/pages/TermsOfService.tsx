import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const TermsOfService = () => {
    return (
        <PolicyLayout title="Terms of Service">
            <section>
                <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>By using the Half Found app or website, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-white mb-4">2. User Conduct</h2>
                <p>Half Found is a safe space. Harassment, hate speech, bullying, or any form of illegal activity is strictly prohibited. Users found violating these terms will be permanently banned.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-white mb-4">3. Age Restriction</h2>
                <p>You must be at least 18 years old to use Half Found. By using the app, you represent that you meet this age requirement.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-white mb-4">4. Virtual Items</h2>
                <p>The app may include virtual items (coins/tokens). These are non-transferable and have no real-world monetary value outside of the app usage.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-white mb-4">5. Disclaimer</h2>
                <p>Our service is provided "as is" without warranties of any kind. We are not responsible for the content of conversations between anonymous users.</p>
            </section>
        </PolicyLayout>
    );
};

export default TermsOfService;
