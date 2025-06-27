DECLARE
    v_Name Customers.Name%TYPE;
BEGIN
    FOR l IN (
        SELECT L.LoanID, L.CustomerID, L.EndDate
        FROM Loans L
        WHERE L.EndDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        SELECT Name INTO v_Name FROM Customers WHERE CustomerID = l.CustomerID;

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ID ' || l.LoanID ||
            ' for ' || v_Name || ' is due on ' || TO_CHAR(l.EndDate, 'DD-MON-YYYY')
        );
    END LOOP;
END;
/
