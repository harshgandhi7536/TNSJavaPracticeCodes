package day2.loops;

public class nestedFor {
		public static void main(String[] args) {
			System.out.println("Printing table :-");
			int start= 9;
			int end = 11;
			
			for(int i=start; i<=end; i++){
				for(int j=1; j<=10; j++){
					System.out.println(i*j);
				}
				System.out.println();
				
			}
	        
		}

	}