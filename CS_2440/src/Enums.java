package src;
public class Enums 
{
    public enum Day
    {
        MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, 
        SATURDAY, SUNDAY
    }
   public static void main(String[] args)
    {
        
        printMessage(Day.MONDAY);
        printMessage(Day.WEDNESDAY);
        printMessage(Day.FRIDAY);

   }

   public static void printMessage(Day day) 
   {
        switch(day) 
        {
            case MONDAY:
                System.out.println("I hate that day...");
                break;
            case FRIDAY:
                System.out.println("My favorite day!");
                break;
            default:
                System.out.println("A regular day.");
                break;
        }
    }
}