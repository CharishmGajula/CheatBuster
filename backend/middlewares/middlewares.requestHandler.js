import zod from "zod";

const schema=zod.object({
    name:zod
        .string()
        .max(25),
    email:zod
        .string()
        .email("Not a valid Email Id")
    });

export default schema;