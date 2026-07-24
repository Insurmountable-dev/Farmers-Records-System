const sql = [
    {
        name: "farmerNumbers",
        query: "SELECT farmerNumber FROM producedeliveries"
    },
    {
        name: "farmerNames",
        query: "SELECT farmerName FROM producedeliveries"
    },
    {
        name: "produceTypes",
        query: "SELECT produceType FROM producedeliveries"
    },
    {
        name: "quantities",
        query: "SELECT quantityDelivered FROM producedeliveries"
    },
    {
        name: "prices",
        query: "SELECT pricePerUnit FROM producedeliveries"
    },
    {
        name: "paymentStatus",
        query: "SELECT paymentStatus FROM producedeliveries"
    }
];


module.exports = sql;