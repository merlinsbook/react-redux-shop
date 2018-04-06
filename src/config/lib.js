/**
 *  GET A PUBLISHABLE API KEY AND REPLACE THE STRING BELOW TO GET STRIPE TO WORK.
 *  @see https://stripe.com/
 */
export const STRIPE_API_KEY = 'your_stripe_api_key_here';

// theming
export { defaultTheme, darkTheme } from '../common/themes/themes';

// main view
export { View } from '../components/wrappers';
export { Header, Footer, Layout, Content, Link, List } from '../components/Layout';


// navigation
export { Navigation } from '../containers/navigation/Navigation';

// shop
export { Shop } from '../containers/shop/Shop';
export { Cart } from '../containers/shop/Cart';
export { CheckoutForm } from '../containers/shop/CheckoutForm';

// Views
export { AppView } from '../views/AppView';
export { CartView } from '../views/CartView';
export { ShopView } from '../views/ShopView';
export { MainView } from '../views/MainView';

