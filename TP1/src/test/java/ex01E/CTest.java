package ex01E;

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
		//System.out.println("HAHA");
		return new TestSuite( CTest.class );
	}

	/**
	 * Rigourous Test :-)
	 */

	public void testC()
	{
		C set = new C();
		set.test();

		assertTrue(true);
	}
}