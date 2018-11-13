const queryExpression = (args) => {

    const keys = Object.keys(args);

    let params = keys.reduce((accum, key, idx) => {
        accum.KeyConditionExpression += ` ${key} = :${key}`;
        if (idx + 1 < keys.length) {
            accum.KeyConditionExpression += ` and`;
        }
        accum.ExpressionAttributeValues[`:${key}`] = args[key];
        return accum;
    }, {
            KeyConditionExpression: '',
            ExpressionAttributeValues: {}
        });

    return params;

}

const updateExpression = (args) => {

    const keys = Object.keys(args);

    let params = keys.reduce((accum, key, idx) => {
        accum.UpdateExpression += ` #${key} = :${key}`;
        if (idx + 1 < keys.length) {
            accum.UpdateExpression += ` ,`;
        }
        accum.ExpressionAttributeNames[`#${key}`] = key;
        accum.ExpressionAttributeValues[`:${key}`] = args[key];
        return accum;
    }, {
            UpdateExpression: 'set',
            ExpressionAttributeNames: {},
            ExpressionAttributeValues: {}
        });

    return params;

}

module.exports = {
    queryExpression,
    updateExpression
}
