package ex01E;

class A
{
	int x;

	void m()
	{
		System.out.println("Je suis dans la méthode m d'une instance de A");
	}
}

class B extends A
{
	int x;

	void m()
	{
		System.out.println("Je suis dans la méthode m d'une instance de B");
	}
}

public class C extends B
{
	int x, a;

	void m()
	{
		System.out.println("Je suis dans la méthode m d'une instance de A");
	}

	void test()   //usage for super.super.x & super.super.m() does not exist, we cannot use it
	{
		a = super.x;
		//super.super.x;
		a = ((B)this).x;
		a = ((A)this).x;
		super.m();
		//super.super.m();
		((B)this).m();   //  (1)
		((A)this).m();
	}

	public static void main(String[] args)   //add the main method to make the class compile
	{
		C set = new C();
		set.test();
	}
}