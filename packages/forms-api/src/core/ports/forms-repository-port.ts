export interface IFormRepositoryPort {
    getForms(): Promise<any>;
    saveForm(form): Promise<any>;
}
