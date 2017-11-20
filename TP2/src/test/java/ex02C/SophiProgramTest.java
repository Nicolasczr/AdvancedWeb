package ex02C;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

import org.apache.log4j.Logger;

/**
 * Unit test for simple App.
 */

public class SophiProgramTest extends TestCase
{
	protected static Logger log = Logger.getLogger( SophiProgram.class );

	/**
	 * Create the test case
	 *
	 * @param testName name of the test case
	 */

	public SophiProgramTest( String testName )
	{
		super( testName );
	}

	/**
	 * @return the suite of tests being tested
	 */

	public static Test suite()
	{
		System.out.println("Test for ex02C");
		return new TestSuite( SophiProgramTest.class );
	}

	/**
	 * Rigourous Test :-)
	 */

	public void testSophiProgram() throws Exception
	{

		String[] argsTest = new String[4];
		argsTest[0] = "jdbc:mysql://localhost:8889/sakila";
		argsTest[1] = "root";
		argsTest[2] = "root";
		argsTest[3] = "UPDATE actor SET first_name = \"APPLE\" WHERE last_name = \"WOOD\"";

		SophiProgram example = new SophiProgram(argsTest);

		example.DB_Connect(argsTest[0], argsTest[1], argsTest[2]);
		log.info("Database connected!");

		example.DB_Statement();
		log.info("Statement created...");

		example.DB_RunSQL2();
		log.info("SQL run");

		example.closeStatement();
		log.info("Statement closed, waiting for a new test");

	}
}