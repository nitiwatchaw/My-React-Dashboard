import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faCartShopping, faTag, faCube, faClock, faPhoneVolume, faGear, faFileLines, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
//dashboard
import Food1 from '/img/foo1.png'
import Food2 from '/img/foo2.png'
import Food3 from '/img/foo3.png'
import Food4 from '/img/foo4.png'

import p1 from '/img/p1.jpg'
import p2 from '/img/p2.jpg'
import p3 from '/img/p3.jpg'
import p4 from '/img/p4.jpg'


// Inventory
import invoice from '/img/inv-invoice.png'
import pack from '/img/inv-pack.png'
import pick from '/img/inv-pick.png'
import ship from '/img/inv-ship.png'

import BodyCream from '/img/Body Cream.jpg'
import ComboPack from '/img/combo-pack.jpg'
import Neutral from '/img/neutral.jpeg'
import Serium from '/img/serium.jpeg'
import DayNight from '/img/Day_Night.jpg'

//support
import landingPage from '/img/landing-page.png'
import eCommerce from '/img/online-shop.png'
import personalSale from '/img/agent.png'
import personalAccount from '/img/registration.png'
import payments from '/img/wallet.png'
import additionalService from '/img/add.png'
import partnerShip from '/img/handshake.png'
import question from '/img/conversation.png'

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
        path: '/bussinessHour'
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
                data: [87, 123, 54, 61, 42, 188, 43]
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
                data: [34, 134, 34, 78, 123, 81, 98]
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
                data: [78, 122, 70, 60, 42, 109, 65]
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
export const DataInvPack = [
    {
        img: pick,
        title: "TO BE PACKED",
        number: "106"
    },
    {
        img: pack,
        title: "TO BE SHIPPED",
        number: "6"
    },
    {
        img: ship,
        title: "TO BE DELIVERED",
        number: "10"
    },
    {
        img: invoice,
        title: "TO BE INVOICE",
        number: "3"
    },
]

export const DataSelling = [
    {
        img: Serium,
        title: "Organic Serum",
        amount: "20,000 pcs"
    },
    {
        img: ComboPack,
        title: "Combo Pack",
        amount: "18,004 pcs"
    },
    {
        img: Neutral,
        title: "Neutrals eye shadow",
        amount: "16,370 pcs"
    },
    {
        img: BodyCream,
        title: "Body Cream",
        amount: "11,850 pcs"
    },
    {
        img: DayNight,
        title: "Day & Night ",
        amount: "10,090 pcs"
    },
]

export const SaleGraph = {

    series: [44, 55, 41, 17],
    options: {
        labels: ['Amsterdam', 'New York', 'Hudson', 'Canandaigua'],

        chart: {
            type: 'donut',
        },
        plotOptions: {
            pie: {
                customScale: 1,
                donut: {
                    size: '30%',

                }
            }
        },
        stroke: {
            width: 2,
        },
        dataLabels: {
            enabled: false,


        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom'
                },
            }
        }],

    },
}

export const DataFinance =
{

    series: [{
        name: 'Cash to Cash Cycle Time',
        data: [44, 55, 57, 56, 61, 58]
    }, {
        name: 'Account Rec Days',
        data: [76, 85, 101, 98, 87, 105]
    }, {
        name: 'Inventory Days',
        data: [35, 41, 36, 26, 45, 48]
    },
    {
        name: 'Accounts Payable Days',
        data: [77, 79, 73, 77, 79, 80]
    }],

    options: {
        responsive: [
            {
                breakpoint: 950,
                options: {
                    plotOptions: {

                        bar: {
                            horizontal: true,
                            columnWidth: '38%',
                            endingShape: 'rounded',
                            borderRadius: 6,
                            borderRadiusApplication: 'end',
                        },
                    },
                }
            }
        ],
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {

            bar: {
                horizontal: false,
                columnWidth: '38%',
                endingShape: 'rounded',
                borderRadius: 6,
                borderRadiusApplication: 'end',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
        },
        yaxis: {
            title: false,

        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        },
        grid: {
            borderColor: '#f9f9fb',

        }
    },



}



export const DataInvIncome =
{

    series: [{
        name: "Income",
        data: [50, 201, 35, 151, 509, 362, 269, 469]
    }],
    options: {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            dropShadow: {
                enabled: true,
                top: 20,
                left: 0,
                blur: 1,
                opacity: 0.2,
                color: "#189e7d",
            }
        },
        colors: ['#189e7d'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',

        },
        title: {
            show: false
        },

        xaxis: {
            labels: {
                show: false
            },

        },
        yaxis: {
            labels: {
                show: false
            }
        },
        grid: {
            show: false
        }
    },


};
export const DataInvExpense =
{

    series: [{
        name: "Expense",
        data: [50, 201, 35, 151, 509, 362, 269, 469]
    }],
    options: {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            dropShadow: {
                enabled: true,
                top: 20,
                left: 0,
                blur: 1,
                opacity: 0.2,
                color: "#fa8182",
            }
        },
        colors: ['#fa8182'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',

        },
        title: {
            show: false
        },

        xaxis: {
            labels: {
                show: false
            },

        },
        yaxis: {
            labels: {
                show: false
            }
        },
        grid: {
            show: false
        }
    },


};

export const dataSupport =
    [
        {
            img: landingPage,
            title: "Landing Page"

        },
        {
            img: eCommerce,
            title: "E-commerce"
        },
        {
            img: personalSale,
            title: "Personal Sale"
        },
        {
            img: personalAccount,
            title: "Personal Account"
        },
        {
            img: payments,
            title: "Payments"
        },
        {
            img: additionalService,
            title: "Additional Services"
        },
        {
            img: partnerShip,
            title: "Parthership"
        },
        {
            img: question,
            title: "Other Question"
        },


    ]
