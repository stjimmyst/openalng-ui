export PROMO_TYPE=card
echo $PROMO_TYPE
if [ "$PROMO_TYPE" == "coin" ]; then
  export PROMO_AMOUNT=prize
else
  export PROMO_AMOUNT=null
fi

echo $PROMO_AMOUNT
