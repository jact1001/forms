export class GroupSql {
    private static emails: string[] = ["jact1001@gmail.com", "hansarias74@gmail.com"];

    static belongsToGroupSql (email : string) {
        return this.emails.includes(email);
    }
}