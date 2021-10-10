export class RelaySchema {
    schema;

    static set(schema) {
        this.schema = schema;
    }

    static get() {
        return this.schema;
    }
}