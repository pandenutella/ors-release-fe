const initialAccounts = [
    {
        domainName: "BACALJO",
        password: "123",
        firstName: "John Emmanuel",
        lastName: "Bacalla",
    },
];

export default function accounts(state = initialAccounts, action) {
    switch (action.type) {
        default:
            return state;
    }
}
