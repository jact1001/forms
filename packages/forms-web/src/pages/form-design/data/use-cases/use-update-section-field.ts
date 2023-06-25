export const updateSectionField = (sectionId: string, field: any, sections: any[]) => {
    const fields = sections[0].fields.map((saveField: any) => {
        if (saveField.form_field_id === field.form_field_id){
            return field;
        }
        return saveField;
    });
    return [{...sections[0], fields}];
}
