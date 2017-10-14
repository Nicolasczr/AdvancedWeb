package ex01D;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for simple App.
 */

public class CTest extends TestCase
{
	/**
	 * Create the test case
	 *
	 * @param testName name of the test case
	 */

	public CTest( String testName )
	{
		super( testName );
	}

	/**
	 * @return the suite of tests being tested
	 */

	public static Test suite()
	{
		return new TestSuite( CTest.class );
	}

	/**
	 * Rigourous Test :-)
	 */

	public void testC()
	{
		C set = new C();

		int i = 0;
		StringBuffer s = new StringBuffer("abc");

		set.method1(i, s);

		System.out.println("i=" + i);   //i = 0
		assertEquals(i, 0);
		System.out.println("s=" + s);   //s = abcd
		assertEquals(s.toString(), "abcd");
	}
}