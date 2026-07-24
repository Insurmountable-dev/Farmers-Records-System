const sqlStatements = [

    {
        name: "invalidRecords",
        query: `
            SELECT * 
            FROM producedeliveries
            WHERE 
                quantityDelivered <= 0
                OR pricePerUnit <= 0
                OR farmerNumber IS NULL
                OR farmerNumber = '';
        `
    },


    {
        name: "updateNetPayments",
        query: `
            UPDATE producedeliveries
            SET netPayment = quantityDelivered * pricePerUnit;
        `
    },


    {
        name: "largeDeliveries",
        query: `
            SELECT *
            FROM producedeliveries
            WHERE quantityDelivered > 200;
        `
    },


    {
        name: "searchFarmer",
        query: `
            SELECT *
            FROM producedeliveries
            WHERE farmerNumber = ?;
        `
    },


    {
        name: "updatePaymentStatus",
        query: `
            UPDATE producedeliveries
            SET paymentStatus = ?
            WHERE farmerNumber = ?;
        `
    },


    {
        name: "pendingPayments",
        query: `
            SELECT *
            FROM producedeliveries
            WHERE paymentStatus = 'Pending';
        `
    }

];


module.exports = sqlStatements;