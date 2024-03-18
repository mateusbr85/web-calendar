import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', function (table) {
        table.increments('user_id').primary();
        // Campos do usuário
        table.string('user_text_name').notNullable(); // Nome do usuário (text, obrigatório)
        table.string('user_email').notNullable().unique(); // Email do usuário (email, obrigatório, único)
        table.string('user_password').notNullable(); // Senha do usuário (password, obrigatório)
        table.boolean('user_active').notNullable().defaultTo(true); // Ativo (checkbox, padrão verdadeiro)
        table.string('user_cell'); // Celular do usuário (text)
        table.timestamp('user_created_at').defaultTo(knex.fn.now())
        table.timestamp('user_updated_at').defaultTo(knex.fn.now())
        table.integer('user_created_by')
        // Adiciona um índice composto para o campo 'user_email' e 'user_active'
        table.unique(['user_email', 'user_active']);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

