let initialState = [
    // {
    //     quotationNUM:'1235',
    //     companyName: 'GoMyCode',
    //     firstName: 'Asma',
    //     lastName: 'El kouni',
    //     customerID: String(Math.round(Math.random()*1000)),
    //     details:[
    //             {description: 'iPhone XR', quantity: 9},
    //             {description: 'Samsung A80', quantity: 7},
    //             {description: 'Huawei Nova 3i', quantity: 1},
    //             {description: 'Honor X', quantity: 3}
    //         ],
    //     comment: 'Do you ship the products?',
    //     date: '07/08/2019',
    //     validUntil: '08/09/2019',
    //     status: 'Waiting'
    // },
    // {
    //     quotationNUM: '7129',
    //     companyName: 'Talant',
    //     firstName: 'Islem',
    //     lastName: 'El kouni',
    //     customerID: String(Math.round(Math.random()*1000)),
    //     details:[
    //             {description: 'Climatiseur', quantity: 2},
    //         ],
    //     comment: 'Send me cheap prices and i will buy more quantity next time.',
    //     date: '29/07/2019',
    //     validUntil: '15/08/2019',
    //     status: 'Waiting'
    // },
    // {
    //     quotationNUM: '10236',
    //     companyName: 'Up&Web',
    //     firstName: 'Youssef',
    //     lastName: 'Mestiri',
    //     customerID: String(Math.round(Math.random()*1000)),
    //     details:[
    //             {description: 'Asus ROG II', quantity: 1},
    //         ],
    //     comment: 'Send me cheap prices and i will buy more quantity next time.',
    //     date: '02/08/2019',
    //     validUntil: '05/08/2019',
    //     status: 'Waiting'
    // },
    // {
    //     quotationNUM: '55602',
    //     companyName: 'Satoripop',
    //     firstName: 'Mohamed',
    //     lastName: 'Fraj',
    //     customerID: String(Math.round(Math.random()*1000)),
    //     details:[
    //             {description: 'Table 5m/2m', quantity: 10},
    //             {description: 'Climatiseur 1600', quantity: 2},
    //         ],
    //     comment: 'Send me cheap prices and i will buy more quantity next time.',
    //     date: '31/07/2019',
    //     validUntil: '05/08/2019',
    //     status: 'Waiting'
    // },
    // {
    //     quotationNUM: '1508',
    //     companyName: 'Vermeg',
    //     firstName: 'Moez',
    //     lastName: 'El kouni',
    //     customerID: String(Math.round(Math.random()*1000)),
    //     details:[
    //             {description: 'TV LED 32 inch', quantity: 1},
    //             {description: 'TV Full HD 48 inch', quantity: 5},
    //             {description: 'TV LCD 48 inch', quantity: 2},
    //         ],
    //     comment: 'How much does it cost to ship it and how much it takes ?',
    //     u0s:'200',
    //     u1s:'500',
    //     u2s:'350',
    //     a5s:'200',
    //     a6s:'2500',
    //     a7s:'700',
    //     subtotal: '4450',
    //     tax: '400',
    //     total: '4850',
    //     date: '25/07/2019',
    //     validUntil: '20/08/2019',
    //     status: 'Answered'
    // },
    // {
    //     quotationNUM: '98789',
    //     companyName: 'HA',
    //     firstName: 'Neji',
    //     lastName: 'Cheibi',
    //     customerID: String(Math.round(Math.random()*1000)),
    //     details:[
    //             {description: 'X-BOX ONE SCORPION', quantity: 4},
    //             {description: 'Blue-Ray DVD', quantity: 5},
    //         ],
    //     comment: 'How much does it cost to ship it and how much it takes ?',
    //     u0s:'200',
    //     u1s:'500',
    //     a5s:'800',
    //     a6s:'2500',
    //     subtotal: '3300',
    //     tax: '400',
    //     total: '3700',
    //     date: '15/07/2019',
    //     validUntil: '20/07/2019',
    //     status: 'Answered'
    // },
    // {
    //     quotationNUM: '15632',
    //     companyName: 'LC Waikicki',
    //     firstName: 'Ahmed',
    //     lastName: 'TM',
    //     customerID: String(Math.round(Math.random()*1000)),
    //     details:[
    //             {description: 'White Pair of Runners', quantity: 5},
    //             {description: 'Red Hats', quantity: 5},
    //             {description: 'White Sockets', quantity: 12},
    //         ],
    //     comment: 'How much does it cost to ship it and how much it takes ?',
    //     u0s:'200',
    //     u1s:'500',
    //     u2s:'350',
    //     a5s:'200',
    //     a6s:'2500',
    //     a7s:'700',
    //     subtotal: '4450',
    //     tax: '400',
    //     total: '4850',
    //     date: '20/07/2019',
    //     validUntil: '25/07/2019',
    //     status: 'Answered'
    // },
    // {
    //     quotationNUM: '3302',
    //     companyName: 'Exist',
    //     firstName: 'Nafaa',
    //     lastName: 'Kacem',
    //     customerID: String(Math.round(Math.random()*1000)),
    //     details:[
    //             {description: 'Brother Printer', quantity: 1},
    //             {description: 'Brother Paper RAM', quantity: 5},
    //             {description: 'TV LCD 48 inch', quantity: 2},
    //             {description: 'USB Cable 5m', quantity: 1},
    //         ],
    //     comment: 'How much does it cost to ship it and how much it takes ?',
    //     u0s:'2000',
    //     u1s:'500',
    //     u2s:'350',
    //     u3s:'350',
    //     a5s:'200',
    //     a6s:'2500',
    //     a7s:'700',
    //     a8s:'700',
    //     subtotal: '44500',
    //     tax: '400',
    //     total: '48500',
    //     date: '15/07/2019',
    //     validUntil: '20/07/2019',
    //     status: 'Answered'
    // },
    // {
    //     quotationNUM: '9956',
    //     companyName: 'Proxym',
    //     firstName: 'Nessrine',
    //     lastName: 'Abdallah',
    //     customerID: String(Math.round(Math.random()*1000)),
    //     details:[
    //             {description: 'Laser Printer Canon', quantity: 2},
    //             {description: 'Brother Fax Paper', quantity: 10}
    //         ],
    //     comment: 'The shipping is it for free ?',
    //     date: '20/07/2019',
    //     validUntil: '05/08/2019',
    //     u0s: '2000',
    //     u1s: '15',
    //     a5s: '4000',
    //     a6s: '150',
    //     subtotal: '2150',
    //     tax: '100',
    //     total: '2250',
    //     status: 'Sold'
    // },
    // {
    //     quotationNUM: '12359',
    //     companyName: 'EPI',
    //     firstName: 'Rabeh',
    //     lastName: 'Hamdi',
    //     customerID: String(Math.round(Math.random()*1000)),
    //     details:[
    //             {description: 'Wireless Mouses', quantity: 20},
    //         ],
    //     comment: 'as soon as possible, please',
    //     date: '10/07/2019',
    //     validUntil: '11/07/2019',
    //     u0s: '30',
    //     a5s: '600',
    //     subtotal: '600',
    //     tax: '30',
    //     total: '630',
    //     status: 'Sold'
    // },
    // {
    //     quotationNUM: '95623',
    //     companyName: 'JCI',
    //     firstName: 'Ghafir',
    //     lastName: 'Derouich',
    //     customerID: String(Math.round(Math.random()*1000)),
    //     details:[
    //             {description: 'Dell XPS15', quantity: 2},
    //             {description: 'Mother board Asus x692fs', quantity: 1}
    //         ],
    //     comment: 'The shipping is it for free ?',
    //     date: '20/07/2019',
    //     validUntil: '05/08/2019',
    //     u0s: '5200',
    //     u1s: '800',
    //     a5s: '10400',
    //     a6s: '800',
    //     subtotal: '11200',
    //     tax: '300',
    //     total: '11500',
    //     status: 'Sold'
    // },
    // {
    //     quotationNUM: '7530',
    //     companyName: 'GoMyCode',
    //     firstName: 'Bassem',
    //     lastName: 'Ibrahim',
    //     customerID: "6632",
    //     details:[
    //             {description: 'Wheelchair', quantity: 12},
    //         ],
    //     comment: '',
    //     date: '20/07/2019',
    //     validUntil: '05/08/2019',
    //     u0s: '250',
    //     a5s: '3000',
    //     subtotal: '3000',
    //     tax: '400',
    //     total: '3400',
    //     status: 'Sold'
    // },
    // {
    //     quotationNUM: '7530',
    //     companyName: 'GoMyCode',
    //     firstName: 'Bassem',
    //     lastName: 'Ibrahim',
    //     customerID: "6632",
    //     details:[
    //             {description: 'Wheelchair', quantity: 12},
    //         ],
    //     comment: '',
    //     date: '16/08/2019',
    //     validUntil: '20/08/2019',
    //     u0s: '250',
    //     a5s: '3000',
    //     subtotal: '3000',
    //     tax: '400',
    //     total: '34000',
    //     status: 'Sold'
    // }
]

const reducerReqWaiting = ( state = initialState, action) => {
    switch(action.type){
        case 'CREATE_REQ':
            return (
                [...state, action.payload]
            )
        case 'UPDATE_TO_ANSWERED':
            return (
                state.map(el => el.quotationNUM === action.quotreq.quotationNUM ? action.quotreq : el)
            )
        case 'DENY_QUOT':
            return (
                state.map(el => el.quotationNUM === action.quotResponse.quotationNUM ? action.quotResponse : el)
            )
        case 'ACCEPT_QUOT':
            return (
                state.map(el => el.quotationNUM === action.quotResponse.quotationNUM ? action.quotResponse : el)
            )
        case 'UPDATE_TABS':
            return (
                state=action.updated
            )  
        default:
            return state
}
}

export default reducerReqWaiting;