import java.util.*;

public class ShoppingCart {


    private ArrayList<Item> items;

    public ShoppingCart(){
        this.items = new ArrayList<Item>();
    }

    public ShoppingCart(ArrayList<Item> items) {
           this.items = new ArrayList<Item>(items);
       }

    public void add(Item item) {
        this.items.add(item);
    }

    public int getTotalItems() {
        return items.size();
    }

}