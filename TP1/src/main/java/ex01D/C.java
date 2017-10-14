package ex01D;

public class C
{
	public void method1(int i, StringBuffer s)
	{
		i++;
		s.append("d");
	}

	public static void main(String [] args)
	{
		C set = new C();
			
		int i = 0;
		StringBuffer s = new StringBuffer("abc");
			
		set.method1(i, s);   //call the method

		System.out.println("i=" + i + ", s=" + s);   // i=0, s=abcd
		}
}