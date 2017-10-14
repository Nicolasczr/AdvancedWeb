package ex01F;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for simple App.
 */

public class CircleTest extends TestCase
{
	/**
	 * Create the test case
	 *
	 * @param testName name of the test case
	 */

	public CircleTest( String testName )
	{
		super( testName );
	}

	/**
	 * @return the suite of tests being tested
	 */

	public static Test suite()
	{
		return new TestSuite( CircleTest.class );
	}

	/**
	 * Rigourous Test :-)
	 */

	public void testCircle()
	{
		Circle c1 = new Circle(0,0, 5);
		Circle c2 = new Circle(0,0, 3);

		System.out.println("C1 => " + c1);
		assertEquals(c1.toString(), "Circle with center (0,0) and radius 5 (Perimter is 31.42)");
	}
}