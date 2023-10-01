package src;
import java.util.Arrays;
public class ArraysMethods {
    public static void main(String[] args)
    {
        // int[][] test1 = generateRandomArray(300, 4);
        // int[][] test2 = generateRandomArray(1000, 4);
        // int[][] test3 = generateRandomArray(1000, 4);
        // int[][] test4 = generateRandomArray(1000, 4);

        double[][] test1 = {{1.0,1.2,1.3},{1.5,1.7,1.8},{500.4,2.9,2.5},{40.6,2.7,2.8}};
        double[][] test2 = {{-1.0,-1.2,-1.3},{-1.5,-1.7,-1.8},{-500.4,-2.9,-2.5},{-40.6,-2.7,-2.8}};
        double[][] test3 = new double[0][0];

        int result1 = findLargestRow(test1);
        int result2 = findLargestRow(test2);
        int result3 = findLargestRow(test3);



        // int result1 = countPositives(test1);
        // int result2 = countPositives(test2);
        // int result3 = countPositives(test3);
        // int result4 = countPositives(test4);

        // System.out.printf("The results are %d, %d, %d, and %d%n", result1, result2, result3, result4);

        // printWithAverages(test1);

        // double[][] test1 = generateRandomArray(300, 4);


        //System.out.printf("The results are %d, %d, and %d%n", result1, result2, result3);

        int[][] test5 = generateRandomArray(5, 5);

        int result5 = productDiagonal(test5);
        System.out.println(Arrays.deepToString(test5));
        System.out.printf("The result is %d%n", result5);



    }

    public static int countPositives(int[][] numbers)
    {
        int count = 0;
        for (int i = 0; i < numbers.length; i++)
        {
            for (int j = 0; j < numbers[i].length; j++)
            {
                if (numbers[i][j] > 0)
                {
                    count++;
                }
            }
        }
        return count;
    }
    public static void printWithAverages(int[][] numbers)
    {
        int NUM_COLS = numbers[0].length;
        System.out.printf("  ROWS  | %s  |  AVERAGE\n", " ".repeat(NUM_COLS * 6));
        for (int i = 0; i < numbers.length; i++)
        {
            System.out.printf("Row %-3s | ", i);
            int sum = 0;
            for (int j = 0; j < numbers[i].length; j++)
            {
                System.out.printf("%5s ", numbers[i][j]);
                sum += numbers[i][j];
            }
            System.out.printf("  |  %.2f%n", (double) sum / numbers[i].length);
        }
    }

    public static int[][] generateRandomArray(int rows, int cols)
    {
        int[][] result = new int[rows][cols];
        for (int i = 0; i < result.length; i++)
        {
            for (int j = 0; j < result[i].length; j++)
            {
                result[i][j] = (int) (Math.random() * 20 + 1);
            }
        }  
        return result;
    }

    public static int findLargestRow(double[][] numbers)
    {
        double biggestTotal = Double.NEGATIVE_INFINITY;
        int largestRow = -1;
        for(int i = 0; i < numbers.length; i++)
        {
            double runningTotal = 0.0;
            for(int j = 0; j < numbers[i].length; j++)
            {
                runningTotal += numbers[i][j];
            }
            if (runningTotal > biggestTotal)
            {
                biggestTotal = runningTotal;
                largestRow = i;
            }
        }
        return largestRow;
    }

    public static int productDiagonal(int[][] numbers)
    {
        int product = 1;
        for (int i = 0; i < numbers.length; i++)
        {
            product *= numbers[i][i];
        }
        return product;
    }
}