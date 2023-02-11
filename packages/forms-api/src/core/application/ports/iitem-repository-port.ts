export interface IItemRepositoryPort {
    searchItems(keyWord: string): Promise<any>;
    getItem(itemId): Promise<any>;
    getItemDescription(itemId): Promise<any>;
}
