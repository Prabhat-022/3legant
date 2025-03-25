
const payment = (req, res) => {
    
    const { token, products } = req.body;
    console.log('Payment received:', token, products);
    const idempotencyKey = uuidv4();

    return stripe.charges.create({
        email: token.email,
        source: token.id,
    }).then(customer => {
        console.log(customer);
        stripe.charges.create({
            amount: products.price * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: `Purchased the ${products.name}`,
            shipping: {
                name: token.card.name,
                address: {
                    line1: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zipf
                }
            }
        }, {
            idempotencyKey
        })
    }).then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err))
}

export default payment