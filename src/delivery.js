function deliveryDate(anOrder, isRush) {
    if (isRush) {
        return calculateRushDeliveryDate(anOrder);
    } else {
        return deliveryDateIsNotRush(anOrder);
    }
}

    function calculateRushDeliveryDate(anOrder) {
        let deliveryTime=0;
        const nearCity = ['MA', 'CT',];
        const farCity = ['NY', 'NH',];
        if (nearCity.includes(anOrder.deliveryState)) {
            deliveryTime = 1;
        } else if (farCity.includes(anOrder.deliveryState)) {
            deliveryTime = 2;
        } else {
            deliveryTime = 3;
        }
        return anOrder.placedOn.plusDays(1 + deliveryTime);
    }

    function deliveryDateIsNotRush(anOrder){
        let deliveryTime;
        if ([
            'MA',
            'CT',
            'NY',
        ].includes(anOrder.deliveryState)) {
            deliveryTime = 2;
        }
        else if ([
            'ME',
            'NH',
        ].includes(anOrder.deliveryState)) {
            deliveryTime = 3;
        }
        else {
            deliveryTime = 4;
        }
        return anOrder.placedOn.plusDays(2 + deliveryTime);
    }

    module.exports = {
        deliveryDate
    }