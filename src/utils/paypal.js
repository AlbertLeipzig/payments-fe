import { PayPalScriptProvider } from '@paypal/react-paypal-js';
export default function App() {
  return <PayPalScriptProvider options={{ 'client-id': YOUR_CLIENT_ID }} />;
}
