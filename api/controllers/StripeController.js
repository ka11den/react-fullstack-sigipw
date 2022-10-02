export const payment = async (req, res, next) => {
  stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "rub",
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
  );
}