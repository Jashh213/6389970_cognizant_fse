import java.util.Arrays;
import java.util.Comparator;
import java.util.*;

class Product {
    int productId;
    String productName;
    String category;

    Product(int id, String name, String category) {
        this.productId = id;
        this.productName = name;
        this.category = category;
    }
}

public class SearchDemo{
    public static int linearSearch(Product[] products,String target){
        for(int i=0;i<products.length;i++){
            if(products[i].productName.equalsIgnoreCase(target)){
                return i;
            }

        }
        return -1;
    }

    public static int binarySearch(Product[] products,String target){
        int left=0,right=products.length-1;

        while(left<=right){
            int mid=(left+right)/2;
            int cmp=products[mid].productName.compareToIgnoreCase(target);
            if(cmp==0) return mid;
            else if(cmp<0) left=mid+1;
            else right=mid-1;
        }
        return -1;
    }

    public static void main(String args[]){
        Scanner in=new Scanner(System.in);
        System.out.print("Enter number of Products");
        int n=in.nextInt();
        in.nextLine();

        Product[] products=new Product[n];

        for(int i=0;i<n;i++){
            System.out.println("Enter details for product "+(i+1));
            System.out.print("Product ID: ");
            int productId=in.nextInt();
            in.nextLine();
            System.out.print("Product Name: ");
            String productName=in.nextLine();
            System.out.print("Category: ");
            String productCategory=in.nextLine();

            products[i]=new Product(productId,productName,productCategory);
        }

        System.out.print("Enter product name to search:");
        String target=in.nextLine();

        int linearResult=linearSearch(products,target);
        System.out.println("Linear Search result index: "+linearResult);

        Product[] sortedProducts= Arrays.copyOf(products,products.length);
        Arrays.sort(sortedProducts,Comparator.comparing(p->p.productName.toLowerCase()));

        int binaryResult=binarySearch(sortedProducts,target);
        System.out.println("Binary Search result index(after sorting):"+binaryResult);
        in.close();

        
    }
}

