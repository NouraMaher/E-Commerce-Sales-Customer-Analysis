# 🛒 Online Retail Sales Analysis

Analysis of the UCI Online Retail Dataset — uncovering revenue trends, customer behavior, and product performance for a UK-based online retail business.

---

## 📑 Table of Contents

- [Project Overview](#-project-overview)
- [Objectives](#-objectives)
- [Dataset Information](#-dataset-information)
- [Dataset Features](#-dataset-features)
- [Data Cleaning](#-data-cleaning)
- [Revenue Calculation](#-revenue-calculation)
- [Exploratory Data Analysis](#-exploratory-data-analysis)
- [Sales Performance Analysis](#-sales-performance-analysis)
- [Data Visualization](#-data-visualization)
- [Key Insights](#-key-insights)
- [Business Recommendations](#-business-recommendations)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [What I Learned](#-what-i-learned)
- [Conclusion](#-conclusion)
- [Author](#-author)

---

## 📋 Project Overview

This project analyzes real transactional data from a UK-based online retail business using the UCI Online Retail Dataset, covering transactions from **01/12/2010 to 09/12/2011**. The workflow follows a complete data analysis pipeline:

**Raw Data → Data Sampling → Data Cleaning → Data Preparation → Revenue Calculation → Exploratory Data Analysis → Data Visualization → Key Insights → Business Recommendations**

The goal is to extract meaningful business insights from raw transactional data and translate them into actionable recommendations.

---

## 🎯 Objectives

- Clean and prepare raw transactional data for analysis.
- Calculate revenue at the transaction level.
- Analyze sales performance across time, geography, products, and customers.
- Identify returns and cancellations within the dataset.
- Visualize key trends using Matplotlib and Seaborn.
- Derive actionable business recommendations from the findings.

---

## 📊 Dataset Information

| Detail | Value |
|---|---|
| Source | UCI Online Retail Dataset |
| File | Online Retail.xlsx |
| Original Rows | 541,909 |
| Features | 8 |
| Business Type | UK-based online retail |
| Period | 01/12/2010 – 09/12/2011 |

A **10% sample** of the original dataset was used for this analysis.

---

## 🧬 Dataset Features

| Column | Description |
|---|---|
| InvoiceNo | Unique identifier for each invoice/transaction |
| StockCode | Unique identifier for each product |
| Description | Product name/description |
| Quantity | Number of units purchased |
| InvoiceDate | Date and time of the transaction |
| UnitPrice | Price per unit of the product |
| CustomerID | Unique identifier for each customer |
| Country | Country where the customer is located |

---

## 🧹 Data Cleaning

The following cleaning steps were applied to prepare the dataset for analysis:

- Handled missing values.
- Fixed data types across columns.
- Converted `InvoiceDate` to a proper datetime format.
- Identified returns using negative `Quantity` values.
- Identified cancelled invoices.
- Handled free items with zero `UnitPrice`.

---

## 💰 Revenue Calculation

A new `Revenue` column was created to quantify transaction-level sales: Revenue = Quantity × UnitPrice

This column served as the foundation for all subsequent revenue-based analysis.

---

## 🔍 Exploratory Data Analysis

The exploratory analysis covered the following areas:

- Total Revenue
- Total Orders
- Monthly Revenue
- Monthly Orders
- Revenue by Country
- Orders by Country
- Top Products by Quantity
- Top Products by Revenue
- Average Unit Price
- Customer Revenue
- Returns
- Cancellations

---

## 📈 Sales Performance Analysis

Key performance metrics derived from the analysis:

| Metric | Value |
|---|---|
| Total Revenue | 9,726,006.954 |
| Total Orders | 24,446 |
| Unique Customers | 4,372 |
| Highest Revenue Month | November 2011 |
| November 2011 Revenue | ≈ 1.46M |
| Top 5 Countries Contribution | ≈ 93.91% |
| Return Rate | ≈ 1.82% |
| Average Revenue per Customer | ≈ 1,893.53 |
| Top 10 Products Revenue Contribution | ≈ 10.86% |

---

## 📉 Data Visualization

Visualizations were created using **Matplotlib** and **Seaborn** to communicate trends in revenue, orders, products, and customer behavior throughout the analysis.

---

## 💡 Key Insights

- The UK generates the majority of the total revenue.
- A small number of countries contribute most of the total revenue.
- November 2011 recorded the highest monthly revenue.
- A relatively small group of customers generates significant revenue.
- Returns represent a measurable portion of transactions.
- Product popularity by quantity does not always mean the highest revenue performance.

---

## 🚀 Business Recommendations

- Focus marketing and retention strategies on high-performing markets.
- Develop strategies for high-value customers.
- Promote high-revenue products.
- Monitor products with high return volumes.
- Use monthly revenue trends for inventory and sales planning.
- Compare product performance by both quantity sold and revenue.

---

## 🛠️ Technologies Used

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Jupyter Notebook

---

## 📁 Project Structure
Online-Retail-Sales-Analysis/
│
├── Online Retail.xlsx
├── Online_Retail_Analysis.ipynb
├── README.md
│
└── images/
    └── visualizations/
    
---

## 📚 What I Learned

Working on this project strengthened my skills in end-to-end data analysis — from cleaning messy real-world transactional data to calculating derived metrics, conducting exploratory analysis, and communicating findings through visualizations. It also deepened my understanding of translating raw data into clear, actionable business recommendations.

---

## ✅ Conclusion

This analysis of the UCI Online Retail Dataset highlights how transactional data can be transformed into meaningful business insights. From identifying top-performing markets and products to understanding customer revenue patterns, the findings provide a solid foundation for data-driven decision-making in retail.

---

## ✍️ Author
**Noura Maher**
## 📞 Contact

For questions or suggestions, please open an issue or contact:
Noura Maher Elamin
[LinkedIn](https://www.linkedin.com/in/nouramaher/)
[GitHub](https://github.com/NouraMaher)

---

<div align="center">

⭐️ **If you find this project helpful, please give it a star!**

</div>
