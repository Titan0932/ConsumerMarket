

export async function up(knex){
    await knex.schema.createTable("Consumer_Market", (table) => {
        table.integer("id").primary();
        table.string("name").notNullable();
        table.string("image");
        table.float("price").notNullable();
        table.float("rating");
        table.integer("numReviews");
        table.integer("countInStock");
        table.string("slug").notNullable();
        table.string("description");

    })
}


export async function down(knex){
    await knex.schema.dropTable("posts");
}

