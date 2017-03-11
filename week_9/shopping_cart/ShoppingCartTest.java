import static org.junit.Assert.*;
import org.junit.*;

public class ShoppingCartTest {

    ShoppingCart cart;

    @Before
    public void before(){
        cart = new ShoppingCart();
    }

    @Test
    public void addOneItemToCart() {
        cart.add("Bread", 1.50);
        assertEquals(cart.getTotalItems(), 1);
    }

    // @Test
    // public void addTwoItemsToCart(){
    //     cart.add("Bread");
    //     cart.add("Milk");
    //     assertEquals(cart.getTotalItems(), 2);
    //     assertTrue(cart.doesContain("Bread"));
    //     assertTrue(cart.doesContain("Milk"));
    // }

}