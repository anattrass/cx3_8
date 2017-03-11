import static org.junit.Assert.*;
import org.junit.*;

import jewellery.*;

public class RingTest {

  Ring ring;
  
  @Before 
  public void before() {
    ring = new Ring(MetalType.HARIBO, GemType.RUBY);
  }

  @Test
  public void canGetMetal() {
    assertEquals(MetalType.HARIBO, ring.getMetal());
  }

  @Test
  public void canGetGem() {
    assertEquals(GemType.RUBY, ring.getGem());
  }

  // @Test
  // public void metalCanBeNonsense() {
  //   ring = new Ring("Onion");
  // }

}