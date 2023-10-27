exports.up = function(knex) {
    return knex.schema.createTable('pet', 
    function (table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('titulo').notNullable();
        table.string('cor').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('pet');
};