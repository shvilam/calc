export const TAX_RATE = 0.25;
export const FUCHER_PROFIT_A_MONTH = 4.3;
export const FUCHER_INFLATION_A_MONTH = 3.4;

export type Result = {
  initialInvestment: string,
  grossProfit: string,
  tax: string,
  netProfit: string,
  nowInvestment: string
};

export const FOUND_DATA = [
  {
    "name": "איילון כספית ניהול הנזילות",
    "price": "0.14%",
    "key": "a1edf76c"
  },
  {
    "name": "קסם אקטיב כספית שקלית",
    "price": "0.14%",
    "key": "3f010c80"
  },
  {
    "name": "אי.בי.אי. כספית ניהול נזילות",
    "price": "0.17%",
    "key": "00cebc82"
  },
  {
    "name": "איילון כספית",
    "price": "0.18%",
    "key": "03ecff27"
  },
  {
    "name": "מור כספית",
    "price": "0.22%",
    "key": "7914cba0"
  },
  {
    "name": "קסם אקטיב כספית",
    "price": "0.19%",
    "key": "6fab6122"
  },
  {
    "name": "הראל כספית מגמת ריבית",
    "price": "0.18%",
    "key": "d00e4737"
  },
  {
    "name": "קסם אקטיב כספית פטורה",
    "price": "0.19%",
    "key": "70547312"
  },
  {
    "name": "מגדל כספית",
    "price": "0.20%",
    "key": "28309e67"
  },
  {
    "name": "מיטב כספית שקלית כשרה",
    "price": "0.14%",
    "key": "fd5896b4"
  },
  {
    "name": "מיטב כספית",
    "price": "0.25%",
    "key": "8302ec53"
  },
  {
    "name": "ילין לפידות כספית",
    "price": "0.19%",
    "key": "f83e8c87"
  },
  {
    "name": "אנליסט כספית שקלית",
    "price": "0.15%",
    "key": "b0052b2e"
  },
  {
    "name": "הראל כספית שקלית כשרה",
    "price": "0.10%",
    "key": "b2a031a0"
  },
  {
    "name": "אנליסט כספית",
    "price": "0.19%",
    "key": "e9bba165"
  },
  {
    "name": "מיטב כספית ניהול נזילות",
    "price": "0.22%",
    "key": "6bbff404"
  },
  {
    "name": "מיטב כספית שקלית ללא קונצרני",
    "price": "0.12%",
    "key": "51a2e77f"
  },
  {
    "name": "אלטשולר שחם כספית",
    "price": "0.18%",
    "key": "3c878746"
  },
  {
    "name": "מור כספית ניהול נזילות",
    "price": "0.10%",
    "key": "5cef3bb4"
  },
  {
    "name": "אי.בי.אי. כספית שקלית כשרה",
    "price": "0.09%",
    "key": "b12948c5"
  },
  {
    "name": "מגדל כספית שקלית כשרה",
    "price": "0.09%",
    "key": "45d5401e"
  },
  {
    "name": "דולפין כספית",
    "price": "0.09%",
    "key": "e4d70017"
  },
  {
    "name": "אזימוט כספית",
    "price": "0.14%",
    "key": "f5968e24"
  },
  {
    "name": "הראל כספית ניהול נזילות",
    "price": "0.17%",
    "key": "d5c9e60e"
  },
  {
    "name": "הראל כספית שקלית",
    "price": "0.19%",
    "key": "8a0e1771"
  },
  {
    "name": "מגדל כספית שקלית",
    "price": "0.22%",
    "key": "8ef59b1a"
  },
  {
    "name": "אי.בי.אי כספית שקלית",
    "price": "0.20%",
    "key": "2ca33bc8"
  },
  {
    "name": "אלטשולר שחם כספית ללא קונצרני",
    "price": "0.19%",
    "key": "f5c8ec40"
  },
  {
    "name": "ילין לפידות כספית ניהול נזילות",
    "price": "0.12%",
    "key": "d56cec4e"
  },
  {
    "name": "מגדל כספית מחלקת חודשי",
    "price": "0.07%",
    "key": "1809a8c9"
  }
];

export const INFLATION_DATA = {
  "month": [
    {
      "code": 120010,
      "name": "מדד המחירים לצרכן - כללי",
      "date": [
        {
          "year": 2024,
          "percent": -0.4,
          "percentYear": 3.4,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 108.7
          },
          "prevBase": null,
          "month": 11,
          "monthDesc": "נובמבר"
        },
        {
          "year": 2024,
          "percent": 0.5,
          "percentYear": 3.5,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 109.1
          },
          "prevBase": null,
          "month": 10,
          "monthDesc": "אוקטובר"
        },
        {
          "year": 2024,
          "percent": -0.2,
          "percentYear": 3.5,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 108.6
          },
          "prevBase": null,
          "month": 9,
          "monthDesc": "ספטמבר"
        },
        {
          "year": 2024,
          "percent": 0.9,
          "percentYear": 3.6,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 108.8
          },
          "prevBase": null,
          "month": 8,
          "monthDesc": "אוגוסט"
        },
        {
          "year": 2024,
          "percent": 0.6,
          "percentYear": 3.2,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 107.8
          },
          "prevBase": null,
          "month": 7,
          "monthDesc": "יולי"
        },
        {
          "year": 2024,
          "percent": 0.1,
          "percentYear": 2.9,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 107.2
          },
          "prevBase": null,
          "month": 6,
          "monthDesc": "יוני"
        },
        {
          "year": 2024,
          "percent": 0.2,
          "percentYear": 2.8,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 107.1
          },
          "prevBase": null,
          "month": 5,
          "monthDesc": "מאי"
        },
        {
          "year": 2024,
          "percent": 0.8,
          "percentYear": 2.8,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 106.9
          },
          "prevBase": null,
          "month": 4,
          "monthDesc": "אפריל"
        },
        {
          "year": 2024,
          "percent": 0.6,
          "percentYear": 2.7,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 106.0
          },
          "prevBase": null,
          "month": 3,
          "monthDesc": "מרס"
        },
        {
          "year": 2024,
          "percent": 0.4,
          "percentYear": 2.5,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 105.4
          },
          "prevBase": null,
          "month": 2,
          "monthDesc": "פברואר"
        },
        {
          "year": 2024,
          "percent": 0.0,
          "percentYear": 2.6,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 105.0
          },
          "prevBase": null,
          "month": 1,
          "monthDesc": "ינואר"
        },
        {
          "year": 2023,
          "percent": -0.1,
          "percentYear": 3.0,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 105.0
          },
          "prevBase": null,
          "month": 12,
          "monthDesc": "דצמבר"
        },
        {
          "year": 2023,
          "percent": -0.3,
          "percentYear": 3.3,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 105.1
          },
          "prevBase": null,
          "month": 11,
          "monthDesc": "נובמבר"
        },
        {
          "year": 2023,
          "percent": 0.5,
          "percentYear": 3.7,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 105.4
          },
          "prevBase": null,
          "month": 10,
          "monthDesc": "אוקטובר"
        },
        {
          "year": 2023,
          "percent": -0.1,
          "percentYear": 3.8,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 104.9
          },
          "prevBase": null,
          "month": 9,
          "monthDesc": "ספטמבר"
        },
        {
          "year": 2023,
          "percent": 0.5,
          "percentYear": 4.1,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 105.0
          },
          "prevBase": null,
          "month": 8,
          "monthDesc": "אוגוסט"
        },
        {
          "year": 2023,
          "percent": 0.3,
          "percentYear": 3.3,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 104.5
          },
          "prevBase": null,
          "month": 7,
          "monthDesc": "יולי"
        },
        {
          "year": 2023,
          "percent": 0.0,
          "percentYear": 4.2,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 104.2
          },
          "prevBase": null,
          "month": 6,
          "monthDesc": "יוני"
        },
        {
          "year": 2023,
          "percent": 0.2,
          "percentYear": 4.6,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 104.2
          },
          "prevBase": null,
          "month": 5,
          "monthDesc": "מאי"
        },
        {
          "year": 2023,
          "percent": 0.8,
          "percentYear": 5.0,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 104.0
          },
          "prevBase": null,
          "month": 4,
          "monthDesc": "אפריל"
        },
        {
          "year": 2023,
          "percent": 0.4,
          "percentYear": 5.0,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 103.2
          },
          "prevBase": null,
          "month": 3,
          "monthDesc": "מרס"
        },
        {
          "year": 2023,
          "percent": 0.5,
          "percentYear": 5.2,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 102.8
          },
          "prevBase": null,
          "month": 2,
          "monthDesc": "פברואר"
        },
        {
          "year": 2023,
          "percent": 0.3,
          "percentYear": 5.4,
          "currBase": {
            "baseDesc": "2022 ממוצע",
            "value": 102.3
          },
          "prevBase": null,
          "month": 1,
          "monthDesc": "ינואר"
        },
        {
          "year": 2022,
          "percent": 0.3,
          "percentYear": 5.3,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 108.0
          },
          "prevBase": null,
          "month": 12,
          "monthDesc": "דצמבר"
        },
        {
          "year": 2022,
          "percent": 0.1,
          "percentYear": 5.3,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 107.7
          },
          "prevBase": null,
          "month": 11,
          "monthDesc": "נובמבר"
        },
        {
          "year": 2022,
          "percent": 0.6,
          "percentYear": 5.1,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 107.6
          },
          "prevBase": null,
          "month": 10,
          "monthDesc": "אוקטובר"
        },
        {
          "year": 2022,
          "percent": 0.2,
          "percentYear": 4.6,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 107.0
          },
          "prevBase": null,
          "month": 9,
          "monthDesc": "ספטמבר"
        },
        {
          "year": 2022,
          "percent": -0.3,
          "percentYear": 4.6,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 106.8
          },
          "prevBase": null,
          "month": 8,
          "monthDesc": "אוגוסט"
        },
        {
          "year": 2022,
          "percent": 1.1,
          "percentYear": 5.2,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 107.1
          },
          "prevBase": null,
          "month": 7,
          "monthDesc": "יולי"
        },
        {
          "year": 2022,
          "percent": 0.4,
          "percentYear": 4.4,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 105.9
          },
          "prevBase": null,
          "month": 6,
          "monthDesc": "יוני"
        },
        {
          "year": 2022,
          "percent": 0.6,
          "percentYear": 4.1,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 105.5
          },
          "prevBase": null,
          "month": 5,
          "monthDesc": "מאי"
        },
        {
          "year": 2022,
          "percent": 0.8,
          "percentYear": 4.0,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 104.9
          },
          "prevBase": null,
          "month": 4,
          "monthDesc": "אפריל"
        },
        {
          "year": 2022,
          "percent": 0.6,
          "percentYear": 3.5,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 104.1
          },
          "prevBase": null,
          "month": 3,
          "monthDesc": "מרס"
        },
        {
          "year": 2022,
          "percent": 0.7,
          "percentYear": 3.5,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 103.5
          },
          "prevBase": null,
          "month": 2,
          "monthDesc": "פברואר"
        },
        {
          "year": 2022,
          "percent": 0.2,
          "percentYear": 3.1,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 102.8
          },
          "prevBase": null,
          "month": 1,
          "monthDesc": "ינואר"
        },
        {
          "year": 2021,
          "percent": 0.3,
          "percentYear": 2.8,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 102.6
          },
          "prevBase": null,
          "month": 12,
          "monthDesc": "דצמבר"
        },
        {
          "year": 2021,
          "percent": -0.1,
          "percentYear": 2.4,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 102.3
          },
          "prevBase": null,
          "month": 11,
          "monthDesc": "נובמבר"
        },
        {
          "year": 2021,
          "percent": 0.1,
          "percentYear": 2.3,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 102.4
          },
          "prevBase": null,
          "month": 10,
          "monthDesc": "אוקטובר"
        },
        {
          "year": 2021,
          "percent": 0.2,
          "percentYear": 2.5,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 102.3
          },
          "prevBase": null,
          "month": 9,
          "monthDesc": "ספטמבר"
        },
        {
          "year": 2021,
          "percent": 0.3,
          "percentYear": 2.2,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 102.1
          },
          "prevBase": null,
          "month": 8,
          "monthDesc": "אוגוסט"
        },
        {
          "year": 2021,
          "percent": 0.4,
          "percentYear": 1.9,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 101.8
          },
          "prevBase": null,
          "month": 7,
          "monthDesc": "יולי"
        },
        {
          "year": 2021,
          "percent": 0.1,
          "percentYear": 1.7,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 101.4
          },
          "prevBase": null,
          "month": 6,
          "monthDesc": "יוני"
        },
        {
          "year": 2021,
          "percent": 0.4,
          "percentYear": 1.5,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 101.3
          },
          "prevBase": null,
          "month": 5,
          "monthDesc": "מאי"
        },
        {
          "year": 2021,
          "percent": 0.3,
          "percentYear": 0.8,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 100.9
          },
          "prevBase": null,
          "month": 4,
          "monthDesc": "אפריל"
        },
        {
          "year": 2021,
          "percent": 0.6,
          "percentYear": 0.2,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 100.6
          },
          "prevBase": null,
          "month": 3,
          "monthDesc": "מרס"
        },
        {
          "year": 2021,
          "percent": 0.3,
          "percentYear": 0.0,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 100.0
          },
          "prevBase": null,
          "month": 2,
          "monthDesc": "פברואר"
        },
        {
          "year": 2021,
          "percent": -0.1,
          "percentYear": -0.4,
          "currBase": {
            "baseDesc": "2020 ממוצע",
            "value": 99.7
          },
          "prevBase": null,
          "month": 1,
          "monthDesc": "ינואר"
        },
        {
          "year": 2020,
          "percent": -0.1,
          "percentYear": -0.7,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.1
          },
          "prevBase": null,
          "month": 12,
          "monthDesc": "דצמבר"
        },
        {
          "year": 2020,
          "percent": -0.2,
          "percentYear": -0.6,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.2
          },
          "prevBase": null,
          "month": 11,
          "monthDesc": "נובמבר"
        },
        {
          "year": 2020,
          "percent": 0.3,
          "percentYear": -0.8,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.4
          },
          "prevBase": null,
          "month": 10,
          "monthDesc": "אוקטובר"
        },
        {
          "year": 2020,
          "percent": -0.1,
          "percentYear": -0.7,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.1
          },
          "prevBase": null,
          "month": 9,
          "monthDesc": "ספטמבר"
        },
        {
          "year": 2020,
          "percent": 0.0,
          "percentYear": -0.8,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.2
          },
          "prevBase": null,
          "month": 8,
          "monthDesc": "אוגוסט"
        },
        {
          "year": 2020,
          "percent": 0.2,
          "percentYear": -0.6,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.2
          },
          "prevBase": null,
          "month": 7,
          "monthDesc": "יולי"
        },
        {
          "year": 2020,
          "percent": -0.1,
          "percentYear": -1.1,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.0
          },
          "prevBase": null,
          "month": 6,
          "monthDesc": "יוני"
        },
        {
          "year": 2020,
          "percent": -0.3,
          "percentYear": -1.6,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.1
          },
          "prevBase": null,
          "month": 5,
          "monthDesc": "מאי"
        },
        {
          "year": 2020,
          "percent": -0.3,
          "percentYear": -0.6,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.4
          },
          "prevBase": null,
          "month": 4,
          "monthDesc": "אפריל"
        },
        {
          "year": 2020,
          "percent": 0.4,
          "percentYear": 0.0,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.7
          },
          "prevBase": null,
          "month": 3,
          "monthDesc": "מרס"
        },
        {
          "year": 2020,
          "percent": -0.1,
          "percentYear": 0.1,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.3
          },
          "prevBase": null,
          "month": 2,
          "monthDesc": "פברואר"
        },
        {
          "year": 2020,
          "percent": -0.4,
          "percentYear": 0.3,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.4
          },
          "prevBase": null,
          "month": 1,
          "monthDesc": "ינואר"
        },
        {
          "year": 2019,
          "percent": 0.0,
          "percentYear": 0.6,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.8
          },
          "prevBase": null,
          "month": 12,
          "monthDesc": "דצמבר"
        },
        {
          "year": 2019,
          "percent": -0.4,
          "percentYear": 0.3,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.8
          },
          "prevBase": null,
          "month": 11,
          "monthDesc": "נובמבר"
        },
        {
          "year": 2019,
          "percent": 0.4,
          "percentYear": 0.4,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 101.2
          },
          "prevBase": null,
          "month": 10,
          "monthDesc": "אוקטובר"
        },
        {
          "year": 2019,
          "percent": -0.2,
          "percentYear": 0.3,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.8
          },
          "prevBase": null,
          "month": 9,
          "monthDesc": "ספטמבר"
        },
        {
          "year": 2019,
          "percent": 0.2,
          "percentYear": 0.6,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 101.0
          },
          "prevBase": null,
          "month": 8,
          "monthDesc": "אוגוסט"
        },
        {
          "year": 2019,
          "percent": -0.3,
          "percentYear": 0.5,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.8
          },
          "prevBase": null,
          "month": 7,
          "monthDesc": "יולי"
        },
        {
          "year": 2019,
          "percent": -0.6,
          "percentYear": 0.8,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 101.1
          },
          "prevBase": null,
          "month": 6,
          "monthDesc": "יוני"
        },
        {
          "year": 2019,
          "percent": 0.7,
          "percentYear": 1.5,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 101.7
          },
          "prevBase": null,
          "month": 5,
          "monthDesc": "מאי"
        },
        {
          "year": 2019,
          "percent": 0.3,
          "percentYear": 1.3,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 101.0
          },
          "prevBase": null,
          "month": 4,
          "monthDesc": "אפריל"
        },
        {
          "year": 2019,
          "percent": 0.5,
          "percentYear": 1.4,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.7
          },
          "prevBase": null,
          "month": 3,
          "monthDesc": "מרס"
        },
        {
          "year": 2019,
          "percent": 0.1,
          "percentYear": 1.2,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.2
          },
          "prevBase": null,
          "month": 2,
          "monthDesc": "פברואר"
        },
        {
          "year": 2019,
          "percent": -0.1,
          "percentYear": 1.2,
          "currBase": {
            "baseDesc": "2018 ממוצע",
            "value": 100.1
          },
          "prevBase": null,
          "month": 1,
          "monthDesc": "ינואר"
        },
        {
          "year": 2018,
          "percent": -0.3,
          "percentYear": 0.8,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 101.2
          },
          "prevBase": null,
          "month": 12,
          "monthDesc": "דצמבר"
        },
        {
          "year": 2018,
          "percent": -0.3,
          "percentYear": 1.2,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 101.5
          },
          "prevBase": null,
          "month": 11,
          "monthDesc": "נובמבר"
        },
        {
          "year": 2018,
          "percent": 0.3,
          "percentYear": 1.2,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 101.8
          },
          "prevBase": null,
          "month": 10,
          "monthDesc": "אוקטובר"
        },
        {
          "year": 2018,
          "percent": 0.1,
          "percentYear": 1.2,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 101.5
          },
          "prevBase": null,
          "month": 9,
          "monthDesc": "ספטמבר"
        },
        {
          "year": 2018,
          "percent": 0.1,
          "percentYear": 1.2,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 101.4
          },
          "prevBase": null,
          "month": 8,
          "monthDesc": "אוגוסט"
        },
        {
          "year": 2018,
          "percent": 0.0,
          "percentYear": 1.4,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 101.3
          },
          "prevBase": null,
          "month": 7,
          "monthDesc": "יולי"
        },
        {
          "year": 2018,
          "percent": 0.1,
          "percentYear": 1.3,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 101.3
          },
          "prevBase": null,
          "month": 6,
          "monthDesc": "יוני"
        },
        {
          "year": 2018,
          "percent": 0.5,
          "percentYear": 0.5,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 101.2
          },
          "prevBase": null,
          "month": 5,
          "monthDesc": "מאי"
        },
        {
          "year": 2018,
          "percent": 0.4,
          "percentYear": 0.4,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 100.7
          },
          "prevBase": null,
          "month": 4,
          "monthDesc": "אפריל"
        },
        {
          "year": 2018,
          "percent": 0.3,
          "percentYear": 0.2,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 100.3
          },
          "prevBase": null,
          "month": 3,
          "monthDesc": "מרס"
        },
        {
          "year": 2018,
          "percent": 0.1,
          "percentYear": 0.2,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 100.0
          },
          "prevBase": null,
          "month": 2,
          "monthDesc": "פברואר"
        },
        {
          "year": 2018,
          "percent": -0.5,
          "percentYear": 0.1,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 99.9
          },
          "prevBase": null,
          "month": 1,
          "monthDesc": "ינואר"
        },
        {
          "year": 2017,
          "percent": 0.1,
          "percentYear": 0.4,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 100.4
          },
          "prevBase": null,
          "month": 12,
          "monthDesc": "דצמבר"
        },
        {
          "year": 2017,
          "percent": -0.3,
          "percentYear": 0.3,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 100.3
          },
          "prevBase": null,
          "month": 11,
          "monthDesc": "נובמבר"
        },
        {
          "year": 2017,
          "percent": 0.3,
          "percentYear": 0.2,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 100.6
          },
          "prevBase": null,
          "month": 10,
          "monthDesc": "אוקטובר"
        },
        {
          "year": 2017,
          "percent": 0.1,
          "percentYear": 0.1,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 100.3
          },
          "prevBase": null,
          "month": 9,
          "monthDesc": "ספטמבר"
        },
        {
          "year": 2017,
          "percent": 0.3,
          "percentYear": -0.1,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 100.2
          },
          "prevBase": null,
          "month": 8,
          "monthDesc": "אוגוסט"
        },
        {
          "year": 2017,
          "percent": -0.1,
          "percentYear": -0.7,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 99.9
          },
          "prevBase": null,
          "month": 7,
          "monthDesc": "יולי"
        },
        {
          "year": 2017,
          "percent": -0.7,
          "percentYear": -0.2,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 100.0
          },
          "prevBase": null,
          "month": 6,
          "monthDesc": "יוני"
        },
        {
          "year": 2017,
          "percent": 0.4,
          "percentYear": 0.8,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 100.7
          },
          "prevBase": null,
          "month": 5,
          "monthDesc": "מאי"
        },
        {
          "year": 2017,
          "percent": 0.2,
          "percentYear": 0.7,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 100.3
          },
          "prevBase": null,
          "month": 4,
          "monthDesc": "אפריל"
        },
        {
          "year": 2017,
          "percent": 0.3,
          "percentYear": 0.9,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 100.1
          },
          "prevBase": null,
          "month": 3,
          "monthDesc": "מרס"
        },
        {
          "year": 2017,
          "percent": 0.0,
          "percentYear": 0.4,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 99.8
          },
          "prevBase": null,
          "month": 2,
          "monthDesc": "פברואר"
        },
        {
          "year": 2017,
          "percent": -0.2,
          "percentYear": 0.1,
          "currBase": {
            "baseDesc": "2016 ממוצע",
            "value": 99.8
          },
          "prevBase": null,
          "month": 1,
          "monthDesc": "ינואר"
        },
        {
          "year": 2016,
          "percent": 0.0,
          "percentYear": -0.2,
          "currBase": {
            "baseDesc": "2014 ממוצע",
            "value": 98.9
          },
          "prevBase": null,
          "month": 12,
          "monthDesc": "דצמבר"
        },
        {
          "year": 2016,
          "percent": -0.4,
          "percentYear": -0.3,
          "currBase": {
            "baseDesc": "2014 ממוצע",
            "value": 98.9
          },
          "prevBase": null,
          "month": 11,
          "monthDesc": "נובמבר"
        },
        {
          "year": 2016,
          "percent": 0.2,
          "percentYear": -0.3,
          "currBase": {
            "baseDesc": "2014 ממוצע",
            "value": 99.3
          },
          "prevBase": null,
          "month": 10,
          "monthDesc": "אוקטובר"
        },
        {
          "year": 2016,
          "percent": -0.1,
          "percentYear": -0.4,
          "currBase": {
            "baseDesc": "2014 ממוצע",
            "value": 99.1
          },
          "prevBase": null,
          "month": 9,
          "monthDesc": "ספטמבר"
        },
        {
          "year": 2016,
          "percent": -0.3,
          "percentYear": -0.7,
          "currBase": {
            "baseDesc": "2014 ממוצע",
            "value": 99.2
          },
          "prevBase": null,
          "month": 8,
          "monthDesc": "אוגוסט"
        }
      ]
    }
  ]
};

export const PROFIT_DATA = [{ date: "2024-12", value: 0.05 },
{ date: "2024-11", value: 0.35 },
{ date: "2024-10", value: 0.35 },
{ date: "2024-9", value: 0.35 },
{ date: "2024-8", value: 0.35 },
{ date: "2024-7", value: 0.35 },
{ date: "2024-6", value: 0.35 },
{ date: "2024-5", value: 0.35 },
{ date: "2024-4", value: 0.35 },
{ date: "2024-3", value: 0.35 },
{ date: "2024-2", value: 0.35 },
{ date: "2024-1", value: 0.35 },
{ date: "2023-12", value: 0.35 },
{ date: "2023-11", value: 0.35 },
{ date: "2023-10", value: 0.35 },
{ date: "2023-9", value: 0.35 },
{ date: "2023-8", value: 0.35 },
{ date: "2023-7", value: 0.35 },
{ date: "2023-6", value: 0.35 },
{ date: "2023-5", value: 0.35 },
{ date: "2023-4", value: 0.35 },
{ date: "2023-3", value: 0.35 },
{ date: "2023-2", value: 0.35 },
{ date: "2023-1", value: 0.35 },
{ date: "2022-12", value: 0.35 },
{ date: "2022-11", value: 0.35 },
{ date: "2022-10", value: 0.35 },
{ date: "2022-9", value: 0.35 },
{ date: "2022-8", value: 0.35 },
{ date: "2022-7", value: 0.35 },
{ date: "2022-6", value: 0.35 },
{ date: "2022-5", value: 0.35 },
{ date: "2022-4", value: 0.35 },
{ date: "2022-3", value: 0.35 },
{ date: "2022-2", value: 0.35 },
{ date: "2022-1", value: 0.35 }]
