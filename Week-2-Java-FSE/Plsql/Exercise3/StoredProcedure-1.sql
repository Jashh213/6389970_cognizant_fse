CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    FOR acc_rec IN (
        SELECT AccountID, Balance
        FROM Accounts
        WHERE AccountType = 'Savings'
    ) LOOP
        UPDATE Accounts
        SET Balance = Balance + (acc_rec.Balance * 0.01),
            LastModified = SYSDATE
        WHERE AccountID = acc_rec.AccountID;
    END LOOP;

    COMMIT;
END;
/
Procedure created.


EXEC ProcessMonthlyInterest;
