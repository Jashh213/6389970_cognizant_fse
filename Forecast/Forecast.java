import java.util.*;

public class Forecast {
    public static double forecastValue(double currentValue, double growthRate, int years) {
        if (years == 0) return currentValue;
        return forecastValue(currentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        Scanner in=new Scanner(System.in);
        System.out.print("Enter current value: ");
        double currentValue=in.nextInt();

        System.out.print("Enter annual growth rate(as a percentage for ex:5):");
        double growthPercent=in.nextDouble();
        double growthRate=growthPercent/100.0;

        System.out.print("Enter number of years to forecast:");
        int years=in.nextInt();

        double result=forecastValue(currentValue,growthRate,years);

        System.out.printf("Predicted value after %d years: Rs %.2f%n",years,result);

        in.close();
    }
}