export class GroupSql {
    private static emails: string[] = ["hansarias74@gmail.com", "rtaimal@gmail.com"];

    static belongsToGroupSql (email : string) {
        return this.emails.includes(email);
    }
}