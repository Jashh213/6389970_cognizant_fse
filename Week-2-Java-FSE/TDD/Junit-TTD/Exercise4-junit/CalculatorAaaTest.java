package org.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorAaaTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
    }

    @After
    public void tearDown() {

        calculator = null;
    }

    @Test
    public void testAddPositiveNumbers() {
               int result = calculator.add(5, 7);

        
        assertEquals(12, result);
    }

    @Test
    public void testAddWithNegativeNumbers() {
        int result = calculator.add(-3, -2);
        assertEquals(-5, result);
    }
}