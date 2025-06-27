package org.example;
import org.junit.Test;
import static org.junit.Assert.*;
public class AssertionsTest {
    @Test
    public void testAssertions(){
        assertEquals(5,2+3);
        assertEquals(9,5+4);
        assertEquals(5,1+4);
        assertTrue(5>3);
        assertTrue(2<4);
        assertFalse(4>5);
        assertFalse(5<3);
        assertNull(null);
        assertNotNull(new Object());
    }
}

