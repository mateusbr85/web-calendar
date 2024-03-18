import { IGlobals } from "@plugins/databse/schema/SchemaTypes"

const UserSchema = {
    $GLOBALS: {
        table: 'users',
        prefix: 'user',
        icon_name: 'fa fa-folder',
        plural_name: 'Usuarios',
        singular_name: 'Usuario',
        fields: {
            user_text_name: {
                type: 'text',
                browserColumn: true,
                order: 1,
                width: 3,
                required: true,
                readonly: false,
                label: 'Nome',
            },
            user_email: {
                type: 'email',
                browserColumn: true,
                order: 2,
                width: 3,
                required: true,
                label: 'Email do Usuario'
            },
            user_password: {
                type: 'password',
                browserColumn: false,
                order: 3,
                width: 2,
                min:6,
                max: 8,
                required: true,
                label: 'Senha'
            },
            user_active: {
                type: 'checkbox',
                browserColumn: true,
                order: 5,
                width: 2,
                label: 'Ativo?'
            },
            user_cell: {
                type: 'text',
                browserColumn: true,
                order: 6,
                width: 2,
                label: 'Celular'
            },
        }
    }
} as IGlobals

export { UserSchema }
