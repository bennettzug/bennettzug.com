package src;
import java.util.ArrayList;

public class DoubleArray 
{   
    public static void main(String [] args)
    {
        ArrayList<Double> doubles = new ArrayList<Double>();
       
        doubles.add(1.0);
        doubles.add(2.0);
        doubles.add(3.0);

        double searchNum = 3.0;
        int index = doubles.indexOf(searchNum);

        if (index == -1)
        {
            System.out.printf("The value %.1f is not in the array \n",searchNum);
        }
        else
        {
            System.out.printf("The value %f is at index %d the array \n",searchNum, index);
        }

        
        
        // for (int index = 0; index < doubles.size(); index++)
        // {
        //     System.out.println("The value at index");
        // }
    
    }
}

