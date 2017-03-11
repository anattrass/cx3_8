import org.junit.*;
import static org.junit.Assert.assertEquals;

public class BearTest {
  Bear bear;

  @Before
  public void before() {
    bear = new Bear("Baloo", 25, 95.62);
  }

  @Test
  public void hasName() {
    // the first line is not needed because of @Before above
    // Bear bear = new Bear("Baloo", 25);
    assertEquals("Baloo", bear.getName());
  }

  @Test
  public void hasAge() {
    // Bear bear = new Bear("Baloo", 25);
    assertEquals(25, bear.getAge());
  }

  @Test
  public void hasWeight() {
    // Bear bear = new Bear("Baloo", 25. 95.62);
    assertEquals(95.62, bear.getWeight(), 0.01);
  }

  @Test
  public void readyToHibernateIfWeightGreaterThan80() {
    assertEquals(true, bear.readyToHibernate());
  }

  @Test
  public void notReadyToHibernateIfWeightIsLessThan80() {
    Bear thinBear = new Bear("Yogi", 45, 65.44);
    assertEquals(false, thinBear.readyToHibernate());
  }
}