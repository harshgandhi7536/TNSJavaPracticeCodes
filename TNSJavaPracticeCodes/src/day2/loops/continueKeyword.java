package day2.loops;

public class continueKeyword {

	public static void main(String[] args) {
	System.out.println("Printing even numbers");
		for(int i=1; i<=20; i++) {
			if(i % 2 != 0) {
				continue;
			}
	
	System.out.println(i);
		}
	}

}
