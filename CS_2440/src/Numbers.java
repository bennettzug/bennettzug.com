package src;
import java.util.ArrayList;

public class Numbers {

    public static void main(String[] args)
    {
        ArrayList<Integer> numbers = new ArrayList<>();
        for (int i = 10; i > 0; i--)
            numbers.add(i);
        System.out.println(numbers);
        numbers.remove(new Integer(3));
        System.out.println(numbers);
    }
    
}
