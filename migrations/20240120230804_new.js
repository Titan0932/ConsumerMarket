

async function up(knex){
    await knex.schema.createTable("users", (table) => {
        table.integer("id").primary();
        table.string("name").notNullable();
        table.string("image");
        table.dateTime("dob").notNullable();
        table.string("email").notNullable();
        table.string("password").notNullable();
        table.string("city").notNullable();
        table.string("state").notNullable();
        table.string("country").notNullable();
        table.string("address").notNullable();

    })
}


async function down(knex){
    await knex.schema.dropTable("Consumer_Market");
}

module.exports= {
    up,
    down
}
