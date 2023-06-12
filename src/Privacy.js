import {Link} from 'react-router-dom'

const Privacy = () => {
  return (
    <div className='privacyContainer'>
        <h1 style={{ fontSize: "2rem" }}>Privacy Policy</h1>
        <pre style={{ whiteSpace: 'pre-wrap' }}>
            <br /> 
            <b>We at Sprigs Bakery ("we," "us," or "our") are committed to protecting the privacy of our customers ("you" or "your") and maintaining the confidentiality of the personal information you provide to us. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you interact with our website and services.</b>

            <br /> <br />
            <b>Information We Collect</b>: <br />
            We may collect various types of information from you when you visit our website or use our services. This may include:
            Personal information such as your name, email address, phone number, and billing/shipping address.
            Payment information necessary for processing orders, such as credit card details.
            Information automatically collected through cookies and similar technologies, including your IP address, browser type, and browsing behavior on our website.
            <br /> <br />
            <b>Use of Information</b>: <br />
            We may use the collected information for the following purposes:
            To process and fulfill your orders for our bakery products.
            To communicate with you regarding your orders, inquiries, or requests.
            To personalize and improve your experience on our website.
            To send you promotional materials, special offers, or newsletters, with your consent.
            To analyze and monitor the usage of our website, troubleshoot technical issues, and prevent fraud.
            <br /> <br />
            <b>Data Sharing and Disclosure</b>: <br />
            We will not sell, rent, or disclose your personal information to third parties, except in the following circumstances:
            With your consent: We may share your information with third parties if you provide your consent for such sharing.
            Service providers: We may engage trusted third-party service providers to assist us in operating our business and providing services to you. These service providers are obligated to maintain the confidentiality of your information and are only permitted to use it for specified purposes.
            Legal requirements: We may disclose your information to comply with applicable laws, regulations, legal processes, or enforceable governmental requests.
            <br /> <br />
            <b>Data Security</b>: <br />
            We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, please note that no data transmission over the internet or electronic storage method can guarantee absolute security. We strive to maintain the security of your information but cannot guarantee its complete security.
            <br /> <br />
            <b>Your Rights</b>: <br />
            You have certain rights regarding your personal information, including the right to access, update, or delete your information. If you wish to exercise any of these rights, please contact us using the contact information provided below. We will make reasonable efforts to respond to your requests in a timely manner.
            <br /> <br />
            <b>External Links</b>: <br />
            Our website may contain links to external sites that are not operated by us. Please note that we have no control over the content and practices of these sites, and we are not responsible for their privacy policies or practices. We encourage you to review the privacy policies of those sites before providing any personal information.
            <br /> <br />
            <b>Updates to Privacy Policy</b>: <br />
            We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on our website. We encourage you to review this Privacy Policy periodically for any updates.
            <br /> <br />
            <b>Contact Us</b>: <br />
            If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at {' '}
            {<Link to='/Contact'>Contact</Link>}.
            <br /> <br />
            <b>By using our website or providing us with your personal information, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your personal information as described herein.
            Thank you for entrusting us with your personal information. We appreciate your trust in our bakery and strive to provide you with the best service and protection of your privacy.
            <br /> <br />
            -Sprigs Bakery </b>
        </pre>
        
    </div>
  )
}

export default Privacy