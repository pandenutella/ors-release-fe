const initialStories = [
    {
        number: "ST00000",
        description: "A story",
        status: 5,
    },
    {
        number: "ST00001",
        description: "Another story",
        status: 4,
    },
    {
        number: "ST00002",
        description: "Another story",
        status: 3,
    },
    {
        number: "ST00003",
        description: "Another story",
        status: 2,
    },
    {
        number: "ST00004",
        description: "Another story",
        status: 1,
    },
    {
        number: "ST00005",
        description: "Another story",
        status: 0,
    },
];

export default function stories(state = initialStories, action) {
    switch (action.type) {
        default:
            return state;
    }
}
