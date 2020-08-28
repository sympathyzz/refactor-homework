function voyageRisk(voyage) {
    let result = 1;
    const riskZone = [
        'china',
        'east-indies',
    ];
    result+=voyage.length > 4?2:0;
    result+=voyage.length > 8?voyage.length - 8:0;
    result+=riskZone.includes(voyage.zone)?4:0;
    return Math.max(result, 0);
}

function hasChina(history) {
    return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
    let result = 1;
    result+=history.length<5?4:0;
    result += history.filter(v => v.profit < 0).length;
    result-=isChinaZoneAndHasChina(voyage)?2:0;
    return Math.max(result, 0);
}

function isChinaZoneAndHasChina(voyage) {
    return voyage.zone === 'china' && hasChina(history);
}

function voyageProfitFactor(voyage, history) {
    let result = 2;
    if (voyage.zone === 'east-indies') {
        result += 1;
    }
    if (voyage.zone === 'china' && hasChina(history)) {
        result += 4;
        if (history.length > 10) {
            result += 1;
        }
        if (voyage.length > 12) {
            result += 1;
        }
        if (voyage.length > 18) {
            result -= 1;
        }
    } else {
        if (history.length > 8) {
            result += 1;
        }
        if (voyage.length > 14) {
            result -= 1;
        }
    }
    return result;
}

function getRateBy(voyageProfitFactor, voyageRisk, captainHistoryRisk) {
    if (voyageProfitFactor * 3 > (voyageRisk + captainHistoryRisk * 2)) {
        return 'A';
    } else {
        return 'B';
    }
}

function rating(voyage, history) {
    const vpf = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);
    return getRateBy(vpf,vr,chr);
}

module.exports = {};

const voyage = {
    zone: 'west-indies',
    length: 10,
};
const history = [
    {
        zone: 'east-indies',
        profit: 5,
    }, {
        zone: 'west-indies',
        profit: 15,
    }, {
        zone: 'china',
        profit: -2,
    },
    {
        zone: 'west-africa',
        profit: 7,
    },
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);

module.exports = {
    rating, voyageProfitFactor, voyageRisk, captainHistoryRisk
}
