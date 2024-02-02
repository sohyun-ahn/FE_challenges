USE classicmodels;

-- 기본 조회 및 필터링
SELECT * FROM customers;
SELECT * FROM products WHERE productLine='Classic Cars' ;
SELECT * FROM orders ORDER BY orderDate DESC LIMIT 10;
SELECT * FROM payments WHERE amount>=100;

-- JOIN Query
SELECT o.orderNumber, c.customerName FROM orders AS o JOIN customers AS c ON o.customerNumber=c.customerNumber;
SELECT p.productName, pl.textDescription FROM products p JOIN productlines pl ON p.productLine=pl.productLine;
SELECT e1.employeeNumber, e1.firstName, e1.lastName, e2.firstName AS 'ManagerFirstName', e2.lastName AS 'ManagerLastName'
FROM employees e1 LEFT JOIN employees e2 ON e1.reportsTo = e2.employeeNumber; -- 직원과 상사 정보 조회 쿼리
SELECT e.firstName, e.lastName, e.officeCode FROM employees e JOIN offices o ON e.officeCode = o.officeCode WHERE o.city = 'San Francisco';

-- GROUP Query
SELECT productLine, COUNT(*) AS productCount FROM products GROUP BY productLine;
SELECT c.customerName, SUM(od.priceEach*od.quantityOrdered) AS totalPrice FROM customers c
LEFT JOIN orders o ON o.customerNumber = c.customerNumber
JOIN orderdetails od ON o.orderNumber = od.orderNumber
GROUP BY c.customerName;
SELECT p.productName, SUM(od.quantityOrdered) AS totalOrderedQuantity FROM orderdetails od
JOIN products p ON od.productCode = p.productCode
GROUP BY p.productName
ORDER BY totalOrderedQuantity DESC
LIMIT 1;
SELECT o.city, SUM(od.quantityOrdered * od.priceEach) AS totalSales -- 매출이 가장 높은 사무실 조회 쿼리
FROM orders ord
JOIN orderdetails od ON ord.orderNumber = od.orderNumber
JOIN customers c ON ord.customerNumber = c.customerNumber
JOIN employees e ON c.salesRepEmployeeNumber = e.employeeNumber
JOIN offices o ON e.officeCode = o.officeCode
GROUP BY o.city
ORDER BY totalSales DESC
LIMIT 1;

-- Sub Query
SELECT orderNumber, SUM(quantityOrdered*priceEach) AS totalAmount FROM orderdetails GROUP BY orderNumber HAVING totalAmount > 500;
SELECT c.customerName, SUM(p.amount) AS totalPayment FROM customers c 
JOIN payments p ON p.customerNumber=c.customerNumber
GROUP BY c.customerName HAVING totalPayment > (SELECT AVG(amount) FROM payments)
ORDER BY totalPayment DESC;
SELECT c.customerName FROM customers c
WHERE c.customerNumber NOT IN (SELECT customerNumber FROM orders);
SELECT c.customerName, SUM(od.priceEach*od.quantityOrdered) AS totalPrice FROM customers c -- 최대 매출 고객 및 총 결제 금액 조회 쿼리 
JOIN orders o ON o.customerNumber=c.customerNumber
JOIN orderdetails od ON o.orderNumber = od.orderNumber
GROUP BY c.customerName
ORDER BY totalPrice DESC
LIMIT 1;

-- 데이터 수정 및 관리
INSERT INTO customers (customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit)
VALUES (1, 'Mango, Co.', 'Lastname', 'Firstname', '123-456-7890', '123 Street', 'Suite 1', 'City', 'State', 'PostalCode', 'Country', 1002, 50000.00);
UPDATE products SET buyPrice=buyPrice*1.1 WHERE productLine='Classic Cars';
UPDATE customers SET email='mango@gmail.com' WHERE customerName='Mango, Co.'; -- email field 가 없어서 실행은 안됨.
UPDATE employees SET officeCode = '2' WHERE employeeNumber = 1002; -- 직원번호 1002번인 직원을 officeCode='2'인 사무실로 옮기게 변경.



