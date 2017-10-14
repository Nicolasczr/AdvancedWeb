package ex01C;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for simple App.
 */

public class Log4jTest extends TestCase
{
	/**
	 * Create the test case
	 *
	 * @param testName name of the test case
	 */

	public Log4jTest( String testName )
	{
		super( testName );
	}

	/**
	 * @return the suite of tests being tested
	 */

	public static Test suite()
	{
		System.out.println("HALO");

		return new TestSuite( Log4jTest.class );
	}

	/**
	 * Rigourous Test :-)
	 */

	public void testLog4j()
	{    	
		assertTrue( true );
	}
}