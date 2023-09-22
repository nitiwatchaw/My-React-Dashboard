import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift } from '@fortawesome/free-solid-svg-icons'
export const Promotiondata = [
    {
        title: "DISCOUNT",
        icon: <FontAwesomeIcon icon={faGift} />,
        amount: "$100 OFF",
        description: 'ONLY DIRST ORDER ABOVE $ 1000',
        expiry: '24-11-2019',
        code: 'MYFIRST',
        background: 'linear-gradient(56deg, rgba(113,63,221,1) 12%, rgba(140,68,212,1) 37%, rgba(173,74,210,1) 59%, rgba(195,79,209,1) 80%, rgba(226,87,206,1) 100%)'

    },
    {
        title: "CASHBACK",
        icon: <FontAwesomeIcon icon={faGift} />,
        amount: "5 TO 30%",
        description: 'ANY PURCHASE',
        expiry: '24-11-2019',
        code: '5CASHBACK',
        background: 'linear-gradient(56deg, rgba(64,57,222,1) 1%, rgba(69,80,221,1) 27%, rgba(73,112,219,1) 44%, rgba(75,143,217,1) 65%, rgba(80,180,214,1) 93%, rgba(127,198,220,1) 98%)'
    },
    {
        title: "VOUCHER",
        icon: <FontAwesomeIcon icon={faGift} />,
        amount: "20% OFF",
        description: 'PURCHASE ABOVE $50',
        expiry: '24-11-2019',
        code: '201920%',
        background: 'linear-gradient(56deg, rgba(48,211,159,1) 1%, rgba(68,213,184,1) 27%, rgba(73,209,195,1) 44%, rgba(80,204,212,1) 65%, rgba(85,200,224,1) 93%, rgba(73,194,229,1) 100%)'
    },
    {
        title: "FUEL CARD",
        icon: <FontAwesomeIcon icon={faGift} />,
        amount: "10% OFF",
        description: 'SHOPE ABOVE $50',
        expiry: '24-11-2019',
        code: 'NOV202010',
        background: 'linear-gradient(56deg, rgba(225,155,60,1) 1%, rgba(225,141,69,1) 27%, rgba(227,126,75,1) 44%, rgba(229,118,76,1) 65%, rgba(232,100,80,1) 93%, rgba(232,89,84,1) 100%)'
    },
    {
        title: "GIFT CARD",
        icon: <FontAwesomeIcon icon={faGift} />,
        amount: "20% OFF",
        description: 'PURCHASE ABOVE $50',
        expiry: '24-11-2019',
        code: 'NOV202010',
        background: 'linear-gradient(56deg, rgba(109,219,90,1) 1%, rgba(133,215,88,1) 27%, rgba(160,209,88,1) 44%, rgba(171,209,90,1) 65%, rgba(202,207,91,1) 93%, rgba(224,204,86,1) 100%)'
    },
    {
        title: "GIFT CARD",
        icon: <FontAwesomeIcon icon={faGift} />,
        amount: "30% OFF",
        description: 'PURCHASE ABOVE $50',
        expiry: '24-11-2019',
        code: 'NOV202010',
        background: 'linear-gradient(56deg, rgba(226,64,181,1) 1%, rgba(228,66,161,1) 27%, rgba(229,72,147,1) 44%, rgba(231,75,129,1) 65%, rgba(229,82,109,1) 93%, rgba(231,86,89,1) 100%)'
    }
]