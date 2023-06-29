export const updateFieldById = (
    field_id: string, 
    key_field: string, 
    value_field: string,
    sections: any[]
    ) => {

    const updateField = sections[0].fields.map((field: any) => {
        if (field.id === field_id) {
            const { key_field } = field;
            const newField = {
                ...field,
                key_field: value_field
            }
            return newField;
        }
        return `El ${field_id} no se encuentra almacenado`;
    });
    return [{ ...sections[0], updateField }]
}

// pasa en el estado de app, en forms collection 
// en los campos que recibe value, hay string y boolean
// como asignar el key que llega al elemento 