var query = connection.query(
    'SELECT * FROM productos p LEFT JOIN clasificacion c ON p.clasificacion = c.id', [], 
    function(error, result){
       if(error){
           throw error;
       }else{
           console.log(result);
       }
   }
);




/*const GetProducts = (request, response) => {
    try {
        let query = `SELECT TOP 10
                            P.product_id AS 'ProductId',
                            P.name AS 'Name',
                            P.description AS 'Description',
                            P.price AS 'Price',
                            P.discounted_price AS 'DescountedPrice',
                            P.image AS 'PrimaryImage',
                            P.image_2 AS 'SecondaryImage',
                            P.thumbnail AS 'Thumbnail',
                            P.display AS 'Display',
                            P.category_id AS 'CategoryId',
                            P.department_id AS 'DepartmentId'
                    FROM product P, category C, product_category PC
                    WHERE P.product_id = PC.product_id 
                        AND C.category_id = PC.category_id;`; // query database to get all the departments'

        let productCountQuery = `SELECT COUNT(P.product_id) AS 'ProductCount'
                    FROM 
                        product P, 
                        category C, 
                        department D, 
                        product_category PC
                    WHERE P.product_id = PC.product_id 
                        AND C.category_id = PC.category_id
                        AND C.department_id = D.department_id
                    ${filterDepartment} ${filterCategory};`;

        // execute query
        db.query(query + productCountQuery, [1, 2], (err, result) => {
            if (err != null){
                response.status(500).send({ error: err.message });
            }

            let resultSet = {
                Products: result[0], 
                ProductCount: result[1]
            }
            // get product attributes
            let productIdList = [];
            resultSet.Products.forEach((element, index) => {
                 productIdList.push(element.ProductId);
            });

            let productlistString = productIdList.toString();

            let query = `SELECT 
                A.name AS 'AttributeName',
                A.attribute_id AS 'AttributeId',
                AV.attribute_value_id AS 'AttributeValueId',
                AV.value AS 'AttributeValue',
                PA.product_id AS 'ProductId'
            FROM attribute_value AV
            INNER JOIN attribute A
                    ON AV.attribute_id = A.attribute_id
            INNER JOIN product_attribute PA
                    ON PA.attribute_value_id = AV.attribute_value_id
            WHERE AV.attribute_value_id IN
                    (SELECT attribute_value_id
                    FROM   product_attribute
                    WHERE  product_id in (${productlistString}))
            ORDER BY A.name`;

            // execute query
            db.query(query, (err, result) => {
                if (err != null){
                    response.status(500).send({ error: err.message });
                }

                resultSet.Products.forEach((element,index) => {
                    var aaa = result.filter(a => a.ProductId == element.ProductId);
                    resultSet.Products[index]['Size'] = aaa.filter(a => a.AttributeId == 1);
                    resultSet.Products[index]['Color'] = aaa.filter(a => a.AttributeId == 2);
                });
                return response.json(resultSet);
            });

           return response.json(result);
       });
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

const GetProductAttributes = (request, response) => {
    try {
        let query = 'CALL catalog_get_attribute_values(1);CALL catalog_get_attribute_values(2)'
        // execute query
        db.query(query, [1, 2], (err, result) => {
            if (err != null){
                response.status(500).send({ error: err.message });
               }
            return response.json({Size: result[0], Color: result[1]});
        });
    } catch (error) {
        
    }
};

const product = {
    GetProducts,
    GetProductAttributes,
    GetFilteredProducts,
    GetProductDetailsById
};

module.exports = product;*/