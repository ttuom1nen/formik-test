import { debug } from "console";
import { createContext } from "react";

export const MainContext = createContext(
    {
        user: {
            id: "123456",
            name: "Seppo",
            email: "seppo@testi.com",
            userGroups: ["admin", "dev"]
        },
        debug: false
    })