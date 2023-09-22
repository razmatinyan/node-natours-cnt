/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
	'pk_test_51MaNe1EmwFcZYHp6dpdPtG0WxDX4G6H7mQifBz4oTOgNSIM5bkYfLiAcLoLKqWNg1LeuHRQ0f23KK90y05cl3QzK00mSZcOm8O'
);

export const bookTour = async tourId => {
	try {
		const session = await axios(
			`http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
		);

		await stripe.redirectToCheckout({
			sessionId: session.data.session.id
		});
	} catch (err) {
		showAlert('error', err);
	}
};
