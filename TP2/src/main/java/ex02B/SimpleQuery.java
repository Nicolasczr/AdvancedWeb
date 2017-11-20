package ex02B;

import java.sql.*;

public class SimpleQuery
{

	private static final String DB_URL = "jdbc:mysql://localhost:8889/sakila";
	private static final String DB_USER = "root";
	private static final String DB_PASS = "root";

	public static void main (String[] args) throws Exception
	{
		Class.forName("com.mysql.jdbc.Driver");

		Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASS);

		Statement stmt = conn.createStatement();

		ResultSet rs = stmt.executeQuery("SELECT last_name FROM actor");

		while(rs.next())
		{
			System.out.println(rs.getString("last_name"));
		}
	}

}