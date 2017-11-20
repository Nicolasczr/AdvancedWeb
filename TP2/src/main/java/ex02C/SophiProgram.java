package ex02C;

import java.sql.*;

public class SophiProgram
{
	// Variables for database connection
    private String DB_URL;
    private String DB_USER;
    private String DB_PASS;
    private String DB_QUERY;

    // Essentiel elements for JDBC
    private Connection conn;
    private Statement stmt;
    private ResultSet rs;

    // Getter & setter
    public String getURL()
    {
        return DB_URL;
    }

    public void setURL(String DB_URL)
    {
        this.DB_URL = DB_URL;
    }

    public String getUSER()
    {
        return DB_USER;
    }

    public void setUSER(String DB_USER)
    {
        this.DB_USER = DB_USER;
    }

    public String getPASS()
    {
        return DB_PASS;
    }

    public void setPASS(String DB_PASS)
    {
        this.DB_PASS = DB_PASS;
    }

    public String getQUERY()
    {
        return DB_QUERY;
    }

    public void setQUERY(String DB_QUERY)
    {
        this.DB_QUERY = DB_QUERY;
    }

    public Connection getConn()
    {
        return conn;
    }

    public void setConn(Connection conn)
    {
        this.conn = conn;
    }

    public Statement getStmt()
    {
        return stmt;
    }

    public void setStmt(Statement stmt)
    {
        this.stmt = stmt;
    }

    public ResultSet getRs()
    {
        return rs;
    }

    public void setRs(ResultSet rs)
    {
        this.rs = rs;
    }
    
    // Store the value in a constructor
    public SophiProgram (String[] args)
    {   
        DB_URL = args[0];
        DB_USER = args[1];         
        DB_PASS = args[2];
       	DB_QUERY = args[3];
    }

    // Connect the database
    public void DB_Connect (String DB_URL, String DB_USER, String DB_PASS) throws Exception
    {
    	Class.forName("com.mysql.jdbc.Driver");
		
		conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASS);
    }

    // Create statement
    public void DB_Statement () throws Exception
    {
    	stmt = conn.createStatement();
    }
    
    // If SQL query is SELECT, choose this method and give out the output result
    public ResultSet DB_RunSQL1 () throws Exception 
    {
		rs = stmt.executeQuery(DB_QUERY);

        return rs;
    }

    public void DB_RsOutput() throws Exception 
    {	
		int row = rs.getMetaData().getColumnCount();

        ResultSetMetaData data = rs.getMetaData();

		String header = "";

		for (int i=1; i <= row; i++) 
		{
			header = header + data.getColumnLabel(i);
        }
		System.out.println("Field: " + header + "\n");
		
		while(rs.next()) 
		{
         	String field = "";

			for (int i=1; i <= row; i++) 
			{
				field = field + rs.getString(i);
			}
			System.out.println(field);
		}
	}
    
    // If SQL query is DELETE, UPDATE or INSERT, use this method
    public void DB_RunSQL2() throws Exception
    {	
    	int row = stmt.executeUpdate(DB_QUERY);

     	System.out.println("Number of rows impacted: " + row);
     }
    

    // Close statement
	public void closeStatement() throws Exception
    {
        stmt.close();
    }
    
    // Main method     
    public static void main (String[] args)
    {
		try
		{                             
			SophiProgram example = new SophiProgram(args);

			example.DB_Connect(example.getURL(), example.getUSER(), example.getPASS());

			example.DB_Statement();

            if (example.getQUERY().startsWith("SELECT"))
            {
            	example.DB_RunSQL1();
            	example.DB_RsOutput();
            }
            else
            {
            	example.DB_RunSQL2();
            }

            example.closeStatement();                        
		}
                
        catch(Exception e)
        {
            e.printStackTrace();
        }
    }	
}