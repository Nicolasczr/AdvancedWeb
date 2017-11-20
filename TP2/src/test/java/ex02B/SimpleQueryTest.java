package ex02B;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

import org.apache.log4j.Logger;

/**
 * Unit test for simple App.
 */

public class SimpleQueryTest extends TestCase
{
	protected static Logger log = Logger.getLogger( SimpleQuery.class );

	/**
	 * Create the test case
	 *
	 * @param testName name of the test case
	 */

	public SimpleQueryTest( String testName )
	{
		super( testName );
	}

	/**
	 * @return the suite of tests being tested
	 */

	public static Test suite()
	{
		System.out.println("Test for ex02B");
		return new TestSuite( SimpleQueryTest.class );
	}

	/**
	 * Rigourous Test :-)
	 */

	public void testSimpleQuery() throws Exception
	{
		SimpleQuery example = new SimpleQuery();

		log.info("Main method works");
	}
}