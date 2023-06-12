import {Link} from 'react-router-dom'
const Terms = () => {
  return (
    <div className="termsContainer">
        <h1 style={{ fontSize: "2rem" }}>Terms of Service</h1>
        <pre style={{ whiteSpace: 'pre-wrap' }}>
        <br /> <br />
        <b>Please read these Terms of Service ("Terms") carefully before using our website and services provided by Sprigs Bakery. These Terms constitute a legally binding agreement between you ("User," "you," or "your") and Sprigs Bakery ("we," "us," "our," or "the bakery"). By accessing or using our website, you agree to be bound by these Terms.</b>
        <br /> <br />
        <b>Acceptance of Terms</b>:<br />
        By accessing or using our website, you acknowledge that you have read, understood, and agree to comply with these Terms. If you do not agree with any provision of these Terms, please refrain from using our website and services.
        <br /><br />
        <b>Intellectual Property</b>:<br />
        All content on our website, including but not limited to text, graphics, images, logos, and trademarks, is the intellectual property of Sprigs Bakery or its respective owners. You agree not to reproduce, distribute, modify, or create derivative works based on such content without our prior written consent.
        <br /><br />
        <b>Use of Services</b>:<br />
        Our website and services are provided for personal and non-commercial use. You agree not to use our website for any unlawful purpose or in any way that could damage, disable, or impair its functionality. You also agree not to access or attempt to access any unauthorized areas of our website or interfere with other users' access or enjoyment of the website.
        <br /><br />
        <b>Ordering and Payments</b>:<br />
        When placing an order through our website, you agree to provide accurate and complete information, including billing and shipping details. All payments for products and services are processed securely, and you agree to pay the specified amount for your order, including any applicable taxes and fees.
        <br /><br />
        <b>Delivery and Returns</b>:<br />
        We strive to ensure timely delivery of our bakery products. However, delivery times may vary based on factors beyond our control. In the event of any issues with your order or product, please contact us promptly. We may offer returns or exchanges for certain situations as outlined in our Returns Policy.
        <br /><br />
        <b>Limitation of Liability</b>:<br />
        To the extent permitted by law, Sprigs Bakery and its affiliates shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of or in connection with the use of our website or services. We make no warranties or representations regarding the accuracy or reliability of the content on our website.
        <br /><br />
        <b>Modifications to Terms</b>:<br />
        We reserve the right to modify these Terms at any time without prior notice. Any changes will be effective immediately upon posting on our website. Your continued use of our website after any modifications constitutes your acceptance of the revised Terms.
        <br /><br />

        If you have any questions or concerns about these Terms, please contact us at {<Link to='/Contact'>Contact</Link>}. Thank you for choosing Sprigs Bakery, and we look forward to serving you with our delicious baked goods.
        <br />
        </pre>
    </div>
  )
}

export default Terms