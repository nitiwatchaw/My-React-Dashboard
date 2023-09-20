import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faCartShopping, faTag, faCube, faClock, faPhoneVolume, faGear, faFileLines, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Food1 from '/img/foo1.png'
import Food2 from '/img/foo2.png'
import Food3 from '/img/foo3.png'
import Food4 from '/img/foo4.png'

import p1 from '/img/p1.jpg'
import p2 from '/img/p2.jpg'
import p3 from '/img/p3.jpg'
import p4 from '/img/p4.jpg'



export const menuData = [

    {
        id: "Dashboard",
        icon: <FontAwesomeIcon icon={faChartLine} />,
        heading: "Dashboard",
        path: '/'

    },
    {
        id: "Orders",
        icon: <FontAwesomeIcon icon={faCartShopping} />,
        heading: "Orders",
        path: '/order'
    },
    {
        id: "Promotions",
        icon: <FontAwesomeIcon icon={faTag} />,
        heading: "Promotions",
        path: '/promotion'
    },
    {
        id: "Inventory",
        icon: <FontAwesomeIcon icon={faCube} />,
        heading: "Inventory",
        path: '/inventory'
    },
    {
        id: "Bussiness Hours",
        icon: <FontAwesomeIcon icon={faClock} />,
        heading: "Bussiness Hours",
        path: '/bussiness'
    },
    {
        id: "Support",
        icon: <FontAwesomeIcon icon={faPhoneVolume} />,
        heading: "Support",
        path: '/support'
    },
    {
        id: "Setting",
        icon: <FontAwesomeIcon icon={faGear} />,
        heading: "Setting",
        path: '/setting'
    }
]

export const dropdownData = [
    {
        title: "Tomorrow"
    },
    {
        title: "Week"
    },
    {
        title: "Year"
    }
]
export const cardData = [
    {
        icon: <FontAwesomeIcon icon={faFileLines} />,
        title: "Orders",
        amount: 35485,
        percent: "28%",
        iconPercent: <FontAwesomeIcon icon={faArrowUp} />,
        amountLastYear: 25450,
        color: "#459a7d",
        series: [
            {
                name: "Orders",
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ],
    },
    {
        icon: <FontAwesomeIcon icon={faFileLines} />,
        title: "Avg. Order Amount",
        amount: 35485,
        percent: "28%",
        iconPercent: <FontAwesomeIcon icon={faArrowDown} />,
        amountLastYear: 6232,
        color: "#fc8b34",
        series: [
            {
                name: "Avg. Order Amount",
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ],
    },
    {
        icon: <FontAwesomeIcon icon={faFileLines} />,
        title: "Unique Customers",
        amount: 35485,
        percent: "28%",
        iconPercent: <FontAwesomeIcon icon={faArrowUp} />,
        amountLastYear: 12840,
        color: "#459a7d",
        series: [
            {
                name: "Unique Customers",
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ],
    },
    {
        icon: <FontAwesomeIcon icon={faFileLines} />,
        title: "Net Sales",
        amount: 35485,
        percent: "28%",
        iconPercent: <FontAwesomeIcon icon={faArrowUp} />,
        amountLastYear: 8569,
        color: "#459a7d",
        series: [
            {
                name: "Net Sales",
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ],
    },
]


export const dropdownData2 = [
    {
        title: "This Day"
    },
    {
        title: "This Week"
    },
    {
        title: "This Month"
    },
    {
        title: "This Year"
    }
]

export const FoodData = [
    {
        img: Food1,
        name: "Special Chicken",
        order: 3251,
        amount: "1235"
    },
    {
        img: Food2,
        name: "Chew Mein",
        order: 3251,
        amount: "1189"
    },
    {
        img: Food3,
        name: "BBQ Park",
        order: 3251,
        amount: "2154"
    },
    {
        img: Food4,
        name: "Masala Pasta",
        order: 3251,
        amount: "1233"
    },
]

export const Datapeople = [
    {
        img: p1,

    },
    {
        img: p2,

    },
    {
        img: p3,

    },
    {
        img: p4,

    },
]