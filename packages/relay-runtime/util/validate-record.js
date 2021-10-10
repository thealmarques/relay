import { RelaySchema } from '../store/RelaySchema';

export function validateRecord(name, record) {
    const schema = RelaySchema.get();
    const type = schema.assertCompositeType(schema.expectTypeFromString(name));
    const fields = schema.getFields(type);

    fields.map((field) => {
      if (process.env.NODE_ENV === 'development' && schema.isNonNull(field.type) && !record.getValue(field.name)) {
        console.warn(`Oh no! we forgot to create & set the ${type} ${field.name}! ${field.name} should be non-null!`);
      }
    });
}