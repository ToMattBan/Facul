exports.up = function(knex) {
    return knex.schema.createTable('player', 
    function (table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('titulo').notNullable();
        table.string('classe').notNullable();
        table.string('raça').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('player');
};