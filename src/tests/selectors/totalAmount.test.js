import getExpensesTotal from "../../selectors/totalAmount";
import expenses from "../fixtures/expenses";

test("should add expenses total", () => {
    const result = getExpensesTotal(expenses)
    expect(result).toBe('114195')
    
}) 