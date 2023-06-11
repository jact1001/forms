export interface IFormRepositoryPort {
    getForm(): Promise<any>;
    saveForm(form): Promise<any>;
}
