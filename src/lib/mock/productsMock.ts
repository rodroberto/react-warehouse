export const PRODUCTS: Product[] = [
    {
        id: 1,
        images: [
            {
                id: 1,
                productId: 1,
                url: 'https://socialbio.in/imageurl/1080.png',
                isDefault: false
            },
            {
                id: 2,
                productId: 1,
                url: 'https://picsum.photos/200/300',
                isDefault: true
            },
        ],
        name: 'Panda',
        category: 'Animal',
        price: 1.5
    },
    {
        id: 2,
        images: [
            {
                id: 1,
                productId: 2,
                url: 'https://bit.ly/dan-abramov',
                isDefault: false
            },
            {
                id: 2,
                productId: 2,
                url: 'https://picsum.photos/200',
                isDefault: true
            },
        ],
        name: 'Name two',
        category: 'Computer',
        price: 2.5
    },
];

export const COMPNAY_USERS: CompanyUser[] = [
    {
        id: 1,
        firstName: 'Roberto',
        lastName: 'Rodriguez',
        email: 'test@gmail.com',
        isManager: true,
    },
    {
        id: 2,
        firstName: 'first',
        lastName: 'last',
        email: 'testtest@gmail.com',
        isManager: false,
    }
]