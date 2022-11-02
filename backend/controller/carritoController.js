const CreateOrder = (request, response) => {
    try {
        const usuario = request.body.usuario; //usuario
        const carrito = request.body.carrito; //carrito
        const total = request.body.total;


        let query = `INSERT INTO compra
                                (producto, usuario, total)
                            VALUES
                            (
                                ${carrito.id},
                                ${usuario.id},
                                ${total}
                            );`;

                // execute query
                db.query(query, (err, result) => {
                    if (err != null) response.status(500).send({ error: err.message });
                    return response.json(result);
                });
                return response.json(result);

    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

const order = {
    CreateOrder
};

module.exports = order;