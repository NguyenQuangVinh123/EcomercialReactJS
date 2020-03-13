import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const puclicKey = 'pk_test_hd6qcrwiKvm7pNdF4BrIziyV00eGA8XjgR';

    const onToken = token => {
        axios({
            url : 'payment',
            method : 'post',
            data : {
                amount : priceForStripe,
                token
            }
        }).then((res) => {
            alert('Payment Succesful')

        }).catch(error =>{
            console.log('Payment error : ',JSON.parse(error))
            alert('There was an issue')
        })
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name = 'Cloth Shopping Ltd'
            billingAddress
            shippingAddress
            image = ''
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel='Pay Now'
            token = {onToken}
            stripeKey = {puclicKey}
        />
    );
};

export default StripeCheckoutButton