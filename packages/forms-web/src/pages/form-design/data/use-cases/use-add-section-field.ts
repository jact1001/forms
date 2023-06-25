export const addSectionField = (sectionId: string, field: any, sections: any[]) => {
    return [{...sections[0], fields: [...sections[0].fields, field]}];
}
